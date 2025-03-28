import { PrismaClient } from "@prisma/client";
import { fetchProductDetailFromAccurate } from "../accurate/getDetailProduct";

const prisma = new PrismaClient();

function formatPrice(price: number): number {
    return price / 100;
}

export async function updateProductsWithAccurateDetails(): Promise<any> {
    try {
        const products = await prisma.product.findMany();

        for (const product of products) {
            const accurateDetail = await fetchProductDetailFromAccurate(product.sku);

            if (accurateDetail && !accurateDetail.error) {
                const updatedProduct = await prisma.product.update({
                    where: { sku: product.sku },
                    data: {
                        price_product: formatPrice(accurateDetail.d?.detailSellingPrice?.[0]?.price || 0),
                        description: accurateDetail.d?.notes || null,
                        car_brand: accurateDetail.d?.charField1 || null,
                        car_type: accurateDetail.d?.charField2 || null,
                        id_category: accurateDetail.d?.itemCategory?.name || null,
                    },
                });
                console.log(`Product ${product.sku} updated:`, updatedProduct);
            } else {
                console.error(`Failed to fetch or update product ${product.sku}:`, accurateDetail?.error || "Unknown error");
            }
        }
        return { message: "Products updated successfully" };

    } catch (error) {
        console.error("Error updating products:", error);
        return { error: (error as Error).message };
    }
}