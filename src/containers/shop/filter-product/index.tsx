'use client';
import { useState } from "react";

export function FilterProduct() {
      const [price, setPrice] = useState([10000, 100000]);

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
            const newPrice = [...price];
            newPrice[index] = Number(e.target.value);
            setPrice(newPrice);
      };

      return (
            <div className="flex flex-col gap-8 w-full max-w-[200px]">
                  <div className="flex flex-col gap-3 justify-start">
                        <p className="text-lg font-semibold text-black">Kategori</p>
                        <label className="flex gap-3 text-sm text-black">
                              <input type="checkbox" className="w-5 h-5" />
                              Bushing Arm
                        </label>
                        <label className="flex gap-3 text-sm text-black">
                              <input type="checkbox" className="w-5 h-5" />
                              Support
                        </label>
                        <label className="flex gap-3 text-sm text-black">
                              <input type="checkbox" className="w-5 h-5" />
                              Stabilizer Bush
                        </label>
                  </div>

                  <div className="flex flex-col gap-3 justify-start">
                        <p className="text-lg font-semibold text-black">Filter Berdasarkan Harga</p>
                        <div className="relative">
                              <input
                                    type="range"
                                    min="10000"
                                    max="1000000"
                                    step="10000"
                                    value={price[0]}
                                    onChange={(e) => handleChange(e, 0)}
                                    className="absolute w-full max-w-[200px] h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                              />
                              <input
                                    type="range"
                                    min="10000"
                                    max="1000000"
                                    step="10000"
                                    value={price[1]}
                                    onChange={(e) => handleChange(e, 1)}
                                    className="absolute w-full max-w-[200px] h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                              />
                              {/* Progress Bar */}
                              <div
                                    className="absolute h-2 bg-primary-300 rounded-lg"
                                    style={{
                                          left: `${((price[0] - 10000) / 990000) * 100}%`,
                                          width: `${((price[1] - price[0]) / 990000) * 100}%`,
                                    }}
                              ></div>
                        </div>
                        {/* Harga */}
                        <p className="mt-4 text-sm">
                              Price: Rp{price[0].toLocaleString()} - Rp{price[1].toLocaleString()}
                        </p>
            </div>
            </div>
      )
}