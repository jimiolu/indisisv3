import type { Metadata } from "next";
import { Geist_Mono, Manrope, Open_Sans } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Indisis | Indigenous Systems",
  description: "Next-Gen Tech company",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${openSans.className} ${geistMono.variable} ${manrope.variable} antialiased`}
      >
        <Header />
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
