import { prisma } from "../utils/prisma";
import { drawTeams } from "../utils/draw";
import { calculateNewRating } from "../utils/elo";

export const createSession = async (createdById: string, title: string | undefined, date: string, maxPlayers?: number) => {
    return await prisma.session.create({
        data: {
            title,
            date: new Date(date),
            createdById,
            maxPlayers
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
            participants: {
                include: {
                    user: { select: { id: true, name: true, nickname: true, position: true, rating: true, avatarIndex: true } }
                },
                orderBy: { createdAt: "asc" }
            },
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

export const executeDraw = async (sessionId: string, playerIds?: string[]) => {
    const session = await prisma.session.findUnique({ where: { id: sessionId } });
    if(!session) throw new Error("Sessão não encontrada");
    if(session.status !== "OPEN") throw new Error("Sessão já foi sorteada ou finalizada");

    let finalPlayerIds = playerIds;
    if (!finalPlayerIds || finalPlayerIds.length === 0) {
        const confirmedParticipants = await prisma.sessionParticipant.findMany({
            where: { sessionId, status: "CONFIRMED" },
            select: { userId: true }
        });
        finalPlayerIds = confirmedParticipants.map(cp => cp.userId);
    }

    // Garantir IDs únicos (prevenir tentativas de fraude/duplicações no balanceamento)
    finalPlayerIds = Array.from(new Set(finalPlayerIds));

    if (finalPlayerIds.length !== 15 && finalPlayerIds.length !== 20) {
        throw new Error("O sorteio exige exatamente 15 (3 times) ou 20 (4 times) jogadores confirmados");
    }

    const players = await prisma.user.findMany({
        where: { id: { in: finalPlayerIds } },
        select: { id: true, rating: true }
    });

    if(players.length !== finalPlayerIds.length) throw new Error("Alguns jogadores não foram encontrados");

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
    }, { timeout: 60000, maxWait: 10000 });

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
        const playerIds = Object.keys(playerStats);

        // 1. Atualizar ratings em paralelo (1 busca em lote + updates paralelos)
        const players = await tx.user.findMany({
            where: { id: { in: playerIds } }
        });

        await Promise.all(players.map(async (player) => {
            const stats = playerStats[player.id];
            if (!stats) return;

            const newRating = calculateNewRating({
                currentRating: player.rating,
                roundResults: stats.roundResults,
                goalsScored: stats.goals,
                isMvp: player.id === mvpId
            });

            await tx.user.update({
                where: { id: player.id },
                data: { rating: newRating }
            });
        }));

        // 2. Criar badges da sessão
        const sessionBadges = [];
        if(mvpId) {
            sessionBadges.push(tx.badge.create({
                data: { playerId: mvpId, type: "MVP", sessionId }
            }));
        }
        if(topScorerId && topScorerGoals > 0) {
            sessionBadges.push(tx.badge.create({
                data: { playerId: topScorerId, type: "ARTILHEIRO", sessionId }
            }));
        }
        await Promise.all(sessionBadges);

        // 3. Badges de carreira (VETERANO/GOLEADOR) usando consultas otimizadas
        const [existingBadges, sessionCounts, totalGoalsCounts] = await Promise.all([
            tx.badge.findMany({
                where: {
                    playerId: { in: playerIds },
                    type: { in: ["VETERANO", "GOLEADOR"] }
                }
            }),
            tx.teamPlayer.groupBy({
                by: ['playerId'],
                where: { playerId: { in: playerIds } },
                _count: { playerId: true }
            }),
            tx.goal.groupBy({
                by: ['playerId'],
                where: { playerId: { in: playerIds } },
                _count: { playerId: true }
            })
        ]);

        const sessionCountMap: Record<string, number> = {};
        for (const item of sessionCounts) {
            sessionCountMap[item.playerId] = item._count.playerId;
        }

        const totalGoalsMap: Record<string, number> = {};
        for (const item of totalGoalsCounts) {
            totalGoalsMap[item.playerId] = item._count.playerId;
        }

        const careerBadgesToCreate = [];

        for (const p of allPlayers) {
            const sCount = sessionCountMap[p.playerId] || 0;
            const hasVeterano = existingBadges.some(b => b.playerId === p.playerId && b.type === "VETERANO");
            if (sCount >= 20 && !hasVeterano) {
                careerBadgesToCreate.push(tx.badge.create({
                    data: { playerId: p.playerId, type: "VETERANO" }
                }));
            }

            const tGoals = totalGoalsMap[p.playerId] || 0;
            const hasGoleador = existingBadges.some(b => b.playerId === p.playerId && b.type === "GOLEADOR");
            if (tGoals >= 50 && !hasGoleador) {
                careerBadgesToCreate.push(tx.badge.create({
                    data: { playerId: p.playerId, type: "GOLEADOR" }
                }));
            }
        }

        if (careerBadgesToCreate.length > 0) {
            await Promise.all(careerBadgesToCreate);
        }

        // 4. Fechar sessão
        await tx.session.update({
            where: { id: sessionId },
            data: {
                status: "FINISHED",
                mvpPlayerId: mvpId,
                topScorerPlayerId: topScorerId
            }
        });
    }, { timeout: 60000, maxWait: 10000 });

    return await findSessionById(sessionId);
};

export const joinSession = async (sessionId: string, userId: string) => {
    const session = await prisma.session.findUnique({
        where: { id: sessionId }
    });
    if (!session) throw new Error("Sessão não encontrada");
    if (session.status !== "OPEN") throw new Error("Sessão não está aberta para confirmações");

    // Garantia de segurança: Verificar se o jogador realmente existe
    const userExists = await prisma.user.findUnique({
        where: { id: userId }
    });
    if (!userExists) throw new Error("Jogador não encontrado");

    // Verificar se já está inscrito
    const existing = await prisma.sessionParticipant.findUnique({
        where: {
            sessionId_userId: { sessionId, userId }
        }
    });
    if (existing) throw new Error("Jogador já está inscrito neste racha");

    return await prisma.$transaction(async (tx) => {
        const confirmedCount = await tx.sessionParticipant.count({
            where: {
                sessionId,
                status: "CONFIRMED"
            }
        });

        const status = confirmedCount < session.maxPlayers ? "CONFIRMED" : "WAITING_LIST";

        return await tx.sessionParticipant.create({
            data: {
                sessionId,
                userId,
                status
            },
            include: {
                user: { select: { id: true, name: true, nickname: true, position: true, rating: true, avatarIndex: true } }
            }
        });
    }, { timeout: 10000 });
};

export const leaveSession = async (sessionId: string, userId: string) => {
    const session = await prisma.session.findUnique({
        where: { id: sessionId }
    });
    if (!session) throw new Error("Sessão não encontrada");
    if (session.status !== "OPEN") throw new Error("Sessão já foi iniciada ou finalizada");

    const participant = await prisma.sessionParticipant.findUnique({
        where: {
            sessionId_userId: { sessionId, userId }
        }
    });
    if (!participant) throw new Error("Jogador não está inscrito neste racha");

    await prisma.$transaction(async (tx) => {
        // Excluir participação
        await tx.sessionParticipant.delete({
            where: {
                sessionId_userId: { sessionId, userId }
            }
        });

        // Se o que saiu era CONFIRMED, promover o mais antigo da WAITING_LIST
        if (participant.status === "CONFIRMED") {
            const nextInLine = await tx.sessionParticipant.findFirst({
                where: {
                    sessionId,
                    status: "WAITING_LIST"
                },
                orderBy: {
                    createdAt: "asc"
                }
            });

            if (nextInLine) {
                await tx.sessionParticipant.update({
                    where: { id: nextInLine.id },
                    data: { status: "CONFIRMED" }
                });
            }
        }
    }, { timeout: 10000 });

    return { success: true };
};
