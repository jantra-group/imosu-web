'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function fetchCarType(carBrand: string | null) {
  try {
    if (!carBrand) {
      // If no car brand is selected, return an empty array or all types (your choice)
      return []; // Returning an empty array for now
    }

    const carTypes = await prisma.car.findMany({
      where: {
        car_brand: carBrand,
      },
      select: {
        car_type: true,
      },
      distinct: ['car_type'],
    });

    return carTypes.map((car: any) => car.car_type);
  } catch (error) {
    console.error("Error fetching car types:", error);
    return [];
  } finally {
    await prisma.$disconnect();
  }
}