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

/**
 * Consolida as avaliações de uma sessão:
 * 1. Calcula sessionGrade para cada participante (média das notas recebidas)
 * 2. Recalcula averageGrade de todos os jogadores afetados (média de todas as sessionGrades)
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

    // Buscar todas as notas da sessão
    const allGrades = await prisma.sessionGrade.findMany({
        where: { sessionId },
        select: { evaluatedId: true, grade: true }
    });

    // Calcular média de notas recebidas por cada jogador nesta sessão
    const gradesByPlayer: Record<string, number[]> = {};
    for (const g of allGrades) {
        if (!gradesByPlayer[g.evaluatedId]) {
            gradesByPlayer[g.evaluatedId] = [];
        }
        gradesByPlayer[g.evaluatedId].push(g.grade);
    }

    await prisma.$transaction(async (tx) => {
        // 1. Atualizar sessionGrade de cada participante
        for (const [playerId, grades] of Object.entries(gradesByPlayer)) {
            const avg = grades.reduce((sum, g) => sum + g, 0) / grades.length;
            const sessionGrade = Math.round(avg * 10) / 10; // 1 casa decimal

            await tx.sessionParticipant.updateMany({
                where: { sessionId, userId: playerId },
                data: { sessionGrade }
            });
        }

        // 2. Recalcular averageGrade de todos os jogadores que participaram
        const sessionPlayers = await tx.teamPlayer.findMany({
            where: { team: { sessionId } },
            select: { playerId: true }
        });
        const playerIds = [...new Set(sessionPlayers.map(tp => tp.playerId))];

        for (const playerId of playerIds) {
            // Buscar todas as sessionGrades do jogador em sessões consolidadas
            const allSessionGrades = await tx.sessionParticipant.findMany({
                where: {
                    userId: playerId,
                    sessionGrade: { not: null },
                    session: { ratingsConsolidated: true }
                },
                select: { sessionGrade: true }
            });

            // Incluir a sessionGrade atual que acabamos de calcular
            const currentSessionGrade = gradesByPlayer[playerId];
            let grades: number[] = allSessionGrades
                .filter(sg => sg.sessionGrade !== null)
                .map(sg => sg.sessionGrade as number);

            // Se o jogador recebeu notas nesta sessão, incluir
            if (currentSessionGrade && currentSessionGrade.length > 0) {
                const avg = currentSessionGrade.reduce((sum, g) => sum + g, 0) / currentSessionGrade.length;
                grades.push(Math.round(avg * 10) / 10);
            }

            if (grades.length > 0) {
                const averageGrade = Math.round((grades.reduce((sum, g) => sum + g, 0) / grades.length) * 10) / 10;
                await tx.user.update({
                    where: { id: playerId },
                    data: { averageGrade }
                });
            }
        }

        // 3. Marcar sessão como consolidada
        await tx.session.update({
            where: { id: sessionId },
            data: { ratingsConsolidated: true }
        });
    }, { timeout: 30000 });

    return { success: true };
};
