import { ProductDetailSection } from "@/containers/product-details/product-detail";
import { ProductRecommendationsSection } from "@/containers/product-details/product-recommendation";

export default function ProductDetailsPage() {
      return (
            <main className="flex flex-col w-full max-w-[1440px] mx-auto px-5 lg:px-20 py-16 gap-10">
                  <ProductDetailSection />
                  <ProductRecommendationsSection />
            </main>
      )
}