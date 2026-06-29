import { prisma } from "../utils/prisma";
import { drawTeams } from "../utils/draw";
import { calculateNewRating } from "../utils/elo";

export const createSession = async (createdById: string, title: string | undefined, date: string) => {
    return await prisma.session.create({
        data: {
            title,
            date: new Date(date),
            createdById
        }
    });
};

export const findSessionById = async (id: string) => {
    return await prisma.session.findUnique({
        where: { id },
        include: {
            createdBy: { select: { id: true, name: true, nickname: true } },
            mvpPlayer: { select: { id: true, name: true, nickname: true } },
            topScorerPlayer: { select: { id: true, name: true, nickname: true } },
            teams: {
                include: {
                    players: {
                        include: {
                            player: { select: { id: true, name: true, nickname: true, position: true, rating: true } }
                        }
                    }
                }
            },
            rounds: {
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
            }
        }
    });
};

export const findAllSessions = async (page: number, limit: number) => {
    return await prisma.session.findMany({
        select: {
            id: true,
            title: true,
            date: true,
            status: true,
            createdBy: { select: { name: true } },
            mvpPlayer: { select: { name: true, nickname: true } },
            topScorerPlayer: { select: { name: true, nickname: true } },
            _count: { select: { rounds: true } }
        },
        orderBy: { date: "desc" },
        skip: page * limit,
        take: limit
    });
};

export const executeDraw = async (sessionId: string, playerIds: string[]) => {
    const session = await prisma.session.findUnique({ where: { id: sessionId } });
    if(!session) throw new Error("Sessão não encontrada");
    if(session.status !== "OPEN") throw new Error("Sessão já foi sorteada ou finalizada");

    const players = await prisma.user.findMany({
        where: { id: { in: playerIds } },
        select: { id: true, rating: true }
    });

    if(players.length !== 15) throw new Error("Alguns jogadores não foram encontrados");

    const drawnTeams = drawTeams(players);

    const result = await prisma.$transaction(async (tx) => {
        const teams = [];
        for(const drawnTeam of drawnTeams) {
            const team = await tx.team.create({
                data: {
                    sessionId,
                    name: drawnTeam.name,
                    color: drawnTeam.color,
                    totalRating: drawnTeam.totalRating,
                    players: {
                        create: drawnTeam.players.map(p => ({
                            playerId: p.id
                        }))
                    }
                },
                include: {
                    players: {
                        include: {
                            player: { select: { id: true, name: true, nickname: true, position: true, rating: true } }
                        }
                    }
                }
            });
            teams.push(team);
        };

        await tx.session.update({
            where: { id: sessionId },
            data: { status: "IN_PROGRESS" }
        });

        return teams;
    });

    return result;
};

export const startSession = async (sessionId: string) => {
    return await prisma.session.update({
        where: { id: sessionId },
        data: { status: "IN_PROGRESS" }
    });
};

export const closeSession = async (sessionId: string) => {
    const session = await prisma.session.findUnique({
        where: { id: sessionId },
        include: {
            teams: { include: { players: true } },
            rounds: { include: { goals: true } }
        }
    });

    if(!session) throw new Error("Sessão não encontrada");
    if(session.status !== "IN_PROGRESS") throw new Error("Sessão não está em andamento");

    // Coletar todos os jogadores da sessão
    const allPlayers = session.teams.flatMap(t => 
        t.players.map(tp => ({ playerId: tp.playerId, teamId: tp.teamId }))
    );

    // Calcular stats de cada jogador nessa sessão
    const playerStats: Record<string, { wins: number; losses: number; goals: number; roundResults: { won: boolean; isDraw: boolean }[] }> = {};
    
    for(const p of allPlayers) {
        playerStats[p.playerId] = { wins: 0, losses: 0, goals: 0, roundResults: [] };
    };

    // Processar cada round
    for(const round of session.rounds) {
        const homePlayerIds = allPlayers.filter(p => p.teamId === round.homeTeamId).map(p => p.playerId);
        const awayPlayerIds = allPlayers.filter(p => p.teamId === round.awayTeamId).map(p => p.playerId);

        for(const pid of homePlayerIds) {
            if(!playerStats[pid]) continue;
            const won = round.winnerTeamId === round.homeTeamId;
            playerStats[pid].roundResults.push({ won, isDraw: round.isDraw });
            if(won) playerStats[pid].wins++;
            else playerStats[pid].losses++;
        };

        for(const pid of awayPlayerIds) {
            if(!playerStats[pid]) continue;
            const won = round.winnerTeamId === round.awayTeamId;
            playerStats[pid].roundResults.push({ won, isDraw: round.isDraw });
            if(won) playerStats[pid].wins++;
            else playerStats[pid].losses++;
        };

        // Gols
        for(const goal of round.goals) {
            if(playerStats[goal.playerId]) {
                playerStats[goal.playerId].goals++;
            };
        };
    };

    // Determinar MVP (mais vitórias + gols) e Artilheiro (mais gols)
    let mvpId: string | null = null;
    let mvpScore = -1;
    let topScorerId: string | null = null;
    let topScorerGoals = 0;

    for(const [playerId, stats] of Object.entries(playerStats)) {
        const score = stats.wins * 2 + stats.goals;
        if(score > mvpScore) {
            mvpScore = score;
            mvpId = playerId;
        };
        if(stats.goals > topScorerGoals) {
            topScorerGoals = stats.goals;
            topScorerId = playerId;
        };
    };

    // Transaction: atualizar ratings, badges e fechar sessão
    await prisma.$transaction(async (tx) => {
        // Atualizar rating de cada jogador
        for(const [playerId, stats] of Object.entries(playerStats)) {
            const player = await tx.user.findUnique({ where: { id: playerId } });
            if(!player) continue;

            const newRating = calculateNewRating({
                currentRating: player.rating,
                roundResults: stats.roundResults,
                goalsScored: stats.goals,
                isMvp: playerId === mvpId
            });

            await tx.user.update({
                where: { id: playerId },
                data: { rating: newRating }
            });
        };

        // Criar badges de sessão
        if(mvpId) {
            await tx.badge.create({
                data: { playerId: mvpId, type: "MVP", sessionId }
            });
        };
        if(topScorerId && topScorerGoals > 0) {
            await tx.badge.create({
                data: { playerId: topScorerId, type: "ARTILHEIRO", sessionId }
            });
        };

        // Badges de carreira: VETERANO (20+ sessões)
        for(const p of allPlayers) {
            const sessionCount = await tx.teamPlayer.count({
                where: { playerId: p.playerId }
            });
            if(sessionCount >= 20) {
                const alreadyHas = await tx.badge.findFirst({
                    where: { playerId: p.playerId, type: "VETERANO" }
                });
                if(!alreadyHas) {
                    await tx.badge.create({
                        data: { playerId: p.playerId, type: "VETERANO" }
                    });
                };
            };

            // GOLEADOR (50+ gols total)
            const totalGoals = await tx.goal.count({ where: { playerId: p.playerId } });
            if(totalGoals >= 50) {
                const alreadyHas = await tx.badge.findFirst({
                    where: { playerId: p.playerId, type: "GOLEADOR" }
                });
                if(!alreadyHas) {
                    await tx.badge.create({
                        data: { playerId: p.playerId, type: "GOLEADOR" }
                    });
                };
            };
        };

        // Fechar sessão
        await tx.session.update({
            where: { id: sessionId },
            data: {
                status: "FINISHED",
                mvpPlayerId: mvpId,
                topScorerPlayerId: topScorerId
            }
        });
    });

    return await findSessionById(sessionId);
};
