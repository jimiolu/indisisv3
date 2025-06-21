import Link from "next/link";
import Image from "next/image";
import React from "react";
import Megamenu1 from "./ui/mega-menu1";
import Megamenu2 from "./ui/mega-menu2";
import Megamenu3 from "./ui/mega-menu3";
import Megamenu4 from "./ui/mega-menu4";
import LangOption from "./LangOption";
import { Search } from "lucide-react";

const Nav = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-20 bg-white">
      <div className="root-container flex items-center justify-between h-full">
        <div>
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/icons/logo.svg"
              alt="logo"
              width={50}
              height={50}
              className="size-7"
            />
            <span className="text-3xl font-manrope font-bold text-primary tracking-tight capitalize">
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

        {/* Language Selection  */}
        <div className="flex gap-4">
          <Search className="cursor-pointer text-basecolor"/>
          <LangOption />
        </div>
      </div>
    </div>
  );
};

export default Nav;
