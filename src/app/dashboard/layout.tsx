import type { Metadata } from "next";
import "@/app/globals.css";
import { SidebarAdmin } from "@/components/Admin/Layout/Sidebar";
import { Navbar } from "@/components/Admin/Layout/Navbar";

export const metadata: Metadata = {
      title: "Dashboard - Imosu Autoparts",
      description: "Panel Admin Imosu Autoparts",
};

export default function DashboardLayout({
      children,
}: Readonly<{
      children: React.ReactNode;
}>) {
      return (
            <main className="flex fixed h-full w-full">
                  <SidebarAdmin />
                  <div className="flex flex-col w-full bg-[#F5F5F5]">
                        <Navbar />
                        {children}
                  </div>
            </main>
      );
}
