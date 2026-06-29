import { Prisma } from "../generated/prisma";
import { prisma } from "../utils/prisma";

export const findByEmail = async (email: string) => {
    return await prisma.user.findUnique({ where: { email } });
};

export const findById = async (id: string) => {
    return await prisma.user.findUnique({ 
        where: { id },
        select: {
            id: true,
            name: true,
            nickname: true,
            email: true,
            position: true,
            rating: true,
            avatarIndex: true,
            isAdmin: true,
            createdAt: true
        }
    });
};

export const save = async (data: Prisma.UserCreateInput) => {
    return await prisma.user.create({ data });
};

export const update = async (id: string, data: Prisma.UserUpdateInput) => {
    return await prisma.user.update({ where: { id }, data });
};

export const findAll = async () => {
    return await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            nickname: true,
            position: true,
            rating: true,
            avatarIndex: true,
            isAdmin: true
        },
        orderBy: { rating: "desc" }
    });
};

export const getPlayerStats = async (playerId: string) => {
    const totalSessions = await prisma.teamPlayer.count({
        where: { playerId }
    });

    const playerTeams = await prisma.teamPlayer.findMany({
        where: { playerId },
        select: { teamId: true }
    });
    const teamIds = playerTeams.map(t => t.teamId);

    const totalRounds = await prisma.round.count({
        where: {
            OR: [
                { homeTeamId: { in: teamIds } },
                { awayTeamId: { in: teamIds } }
            ]
        }
    });

    const totalWins = await prisma.round.count({
        where: { winnerTeamId: { in: teamIds } }
    });

    const totalGoals = await prisma.goal.count({
        where: { playerId }
    });

    const badges = await prisma.badge.findMany({
        where: { playerId },
        orderBy: { earnedAt: "desc" }
    });

    const winRate = totalRounds > 0 ? ((totalWins / totalRounds) * 100).toFixed(1) : "0.0";

    return {
        totalSessions,
        totalRounds,
        totalWins,
        totalLosses: totalRounds - totalWins,
        winRate,
        totalGoals,
        badges
    };
};

export const getPlayerHistory = async (playerId: string, page: number, limit: number) => {
    const playerTeams = await prisma.teamPlayer.findMany({
        where: { playerId },
        include: {
            team: {
                include: {
                    session: {
                        select: {
                            id: true,
                            title: true,
                            date: true,
                            status: true
                        }
                    }
                }
            }
        },
    });

    playerTeams.sort((a, b) => new Date(b.team.session.date).getTime() - new Date(a.team.session.date).getTime());

    const paginated = playerTeams.slice(page * limit, (page + 1) * limit);

    return paginated.map(tp => ({
        sessionId: tp.team.session.id,
        sessionTitle: tp.team.session.title,
        sessionDate: tp.team.session.date,
        sessionStatus: tp.team.session.status,
        teamName: tp.team.name,
        teamColor: tp.team.color
    }));
};
