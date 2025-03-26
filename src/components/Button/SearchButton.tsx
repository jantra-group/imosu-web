import Link from "next/link";
import { LuSearch } from "react-icons/lu";

export function SearchButton() {
      return (
            <Link
                  href="/"
                  className="bg-primary-500 h-[44px] rounded-lg shadow-lg px-3 py-2 w-full md:w-fit flex items-center justify-center"
                  passHref
            >
                  <LuSearch size={30} color="#FFFFFF" className="hidden lg:block" />

                  <span className="block lg:hidden text-white font-medium">Search</span>
            </Link>
      );
}
