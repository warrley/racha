import { PrismaClient } from '../src/generated/prisma';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

// ─── Times definidos para hoje ───────────────────────────────────────
const todayTeams = [
    {
        name: "Time 1",
        color: "RED",
        players: ["Ryan Carioca", "Joao Helio", "Moretti", "Nego Veríssimo", "Joao Antonio"]
    },
    {
        name: "Time 2",
        color: "BLUE",
        players: ["Lucas R", "Lucas Ismailly", "Lucas Willian", "Pedro Arthur", "Dourado"]
    },
    {
        name: "Time 3",
        color: "GREEN",
        players: ["Henrique ES", "Muniz", "Mineiro", "Dario Higino", "Eduardo Dudu"]
    },
    {
        name: "Time 4",
        color: "YELLOW",
        players: ["Wagner Cabeleira", "Pedin Erykles", "Tiago Maluco", "Warley", "Kaua Nego"]
    }
];

// Jogadores novos que não estavam no banco
const newPlayers = [
    { name: "Ryan Carioca", grade: 1.5 },
    { name: "Moretti",      grade: 3.5 },
    { name: "Henrique ES",  grade: 4.0 },
];

async function main() {
    console.log("🔧 Verificando novos jogadores...");
    const passwordHash = await bcrypt.hash("123456", 10);

    for (const p of newPlayers) {
        const email = `${p.name.toLowerCase().replace(/[^a-z0-9]/g, '')}@racha.com`;
        const rating = Math.round(p.grade * 200);
        await prisma.user.upsert({
            where: { email },
            update: { name: p.name, nickname: p.name, rating },
            create: { email, password: passwordHash, name: p.name, nickname: p.name, rating, position: "MEIO" }
        });
        console.log(`✅ Jogador ${p.name} cadastrado (${email})`);
    }

    // Buscar o admin para criar a sessão (Warley)
    const admin = await prisma.user.findFirst({ where: { email: "warley@racha.com" } });
    if (!admin) {
        console.error("❌ Admin (warley@racha.com) não encontrado! Rode o seedGroup.ts primeiro.");
        return;
    }

    console.log("\n🏟️  Criando sessão de hoje...");
    const session = await prisma.session.create({
        data: {
            title: `Racha Metanol FC - ${new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })}`,
            date: new Date(),
            status: "IN_PROGRESS",
            createdById: admin.id,
        }
    });
    console.log(`✅ Sessão criada: ${session.title} (${session.id})`);

    // Criar os times com os jogadores
    for (const teamDef of todayTeams) {
        console.log(`\n⚽ Criando ${teamDef.name}...`);

        // Buscar IDs dos jogadores pelo nome/nickname
        const playerIds: string[] = [];
        for (const playerName of teamDef.players) {
            // Busca pelo primeiro nome e sobrenome/apelido para ser mais preciso
            const allUsers = await prisma.user.findMany({
                select: { id: true, name: true, nickname: true }
            });
            // Normaliza para comparação (remove acentos e lowercaseiza)
            const normalize = (s: string) => s.toLowerCase()
                .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
                .replace(/[^a-z0-9]/g, '');
            
            const targetNorm = normalize(playerName);
            const found = allUsers.find(u => 
                normalize(u.name || '').includes(targetNorm.slice(0, 6)) ||
                targetNorm.includes(normalize(u.name || '').slice(0, 6))
            );

            if (found && !playerIds.includes(found.id)) {
                playerIds.push(found.id);
                console.log(`  ✓ ${playerName} → ${found.name}`);
            } else if (!found) {
                console.warn(`  ⚠️  Jogador não encontrado: ${playerName}`);
            } else {
                console.warn(`  ⚠️  Duplicado ignorado: ${playerName} → ${found.name}`);
            }
        }

        if (playerIds.length === 0) {
            console.error(`  ❌ Nenhum jogador encontrado para ${teamDef.name}`);
            continue;
        }

        const totalRating = await prisma.user.aggregate({
            where: { id: { in: playerIds } },
            _sum: { rating: true }
        });

        await prisma.team.create({
            data: {
                sessionId: session.id,
                name: teamDef.name,
                color: teamDef.color,
                totalRating: totalRating._sum.rating ?? 0,
                players: {
                    create: playerIds.map(id => ({ playerId: id }))
                }
            }
        });
        console.log(`  ✅ ${teamDef.name} criado com ${playerIds.length} jogadores`);
    }

    console.log(`\n🎉 Sessão pronta! Acesse no app: /sessions/${session.id}`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
