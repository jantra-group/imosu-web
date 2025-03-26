import { Breadcrumb } from "@/components/Admin/Breadcrumb/Breadcrumb"
import Image from "next/image"
import Link from "next/link"

export default function DashboardProductsPage() {
      const breadcrumbItems = [
            { label: 'Dashboard', href: '' },
            { label: 'Produk', href: '/dashboard/products' }
      ]


      const Card = [
            {
                  title: 'Bushing Arm', image: '/image/home/bushing-arm-card.svg', href: '/dashboard/products/bushing-arm', width: 140, height: 190
            },
            {
                  title: 'Support', image: '/image/home/engine-mounting-card.svg', href: '/dashboard/products/support',width: 160, height: 200
            },
            {
                  title: 'Stabilizer Bush', image: '/image/home/stabilizer-bush-card.svg', href: '/dashboard/products/stabilizer-bush', width: 200, height: 148
            }
      ]

      return (
            <main className="p-5 flex flex-col gap-3 max-w-[1440px] w-full">
                  <h1 className="text-[32px] font-bold text-black">Produk</h1>
                  <Breadcrumb items={breadcrumbItems} />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {Card.map((item) => (
                              <Link href={item.href} key={item.title} className="rounded-2xl p-8 relative bg-cover h-[200px] overflow-hidden cursor-pointer"
                                    style={{ backgroundImage: "url('/image/home/bg-card-shop.svg')" }}
                              >
                                    <p className="text-2xl font-semibold text-white max-w-[140px]">{item.title}</p>
                                    <div className="absolute bottom-0 right-0 overflow-hidden">
                                          <Image src={item.image} alt={item.title} width={item.width} height={item.height} />
                                    </div>
                              </Link>

                        ))}
                  </div>
            </main>
      )
}