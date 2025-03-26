import Link from "next/link";
import { FaPlus } from "react-icons/fa6";

export function AddProductButton() {
      return (
            <Link href="/dashboard/add-product">
                  <button className="bg-primary-500 hover:bg-primary-700 items-center text-white text-base flex gap-4 px-5 py-2 rounded-lg">
                        <FaPlus size={20} className="#FFFFFF" />
                        Tambah Produk
                  </button>
            </Link>
      )
}