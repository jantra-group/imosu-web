'use client';
import { useState } from "react";
import { ProductTab } from "@/components/Product/ProductTab";
import { ProductList } from "@/components/Product/ProductList";

export function BestSellingProducts() {
      const [activeCategory, setActiveCategory] = useState('Bushing Arm');

      const handleTabClick = (category: string) => {
            setActiveCategory(category);
        };

      const categories = ['Bushing Arm', 'Support', 'Stabilizer Bush'];
        
      return (
            <div className="flex flex-col gap-5">
                  <h3 className="text-2xl md:text-[32px] font-bold text-black text-center">Produk Terlaris</h3>
                  <ProductTab categories={categories} activeCategory={activeCategory} onTabClick={handleTabClick} />
                  <ProductList grid="grid-cols-2 md:grid-cols-3 lg:grid-cols-5"  />
            </div>
      )
}