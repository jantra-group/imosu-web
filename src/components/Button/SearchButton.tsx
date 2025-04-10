import Link from "next/link";
import { LuSearch } from "react-icons/lu";

interface SearchButtonProps {
      onClick: () => void;
}

export function SearchButton({onClick}: SearchButtonProps) {
      return (
            <button
                  className="bg-primary-500 h-[44px] rounded-lg shadow-lg px-3 py-2 w-full md:w-fit flex items-center justify-center"
                  onClick={onClick}
            >
                  <LuSearch size={30} color="#FFFFFF" className="hidden lg:block" />

                  <span className="block lg:hidden text-white font-medium">Search</span>
            </button>
      );
}
