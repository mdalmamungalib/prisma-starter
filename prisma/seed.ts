import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: "Pedro",
        email: "pedro@example.com",
        age: 28,
        isMarried: false,
        nationality: "Brazilian",
      },
      {
        name: "Lucas",
        email: "lucas@example.com",
        age: 31,
        isMarried: true,
        nationality: "Argentinian",
      },
      {
        name: "Maria",
        email: "maria@example.com",
        age: 24,
        isMarried: false,
        nationality: "Mexican",
      },
      {
        name: "Sofia",
        email: "sofia@example.com",
        age: 29,
        isMarried: true,
        nationality: "Chilean",
      },
      {
        name: "Alejandro",
        email: "alejandro@example.com",
        age: 33,
        isMarried: false,
        nationality: "Peruvian",
      },
      {
        name: "Camila",
        email: "camila@example.com",
        age: 26,
        isMarried: false,
        nationality: "Colombian",
      },
      {
        name: "Diego",
        email: "diego@example.com",
        age: 37,
        isMarried: true,
        nationality: "Uruguayan",
      },
      {
        name: "Valentina",
        email: "valentina@example.com",
        age: 22,
        isMarried: false,
        nationality: "Bolivian",
      },
      {
        name: "Javier",
        email: "javier@example.com",
        age: 30,
        isMarried: true,
        nationality: "Ecuadorian",
      },
      {
        name: "Fernanda",
        email: "fernanda@example.com",
        age: 27,
        isMarried: false,
        nationality: "Paraguayan",
      },
    ],
    skipDuplicates: true,
  });
}

seed().then(() => prisma.$disconnect());

export default prisma;
