'use client';
import { useClickOutside } from "@/utils/useClickOutside";
import { useState, useEffect } from "react";

interface HeroDropdownProps {
    placeholder: string;
    stylingCustom?: string;
    options: string[];
    onChange?: (value: string) => void;
    value?: string | null | undefined;
}

export function HeroDropdown({ placeholder, options, stylingCustom, onChange, value }: HeroDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<string | null>(value ?? null);

    const dropdownRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

    useEffect(() => {
        // Sinkronkan state selected dengan prop value dari luar, handle undefined
        if (value !== selected) {
            setSelected(value ?? null); // Use nullish coalescing here as well
        }
    }, [value, selected]);

    const handleSelect = (newValue: string) => {
        setSelected(newValue);
        setIsOpen(false);
        if (onChange) onChange(newValue);
    };

    return (
        <div ref={dropdownRef} className="relative w-full sm:w-64">
            <div
                className={`${stylingCustom} bg-[#EDEBEB] rounded-lg px-6 py-2.5 shadow-lg cursor-pointer flex justify-between items-center`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`text-sm ${selected ? "text-black" : "text-[#6E6E6E]"}`}>
                    {selected || placeholder}
                </span>
                <span className="ml-2">&#9662;</span>
            </div>

            {isOpen && (
                <ul className="absolute left-0 w-full max-h-64 overflow-auto bg-white shadow-lg rounded-lg mt-1 z-50">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className={`px-6 py-2 text-sm hover:bg-gray-200 cursor-pointer ${selected === option ? 'bg-gray-100' : ''}`}
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