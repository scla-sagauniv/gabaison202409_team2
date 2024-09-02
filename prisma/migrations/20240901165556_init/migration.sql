/*
  Warnings:

  - Added the required column `recruitingId` to the `Guests` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usersId` to the `Guests` table without a default value. This is not possible if the table is not empty.
  - Added the required column `restaurantId` to the `Recruitings` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Guests" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "recruitingId" INTEGER NOT NULL,
    "usersId" INTEGER NOT NULL,
    CONSTRAINT "Guests_recruitingId_fkey" FOREIGN KEY ("recruitingId") REFERENCES "Recruitings" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Guests_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Guests" ("id") SELECT "id" FROM "Guests";
DROP TABLE "Guests";
ALTER TABLE "new_Guests" RENAME TO "Guests";
CREATE UNIQUE INDEX "Guests_recruitingId_key" ON "Guests"("recruitingId");
CREATE UNIQUE INDEX "Guests_usersId_key" ON "Guests"("usersId");
CREATE TABLE "new_Recruitings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "max_guests" TEXT NOT NULL,
    "budget" TEXT NOT NULL,
    "meeting_time" TEXT NOT NULL,
    "restaurantId" INTEGER NOT NULL,
    CONSTRAINT "Recruitings_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurants" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Recruitings" ("budget", "id", "max_guests", "meeting_time") SELECT "budget", "id", "max_guests", "meeting_time" FROM "Recruitings";
DROP TABLE "Recruitings";
ALTER TABLE "new_Recruitings" RENAME TO "Recruitings";
CREATE UNIQUE INDEX "Recruitings_restaurantId_key" ON "Recruitings"("restaurantId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
