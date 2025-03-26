"use client";
import { useState } from "react";
import {
      Select,
      SelectContent,
      SelectItem,
      SelectTrigger,
      SelectValue,
} from "@/components/ui/select";

interface DropdownProps {
      label: string;
      options: string[];
      value?: string; // Optional untuk controlled component
      onValueChange?: (value: string) => void; // Optional callback untuk perubahan nilai
}

export function DropdownInput({ label, options, value, onValueChange }: DropdownProps) {
      // Local state hanya digunakan jika props value tidak ada (uncontrolled)
      const [localValue, setLocalValue] = useState(options[0] || "");

      // Handle perubahan nilai dropdown
      const handleChange = (newValue: string) => {
            if (onValueChange) {
                  onValueChange(newValue); // Controlled: Trigger perubahan dari parent
            } else {
                  setLocalValue(newValue); // Uncontrolled: Update state lokal
            }
      };

      return (
            <div className="flex flex-col w-full">
                  <label className="text-sm text-[#191717] font-medium mb-1">{label}</label>

                  <Select
                        value={value ?? localValue} // Gunakan props value jika ada, atau fallback ke localValue
                        onValueChange={handleChange}
                  >
                        <SelectTrigger className="rounded-lg bg-white">
                              <SelectValue placeholder="Pilih opsi" />
                        </SelectTrigger>

                        <SelectContent className="rounded-none">
                              {options.map((option, index) => (
                                    <SelectItem key={index} value={option}>
                                          {option}
                                    </SelectItem>
                              ))}
                        </SelectContent>
                  </Select>
            </div>
      );
}
