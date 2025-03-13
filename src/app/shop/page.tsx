'use client';
import { ProductList } from "@/components/Product/ProductList";
import { BannerProduct } from "@/containers/shop/banner";
import { FilterProduct } from "@/containers/shop/filter-product";
import { SearchProduct } from "@/containers/shop/search-product";

export default function ShopPage() {
      return (
            <main>
                  <BannerProduct />
                  <section className="flex flex-col w-full max-w-[1440px] mx-auto px-20 py-16 gap-10">
                        <div className="flex flex-row">
                              <div className="w-[200px] me-10" />
                              <SearchProduct />
                        </div>
                        <div className="flex flex-row gap-10">
                              <FilterProduct

                              />
                              <ProductList grid="grid-cols-2 lg:grid-cols-4" />
                        </div>
                  </section>
            </main>
      )
}