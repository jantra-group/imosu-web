import { ProductDetailDescription } from "@/components/Product/ProductDetails/ProductDetailDescription";
import { ProductDetailImage } from "@/components/Product/ProductDetails/ProductDetailImage";
import { ProductDetailInfo } from "@/components/Product/ProductDetails/ProductDetailInfo";

export function ProductDetailSection() {
      return (
            <section className="flex flex-col gap-5 lg:gap-16">
                  <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                        <ProductDetailImage />
                        <ProductDetailInfo showCart={false} addMargin={true} />
                  </div>
                  <ProductDetailDescription />
            </section>
      )
}