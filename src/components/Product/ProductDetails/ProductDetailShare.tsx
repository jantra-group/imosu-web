import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineWhatsapp } from "react-icons/md";

type SocmedProductsType = {
      icon: React.ReactNode;
      alt: string;
}

const SocmedProductsItem: SocmedProductsType[] = [
      {icon: <MdOutlineWhatsapp color="#FFFFFF" size={30} />, alt: 'whatsapp'},
      {icon: <FiFacebook color="#FFFFFF" size={30} />, alt: 'facebook'},
      {icon: <FaInstagram color="#FFFFFF" size={30} />, alt: 'instagram'},
]
export function ProductDetailShare() {
      return (
            <div className="inline-flex gap-4 items-center">
                  <p className="text-xs sm:text-sm text-neutral-900">Share</p>
                  {SocmedProductsItem.map((item) => (
                        <div className="bg-primary-300 p-3 rounded-full cursor-pointer" key={item.alt}>
                              {item.icon}
                        </div>
                  ))}
            </div>
      )
}