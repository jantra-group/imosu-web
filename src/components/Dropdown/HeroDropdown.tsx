'use client';
import { useClickOutside } from "@/utils/useClickOutside";
import { useState } from "react";

interface HeroDropdownProps {
      placeholder: string;
      options: string[];
      onChange?: (value: string) => void;
}

export function HeroDropdown({ placeholder, options, onChange }: HeroDropdownProps) {
      const [isOpen, setIsOpen] = useState(false);
      const [selected, setSelected] = useState<string | null>(null);

      const dropdownRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

      const handleSelect = (value: string) => {
            setSelected(value);
            setIsOpen(false);
            if (onChange) onChange(value);
      };

      return (
            <div ref={dropdownRef} className="relative w-full sm:w-64">
                  <div
                        className="bg-[#EDEBEB] rounded-lg px-6 py-2.5 shadow-lg cursor-pointer flex justify-between items-center"
                        onClick={() => setIsOpen(!isOpen)}
                  >
                        <span className={`text-sm ${selected ? "text-black" : "text-[#6E6E6E]"}`}>
                              {selected || placeholder}
                        </span>
                        <span className="ml-2">&#9662;</span>
                  </div>

                  {isOpen && (
                        <ul className="absolute left-0 w-full bg-white shadow-lg rounded-lg mt-1 max-h-48 overflow-auto z-10">
                              {options.map((option, index) => (
                                    <li
                                          key={index}
                                          className="px-6 py-2 text-sm hover:bg-gray-200 cursor-pointer"
                                          onClick={() => handleSelect(option)}
                                    >
                                          {option}
                                    </li>
                              ))}
                        </ul>
                  )}
            </div>
      );
}
