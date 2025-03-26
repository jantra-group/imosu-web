import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";

export function ProductCard() {
      const id = 1;
      
      return (
            <Link href={`/product/${id}`} passHref>
                  <div className="flex flex-col shadow-lg">
                        <div className="w-full h-full">
                              <Image src="/image/home/card/product-dummy.svg" alt="product-dummy" width={227} height={227} className="w-full h-full" />
                        </div>

                        <div className="flex flex-col px-3 md:px-5 pt-3 pb-10 gap-1">
                              <h6 className="font-bold text-sm md:text-base text-black">Bushing Arm</h6>
                              <p className="text-xs text-black max-w-[200px]"> Nissan New Xtrail / New Serena / Juke / Livina / Evalia / Latio</p>
                              <p className="font-extrabold text-sm text-primary-500">Rp10.000</p>

                              <div className="flex flex-row gap-3 mt-2">
                                    <button className="rounded-lg bg-primary-500 p-2">
                                          <AiOutlineShoppingCart size={16} color="#FFFFFF" />
                                    </button>
                                    <button className="rounded-lg bg-transparent border border-black py-1 text-xs text-black px-5 hover:border-primary-300 hover:bg-primary-300 hover:text-white">
                                          Details
                                    </button>
                              </div>
                        </div>
                  </div>
            </Link>
      )
}