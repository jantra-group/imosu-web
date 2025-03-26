// src/actions/product/syncProduct.ts
'use server';

import { fetchProductsFromAccurate } from "../accurate/getProduct";
import { createProductInSupabase } from "../supabase/addProduct";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function syncProducts(): Promise<any> {
    console.log("Starting syncProducts");

    const accurateData = await fetchProductsFromAccurate();

    if (accurateData.error) {
        console.error("Error fetching from Accurate:", accurateData.error);
        return { error: accurateData.error };
    }

    if (accurateData.d && Array.isArray(accurateData.d)) {
        console.log("Data from Accurate:", accurateData.d);

        for (const productFromAccurate of accurateData.d) {
            console.log("Processing product:", productFromAccurate);

            // Tambahkan pemeriksaan untuk productFromAccurate
            if (!productFromAccurate) {
                console.error("Invalid product data from Accurate: null or undefined");
                continue; // Lanjutkan ke produk berikutnya
            }

            // Periksa keberadaan produk di Supabase
            const existingProduct = await prisma.product.findUnique({
                where: {
                    sku: productFromAccurate.no, // Asumsikan upcNo adalah SKU
                },
            });

            if (existingProduct) {
                console.log(`Product with SKU ${productFromAccurate.upcNo} already exists. Skipping.`);
                continue; // Lanjutkan ke produk berikutnya
            }

            try {
                const result = await createProductInSupabase(productFromAccurate);

                if (result.error) {
                    console.error("Error creating product:", result.error);
                    return { error: result.error };
                }

                console.log("Product created successfully:", result.product);
            } catch (error) {
                console.error("Error calling createProductInSupabase:", error);
                return { error: (error as Error).message };
            }
        }

        console.log("Products synced successfully");
        return { message: "Products synced successfully" };
    } else {
        console.error("Invalid product data from Accurate API");
        return { error: "Invalid product data from Accurate API" };
    }
}