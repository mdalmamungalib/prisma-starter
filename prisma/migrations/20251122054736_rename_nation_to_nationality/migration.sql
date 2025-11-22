/*
  Warnings:

  - You are about to drop the column `nation` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "nation",
ADD COLUMN     "nationality" TEXT;
