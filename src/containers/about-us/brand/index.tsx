import Image from "next/image";

const brandsData = [
      {
            name: "Otosaka",
            logo: "/image/aboutus/otosaka-logo.svg",
            images: ["/image/aboutus/otosaka/pict-1.jpg", "/image/aboutus/otosaka/pict-2.jpg"],
            description:
                  "Lorem ipsum dolor sit amet consectetur. Libero dignissim urna amet aenean. Vulputate hac eget morbi ac sed ac magna aenean. Purus cursus mi vel lobortis eu donec erat ullamcorper. Facilisis in elit id egestas mauris enim.",
            reverse: false,
      },
      {
            name: "Daimder",
            logo: "/image/aboutus/daimder-logo.svg",
            images: ["/image/aboutus/daimder/pict-1.jpg", "/image/aboutus/daimder/pict-2.jpg"],
            description:
                  "Lorem ipsum dolor sit amet consectetur. Libero dignissim urna amet aenean. Vulputate hac eget morbi ac sed ac magna aenean. Purus cursus mi vel lobortis eu donec erat ullamcorper. Facilisis in elit id egestas mauris enim.",
            reverse: true,
      },
      {
            name: "Decatra",
            logo: "/image/aboutus/decatra-logo.svg",
            images: ["/image/aboutus/decatra/pict-1.jpg", "/image/aboutus/decatra/pict-2.jpg"],
            description:
                  "Lorem ipsum dolor sit amet consectetur. Libero dignissim urna amet aenean. Vulputate hac eget morbi ac sed ac magna aenean. Purus cursus mi vel lobortis eu donec erat ullamcorper. Facilisis in elit id egestas mauris enim.",
            reverse: false,
      },
];

export function BrandSection() {
      return (
            <div className="flex flex-col gap-10 md:gap-20">
                  <div className="flex flex-col lg:flex-row justify-between">
                        <h4 className="font-extrabold text-base md:text-xl text-black max-w-[470px]">
                              Lebih dari <span className="text-primary-500">3000+</span> sparepart telah tersedia di PT. Imosu Indonesia, ada 3 brand yang dibagi berdasarkan tipe mobil Asia, Eropa dan Universal.
                        </h4>
                        <div className="flex flex-wrap items-center justify-center flex-row gap-8 md:gap-16">
                              {brandsData.map((brand, index) => (
                                    <Image key={index} src={brand.logo} alt={brand.name} width={144} height={151} className="w-[100px] md:w-[144px]" />
                              ))}
                        </div>
                  </div>

                  {brandsData.map((brand, index) => (
                        <div key={index} className="flex flex-col gap-16">
                              <div className={`flex flex-col lg:flex-row gap-8 ${brand.reverse ? 'lg:flex-row-reverse' : ''}`}>
                                    <div className="flex flex-row gap-8 overflow-x-auto lg:overflow-clip">
                                          {brand.images.map((image, idx) => (
                                                <Image key={idx} src={image} alt={`${brand.name}-${idx + 1}`} width={270} height={270} className="w-full lg:w-[270px] rounded-xl" />
                                          ))}
                                    </div>
                                    <div className="flex flex-col bg-[#DCDCDC] rounded-xl justify-center p-8 lg:px-12 lg:py-3">
                                          <p className="text-2xl md:text-[28px] font-bold text-black">{brand.name}</p>
                                          <p className="text-sm md:text-base text-black lg:max-w-[500px]">{brand.description}</p>
                                    </div>
                              </div>
                        </div>
                  ))}
            </div>
      );
}
