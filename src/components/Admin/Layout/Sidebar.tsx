"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { GiFlatTire } from "react-icons/gi";
import { FaCarAlt } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import { LogoutPopup } from "../Popup/LogoutPopup";
import { BiCategoryAlt } from "react-icons/bi";

interface SidebarItemProps {
      icon: React.ReactNode;
      label: string;
      href?: string;
      onClick?: () => void;
      matchPaths?: string[];
}

export function SidebarAdmin() {
      const [showPopup, setShowPopup] = useState(false);

      const togglePopup = () => {
            setShowPopup(!showPopup);
      };

      const pathname = usePathname();

      const sidebarItems: SidebarItemProps[] = [
            { icon: <FaHome size={25} />, label: "Dashboard", href: "/dashboard" },
            { icon: <GiFlatTire size={25} />, label: "Products", href: "/dashboard/products", matchPaths: ["/dashboard/products/"] },
            { icon: <BiCategoryAlt size={25} />, label: "Kategori", href: "/dashboard/category", matchPaths: ["/dashboard/category/"] },
            { icon: <FaCarAlt size={25} />, label: "Car Brand", href: "/dashboard/car-brand" },
            {
                  icon: <HiOutlineLogout size={25} />,
                  label: "Logout",
                  onClick: togglePopup
            }
      ];

      return (
            <aside className="h-full w-[260px] bg-white shadow-custom-neutral">
                  <div className="flex flex-col px-5 py-8 gap-3 items-center">
                        <Link href="/" passHref>
                              <Image src="/image/imosu.svg" alt="imosu-logo" width={193} height={57} />
                        </Link>
                        <hr className="border-dashed border border-neutral-500 w-full" />
                        <div className="flex flex-col gap-4 py-2 w-full">
                              {sidebarItems.map((item) => {
                                    const isActive = pathname === item.href ||
                                          (item.matchPaths && item.matchPaths.some((path) => pathname.startsWith(path)));

                                    return item.href ? (
                                          <Link
                                                key={item.label}
                                                href={item.href}
                                                className={`flex px-5 gap-5 py-2.5 items-center text-base rounded-xl ${isActive ? "bg-primary-500 text-white" : "text-black"}`}
                                          >
                                                <span className={isActive ? "text-white" : "text-black"}>{item.icon}</span>
                                                <span>{item.label}</span>
                                          </Link>
                                    ) : (
                                          <button
                                                key={item.label}
                                                onClick={item.onClick}
                                                className="flex px-5 gap-5 py-2.5 items-center text-base rounded-xl cursor-pointer text-black"
                                          >
                                                <span>{item.icon}</span>
                                                <span>{item.label}</span>
                                          </button>
                                    );
                              })}
                        </div>

                        {showPopup && (
                              <LogoutPopup onClose={() => setShowPopup(false)} />
                        )}
                  </div>
            </aside>
      );
}
