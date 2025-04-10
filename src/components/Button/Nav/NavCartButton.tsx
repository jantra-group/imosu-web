"use client";
import { PopupCart } from "@/components/Popup/PopupCart";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

export function NavCartButton() {
      const [isPopUpVisible, setIsPopUpVisible] = useState(false);

      const handleClick = () => {
            setIsPopUpVisible(!isPopUpVisible);
      }
      return (
            <>
                  <button onClick={handleClick} className="relative px-1 py-1">
                        <AiOutlineShoppingCart size={28} color="#000000" />
                        <div className="absolute flex items-center justify-center text-[10px] text-white top-0 right-0 rounded-full w-3.5 h-3.5 bg-primary-500">
                              1
                        </div>
                  </button>
                  {isPopUpVisible && (
                        <PopupCart onClose={() => setIsPopUpVisible(false)} />
                  )}
            </>
      )
}