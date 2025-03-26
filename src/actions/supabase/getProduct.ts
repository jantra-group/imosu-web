'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getProductsFromSupabase(): Promise<any> {
      try {
            const products = await prisma.product.findMany();
            return products;
      } catch (error) {
            console.error("Error fetching products from Supabase:", error);
            return { error: (error as Error).message };
      } 
}