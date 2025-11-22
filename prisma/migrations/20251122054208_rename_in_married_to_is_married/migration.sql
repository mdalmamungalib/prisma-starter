/*
  Warnings:

  - You are about to drop the column `inMarried` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "inMarried",
ADD COLUMN     "isMarried" BOOLEAN NOT NULL DEFAULT false;
