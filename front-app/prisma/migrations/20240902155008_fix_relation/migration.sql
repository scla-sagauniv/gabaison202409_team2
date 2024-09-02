/*
  Warnings:

  - You are about to drop the column `recruitingId` on the `Guests` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Guests` DROP FOREIGN KEY `Guests_recruitingId_fkey`;

-- AlterTable
ALTER TABLE `Guests` DROP COLUMN `recruitingId`;

-- CreateTable
CREATE TABLE `Members` (
    `guestId` INTEGER NOT NULL,
    `recruitingId` INTEGER NOT NULL,
    `assignedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `assignedBy` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Members_guestId_key`(`guestId`),
    UNIQUE INDEX `Members_recruitingId_key`(`recruitingId`),
    PRIMARY KEY (`guestId`, `recruitingId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Members` ADD CONSTRAINT `Members_guestId_fkey` FOREIGN KEY (`guestId`) REFERENCES `Guests`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Members` ADD CONSTRAINT `Members_recruitingId_fkey` FOREIGN KEY (`recruitingId`) REFERENCES `Recruitings`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
