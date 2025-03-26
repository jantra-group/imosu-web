import { FaArrowLeft, FaX } from "react-icons/fa6";
import { CartItemProps } from "../Popup/PopupCart";
import Image from "next/image";
import { FiMinus, FiPlus } from "react-icons/fi";
import { CheckoutButton } from "../Button/CheckoutButton";

interface CartMobileProps {
      products: CartItemProps["product"][];
      updateQuantity: (id: number, change: number) => void;
      removeItem: (id: number) => void;
      onClose: () => void;
}

function CartItem({ product, updateQuantity, removeItem }: CartItemProps) {
      return (
            <div className="flex flex-row items-center justify-between bg-white shadow-custom-dark rounded-xl gap-3 p-4">
                  <Image src={product.image} alt={product.name} width={120} height={120} className="rounded-lg" />
                  <div className="flex flex-col gap-1">
                        <div className="flex justify-end cursor-pointer" onClick={() => removeItem(product.id)}>
                              <FaX size={12} color="#000000" />
                        </div>
                        {/* Nomor SKU */}
                        <div className="bg-primary-500 rounded-2xl px-2 py-1 text-[8px] font-semibold text-white w-fit">
                              {product.sku}
                        </div>

                        {/* Nama Produk */}
                        <h5 className="font-semibold text-sm text-black">{product.name}</h5>

                        {/* Tipe mobil */}
                        <p className="text-[8px] text-[#7E7676] font-semibold">{product.carType}</p>

                        {/* Harga */}
                        <p className="text-sm font-semibold text-black mt-1">Rp {product.price.toLocaleString()}</p>

                        {/* quantity */}
                        <div className="inline-flex gap-4 justify-end text-sm">
                              <div
                                    className="bg-[#9F9F9F] p-1 rounded-full cursor-pointer"
                                    onClick={() => updateQuantity(product.id, -1)}
                              >
                                    <FiMinus size={12} color="#FFFFFF" />
                              </div>
                              {product.quantity}
                              <div
                                    className="bg-primary-500 p-1 rounded-full cursor-pointer"
                                    onClick={() => updateQuantity(product.id, 1)}
                              >
                                    <FiPlus size={12} color="#FFFFFF" />
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export function CartMobile({ products, updateQuantity, removeItem, onClose }: CartMobileProps) {
      return (
            <div className="flex flex-col">
                  {/* Title */}
                  <div className="inline-flex items-center gap-3 px-5 py-3 bg-white shadow-custom-dark">
                        <FaArrowLeft size={20} color="#00000" className="cursor-pointer" onClick={onClose} />
                        <h5 className="text-xl font-bold text-black">Cart</h5>
                  </div>

                  <div className="flex flex-col gap-5 p-5 mb-40 overflow-y-auto overflow-scroll" style={{ height: 'calc(100vh - 180px)' }}>
                        {products.length > 0 ? (
                              products.map((product) => (
                                    <CartItem key={product.id} product={product} updateQuantity={updateQuantity} removeItem={removeItem} />
                              ))
                        ) : (
                              <p className="text-center text-lg font-semibold">Your cart is empty.</p>
                        )}
                  </div>

                  {/* Checkout Summary */}
                  <div className="z-50 shadow-md fixed bottom-0 bg-neutral-100 w-full">
                        <div className="flex flex-col gap-3">
                              <div className="inline-flex justify-between bg-primary-500 bg-opacity-80 rounded-t-xl px-5 py-3">
                                    <p className="text-xs text-white font-bold">Kode Promo</p>
                                    <div className="flex gap-3">
                                          <input placeholder="Kode Promo/Kupon" className="text-xs font-white bg-transparent focus:outline-none placeholder:text-white" />
                                          <button className="text-xs text-white font-bold">
                                                klaim
                                          </button>
                                    </div>
                              </div>
                              {/* Subtotal */}
                              <div className="inline-flex justify-between px-5">
                                    <p className="text-xs text-black">Subtotal</p>
                                    <p className="text-xs text-black font-bold">Rp 500.000</p>
                              </div>

                              {/* Discount */}
                              <div className="inline-flex justify-between px-5">
                                    <p className="text-xs text-black">Discount</p>
                                    <p className="text-xs text-black font-bold">-Rp10.000</p>
                              </div>

                              {/* Total dan Checkout */}
                              <div className="inline-flex justify-between px-5 items-center">
                                    <div className="flex flex-col">
                                          <p className="text-xs font-semibold text-black">Total</p>
                                          <p className="text-base text-primary-500 font-bold">Rp 490.000</p>
                                    </div>
                                    <CheckoutButton />
                              </div>
                        </div>
                  </div>
            </div>
      );
}
