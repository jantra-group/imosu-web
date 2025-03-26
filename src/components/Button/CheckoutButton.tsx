import { MdOutlineShoppingCartCheckout } from "react-icons/md";

export function CheckoutButton() {
      return (
            <button className="bg-primary-500 px-10 text-xs font-bold md:px-4 py-2 rounded-2xl flex items-center justify-center text-white">
                  <MdOutlineShoppingCartCheckout size={28} className="hidden md:block" />

                  <span className="block md:hidden">Checkout</span>
            </button>
      );
}
