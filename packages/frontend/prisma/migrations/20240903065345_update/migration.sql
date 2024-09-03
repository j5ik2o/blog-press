/*
  Warnings:

  - Added the required column `categoryId` to the `blog_entry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `blog_entry` ADD COLUMN `categoryId` VARCHAR(64) NOT NULL;

-- AddForeignKey
ALTER TABLE `blog_entry` ADD CONSTRAINT `blog_entry_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
