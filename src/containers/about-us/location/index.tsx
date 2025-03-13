import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import React from "react";
import Link from "next/link";

interface ContactInfo {
      href?: string;
      icon: React.ReactNode;
      text: string;
};

const contactDetails: ContactInfo[] = [
      { icon: <IoLocationOutline size={30} color="#CC0000" />, text: "Jl. Raya Cilegon, Serdang, Kec. Kramatwatu, Kab. Serang, Banten 42161" },
      { href: 'https://www.instagram.com/imosu.official/', icon: <FaInstagram size={30} color="#CC0000" />, text: "imosu.official" },
      { href: 'https://wa.me/628111168664', icon: <FaWhatsapp size={30} color="#CC0000" />, text: "0811-1168-664" },
];

export function LocationSection() {
      return (
            <div className="flex flex-col md:flex-row justify-between items-center gap-16">
                  <div className="flex flex-col gap-3">
                        <h3 className="text-[32px] font-extrabold text-primary-500">Our Location</h3>
                        <div className="bg-neutral-200 my-2 h-[1px] w-full" />
                        {contactDetails.map((contact, index) => (
                              contact.href ? (
                                    <Link href={contact.href} key={index} className="flex gap-3 items-center" target="_blank" rel="noopener noreferrer">
                                          {contact.icon}
                                          <p className="text-lg text-black">{contact.text}</p>
                                    </Link>
                              ) : (
                                    <div key={index} className="flex gap-3 items-center">
                                          {contact.icon}
                                          <p className="text-lg text-black">{contact.text}</p>
                                    </div>
                              )
                        ))}
                  </div>
                  <div>
                        <Image src="/image/aboutus/location.svg" alt="location" width={550} height={362} />
                  </div>
            </div>
      );
}
