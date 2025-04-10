"use client";
import { useState, useEffect } from "react";
import { CartMobile } from "../Cart/CartMobile";
import { CartDesktop } from "../Cart/CartDesktop";
import { FaX } from "react-icons/fa6";

interface sampleProductProps {
      id: number;
      name: string;
      carType: string;
      sku: string;
      price: number;
      quantity: number;
      image: string;
}

export interface CartItemProps {
      product: sampleProductProps;
      updateQuantity: (id: number, change: number) => void;
      removeItem: (id: number) => void;

}

interface PopupCartProps {
      onClose: () => void;
}

const sampleProducts: sampleProductProps[] = [
      {
            id: 1,
            name: "Bushing Arm Besar",
            carType: "Nissan New Xtrail / New Serena / Juke / Livina / Evalia / Latio",
            sku: "54570-EN002",
            price: 250000,
            quantity: 1,
            image: "/image/product-detail/product-dummy.svg",
      },
      {
            id: 2,
            name: "Bushing Arm Besar",
            carType: "Nissan New Xtrail / New Serena / Juke / Livina / Evalia / Latio",
            sku: "54570-EN002",
            price: 250000,
            quantity: 1,
            image: "/image/product-detail/product-dummy.svg",
      },
      {
            id: 3,
            name: "Bushing Arm Besar",
            carType: "Nissan New Xtrail / New Serena / Juke / Livina / Evalia / Latio",
            sku: "54570-EN002",
            price: 250000,
            quantity: 1,
            image: "/image/product-detail/product-dummy.svg",
      },
];


export function PopupCart({ onClose }: PopupCartProps) {
      const [isOpen, setIsOpen] = useState(true);
      const [products, setProducts] = useState(sampleProducts);
      const [isMobile, setIsMobile] = useState(false);

      useEffect(() => {
            const handleResize = () => {
                  setIsMobile(window.innerWidth < 1024);
            };

            handleResize();
            window.addEventListener("resize", handleResize);

            return () => {
                  window.removeEventListener("resize", handleResize);
            };
      }, []);

      const updateQuantity = (id: number, change: number) => {
            setProducts((prev) =>
                  prev.map((product) =>
                        product.id === id ? { ...product, quantity: Math.max(1, product.quantity + change) } : product
                  )
            );
      };

      const removeItem = (id: number) => {
            setProducts((prev) => prev.filter((product) => product.id !== id));
      };

      return (
            isOpen && (
                  <div
                        className={`fixed inset-0 ${isMobile ? "bg-white" : "bg-black bg-opacity-50 px-20 flex items-center justify-center"} z-50`}
                        onClick={() => setIsOpen(false)}
                  >
                        <div className={`${isMobile ?'flex w-full gap-2': ''}`}>
                              <div
                                    className={`bg-white rounded-xl w-full max-w-[1440px] ${isMobile ? "h-full" : "max-h-[450px] overflow-y-auto"}`}
                                    onClick={(e) => e.stopPropagation()}
                              >
                                    {isMobile ? (
                                          <CartMobile products={products} updateQuantity={updateQuantity} removeItem={removeItem} onClose={onClose} />
                                    ) : (
                                          <CartDesktop products={products} updateQuantity={updateQuantity} removeItem={removeItem} />
                                    )}
                              </div>
                                    <FaX color="#FFFFFF" onClick={onClose} className="w-7 h-7 cursor-pointer" />
                        </div>
                  </div>
            )
      );
}
