import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" });

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_BRAND_NAME} — Top Up Game Instan`,
  description: "Top up diamond, UC, Genesis Crystal, dan voucher game. Proses otomatis 1 menit.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${inter.variable} ${grotesk.variable}`}>
      <body className="font-body bg-bg-primary text-white">{children}</body>
    </html>
  );
}