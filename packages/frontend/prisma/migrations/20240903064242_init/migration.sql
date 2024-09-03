-- CreateTable
CREATE TABLE `user_account` (
    `id` VARCHAR(64) NOT NULL,
    `disabled` BOOLEAN NOT NULL,
    `name` TEXT NOT NULL,
    `created_at` DATETIME(0) NOT NULL,
    `updated_at` DATETIME(0) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `blog_site` (
    `id` VARCHAR(64) NOT NULL,
    `disabled` BOOLEAN NOT NULL,
    `name` TEXT NOT NULL,
    `description` TEXT NOT NULL,
    `owner_account_id` VARCHAR(64) NOT NULL,
    `created_at` DATETIME(0) NOT NULL,
    `updated_at` DATETIME(0) NOT NULL,

    INDEX `blog_site_owner_account_id_idx`(`owner_account_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `blog_entry` (
    `id` VARCHAR(64) NOT NULL,
    `disabled` BOOLEAN NOT NULL,
    `blog_site_id` VARCHAR(64) NOT NULL,
    `title` TEXT NOT NULL,
    `slug` VARCHAR(255) NOT NULL,
    `body` LONGTEXT NOT NULL,
    `created_at` DATETIME(0) NOT NULL,
    `updated_at` DATETIME(0) NOT NULL,

    INDEX `blog_entry_blog_site_id_idx`(`blog_site_id`),
    UNIQUE INDEX `blog_entry_blog_site_id_slug_key`(`blog_site_id`, `slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `category` (
    `id` VARCHAR(64) NOT NULL,
    `parent_id` VARCHAR(64) NULL,
    `blog_site_id` VARCHAR(64) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `slug` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(0) NOT NULL,
    `updated_at` DATETIME(0) NOT NULL,

    INDEX `category_blog_site_id_idx`(`blog_site_id`),
    UNIQUE INDEX `category_blog_site_id_slug_key`(`blog_site_id`, `slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `blog_site` ADD CONSTRAINT `blog_site_owner_account_id_fkey` FOREIGN KEY (`owner_account_id`) REFERENCES `user_account`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `blog_entry` ADD CONSTRAINT `blog_entry_blog_site_id_fkey` FOREIGN KEY (`blog_site_id`) REFERENCES `blog_site`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `category` ADD CONSTRAINT `category_parent_id_fkey` FOREIGN KEY (`parent_id`) REFERENCES `category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `category` ADD CONSTRAINT `category_blog_site_id_fkey` FOREIGN KEY (`blog_site_id`) REFERENCES `blog_site`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
