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
        <main
          className="bg-no-repeat bg-cover bg-center relative"
          style={{ backgroundImage: `url(/assets/concrete-bg.webp)` }}
        >
          <div className="bg-slate-950/70 absolute inset-0 z-0" />
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
