import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yoli Ichtaca",
  description: "2024 envisioned",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} min-h-screen`}>
        <Navbar />
        <main className="bg-slate-50">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
