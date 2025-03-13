import { ProductDetailDescription } from "@/components/Product/ProductDetails/ProductDetailDescription";
import { ProductDetailImage } from "@/components/Product/ProductDetails/ProductDetailImage";
import { ProductDetailInfo } from "@/components/Product/ProductDetails/ProductDetailInfo";

export function ProductDetailSection() {
      return (
            <section className="flex flex-col lg:gap-16">
                  <div className="flex flex-col lg:flex-row gap-16">
                        <ProductDetailImage />
                        <ProductDetailInfo />
                  </div>
                  <ProductDetailDescription />
            </section>
      )
}