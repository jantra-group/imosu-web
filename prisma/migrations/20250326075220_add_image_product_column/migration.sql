-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "image_product" JSONB,
ADD COLUMN     "no" SERIAL NOT NULL,
ADD CONSTRAINT "Product_pkey" PRIMARY KEY ("no");
