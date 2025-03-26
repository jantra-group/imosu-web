-- CreateTable
CREATE TABLE "Product" (
    "id_product" SERIAL NOT NULL,
    "name_product" TEXT NOT NULL,
    "image_product" TEXT NOT NULL,
    "price_product" INTEGER NOT NULL,
    "id_car" INTEGER NOT NULL,
    "stock_quantity" INTEGER NOT NULL,
    "id_trademark" INTEGER NOT NULL,
    "id_category" INTEGER NOT NULL,
    "description" TEXT,
    "sku" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id_product")
);

-- CreateTable
CREATE TABLE "CarType" (
    "id_car_type" SERIAL NOT NULL,
    "type_car" TEXT NOT NULL,

    CONSTRAINT "CarType_pkey" PRIMARY KEY ("id_car_type")
);

-- CreateTable
CREATE TABLE "CarBrand" (
    "id_car" SERIAL NOT NULL,
    "name_car" TEXT NOT NULL,
    "id_car_type" INTEGER NOT NULL,

    CONSTRAINT "CarBrand_pkey" PRIMARY KEY ("id_car")
);

-- CreateTable
CREATE TABLE "Trademark" (
    "id_trademark" SERIAL NOT NULL,
    "name_trademark" TEXT NOT NULL,

    CONSTRAINT "Trademark_pkey" PRIMARY KEY ("id_trademark")
);

-- CreateTable
CREATE TABLE "ProductCategory" (
    "id_category" SERIAL NOT NULL,
    "name_category" TEXT NOT NULL,

    CONSTRAINT "ProductCategory_pkey" PRIMARY KEY ("id_category")
);

-- CreateTable
CREATE TABLE "Cart" (
    "id_cart" SERIAL NOT NULL,
    "name_product" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "total_price" INTEGER NOT NULL,
    "order_date" TIMESTAMP(3) NOT NULL,
    "image_product" BYTEA NOT NULL,
    "quantity" INTEGER NOT NULL,
    "id_product" INTEGER NOT NULL,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("id_cart")
);

-- CreateTable
CREATE TABLE "Admin" (
    "email" TEXT NOT NULL,
    "password" BYTEA NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("email")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_id_car_fkey" FOREIGN KEY ("id_car") REFERENCES "CarBrand"("id_car") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_id_trademark_fkey" FOREIGN KEY ("id_trademark") REFERENCES "Trademark"("id_trademark") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "ProductCategory"("id_category") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarBrand" ADD CONSTRAINT "CarBrand_id_car_type_fkey" FOREIGN KEY ("id_car_type") REFERENCES "CarType"("id_car_type") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "Product"("id_product") ON DELETE RESTRICT ON UPDATE CASCADE;
