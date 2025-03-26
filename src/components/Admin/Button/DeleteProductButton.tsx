'use client';
import { useState } from "react";
import { LuTrash2 } from "react-icons/lu";
import { DeleteProductPopup } from "../Popup/DeleteProductPopup";

export function DeleteProductButton() {
      const [showPopup, setShowPopup] = useState(false);

      const togglePopup = () => {
            setShowPopup(!showPopup)
      };

      return (
            <>
                  <button className="bg-primary-500 rounded-xl py-2 px-5 hover:bg-primary-700" onClick={togglePopup}>
                        <LuTrash2 size={25} color="#FFFFFF" />
                  </button>

                  {showPopup && (
                        <DeleteProductPopup onClose={() => setShowPopup(false)} />
                  )}
            </>
      )
}