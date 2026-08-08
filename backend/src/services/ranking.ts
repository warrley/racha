import { prisma } from "../utils/prisma";
import { consolidateExpiredSessions } from "./rating";
import { GUEST_EMAIL_DOMAIN } from "./player";

export const getRanking = async () => {
    // Self-healing: consolidar sessões expiradas antes de exibir ranking
    await consolidateExpiredSessions();

    const players = await prisma.user.findMany({
        where: { NOT: { email: { endsWith: GUEST_EMAIL_DOMAIN } } },
        select: {
            id: true,
            name: true,
            nickname: true,
            position: true,
            averageGrade: true,
            avatarIndex: true
        },
        orderBy: [
            { averageGrade: { sort: "desc", nulls: "last" } },
            { name: "asc" }
        ]
    });

    const ranking = await Promise.all(players.map(async (player, index) => {
        const totalGoals = await prisma.goal.count({ where: { playerId: player.id } });
        const totalSessions = await prisma.teamPlayer.count({ where: { playerId: player.id } });

        const onFireBadge = await prisma.badge.findFirst({
            where: { playerId: player.id, type: "ON_FIRE" },
            orderBy: { earnedAt: "desc" }
        });

        return {
            rank: index + 1,
            ...player,
            totalGoals,
            totalSessions,
            isOnFire: !!onFireBadge
        };
    }));

    return ranking;
};

export const getTopScorers = async (limit: number = 10) => {
    const scorers = await prisma.goal.groupBy({
        by: ["playerId"],
        where: { player: { NOT: { email: { endsWith: GUEST_EMAIL_DOMAIN } } } },
        _count: { id: true },
        orderBy: { _count: { id: "desc" } },
        take: limit
    });

    const topScorers = await Promise.all(scorers.map(async (scorer, index) => {
        const player = await prisma.user.findUnique({
            where: { id: scorer.playerId },
            select: { id: true, name: true, nickname: true, avatarIndex: true }
        });

        return {
            rank: index + 1,
            player,
            totalGoals: scorer._count.id
        };
    }));

    return topScorers;
};
