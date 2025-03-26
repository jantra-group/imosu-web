import { IoMenu } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

export function Navbar() {
      return (
            <nav className="flex justify-between p-5 bg-white shadow-custom-neutral w-full">
                  <button>
                        <IoMenu size={30} color="#000000" />
                  </button>
                  <div className="flex gap-3 items-center">
                        <FaUser size={26} color="#000000" />
                        <p className="text-base text-black">Admin</p>
                  </div>
            </nav>
      )
}