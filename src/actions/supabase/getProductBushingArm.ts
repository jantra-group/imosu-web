'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getProductsBushingArmFromSupabase(): Promise<any> {
      try {
            const products = await prisma.product.findMany({
                  where: {
                        id_category: {
                              in: ["Bushing Arm", "Bushing Arm Besar", "Bushing Arm Kecil", "Bushing Arm Pipih"]
                        }
                  }
            });
            return products;
      } catch (error) {
            console.error("Error fetching products from Supabase:", error);
            return { error: (error as Error).message };
      } 
}