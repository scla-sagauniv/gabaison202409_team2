-- CreateTable
CREATE TABLE `Friends` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserOnFriends` (
    `userId` VARCHAR(191) NOT NULL,
    `friendId` INTEGER NOT NULL,
    `assignedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `assignedBy` VARCHAR(191) NOT NULL,

--    UNIQUE INDEX `UserOnFriends_userId_key`(`userId`),
--    UNIQUE INDEX `UserOnFriends_friendId_key`(`friendId`),
    PRIMARY KEY (`userId`, `friendId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserOnFriends` ADD CONSTRAINT `UserOnFriends_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserOnFriends` ADD CONSTRAINT `UserOnFriends_friendId_fkey` FOREIGN KEY (`friendId`) REFERENCES `Friends`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
