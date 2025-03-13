import { BrandSection } from "@/containers/about-us/brand";
import { CoverageSection } from "@/containers/about-us/coverage";
import { InstagramSection } from "@/containers/about-us/instagram";
import { LocationSection } from "@/containers/about-us/location";
import { VisiMisiSection } from "@/containers/about-us/visi-misi";
import Image from "next/image";

export default function AboutUsPage() {
      return (
            <main>
                  <Image src="/image/aboutus/background.svg" alt="background-aboutus" width={1200} height={272} className="w-full h-[272px] object-cover" />
                  <section className="flex flex-col w-full max-w-[1440px] mx-auto px-20 py-16 gap-20">
                        <BrandSection />
                        <VisiMisiSection />
                        <CoverageSection />
                        <LocationSection />
                        <InstagramSection />
                  </section>
            </main>
      )
}