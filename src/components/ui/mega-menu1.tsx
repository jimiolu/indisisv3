"use client";
import { Industries, NavdropFeaturedPosts } from "@/constants";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Megamenu1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="relative group"
    >
      {/* Trigger  */}
      <button className="cursor-pointer flex items-center py-2 transition-all duration-200 hover:border-b-2 hover:border-accent hover:text-accent">
        <span className="font-manrope capitalize text-sm font-semibold">
          Industries
        </span>
        {isOpen ? (
          <ChevronUp
            size={18}
            className="transition-transform duration-200 rotate-360"
          />
        ) : (
          <ChevronDown
            size={18}
            className="transition-transform duration-200"
          />
        )}
      </button>

      {/* Dropdown  */}
      <div
        className={`fixed top-[80px] left-0 w-full bg-white transition-all duration-500 ease-in-out overflow-hidden origin-top transform"
              ${
                isOpen
                  ? "translate-y-0 opacity-100 visible"
                  : "scale-y-0 opacity-0 invisible"
              }`}
      >
        <div className="root-container flex gap-20">
          <div className="flex-2 py-10 space-y-10">
            {/* <h3 className="font-semibold text-xl text-primary">Industries</h3> */}
            <div className="grid grid-cols-3 gap-5">
              <div className="space-y-5">
                <h3 className="font-semibold text-xl text-primary capitalize">
                  Industries
                </h3>
                <p className="w-[80%] text-sm text-neutral-500">
                  Explore top industrial sectors we serve across the globe.
                </p>
              </div>
              <div className="space-y-5">
                {Industries.slice(0, 5).map((item) => {
                  const isActive =
                    pathname === item.url ||
                    pathname.startsWith(`${item.url}/`);
                  return (
                    <div key={item.id}>
                      <Link
                        href={item.url}
                        className={cn(
                          "text-basecolor font-medium hover:text-accent hover-effect",
                          { "text-accent": isActive }
                        )}
                      >
                        <span>{item.title}</span>
                      </Link>
                    </div>
                  );
                })}
              </div>
              <div className="space-y-5">
                {Industries.slice(5, 10).map((item) => {
                  const isActive =
                    pathname === item.url ||
                    pathname.startsWith(`${item.url}/`);
                  return (
                    <div key={item.id}>
                      <Link
                        href={item.url}
                        className={cn(
                          "text-basecolor font-medium hover:text-accent hover-effect",
                          { "text-accent": isActive }
                        )}
                      >
                        <span>{item.title}</span>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Nav featured posts  */}
          <div className="flex-1 h-[50vh]">
            {NavdropFeaturedPosts.slice(0, 1).map((item) => (
              <div key={item.id} className="relative overflow-hidden h-full">
                <Image
                  src={item.image}
                  alt=""
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="absolute inset-0 z-20 flex flex-col gap-5 items-start justify-end p-10 text-white">
                  <span className="font-semibold text-lg capitalize">
                    {item.title}
                  </span>
                  <span className="">{item.desc}</span>
                  <Link
                    href={item.url}
                    className="flex items-center uppercase font-semibold hover:text-accent hover-effect"
                  >
                    <span>readmore</span>
                    <ChevronRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Megamenu1;
