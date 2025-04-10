/*
  Warnings:

  - You are about to drop the `CarBrand` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CarType` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CarBrand" DROP CONSTRAINT "CarBrand_id_car_type_fkey";

-- DropTable
DROP TABLE "CarBrand";

-- DropTable
DROP TABLE "CarType";

-- CreateTable
CREATE TABLE "Car" (
    "id_car" SERIAL NOT NULL,
    "car_brand" TEXT NOT NULL,
    "car_type" TEXT NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id_car")
);
