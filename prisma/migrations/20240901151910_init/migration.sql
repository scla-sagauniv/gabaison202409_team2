/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "Restaurants" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "address" TEXT NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "image_url" TEXT
);

-- CreateTable
CREATE TABLE "Recruitings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "max_guests" INTEGER NOT NULL,
    "budget" REAL NOT NULL,
    "meeting_time" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Guests" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Restaurants_address_key" ON "Restaurants"("address");
