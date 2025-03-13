import Image from "next/image";
import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
      return (
            <footer className="max-w-[1440px] mx-auto w-full border-t border-t-black">
                  <div className="px-5 lg:px-20 flex flex-col py-8">
                        <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between">

                              {/* footer left */}
                              <div className="flex flex-col gap-2">
                                    <Image src="/image/imosu-logo-v2.svg" alt="imosu-logo" width={295} height={95} className="w-[180px] md:w-[295px]"/>
                                    <p className="text-base md:text-lg font-bold text-black mt-3">Penyedia Suku Cadang Mobil Terpercaya</p>
                                    <div className="flex gap-2">
                                          <IoLocationOutline color="#CC0000" size={25} />
                                          <p className="text-sm text-black max-w-[300px]">
                                                Jl. Raya Cilegon, Serdang, Kec. Kramatwatu, Kab. Serang, Banten 42161
                                          </p>
                                    </div>
                                    <Link href="/" className="rounded-lg bg-[#D2EFD3] flex items-center justify-center py-2 px-10 w-fit" passHref>
                                          <Image src="/image/home/tokopedia.svg" alt="tokopedia" width={100} height={24} />
                                    </Link>
                              </div>

                              {/* footer right */}
                              <div className="flex flex-col lg:flex-row gap-5 lg:gap-20">
                                    <div className="flex flex-col gap-3">
                                          <h5 className="font-bold text-primary-500 text-lg lg:text-xl">Menu</h5>
                                          <ul className="space-y-2 text-base lg:text-lg text-black">
                                                <li><Link href="/">Home</Link></li>
                                                <li><Link href="/">Shop</Link></li>
                                                <li><Link href="/">About Us</Link></li>
                                          </ul>
                                    </div>

                                    <div className="flex flex-col gap-3">
                                          <h5 className="font-bold text-primary-500 text-lg lg:text-xl">Our Brand</h5>
                                          <ul className="space-y-2 text-base lg:text-lg text-black">
                                                <li><Link href="/">Otosaka</Link></li>
                                                <li><Link href="/">Daimder</Link></li>
                                                <li><Link href="/">Decatra</Link></li>
                                          </ul>
                                    </div>

                                    <div className="flex flex-col gap-3">
                                          <h5 className="font-bold text-primary-500 text-lg lg:text-xl">Contact</h5>
                                          <ul className="space-y-2 text-base lg:text-lg text-black">
                                                <li>
                                                      <Link href="/" className="flex gap-2">
                                                            <FaInstagram size={30} color="#CC0000" className="w-[24px] lg:w-[30px]"/>
                                                            <span>imosu.official</span>
                                                      </Link>
                                                </li>
                                                <li>
                                                      <Link href="/" className="flex gap-2">
                                                            <FaWhatsapp size={30} color="#CC0000" className="w-[24px] lg:w-[30px]"/>
                                                            <span>0811-1168-664</span>
                                                      </Link>
                                                </li>
                                          </ul>
                                    </div>
                              </div>

                        </div>
                        
                        <p className="mt-5 text-center text-sm text-black">© 2025 PT Imosu Autoparts Indonesia. All Rights Reserved.</p>
                        <hr className="border-[0.5px] border-primary-300 mt-2"/>
                  </div>
            </footer>
      )
}