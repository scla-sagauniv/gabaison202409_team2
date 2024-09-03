-- CreateTable
CREATE TABLE `Restaurants` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `address` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `image_url` VARCHAR(191) NULL,

    UNIQUE INDEX `Restaurants_address_key`(`address`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Recruitings` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `max_guests` VARCHAR(191) NOT NULL,
    `budget` VARCHAR(191) NOT NULL,
    `meeting_time` VARCHAR(191) NOT NULL,
    `restaurantId` INTEGER NOT NULL,

--    UNIQUE INDEX `Recruitings_restaurantId_key`(`restaurantId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Guests` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `recruitingId` INTEGER NOT NULL,
    `usersId` VARCHAR(191) NOT NULL,

--    UNIQUE INDEX `Guests_recruitingId_key`(`recruitingId`),
--    UNIQUE INDEX `Guests_usersId_key`(`usersId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Recruitings` ADD CONSTRAINT `Recruitings_restaurantId_fkey` FOREIGN KEY (`restaurantId`) REFERENCES `Restaurants`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Guests` ADD CONSTRAINT `Guests_recruitingId_fkey` FOREIGN KEY (`recruitingId`) REFERENCES `Recruitings`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Guests` ADD CONSTRAINT `Guests_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
