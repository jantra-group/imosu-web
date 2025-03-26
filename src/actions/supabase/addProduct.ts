'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createProductInSupabase(productDataArray: any): Promise<any> {
    try {
        // console.log("createProductInSupabase called with array:", productDataArray);

        const createdProducts: any[] = [];

        for (const productData of productDataArray) {
            const newProductData = {
                name_product: productData?.name || "Nama Produk Default",
                sku: productData?.no || "SKU Default",
                stock_quantity: productData?.quantity || 0,
                image_product: productData?.image_product[0] ?? "",
                price_product: 0, // Nilai default, sesuaikan jika perlu
                description: productData?.description || null, // Menggunakan null sebagai default
                car_brand: productData?.car_brand || null, // Menggunakan null sebagai default
                car_type: productData?.car_type || null, // Menggunakan null sebagai default
                id_trademark: productData?.id_trademark || null, // Menggunakan null sebagai default
                id_category: productData?.id_category || null, // Menggunakan null sebagai default
            };

            console.log("Data to be created:", newProductData);

            const createdProduct = await prisma.product.create({
                data: newProductData,
            });

            console.log("Product created successfully:", createdProduct);
            createdProducts.push(createdProduct);
        }

        return { products: createdProducts };
    } catch (error) {
        console.error("Error creating products in Supabase:", error);
        console.error("Prisma error details:", error);
        console.error("Prisma error stack:", (error as any).stack);
        return { error: (error as Error).message };
    }
}