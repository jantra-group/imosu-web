import { TbEdit } from "react-icons/tb";

export function EditProductButton() {
      return (
            <button className="flex gap-4 text-sm hover:border group hover:border-primary-300 hover:bg-primary-300 hover:text-white text-black bg-transparent items-center rounded-xl border border-black px-5 py-2">
                  <TbEdit size={25} className="group-hover:text-white text-black" />
                  Edit Produk
            </button>
      )
}