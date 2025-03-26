import { CheckoutButton } from "../Button/CheckoutButton";
import { CartItemProps } from "../Popup/PopupCart";
import Image from "next/image";
import { FiMinus, FiPlus } from "react-icons/fi";
import { FaX } from "react-icons/fa6";

interface CartDesktopProps {
      products: CartItemProps["product"][];
      updateQuantity: (id: number, change: number) => void;
      removeItem: (id: number) => void;
}

function CartItem({ product, updateQuantity, removeItem }: CartItemProps) {
      return (
            <div className="flex flex-row gap-3">
                  <div className="flex flex-row gap-5 bg-white rounded-2xl shadow-custom-dark px-10 py-5 justify-between w-full">
                        <div className="flex flex-row gap-4">
                              <Image src={product.image} alt={product.name} width={120} height={120} />
                              <div className="flex flex-col gap-1 justify-center">
                                    <h5 className="font-semibold text-2xl text-black">{product.name}</h5>
                                    <p className="text-xs text-[#7E7676] font-semibold max-w-[230px]">{product.carType}</p>
                                    <div className="bg-primary-500 rounded-2xl px-2 py-1 text-xs font-semibold text-white w-fit">
                                          {product.sku}
                                    </div>
                              </div>
                        </div>
                        <div className="flex flex-col gap-1 justify-center">
                              <p className="text-xl text-black">Rp {product.price.toLocaleString()}</p>
                              <div className="inline-flex gap-2 justify-between">
                                    <div
                                          className="bg-[#9F9F9F] p-1 rounded-full cursor-pointer"
                                          onClick={() => updateQuantity(product.id, -1)}
                                    >
                                          <FiMinus size={16} color="#FFFFFF" />
                                    </div>
                                    {product.quantity}
                                    <div
                                          className="bg-primary-500 p-1 rounded-full cursor-pointer"
                                          onClick={() => updateQuantity(product.id, 1)}
                                    >
                                          <FiPlus size={16} color="#FFFFFF" />
                                    </div>
                              </div>
                        </div>
                        <div className="flex items-center justify-center">
                              <h3 className="font-semibold text-2xl text-black">
                                    Rp {(product.price * product.quantity).toLocaleString()}
                              </h3>
                        </div>
                  </div>
                  <div
                        className="rounded-2xl bg-[#ECF0F1] shadow-custom-dark flex justify-center items-center px-5 cursor-pointer"
                        onClick={() => removeItem(product.id)}
                  >
                        <FaX size={16} color="#000000" />
                  </div>
            </div>
      );
}

export function CartDesktop({ products, updateQuantity, removeItem }: CartDesktopProps) {
      const subtotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
      const discount = 10000;
      const total = subtotal - discount;

      return (
            <div className="flex flex-col p-10 gap-8">
                  <div className="bg-primary-500 px-5 py-2 flex flex-row gap-5 text-white text-xl rounded-2xl justify-around overflow-y-auto overflow-scroll scroll"
                  >
                        <p>Product</p>
                        <p>Price</p>
                        <p>Subtotal</p>
                  </div>

                  {products.length > 0 ? (
                        products.map((product) => (
                              <CartItem key={product.id} product={product} updateQuantity={updateQuantity} removeItem={removeItem} />
                        ))
                  ) : (
                        <p className="text-center text-lg font-semibold">Your cart is empty.</p>
                  )}

                  <div className="flex flex-row justify-between">
                        {/* Promo Code */}
                        <div className="flex flex-col gap-2">
                              <p className="text-base text-black">Promo Code</p>
                              <div className="inline-flex bg-neutral-300 border border-black px-4 py-2 rounded-2xl">
                                    <input placeholder="Kode Promo/Kupon" className="w-[235px] text-base bg-neutral-300 focus:outline-none" />
                                    <div className="text-base font-bold text-[#4D4D4D]">Klaim</div>
                              </div>
                        </div>

                        {/* Checkout */}
                        <div className="flex flex-row gap-3">
                              <div className="flex flex-col gap-3 w-[350px]">
                                    <div className="flex flex-row justify-between items-center">
                                          <p className="text-lg font-medium text-black">Subtotal</p>
                                          <p className="text-xl font-semibold text-black">Rp {subtotal.toLocaleString()}</p>
                                    </div>
                                    <div className="flex flex-row justify-between items-center">
                                          <p className="text-lg font-medium text-black">Discount</p>
                                          <p className="text-xl font-semibold text-black">-Rp {discount.toLocaleString()}</p>
                                    </div>
                                    <div className="bg-neutral-300 w-full h-[2px]" />
                                    <div className="flex flex-row justify-between items-center">
                                          <p className="text-2xl font-bold text-black">Total</p>
                                          <p className="text-[28px] font-bold text-primary-500">Rp {total.toLocaleString()}</p>
                                    </div>
                              </div>
                              <CheckoutButton />
                        </div>
                  </div>
            </div>
      );
}
