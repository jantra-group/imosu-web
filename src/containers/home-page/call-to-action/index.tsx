import { SearchButton } from "@/components/Button/SearchButton";
import { HeroDropdown } from "@/components/Dropdown/HeroDropdown";
import { InputProduct } from "@/components/Input/InputProduct";
import Image from "next/image";

export function CallToAction() {
      return (
            <div className="w-full pt-4 md:pt-8">
                  <div className="rounded-xl md:rounded-3xl bg-gradient-to-br from-[#D70A0A] to-[#9C0808] px-5 md:px-8 py-10 md:py-16 flex flex-row relative z-10 h-[600px] lg:h-fit overflow-hidden lg:overflow-visible">
                        <div className="flex flex-col gap-2 max-w-[650px]">
                              <h1 className="text-[32px] lg:text-[42px] text-white font-extrabold">
                                    Spare Part Berkualitas untuk Performa Maksimal
                              </h1>
                              <p className="text-sm lg:text-lg text-white">
                                    Pastikan kendaraan selalu dalam kondisi prima dengan spare part berkualitas terbaik. iMosu menjamin produk yang tahan lama, presisi, dan siap meningkatkan performa setiap perjalanan Anda.
                              </p>
                        </div>
                        <div className="w-full h-full lg:w-auto lg:h-auto absolute left-1/2 bottom-0 top-[250px] transform -translate-x-1/2 lg:left-auto lg:right-0 lg:top-[-35px] lg:translate-x-0 px-5 lg:px-0">
                              <Image src="/image/home/bushing-arm.svg" alt="bushing-arm" width={400} height={439} className="w-full h-full"/>
                        </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-5 items-center justify-center -mt-6 relative z-30 px-5 md:px-0">
                        <InputProduct />
                        <HeroDropdown placeholder="Merk" options={["Honda", "Toyota", "BMW"]} />
                        <HeroDropdown placeholder="Tipe Mobil" options={["ABCD", "ABCD", "ABCD"]} />
                        <SearchButton />
                  </div>
            </div>
      )
}