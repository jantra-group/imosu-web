'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function fetchCarBrand() {
      try {
            const categories = await prisma.car.findMany({
                  select: {
                        car_brand: true,
                  },
                  distinct: ['car_brand'],
            });

            return categories.map((category: any) => category.car_brand);
      } catch (error) {
            console.error("Error fetching categories:", error);
            return [];
      } finally {
            await prisma.$disconnect();
      }
}