'use client'

import { getProductsBushingArmFromSupabase } from "@/actions/supabase/getProductBushingArm";
import { Breadcrumb } from "@/components/Admin/Breadcrumb/Breadcrumb";
import { AddProductButton } from "@/components/Admin/Button/AddProductButton";
import { Table } from "@/components/Admin/Table/Table";
import { SearchButton } from "@/components/Button/SearchButton";
import { HeroDropdown } from "@/components/Dropdown/HeroDropdown";
import { LoadingSkeleton } from "@/components/Skeleton/Loading";
import { useEffect, useState } from "react";

export default function BushingArmProducts() {
      const breadcrumbItems = [
            { label: 'Dashboard', href: '' },
            { label: 'Produk', href: '/dashboard/products' },
            { label: 'Bushing Arm', href: '/dashboard/products/bushing-arm' }
      ];

      const columns = [
            { key: "no", label: "No" },
            { key: "photo", label: "Foto Produk" },
            { key: "sku", label: "SKU" },
            { key: "productName", label: "Nama Produk" },
            { key: "carType", label: "Tipe Mobil" },
            { key: "price", label: "Harga" },
            { key: "action", label: "Action" },
      ];

      const [products, setProducts] = useState<any[]>([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState<string | null>(null);

      useEffect(() => {
            async function fetchProducts() {
                  setLoading(true);
                  try {
                        const data = await getProductsBushingArmFromSupabase();
                        if (data && !data.error) {
                              // Format data agar sesuai dengan format tabel
                              const formattedProducts = data.map((product: any, index: number) => ({
                                    no: index + 1,
                                    photo: Array.isArray(product.image_product) && product.image_product.length > 0
                                          ? product.image_product[0]
                                          : '/image/product-detail/product-dummy.svg',
                                    sku: product.sku,
                                    productName: product.name_product,
                                    carType: product.car_type || "Tidak Ada Tipe Mobil",
                                    price: `Rp ${product.price_product.toLocaleString()}`,
                                    action: "Action",
                              }));
                              setProducts(formattedProducts);
                        } else {
                              setError(data?.error || "Gagal mengambil produk.");
                        }
                  } catch (err) {
                        setError("Terjadi kesalahan saat mengambil produk.");
                  } finally {
                        setLoading(false);
                  }
            }

            fetchProducts();
      }, []);

      if (loading) {
            return (
                  <LoadingSkeleton />
            )
      }

      if (error) {
            return <p>Error: {error}</p>;
      }

      return (
            <main className="p-5 flex flex-col gap-3 w-full max-w-[1440px] overflow-scroll scrollbar-hide">
                  <div className="flex justify-between items-center">
                        <div className="flex flex-col gap-3">
                              <h1 className="text-[32px] font-bold text-black">Bushing Arm</h1>
                              <Breadcrumb items={breadcrumbItems} />
                        </div>
                        <AddProductButton />
                  </div>

                  {/* search dropdown */}
                  <div className="flex gap-3 mb-5">
                        <HeroDropdown placeholder="Merk" options={["Honda", "Toyota", "BMW"]} stylingCustom="border border-neutral-400 shadow-none bg-transparent rounded-xl" />
                        <HeroDropdown placeholder="Merk" options={["Honda", "Toyota", "BMW"]} stylingCustom="border border-neutral-400 shadow-none bg-transparent rounded-xl" />
                        <SearchButton />
                  </div>

                  <Table columns={columns} data={products} />
            </main>
      );
}