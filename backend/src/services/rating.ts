import { prisma } from "../utils/prisma";

/**
 * Consolida automaticamente todas as sessões finalizadas cujo timeout de votação expirou.
 * Chamado de forma self-healing antes de consultas que dependem de averageGrade.
 */
export const consolidateExpiredSessions = async () => {
    const now = new Date();

    const expiredSessions = await prisma.session.findMany({
        where: {
            status: "FINISHED",
            ratingsConsolidated: false,
            finishedAt: { not: null }
        },
        select: { id: true, finishedAt: true, votingTimeoutHours: true }
    });

    for (const session of expiredSessions) {
        if (!session.finishedAt) continue;

        const expiresAt = new Date(session.finishedAt.getTime() + session.votingTimeoutHours * 60 * 60 * 1000);
        if (now >= expiresAt) {
            await consolidateSessionRatings(session.id);
        }
    }
};

/**
 * Retorna o status de votação de uma sessão para um jogador específico.
 * Inclui a lista de jogadores que podem ser avaliados e notas já enviadas.
 */
export const getSessionRatingsStatus = async (sessionId: string, userId: string) => {
    const session = await prisma.session.findUnique({
        where: { id: sessionId },
        select: {
            id: true,
            status: true,
            finishedAt: true,
            votingTimeoutHours: true,
            ratingsConsolidated: true
        }
    });

    if (!session) throw new Error("Sessão não encontrada");
    if (session.status !== "FINISHED") throw new Error("Sessão ainda não foi finalizada");

    // Verificar se o jogador participou (foi escalado em um time)
    const isParticipant = await prisma.teamPlayer.findFirst({
        where: {
            team: { sessionId },
            playerId: userId
        }
    });

    if (!isParticipant) throw new Error("Você não participou desta sessão");

    // Verificar se a janela de votação está aberta
    const isVotingOpen = !session.ratingsConsolidated &&
        session.finishedAt !== null &&
        new Date() < new Date(session.finishedAt.getTime() + session.votingTimeoutHours * 60 * 60 * 1000);

    // Buscar todos os outros participantes da sessão (excluindo o próprio jogador)
    const sessionTeams = await prisma.team.findMany({
        where: { sessionId },
        include: {
            players: {
                include: {
                    player: { select: { id: true, name: true, nickname: true, position: true, avatarIndex: true } }
                }
            }
        }
    });

    const allParticipants = sessionTeams
        .flatMap(t => t.players.map(tp => tp.player))
        .filter(p => p.id !== userId);

    // Buscar notas já enviadas pelo jogador
    const existingGrades = await prisma.sessionGrade.findMany({
        where: {
            sessionId,
            evaluatorId: userId
        },
        select: {
            evaluatedId: true,
            grade: true
        }
    });

    const existingGradesMap: Record<string, number> = {};
    for (const g of existingGrades) {
        existingGradesMap[g.evaluatedId] = g.grade;
    }

    return {
        isVotingOpen,
        isConsolidated: session.ratingsConsolidated,
        players: allParticipants.map(p => ({
            ...p,
            currentGrade: existingGradesMap[p.id] ?? null
        })),
        hasVoted: existingGrades.length > 0,
        totalVotes: existingGrades.length,
        totalPlayers: allParticipants.length
    };
};

/**
 * Submete avaliações de um jogador para outros participantes da sessão.
 * Usa upsert para permitir correção de notas enquanto a janela está aberta.
 */
export const submitSessionRatings = async (
    sessionId: string,
    evaluatorId: string,
    ratings: { evaluatedId: string; score: number }[]
) => {
    const session = await prisma.session.findUnique({
        where: { id: sessionId },
        select: {
            id: true,
            status: true,
            finishedAt: true,
            votingTimeoutHours: true,
            ratingsConsolidated: true
        }
    });

    if (!session) throw new Error("Sessão não encontrada");
    if (session.status !== "FINISHED") throw new Error("Sessão ainda não foi finalizada");
    if (session.ratingsConsolidated) throw new Error("A janela de votação já foi encerrada");

    if (!session.finishedAt) throw new Error("Sessão sem data de finalização");
    const expiresAt = new Date(session.finishedAt.getTime() + session.votingTimeoutHours * 60 * 60 * 1000);
    if (new Date() >= expiresAt) throw new Error("A janela de votação expirou");

    // Verificar se o avaliador participou
    const evaluatorTeam = await prisma.teamPlayer.findFirst({
        where: {
            team: { sessionId },
            playerId: evaluatorId
        }
    });
    if (!evaluatorTeam) throw new Error("Você não participou desta sessão");

    // Verificar que ninguém está avaliando a si mesmo
    for (const r of ratings) {
        if (r.evaluatedId === evaluatorId) {
            throw new Error("Você não pode avaliar a si mesmo");
        }
    }

    // Verificar que todos os avaliados são participantes reais da sessão
    const sessionPlayerIds = await prisma.teamPlayer.findMany({
        where: { team: { sessionId } },
        select: { playerId: true }
    });
    const validPlayerIds = new Set(sessionPlayerIds.map(tp => tp.playerId));

    for (const r of ratings) {
        if (!validPlayerIds.has(r.evaluatedId)) {
            throw new Error(`Jogador ${r.evaluatedId} não participou desta sessão`);
        }
    }

    // Upsert em transação
    await prisma.$transaction(async (tx) => {
        for (const r of ratings) {
            await tx.sessionGrade.upsert({
                where: {
                    sessionId_evaluatorId_evaluatedId: {
                        sessionId,
                        evaluatorId,
                        evaluatedId: r.evaluatedId
                    }
                },
                update: { grade: r.score },
                create: {
                    sessionId,
                    evaluatorId,
                    evaluatedId: r.evaluatedId,
                    grade: r.score
                }
            });
        }
    }, { timeout: 15000 });

    return { success: true, totalRated: ratings.length };
};

const RATING_ALPHA = 0.15; // peso do voto desta sessão sobre a média histórica
const WIN_BONUS_FACTOR = 0.2; // peso do aproveitamento de rodadas desta sessão
const GRADE_MIN = 1;
const GRADE_MAX = 5;
const GRADE_NEUTRAL = 2.5; // ponto de partida para jogador sem média ainda

/**
 * Calcula, para cada jogador que efetivamente jogou pelo menos uma rodada da
 * sessão, quantas rodadas jogou e quantas venceu — considerando substituições
 * temporárias (req 2.6): o jogador substituído não conta a rodada em que saiu,
 * e o substituto conta a rodada em seu lugar.
 */
const getSessionRoundStats = async (sessionId: string) => {
    const rounds = await prisma.round.findMany({
        where: { sessionId },
        select: {
            homeTeamId: true,
            awayTeamId: true,
            winnerTeamId: true,
            substitutions: { select: { teamId: true, outPlayerId: true, inPlayerId: true } }
        }
    });

    const teamPlayers = await prisma.teamPlayer.findMany({
        where: { team: { sessionId } },
        select: { teamId: true, playerId: true }
    });

    const rosterByTeam = new Map<string, Set<string>>();
    for (const tp of teamPlayers) {
        if (!rosterByTeam.has(tp.teamId)) rosterByTeam.set(tp.teamId, new Set());
        rosterByTeam.get(tp.teamId)!.add(tp.playerId);
    }

    const stats = new Map<string, { roundsPlayed: number; wins: number }>();
    const bump = (playerId: string, won: boolean) => {
        const s = stats.get(playerId) ?? { roundsPlayed: 0, wins: 0 };
        s.roundsPlayed += 1;
        if (won) s.wins += 1;
        stats.set(playerId, s);
    };

    for (const round of rounds) {
        for (const teamId of [round.homeTeamId, round.awayTeamId]) {
            const effective = new Set(rosterByTeam.get(teamId) ?? []);
            for (const sub of round.substitutions) {
                if (sub.teamId !== teamId) continue;
                effective.delete(sub.outPlayerId);
                effective.add(sub.inPlayerId);
            }
            const won = round.winnerTeamId === teamId;
            for (const playerId of effective) bump(playerId, won);
        }
    }

    return stats;
};

const clampGrade = (value: number) => Math.min(GRADE_MAX, Math.max(GRADE_MIN, Math.round(value * 10) / 10));

/**
 * Consolida as avaliações de uma sessão:
 * 1. Calcula o voto médio (-1 a +1) recebido por cada jogador nesta sessão
 * 2. Ajusta a averageGrade de cada jogador com um incremento suave: o voto
 *    médio da sessão + um pequeno bônus/penalidade pelo aproveitamento nas
 *    rodadas que ele efetivamente jogou (req: não mudar a nota bruscamente)
 * 3. Marca a sessão como consolidada
 */
export const consolidateSessionRatings = async (sessionId: string) => {
    const session = await prisma.session.findUnique({
        where: { id: sessionId },
        select: { id: true, status: true, ratingsConsolidated: true }
    });

    if (!session) throw new Error("Sessão não encontrada");
    if (session.status !== "FINISHED") throw new Error("Sessão ainda não foi finalizada");
    if (session.ratingsConsolidated) return { alreadyConsolidated: true };

    // Buscar todos os votos (-1/0/+1) da sessão
    const allGrades = await prisma.sessionGrade.findMany({
        where: { sessionId },
        select: { evaluatedId: true, grade: true }
    });

    const votesByPlayer: Record<string, number[]> = {};
    for (const g of allGrades) {
        if (!votesByPlayer[g.evaluatedId]) votesByPlayer[g.evaluatedId] = [];
        votesByPlayer[g.evaluatedId].push(g.grade);
    }

    const roundStats = await getSessionRoundStats(sessionId);

    const playerIds = Object.keys(votesByPlayer);
    const users = await prisma.user.findMany({
        where: { id: { in: playerIds } },
        select: { id: true, averageGrade: true }
    });
    const oldGradeById = new Map(users.map(u => [u.id, u.averageGrade]));

    await prisma.$transaction(async (tx) => {
        for (const playerId of playerIds) {
            const votes = votesByPlayer[playerId];
            const voteDelta = votes.reduce((sum, v) => sum + v, 0) / votes.length;

            const { roundsPlayed, wins } = roundStats.get(playerId) ?? { roundsPlayed: 0, wins: 0 };
            const winBonus = roundsPlayed > 0 ? (wins / roundsPlayed - 0.5) * WIN_BONUS_FACTOR : 0;

            await tx.sessionParticipant.updateMany({
                where: { sessionId, userId: playerId },
                data: { sessionGrade: Math.round(voteDelta * 100) / 100 }
            });

            const oldGrade = oldGradeById.get(playerId) ?? GRADE_NEUTRAL;
            const newGrade = clampGrade(oldGrade + RATING_ALPHA * voteDelta + winBonus);

            await tx.user.update({
                where: { id: playerId },
                data: { averageGrade: newGrade }
            });
        }

        // Marcar sessão como consolidada
        await tx.session.update({
            where: { id: sessionId },
            data: { ratingsConsolidated: true }
        });
    }, { timeout: 30000 });

    return { success: true };
};
