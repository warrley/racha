import { PrismaClient } from '../generated/prisma/index.js';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const players = [
    { name: "Jean", grade: 5.0 },
    { name: "Nego Veríssimo", grade: 5.0, admin: true },
    { name: "Tavares K", grade: 4.5 },
    { name: "Mineiro", grade: 4.0 },
    { name: "Nilo", grade: 4.0 },
    { name: "Warley", grade: 4.0, admin: true },
    { name: "Pedin Erykles", grade: 3.5 },
    { name: "Pedro Arthur", grade: 3.5 },
    { name: "Joao Helio", grade: 3.5 },
    { name: "Eduardo Dudu", grade: 3.0 },
    { name: "Lucas R", grade: 3.0 },
    { name: "Joao Antonio", grade: 3.0 },
    { name: "Lucas Willian", grade: 3.0 },
    { name: "Dourado", grade: 3.0 },
    { name: "Tiago Maluco", grade: 3.0 },
    { name: "Dario Higino", grade: 3.0 },
    { name: "Samuel Calouro", grade: 3.0 },
    { name: "Kaua Nego", grade: 3.0 },
    { name: "Pedro Goiano", grade: 3.0 },
    { name: "Artur Gigante", grade: 2.5 },
    { name: "Perdigao", grade: 2.5 },
    { name: "Paulo Josue", grade: 2.5 },
    { name: "Wagner Cabeleira", grade: 2.5 },
    { name: "Netin Calouro", grade: 2.5 },
    { name: "Pedro Altino", grade: 2.0 },
    { name: "Gildean", grade: 2.0 },
    { name: "Arthur Calouro", grade: 2.0 },
    { name: "Moises", grade: 2.0 },
    { name: "Lucas Ismailly", grade: 2.0 },
    { name: "Nego Bahia", grade: 1.5 },
    { name: "Leleo", grade: 1.5 },
    { name: "Muniz", grade: 1.5 },
];

async function main() {
    console.log("Limpando banco de dados...");
    await prisma.roundSubstitution.deleteMany();
    await prisma.sessionGrade.deleteMany();
    await prisma.sessionParticipant.deleteMany();
    await prisma.badge.deleteMany();
    await prisma.goal.deleteMany();
    await prisma.round.deleteMany();
    await prisma.teamPlayer.deleteMany();
    await prisma.team.deleteMany();
    await prisma.session.deleteMany();
    await prisma.user.deleteMany();

    console.log("Criando Jogadores...");
    const passwordHash = await bcrypt.hash("123456", 10);

    for (const p of players) {
        const normalizedName = p.name.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]/g, '');
        const email = `${normalizedName}@racha.com`;
        const rating = Math.round(p.grade * 200);
        const position = p.grade >= 4.0 ? "ATACANTE" : p.grade >= 3.0 ? "MEIO" : "ZAGUEIRO";

        await prisma.user.create({
            data: {
                email,
                password: passwordHash,
                name: p.name,
                nickname: p.name,
                rating,
                averageGrade: p.grade,
                position: position as any,
                isAdmin: Boolean(p.admin),
            }
        });

        console.log(`Jogador ${p.name} cadastrado (${email})`);
    }

    console.log(`Criados ${players.length} jogadores. Todos podem logar com a senha: '123456'`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
