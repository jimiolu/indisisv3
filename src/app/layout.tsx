import type { Metadata } from "next";
import { Comfortaa, Geist_Mono, Inter, Manrope } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const comforta = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Indisis | Indigenous Systems",
  description: "Next-Gen Tech company",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${geistMono.variable} ${manrope.variable} ${comforta.variable}  antialiased`}
      >
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
