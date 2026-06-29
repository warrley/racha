import { prisma } from "../utils/prisma";

type GoalInput = {
    playerId: string;
    minute?: number;
};

export const registerRound = async (
    sessionId: string, 
    homeTeamId: string, 
    awayTeamId: string, 
    homeScore: number, 
    awayScore: number, 
    winnerTeamId: string,
    isDraw: boolean,
    goals: GoalInput[]
) => {
    const session = await prisma.session.findUnique({ where: { id: sessionId } });
    if(!session) throw new Error("Sessão não encontrada");
    if(session.status !== "IN_PROGRESS") throw new Error("Sessão não está em andamento");

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
                }
            },
            include: {
                homeTeam: { select: { id: true, name: true, color: true } },
                awayTeam: { select: { id: true, name: true, color: true } },
                winnerTeam: { select: { id: true, name: true, color: true } },
                goals: {
                    include: {
                        player: { select: { id: true, name: true, nickname: true } }
                    }
                }
            }
        });
        return newRound;
    });

    return round;
};

export const findRoundsBySession = async (sessionId: string) => {
    return await prisma.round.findMany({
        where: { sessionId },
        include: {
            homeTeam: { select: { id: true, name: true, color: true } },
            awayTeam: { select: { id: true, name: true, color: true } },
            winnerTeam: { select: { id: true, name: true, color: true } },
            goals: {
                include: {
                    player: { select: { id: true, name: true, nickname: true } }
                }
            }
        },
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
