import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const PORT = process.env.PORT || 4000;
const prisma = new PrismaClient();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.get("/users", async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.put("/users", async (_, res) => {
  const users = await prisma.user.update({
    where: { email: "pedro@example.com" },
    data: { age: 29 },
  });
  res.json(users);
});

app.delete("/user", async (_, res) => {
  const deleteUser = await prisma.user.deleteMany({
    where: { age: { gt: 30 }},
  });
  res.json(deleteUser);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
