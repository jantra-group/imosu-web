import { SearchButton } from "@/components/Button/SearchButton";
import { HeroDropdown } from "@/components/Dropdown/HeroDropdown";
import { InputProduct } from "@/components/Input/InputProduct";

export function SearchProduct() {
      return (
            <div className="flex flex-row gap-5 items-center">
                  <InputProduct />
                  <HeroDropdown placeholder="Merk" options={["Honda", "Toyota", "BMW"]} />
                  <HeroDropdown placeholder="Tipe Mobil" options={["ABCD", "ABCD", "ABCD"]} />
                  <SearchButton />
            </div>
      )
}