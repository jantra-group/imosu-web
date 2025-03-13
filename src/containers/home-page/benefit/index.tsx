import Image from "next/image";
import React from "react"

interface BenefitProps {
      icon: React.ReactNode;
      title: string;
      description: string;
}

const BenefitItems: BenefitProps[] = [
      {
            icon: <Image src="/image/home/benefit/guarantee.svg" alt="guarantee" width={50} height={50} className="w-[30px] md:w-[50px]" />,
            title: 'Garansi 3 Bulan',
            description: 'Jaminan rasa tenang untuk setiap pembelian.'
      },
      {
            icon: <Image src="/image/home/benefit/automation.svg" alt="automation" width={50} height={50} className="w-[30px] md:w-[50px]" />,
            title: 'Material Berkualitas',
            description: 'Menggunakan bahan premium yang tangguh dan tahan lama.'
      },
      {
            icon: <Image src="/image/home/benefit/certificate.svg" alt="certificate" width={50} height={50} className="w-[30px] md:w-[50px]" />,
            title: 'Standar Kualitas Tinggi',
            description: 'Dirancang dengan presisi untuk memastikan performa terbaik.'
      },
      {
            icon: <Image src="/image/home/benefit/professional.svg" alt="professional" width={50} height={50} className="w-[30px] md:w-[50px]" />,
            title: 'Dibuat oleh Ahli Profesional',
            description: 'Keahlian yang terbukti menciptakan produk unggulan.'
      },
      {
            icon: <Image src="/image/home/benefit/price.svg" alt="price" width={50} height={50} className="w-[30px] md:w-[50px]" />,
            title: 'Harga Kompetitif',
            description: 'Investasi terbaik untuk performa yang terjamin.'
      },
      {
            icon: <Image src="/image/home/benefit/support.svg" alt="support" width={50} height={50} className="w-[30px] md:w-[50px]" />,
            title: 'Pelayanan Terbaik',
            description: 'Didukung layanan ramah dan profesional sesuai kebutuhan Anda.'
      }
]

export function Benefit() {
      return (
            <div className="flex flex-col gap-4 md:gap-8">
                  <h3 className="text-[28px] md:text-[32px] font-bold text-black text-center">Solusi Tanpa Kompromi</h3>
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                        {BenefitItems.map((item) => (
                              <div key={item.title} className="bg-transparent rounded-xl pt-5 px-5 pb-10 flex flex-col hover:bg-primary-500 group justify-start gap-2">
                                    <div className="flex items-center justify-center w-14 md:w-20 h-14 md:h-20 rounded-lg bg-[#E8E8E8]">
                                          {item.icon}
                                    </div>
                                    <p className="text-base md:text-lg text-black group-hover:text-white font-bold mt-2">{item.title}</p>
                                    <p className="text-xs md:text-sm text-black group-hover:text-white">{item.description}</p>
                              </div>
                        ))}
                  </div>
            </div>
      )
} 