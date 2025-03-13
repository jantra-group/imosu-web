import Image from "next/image";

interface CategoriesCardProps {
      title: string;
      image: string;
      width: number;
      height: number;
}

const Card: CategoriesCardProps[] = [
      {
            title: 'Bushing Arm', image: '/image/home/bushing-arm-card.svg', width: 167, height: 219
      },
      {
            title: 'Support', image: '/image/home/engine-mounting-card.svg', width: 213, height: 247
      },
      {
            title: 'Stabilizer Bush', image: '/image/home/stabilizer-bush-card.svg', width: 260, height: 188
      }
]

export function ShopByCategories() {
      return (
            <div className="flex flex-col gap-8">
                  <h3 className="text-[28px] md:text-[32px] text-black font-extrabold">Shop By Categories</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Card.map((item) => (
                              <div key={item.title} className="rounded-2xl p-8 relative bg-cover h-[264px] overflow-hidden cursor-pointer"
                                    style={{ backgroundImage: "url('/image/home/bg-card-shop.svg')" }}
                              >
                                          <p className="text-[28px] md:text-[32px] font-semibold text-white max-w-[140px]">{item.title}</p>
                                          <div className="absolute bottom-0 right-0 overflow-hidden">
                                                <Image src={item.image} alt={item.title} width={item.width} height={item.height} />
                                    </div>
                              </div>

                        ))}
                  </div>
            </div>
      )
}
