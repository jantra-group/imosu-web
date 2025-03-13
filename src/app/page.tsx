import { AboutUs } from "@/containers/home-page/about-us";
import { Benefit } from "@/containers/home-page/benefit";
import { BestSellingProducts } from "@/containers/home-page/best-selling-products";
import { CallToAction } from "@/containers/home-page/call-to-action";
import { FAQ } from "@/containers/home-page/faq";
import { ShopByCategories } from "@/containers/home-page/shop-by-categories";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 md:gap-20 px-5 lg:px-20 pt-8 lg:pt-16 pb-24 max-w-[1440px] w-full mx-auto">
      <CallToAction />
      <BestSellingProducts />
      <AboutUs />
      <ShopByCategories />
      <Benefit />
      <FAQ />
    </main>
  );
}
