import Image from "next/image";

export function AboutUs() {
      return (
            <div className="flex flex-col lg:flex-row gap-10">
                  <div className="w-full lg:w-[491px]">
                        <Image src="/image/home/about.svg" alt="about-us" width={491} height={393} className="w-full h-full" />
                  </div>
                  <div className="flex flex-col flex-1 gap-2 justify-center">
                        <h2 className="text-2xl md:text-[28px] font-extrabold text-black">Bushing Polyurethane Terbaik di Indonesia dengan <span className="text-primary-500">Garansi Seumur Hidup</span></h2>
                        <p className="text-sm md:text-base text-black">PT IMOSU AUTO PARTS INDONESIA didirikan pada 2020 dan hadir sebagai solusi suspensi untuk pencinta otomotif Tanah Air. Dengan bahan poliuretan berkualitas industri, bushing
                              kami 100% diproduksi di Indonesia dan dilengkapi garansi seumur hidup. Salah satu produk unggulan, Otosaka,
                              dirancang khusus untuk menghadapi kerasnya jalanan Indonesia, baik di jalan raya maupun off-road.
                              Kami berkomitmen menghadirkan performa terbaik untuk kenyamanan dan keamanan berkendara Anda.
                        </p>
                        <button className="bg-primary-600 border border-primary-600 hover:border-primary-600 hover:bg-transparent hover:text-primary-600 py-2 px-10 mt-5 w-fit rounded-xl text-white text-lg md:text-base font-medium">More Info</button>
                  </div>
            </div>
      )
}