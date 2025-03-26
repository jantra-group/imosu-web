import { Breadcrumb } from "@/components/Admin/Breadcrumb/Breadcrumb"
import { AddProductButton } from "@/components/Admin/Button/AddProductButton"
import { Table } from "@/components/Admin/Table/Table"
import { SearchButton } from "@/components/Button/SearchButton"
import { HeroDropdown } from "@/components/Dropdown/HeroDropdown"
import { FaPlus } from "react-icons/fa6"

export default function DashboardCarBrandPage() {
      const breadcrumbItems = [
            { label: 'Dashboard', href: '' },
            { label: 'Merk Mobil', href: '/dashboard/car-brand' }
      ]

      const columns = [
            { key: "no", label: "No" },
            { key: "photo", label: "Foto Produk" },
            { key: "sku", label: "SKU" },
            { key: "productName", label: "Nama Produk" },
            { key: "carType", label: "Tipe Mobil" },
            { key: "price", label: "Harga" },
            { key: "action", label: "Action" },
      ];

      const data = [
            {
                  no: 1,
                  photo: '/image/product-detail/product-dummy.svg',
                  sku: "54570-EN002",
                  productName: "Bushing Arm Depan (Kecil) Suzuki All New Ertiga 18-ON",
                  carType: "Xenia",
                  price: "Rp 200.000",
            },
            {
                  no: 2,
                  photo: '/image/product-detail/product-dummy.svg',
                  sku: "54570-EN002",
                  productName: "Bushing Arm Depan (Kecil) Suzuki All New Ertiga 18-ON",
                  carType: "Xenia",
                  price: "Rp 200.000",
            },
            {
                  no: 3,
                  photo: '/image/product-detail/product-dummy.svg',
                  sku: "54570-EN002",
                  productName: "Bushing Arm Depan (Kecil) Suzuki All New Ertiga 18-ON",
                  carType: "Xenia",
                  price: "Rp 200.000",
            },
            {
                  no: 4,
                  photo: '/image/product-detail/product-dummy.svg',
                  sku: "54570-EN002",
                  productName: "Bushing Arm Depan (Kecil) Suzuki All New Ertiga 18-ON",
                  carType: "Xenia",
                  price: "Rp 200.000",
            },
      ];

      return (
            <main className="p-5 flex flex-col gap-3 w-full max-w-[1440px]">
                  <div className="flex justify-between items-center">
                        <div className="flex flex-col gap-3">
                              <h1 className="text-[32px] font-bold text-black">Merk Mobil</h1>
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

                  <Table columns={columns} data={data} />
            </main>
      )
}