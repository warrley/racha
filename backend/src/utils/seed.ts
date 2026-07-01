import { PrismaClient } from '../generated/prisma/index.js';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    console.log("Limpiando banco de dados...");
    await prisma.badge.deleteMany();
    await prisma.goal.deleteMany();
    await prisma.round.deleteMany();
    await prisma.teamPlayer.deleteMany();
    await prisma.team.deleteMany();
    await prisma.session.deleteMany();
    await prisma.user.deleteMany();

    console.log("Criando Admin...");
    const adminPassword = await bcrypt.hash("admin123", 10);
    const admin = await prisma.user.create({
        data: {
            name: "Administrador Geral",
            email: "admin@racha.com",
            password: adminPassword,
            nickname: "Chefia",
            position: "ZAGUEIRO",
            isAdmin: true,
            rating: 1500,
            avatarIndex: 1
        }
    });

    console.log("Criando Jogadores...");
    const playerNames = [
        { name: "Carlos Eduardo", nick: "Cadu", pos: "ATACANTE" },
        { name: "Thiago Silva", nick: "Monstro", pos: "ZAGUEIRO" },
        { name: "Felipe Melo", nick: "Pitbull", pos: "MEIO" },
        { name: "Vini Jr", nick: "Vini Raiz", pos: "ATACANTE" },
        { name: "Lucas Paquetá", nick: "Paquetop", pos: "MEIO" },
        { name: "Neymar Jr", nick: "Ney", pos: "ATACANTE" },
        { name: "Cássio Ramos", nick: "Muralha", pos: "ZAGUEIRO" },
        { name: "Diego Alves", nick: "Paredão", pos: "ZAGUEIRO" },
        { name: "Marquinhos", nick: "Marquinhos", pos: "ZAGUEIRO" },
        { name: "Daniel Alves", nick: "Dani", pos: "MEIO" },
        { name: "Marcelo Vieira", nick: "Doze", pos: "MEIO" },
        { name: "Casemiro", nick: "Tank", pos: "MEIO" },
        { name: "Everton Ribeiro", nick: "Miteiro", pos: "MEIO" },
        { name: "Gabriel Barbosa", nick: "Gabi", pos: "ATACANTE" },
        { name: "Bruno Henrique", nick: "Oto Patamar", pos: "ATACANTE" },
        { name: "Arrascaeta", nick: "Arrasca", pos: "MEIO" },
        { name: "Pedro Guilherme", nick: "Queixada", pos: "ATACANTE" },
        { name: "Eder Militão", nick: "Militão", pos: "ZAGUEIRO" },
        { name: "Alisson Becker", nick: "Goleirão", pos: "ZAGUEIRO" },
        { name: "Richarlison", nick: "Pombo", pos: "ATACANTE" }
    ];

    const players = [admin];

    for (let i = 0; i < playerNames.length; i++) {
        const p = playerNames[i];
        const pass = await bcrypt.hash("senha123", 10);
        const player = await prisma.user.create({
            data: {
                name: p.name,
                email: `jogador${i}@racha.com`,
                password: pass,
                nickname: p.nick,
                position: p.pos as any,
                isAdmin: false,
                rating: 1100 + Math.floor(Math.random() * 400),
                avatarIndex: (i % 24) + 1
            }
        });
        players.push(player);
    }

    console.log(`Criados ${players.length} jogadores.`);

    // Sessão Histórica (Semana Passada)
    console.log("Criando Sessão Histórica (Finalizada)...");
    const lastWeek = new Date();
    lastWeek.setDate(lastWeek.getDate() - 7);
    const sessionHistory = await prisma.session.create({
        data: {
            title: "Racha da Semana Passada",
            date: lastWeek,
            status: "FINISHED",
            createdById: admin.id,
            mvpPlayerId: players[3].id, // Vini Raiz
            topScorerPlayerId: players[5].id // Ney
        }
    });

    // Simulando estatísticas da sessão histórica...
    // Vou dar badges
    await prisma.badge.create({ data: { type: "MVP", playerId: players[3].id, sessionId: sessionHistory.id } });
    await prisma.badge.create({ data: { type: "ARTILHEIRO", playerId: players[5].id, sessionId: sessionHistory.id } });
    await prisma.badge.create({ data: { type: "ON_FIRE", playerId: players[3].id, sessionId: sessionHistory.id } });

    // Criando Sessão Ativa (IN_PROGRESS)
    console.log("Criando Sessão Ativa (Rolando hoje)...");
    const today = new Date();
    const sessionActive = await prisma.session.create({
        data: {
            title: "Racha de Hoje",
            date: today,
            status: "IN_PROGRESS",
            createdById: admin.id
        }
    });

    const activePlayers = players.slice(0, 15);
    const colors = ["#DC2626", "#EAB308", "#1E293B"];
    const teamNames = ["Time Vermelho", "Time Amarelo", "Time Preto"];
    const teamsData = [];

    for (let i = 0; i < 3; i++) {
        const teamPlayers = activePlayers.slice(i * 5, (i + 1) * 5);
        const team = await prisma.team.create({
            data: {
                sessionId: sessionActive.id,
                name: teamNames[i],
                color: colors[i],
                totalRating: teamPlayers.reduce((sum, p) => sum + p.rating, 0)
            }
        });
        teamsData.push(team);

        for (const p of teamPlayers) {
            await prisma.teamPlayer.create({
                data: {
                    teamId: team.id,
                    playerId: p.id
                }
            });
        }
    }

    // Criando algumas partidas já jogadas na sessão ativa
    console.log("Criando alguns rounds...");
    const round1 = await prisma.round.create({
        data: {
            sessionId: sessionActive.id,
            roundNumber: 1,
            homeTeamId: teamsData[0].id,
            awayTeamId: teamsData[1].id,
            winnerTeamId: teamsData[0].id,
            isDraw: false
        }
    });
    // Gol do Cadu (teamsData[0].players[0])
    await prisma.goal.create({ data: { roundId: round1.id, playerId: activePlayers[0].id } });

    const round2 = await prisma.round.create({
        data: {
            sessionId: sessionActive.id,
            roundNumber: 2,
            homeTeamId: teamsData[1].id,
            awayTeamId: teamsData[2].id,
            winnerTeamId: null,
            isDraw: true
        }
    });
    // Gols empate 1x1
    await prisma.goal.create({ data: { roundId: round2.id, playerId: activePlayers[5].id } });
    await prisma.goal.create({ data: { roundId: round2.id, playerId: activePlayers[10].id } });

    console.log("Seed finalizado com sucesso!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
