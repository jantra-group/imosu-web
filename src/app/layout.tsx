import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from 'next/font/google';
import { Navbar } from "@/components/Layout/Navbar/Navbar";
import { Footer } from "@/components/Layout/Footer/Footer";

export const metadata: Metadata = {
  title: "Imosu Autoparts",
  description: "Penyedia Suku Cadang Mobil Terpercaya",
};

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'], 
  variable: '--font-montserrat', 
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={montserrat.className}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
