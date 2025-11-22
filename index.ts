import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const PORT = process.env.PORT || 4000;
const prisma = new PrismaClient();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/users", async (_, res) => {
  const users = await prisma.user.findUnique({
    where: { email: "galib@example.com" },
  });
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
