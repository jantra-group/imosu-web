'use client';
import { useState } from "react";

interface RadioInputProps {
      label: string;
      name: string;
      value?: any;
      options: { value: string; label: string }[];
      onChange?: (value: string) => void; 
}

export function RadioInput({ label, name, options, value, onChange }: RadioInputProps) {
      const [selected, setSelected] = useState<string | null>(value || "");

      const select = (val:string) => {
            setSelected(val)
            onChange?.(val)
      }

      return (
            <div className="flex flex-col w-full">
                  <label className="text-sm text-[#191717] font-medium mb-2">{label}</label>

                  <div className="flex gap-4">
                        {options.map((option) => (
                              <label
                                    key={option.value}
                                    className="flex items-center gap-2 text-sm font-light text-[#515978] cursor-pointer"
                              >
                                    <div
                                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selected === option.value ? "border-primary-500 bg-primary-500" : "border-gray-400"
                                                }`}
                                          onClick={() => select(option.value)}
                                    >
                                          {selected === option.value && <div className="w-3 h-3 bg-primary-500 rounded-full"></div>}
                                    </div>
                                    <input
                                          type="radio"
                                          name={name}
                                          value={option.value}
                                          checked={selected === option.value}
                                          onChange={(e) => select(e.target.value)}
                                          className="hidden"
                                    />
                                    {option.label}
                              </label>
                        ))}
                  </div>
            </div>
      )
}