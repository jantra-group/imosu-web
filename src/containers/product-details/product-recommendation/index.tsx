import { ProductList } from "@/components/Product/ProductList";

export function ProductRecommendationsSection() {
      return (
            <section className="flex flex-col gap-5">
                  <h4 className="text-2xl md:text-[32px] font-extrabold text-black">Rekomendasi Produk</h4>
                  <ProductList grid="grid-cols-2 md:grid-cols-3 lg:grid-cols-5" />
            </section>
      )
}