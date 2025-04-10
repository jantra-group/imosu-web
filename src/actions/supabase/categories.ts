'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function fetchCategories() {
      try {
            const categories = await prisma.product.findMany({
                  select: {
                        id_category: true,
                  },
                  distinct: ['id_category'],
            });

            return categories.map((category: any) => category.id_category);
      } catch (error) {
            console.error("Error fetching categories:", error);
            return [];
      } finally {
            await prisma.$disconnect();
      }
}