import { Breadcrumb } from "@/components/Admin/Breadcrumb/Breadcrumb"
import { DeleteProductButton } from "@/components/Admin/Button/DeleteProductButton";
import { EditProductButton } from "@/components/Admin/Button/EditProductButton";
import { ProductDetailDescription } from "@/components/Product/ProductDetails/ProductDetailDescription"
import { ProductDetailImage } from "@/components/Product/ProductDetails/ProductDetailImage"
import { ProductDetailInfo } from "@/components/Product/ProductDetails/ProductDetailInfo"
import { FaArrowLeft } from "react-icons/fa6";

export default function DetailProductPage() {
      const breadcrumbItems = [
            { label: 'Produk', href: '/dashboard/products' },
            { label: 'Bushing Arm', href: '/dashboard/products/bushing-arm' },
            { label: 'Nama Produk (Ambil dari DB)', href: '/dashboard/products/bushing-arm/${id}' },
      ]

      return (
            <main className="p-5 flex flex-col gap-3 w-full max-w-[1440px] overflow-y-auto">
                  <div className="flex gap-4">
                        <FaArrowLeft size={25} color="#000000" className="mt-3" />
                        <div className="flex flex-col gap-3">
                              <h1 className="text-[32px] font-bold text-black">Detail Produk</h1>
                              <Breadcrumb items={breadcrumbItems} />
                        </div>
                  </div>
                  <div className="flex flex-col gap-10 mt-5">
                        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                              <ProductDetailImage />
                              <div className="flex flex-col gap-2 w-full">
                                    <div className="flex gap-5 justify-end">
                                          <EditProductButton />
                                          <DeleteProductButton />
                                    </div>
                                    <ProductDetailInfo showCart={false} />
                              </div>
                        </div>
                        <ProductDetailDescription />
                  </div>
            </main>
      )
}