import { prisma } from "../utils/prisma";

type GoalInput = {
    playerId: string;
    minute?: number;
};

type SubstitutionInput = {
    teamId: string;
    outPlayerId: string | null;
    inPlayerId: string;
};

const roundInclude = {
    homeTeam: { select: { id: true, name: true, color: true } },
    awayTeam: { select: { id: true, name: true, color: true } },
    winnerTeam: { select: { id: true, name: true, color: true } },
    goals: {
        include: {
            player: { select: { id: true, name: true, nickname: true } }
        }
    },
    substitutions: {
        include: {
            outPlayer: { select: { id: true, name: true, nickname: true } },
            inPlayer: { select: { id: true, name: true, nickname: true } }
        }
    }
} as const;

export const registerRound = async (
    sessionId: string,
    homeTeamId: string,
    awayTeamId: string,
    homeScore: number,
    awayScore: number,
    winnerTeamId: string,
    isDraw: boolean,
    goals: GoalInput[],
    substitutions: SubstitutionInput[] = []
) => {
    const session = await prisma.session.findUnique({ where: { id: sessionId } });
    if(!session) throw new Error("Sessão não encontrada");
    if(session.status !== "IN_PROGRESS") throw new Error("Sessão não está em andamento");
    if(homeTeamId === awayTeamId) throw new Error("Selecione dois times diferentes");

    const teamsInvolved = await prisma.team.findMany({
        where: { id: { in: [homeTeamId, awayTeamId] }, sessionId },
        include: { players: true }
    });
    if(teamsInvolved.length !== 2) throw new Error("Times inválidos para esta sessão");

    // Escalação permanente (TeamPlayer) de cada time
    const permanentRoster: Record<string, Set<string>> = {};
    for(const t of teamsInvolved) {
        permanentRoster[t.id] = new Set(t.players.map(tp => tp.playerId));
    }

    // Escalação efetiva da rodada = permanente + substituições temporárias (req 2.6)
    const effectiveRoster: Record<string, Set<string>> = {
        [homeTeamId]: new Set(permanentRoster[homeTeamId]),
        [awayTeamId]: new Set(permanentRoster[awayTeamId])
    };

    const usedOutPlayers = new Set<string>();
    const usedInPlayers = new Set<string>();

    for(const sub of substitutions) {
        if(sub.teamId !== homeTeamId && sub.teamId !== awayTeamId) {
            throw new Error("A substituição deve pertencer a um dos times desta rodada");
        }
        if(sub.outPlayerId === sub.inPlayerId) {
            throw new Error("O jogador substituto não pode ser o mesmo que o substituído");
        }
        if(permanentRoster[homeTeamId].has(sub.inPlayerId) || permanentRoster[awayTeamId].has(sub.inPlayerId)) {
            throw new Error("O jogador substituto já está escalado em um dos times desta rodada");
        }
        if(usedInPlayers.has(sub.inPlayerId)) {
            throw new Error("Cada jogador substituto só pode entrar uma vez por rodada");
        }
        usedInPlayers.add(sub.inPlayerId);

        if(sub.outPlayerId === null) {
            // Reforço: preenche uma vaga vazia de um time incompleto (menos de 5
            // jogadores na escalação permanente), sem substituir ninguém.
            if(effectiveRoster[sub.teamId].size >= 5) {
                throw new Error("Time já está completo nesta rodada");
            }
            effectiveRoster[sub.teamId].add(sub.inPlayerId);
            continue;
        }

        if(!permanentRoster[sub.teamId].has(sub.outPlayerId)) {
            throw new Error("O jogador substituído não pertence a este time");
        }
        if(usedOutPlayers.has(sub.outPlayerId)) {
            throw new Error("Cada jogador só pode ser substituído uma vez por rodada");
        }
        usedOutPlayers.add(sub.outPlayerId);

        effectiveRoster[sub.teamId].delete(sub.outPlayerId);
        effectiveRoster[sub.teamId].add(sub.inPlayerId);
    }

    const eligiblePlayers = new Set([...effectiveRoster[homeTeamId], ...effectiveRoster[awayTeamId]]);
    for(const g of goals) {
        if(!eligiblePlayers.has(g.playerId)) {
            throw new Error("Um dos jogadores marcados não está escalado nesta rodada");
        }
    }

    const lastRound = await prisma.round.findFirst({
        where: { sessionId },
        orderBy: { roundNumber: "desc" }
    });
    const roundNumber = (lastRound?.roundNumber ?? 0) + 1;

    const round = await prisma.$transaction(async (tx) => {
        const newRound = await tx.round.create({
            data: {
                sessionId,
                roundNumber,
                homeTeamId,
                awayTeamId,
                homeScore,
                awayScore,
                winnerTeamId,
                isDraw,
                goals: {
                    create: goals.map(g => ({
                        playerId: g.playerId,
                        minute: g.minute
                    }))
                },
                substitutions: {
                    create: substitutions.map(s => ({
                        teamId: s.teamId,
                        outPlayerId: s.outPlayerId,
                        inPlayerId: s.inPlayerId
                    }))
                }
            },
            include: roundInclude
        });
        return newRound;
    });

    return round;
};

export const findRoundsBySession = async (sessionId: string) => {
    return await prisma.round.findMany({
        where: { sessionId },
        include: roundInclude,
        orderBy: { roundNumber: "asc" }
    });
};

export const deleteRound = async (roundId: string) => {
    await prisma.$transaction(async (tx) => {
        await tx.goal.deleteMany({
            where: { roundId }
        });
        await tx.round.delete({
            where: { id: roundId }
        });
    });
};
