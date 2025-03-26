'use client';
import { AddToCartButton } from "@/components/Button/Product-Detail/AddToCartButton";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { ProductDetailShare } from "./ProductDetailShare";

interface ProductDetailInfoItemProps {
      sku: string;
      productName: string;
      carBrandType: string;
      price: number;
      stock: number;
      url: string;
}

const dataDummy: ProductDetailInfoItemProps[] = [
      {
            sku: '54570-EN002',
            productName: 'Bushing Arm Kecil',
            carBrandType: 'Nissan New Xtrail / New Serena / Juke / Livina / Evalia / Latio',
            price: 69900,
            stock: 5,
            url: 'facebook.com'
      }
]

interface ProductDetailInfoProps {
      showCart: boolean;
      addMargin?: boolean;
}

export function ProductDetailInfo({showCart = true, addMargin = false}: ProductDetailInfoProps) {
      const [quantity, setQuantity] = useState(1);

      const handleDecrement = () => {
            if (quantity > 1) setQuantity(quantity - 1);
      };

      const handleIncrement = () => {
            setQuantity(quantity + 1);
      };

      const product = dataDummy[0];

      return (
            <div className="flex flex-col gap-10 justify-between">
                  <div className={`flex flex-col gap-2 ${addMargin ? 'lg:mt-14': ''}`}>
                        {/* Nomor SKU */}
                        <div className="bg-primary-500 px-4 py-1 text-base md:text-lg font-semibold text-white w-fit">
                              {product.sku}
                        </div>

                        {/* Nama Product */}
                        <h1 className="text-3xl md:text-4xl font-extrabold text-black mt-3">
                              {product.productName}
                        </h1>

                        {/* Tipe Mobil */}
                        <p className="text-sm md:text-base text-black">{product.carBrandType}</p>

                        {/* Price */}
                        <h3 className="text-primary-500 font-bold text-2xl md:text-[28px]">Rp {product.price}</h3>

                        {/* Stock */}
                        <p className="text-xs md:text-sm text-daimder-500">{product.stock} in stock</p>
                         <div className="inline-flex gap-3">
                                    {/* Button Quantity */}
                                    <div className="flex flex-row gap-5 px-3 py-2 bg-transparent border border-black rounded-xl items-center w-fit">
                                          <FiMinus size={20} color="#000000" onClick={handleDecrement} className="cursor-pointer" />
                                          {quantity}
                                          <FiPlus size={20} color="#000000" onClick={handleIncrement} className="cursor-pointer" />
                                    </div>

                                    {/* Add to cart button */}
                                    <AddToCartButton />
                              </div>

                  </div>
                  {/* Share Product */}
                  <ProductDetailShare />
            </div>

      )
}