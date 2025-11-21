import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
  await prisma.user.createMany({
    data: [
      { name: "Galib", email: "galib@example.com" },
      { name: "Alice", email: "alice@prisma.io" },
      { name: "Bob", email: "bob@prisma.io" },
    ],
  });
}


seed().then(() => prisma.$disconnect());

export default prisma;