"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Megamenu1 from "./ui/mega-menu1";
import Megamenu2 from "./ui/mega-menu2";
import Megamenu3 from "./ui/mega-menu3";
import Megamenu4 from "./ui/mega-menu4";
import LangOption from "./LangOption";
import { Search } from "lucide-react";

const Nav = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-20 z-30 transition-all duration-300 ${
        isSticky
          ? "bg-white shadow-sm backdrop-blur-md text-primary"
          : "bg-transparent text-white"
      }`}
    >
      <div className="root-container flex items-center justify-between h-full">
        <div className="flex gap-20">
          <div>
            <Link href="/" className="flex items-center gap-1">
              {isSticky ? (
                <Image
                  src="/icons/logo.svg"
                  alt="logo"
                  width={50}
                  height={50}
                  className="size-7"
                />
              ) : (
                <Image
                  src="/icons/logo-white.svg"
                  alt="logo"
                  width={50}
                  height={50}
                  className="size-7"
                />
              )}
              <span className="text-3xl font-comfortaa font-bold tracking-tighter lowercase">
                indisis
              </span>
            </Link>
          </div>

          {/* Middle navigation  */}
          <div className="flex items-center gap-8">
            <Megamenu1 />
            <Megamenu2 />
            <Megamenu3 />
            <Megamenu4 />
          </div>
        </div>

        {/* Language Selection  */}
        <div className="flex gap-4">
          <Search className="cursor-pointer" />
          <LangOption />
        </div>
      </div>
    </div>
  );
};

export default Nav;
