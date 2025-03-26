/*
  Warnings:

  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_car` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `id_product` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `image_product` on the `Product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[sku]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_id_product_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_id_car_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_id_category_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_id_trademark_fkey";

-- AlterTable
ALTER TABLE "Product" DROP CONSTRAINT "Product_pkey",
DROP COLUMN "id_car",
DROP COLUMN "id_product",
DROP COLUMN "image_product",
ADD COLUMN     "car_brand" TEXT,
ADD COLUMN     "car_type" TEXT,
ALTER COLUMN "id_trademark" DROP NOT NULL,
ALTER COLUMN "id_trademark" SET DATA TYPE TEXT,
ALTER COLUMN "id_category" DROP NOT NULL,
ALTER COLUMN "id_category" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Product_sku_key" ON "Product"("sku");
