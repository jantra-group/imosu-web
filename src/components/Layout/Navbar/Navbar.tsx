'use client';
import { useState } from "react";
import { NavCartButton } from "@/components/Button/Nav/NavCartButton";
import Image from "next/image";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

interface NavItem {
      label: string;
      href: string;
}

export function Navbar() {
      const [isOpen, setIsOpen] = useState(false);

      const navItems: NavItem[] = [
            { label: "Home", href: "/" },
            { label: "Shop", href: "/shop" },
            { label: "About Us", href: "/aboutus" },
      ];

      const toggleMenu = () => {
            setIsOpen(!isOpen);
      };

      return (
            <nav className="px-5 lg:px-20 py-5 max-w-[1440px] w-full mx-auto shadow-custom-dark">
                  <div className="flex justify-between items-center">
                        {/* Logo */}
                        <Link href="/" passHref>
                              <Image src="/image/imosu.svg" alt="imosu-logo" width={146} height={45} />
                        </Link>

                        {/* Mobile Menu & Cart Button */}
                        <div className="flex items-center lg:hidden gap-3">
                              <NavCartButton />
                              <button onClick={toggleMenu}>
                                    {isOpen ? <IoClose size={30} color="#000000" /> : <IoMenu size={30} color="#000000" />}
                              </button>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex flex-row gap-10 items-center">
                              {navItems.map((item) => (
                                    <Link
                                          className="text-lg font-medium text-black hover:text-primary-500 transition-colors"
                                          href={item.href}
                                          key={item.label}
                                    >
                                          {item.label}
                                    </Link>
                              ))}
                              {/* Desktop Cart Button */}
                              <NavCartButton />
                        </div>
                  </div>

                  {/* Mobile Menu (Dropdown) dengan Animasi */}
                  <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden lg:hidden"
                  >
                        <div className="flex flex-col gap-5 mt-5 border-t border-gray-300 pt-5">
                              {navItems.map((item) => (
                                    <Link
                                          className="text-lg font-medium text-black hover:text-primary-500 transition-colors"
                                          href={item.href}
                                          key={item.label}
                                    >
                                          {item.label}
                                    </Link>
                              ))}
                        </div>
                  </motion.div>
            </nav>
      );
}
