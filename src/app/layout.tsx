import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import ClientWrapper from "@/utils/ClientWrapper";

export const metadata: Metadata = {
  title: "Imosu Autoparts",
  description: "Penyedia Suku Cadang Mobil Terpercaya",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
