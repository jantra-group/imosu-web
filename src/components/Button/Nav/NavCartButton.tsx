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
                  <button onClick={handleClick}>
                        <AiOutlineShoppingCart size={28} color="#000000" />
                  </button>

                  {isPopUpVisible && (
                        <PopupCart onClose={() => setIsPopUpVisible(false)} />
                  )}
            </>
      )
}