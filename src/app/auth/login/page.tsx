import { Bear } from "@/components/Bear/Bear";
import Image from "next/image";

export default function LoginPage() {
      return (
            <main className="flex items-center justify-center h-screen relative">
                  <div className="flex items-center justify-center relative group focus-within:ring-0">
                        <Bear />
                        {/* form login */}
                        <div className="flex flex-col gap-5 py-8 px-10 items-center justify-center shadow-xl rounded-2xl z-30 bg-white">
                              <Image src="/image/imosu-logo.svg" alt="imosu" width={200} height={60} />
                              <form action="" className="flex flex-col gap-3 px-5 w-full">
                                    <div className="flex flex-col gap-1 w-full">
                                          <label className="text-neutral-700 text-sm font-normal">Email</label>
                                          <input type="text" className="peer border border-neutral-700 py-1 px-3 w-full focus:outline-none rounded-xl text-base" placeholder="admin@gmail.com" />
                                    </div>

                                    <div className="flex flex-col gap-1 w-full">
                                          <label className="text-neutral-700 text-sm font-normal">Password</label>
                                          <input type="text" className="border border-neutral-700 py-1 px-3 w-full focus:outline-none rounded-xl text-base" placeholder="admin123" />
                                    </div>
                                    <button className="bg-primary-500 text-sm font-bold py-1.5 px-3 rounded-2xl text-white">Login</button>
                              </form>
                        </div>
                  </div>
            </main>
      );
}
