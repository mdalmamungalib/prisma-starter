-- AlterTable
ALTER TABLE "User" ADD COLUMN     "age" INTEGER,
ADD COLUMN     "inMarried" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "nation" TEXT;
