import bcrypt from "bcryptjs";
import { Prisma, Position } from "../generated/prisma";
import { prisma } from "../utils/prisma";

const VALID_POSITIONS = Object.values(Position);
const toValidPosition = (value?: string): Position =>
    VALID_POSITIONS.includes(value as Position) ? (value as Position) : Position.MEIO;

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
            averageGrade: true,
            avatarIndex: true,
            isAdmin: true,
            pixKey: true,
            createdAt: true
        }
    });
};

export const save = async (data: Prisma.UserCreateInput) => {
    return await prisma.user.create({ data });
};

/**
 * Sincroniza automaticamente um usuário autenticado via Supabase Auth com a
 * tabela local `users` (req RF02): busca por supabaseId; se for o primeiro
 * login de uma conta já existente (criada antes via signup local com o mesmo
 * e-mail), vincula pelo e-mail; caso contrário cria um novo registro local.
 */
export const syncSupabaseUser = async (params: {
    supabaseId: string;
    email: string;
    name?: string;
    nickname?: string;
    position?: string;
}) => {
    const bySupabaseId = await prisma.user.findUnique({ where: { supabaseId: params.supabaseId } });
    if (bySupabaseId) return bySupabaseId;

    const byEmail = await prisma.user.findUnique({ where: { email: params.email } });
    if (byEmail) {
        return await prisma.user.update({
            where: { id: byEmail.id },
            data: { supabaseId: params.supabaseId }
        });
    }

    return await prisma.user.create({
        data: {
            supabaseId: params.supabaseId,
            email: params.email,
            name: params.name || params.email.split("@")[0],
            nickname: params.nickname,
            position: toValidPosition(params.position)
        }
    });
};

type UpdatePlayerData = {
    name?: string;
    nickname?: string;
    email?: string;
    password?: string;
    position?: Position;
    avatarIndex?: number;
    pixKey?: string | null;
};

export const update = async (id: string, data: UpdatePlayerData) => {
    const { password, ...rest } = data;
    return await prisma.user.update({
        where: { id },
        data: {
            ...rest,
            ...(password ? { password: await bcrypt.hash(password, 10) } : {})
        }
    });
};

export const findAll = async () => {
    return await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            nickname: true,
            position: true,
            rating: true,
            averageGrade: true,
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
