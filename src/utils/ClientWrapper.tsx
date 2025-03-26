"use client"; // Ini wajib karena pakai usePathname()

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/Layout/Navbar/Navbar";
import { Footer } from "@/components/Layout/Footer/Footer";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
      const pathname = usePathname();

      const isDashboardOrLogin = pathname.startsWith("/dashboard") || pathname.startsWith("/login");

      return (
            <>
                  {!isDashboardOrLogin && <Navbar />}
                  {children}
                  {!isDashboardOrLogin && <Footer />}
            </>
      );
}
