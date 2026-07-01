import { PrismaClient } from '../src/generated/prisma';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const players = [
  { name: "Jean", grade: 5.0, position: "MEIO" },
  { name: "Nego Veríssimo", grade: 5.0, position: "MEIO" },
  { name: "Tavares K", grade: 4.5, position: "MEIO" },
  { name: "Mineiro", grade: 4.0, position: "MEIO" },
  { name: "Nilo", grade: 4.0, position: "MEIO" },
  { name: "Warley", grade: 4.0, position: "MEIO" },
  { name: "Pedin Erykles", grade: 3.5, position: "MEIO" },
  { name: "Pedro Arthur", grade: 3.5, position: "MEIO" },
  { name: "Joao Helio", grade: 3.5, position: "MEIO" },
  { name: "Eduardo Dudu", grade: 3.0, position: "MEIO" },
  { name: "Lucas R", grade: 3.0, position: "MEIO" },
  { name: "Joao Antonio", grade: 3.0, position: "MEIO" },
  { name: "Lucas Willian", grade: 3.0, position: "MEIO" },
  { name: "Dourado", grade: 3.0, position: "MEIO" },
  { name: "Tiago Maluco", grade: 3.0, position: "MEIO" },
  { name: "Dario Higino", grade: 3.0, position: "MEIO" },
  { name: "Samuel Calouro", grade: 3.0, position: "MEIO" },
  { name: "Kaua Nego", grade: 3.0, position: "MEIO" },
  { name: "Pedro Goiano", grade: 3.0, position: "MEIO" },
  { name: "Artur Gigante", grade: 2.5, position: "MEIO" },
  { name: "Perdigao", grade: 2.5, position: "MEIO" },
  { name: "Paulo Josue", grade: 2.5, position: "MEIO" },
  { name: "Wagner Cabeleira", grade: 2.5, position: "MEIO" },
  { name: "Netin Calouro", grade: 2.5, position: "MEIO" },
  { name: "Pedro Altino", grade: 2.0, position: "MEIO" },
  { name: "Gildean", grade: 2.0, position: "MEIO" },
  { name: "Arthur Calouro", grade: 2.0, position: "MEIO" },
  { name: "Moises", grade: 2.0, position: "MEIO" },
  { name: "Lucas Ismailly", grade: 2.0, position: "MEIO" },
  { name: "Nego Bahia", grade: 1.5, position: "MEIO" },
  { name: "Leleo", grade: 1.5, position: "MEIO" },
  { name: "Muniz", grade: 1.5, position: "MEIO" },
];

async function main() {
  console.log("Iniciando Seed no Banco de Dados...");
  const passwordHash = await bcrypt.hash("123456", 10);

  for (const p of players) {
    // Transforma o nome em um email (ex: Nego Veríssimo -> nego_verissimo@racha.com)
    const normalizedName = p.name.toLowerCase().replace(/[^a-z0-9]/g, '');
    const email = `${normalizedName}@racha.com`;
    
    // Calcula o rating baseado na nota (Grade 5 = 1000, 3 = 600, etc)
    const rating = Math.round(p.grade * 200);

    await prisma.user.upsert({
      where: { email },
      update: {
        nickname: p.name,
        name: p.name,
        rating: rating,
      },
      create: {
        email,
        password: passwordHash,
        name: p.name,
        nickname: p.name,
        rating: rating,
        position: (p.grade >= 4.0 ? "ATACANTE" : p.grade >= 3.0 ? "MEIO" : "ZAGUEIRO") as any
      }
    });

    console.log(`✅ Jogador ${p.name} cadastrado (${email})`);
  }

  console.log("Seed concluído! Todos podem logar com a senha: '123456'");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
