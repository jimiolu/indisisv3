"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ChevronRight, Search, Text, X } from "lucide-react";
import LangOption from "./LangOption";
import { AboutUs, Career, Industries, Services, Socials } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState<null | string>(null);
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 w-full h-20 bg-white">
      <div className="root-container flex items-center justify-between h-full">
        {/* HAMBURGER  */}
        <div className="relative">
          <Sheet>
            <SheetTrigger onClick={() => setOpenMenu("main")}>
              <Text size={25} />
            </SheetTrigger>

            {openMenu && (
              <SheetContent side="left" className="w-full">
                {/* CLOSE BUTTON  */}
                <SheetHeader>
                  <SheetTitle></SheetTitle>
                  {openMenu === "main" ? (
                    <div className="flex justify-between">
                      <button
                        onClick={() => setOpenMenu(null)}
                        className=" text-gray-500"
                      >
                        <X size={25} />
                      </button>
                      <LangOption />
                    </div>
                  ) : (
                    <button
                      onClick={() => setOpenMenu("main")}
                      className="text-gray-500"
                    >
                      <ArrowLeft size={25} />
                    </button>
                  )}
                </SheetHeader>

                {/* MAIN MENU  */}
                {openMenu === "main" && (
                  <div className="root-container flex flex-col justify-between my-5 font-manrope h-full">
                    <ul className="space-y-6 text-basecolor divide-y divide-gray-200">
                      <li>
                        <button
                          onClick={() => setOpenMenu("industries")}
                          className="flex items-center justify-between font-medium w-full pb-6 capitalize"
                        >
                          <span className="text-lg">industries</span>
                          <ChevronRight size={20} />
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => setOpenMenu("capabilities")}
                          className="flex items-center justify-between font-medium w-full pb-6 capitalize"
                        >
                          <span className="text-lg">Capabilities</span>
                          <ChevronRight size={20} />
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => setOpenMenu("about")}
                          className="flex items-center justify-between font-medium w-full pb-6 capitalize"
                        >
                          <span className="text-lg">About us</span>
                          <ChevronRight size={20} />
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => setOpenMenu("careers")}
                          className="flex items-center justify-between font-medium w-full pb-6 capitalize"
                        >
                          <span className="text-lg">careers</span>
                          <ChevronRight size={20} />
                        </button>
                      </li>
                    </ul>

                    <div className="mb-10 space-y-10 text-basecolor">
                      <div>
                        <Link href="/contact">
                          <span className="font-medium capitalize">
                            Contact us
                          </span>
                        </Link>
                      </div>

                      <div className="flex items-center gap-5">
                        {Socials.map((item) => (
                          <div key={item.id}>
                            <Link href={item.url} target="_blank">
                              <Image
                                src={item.icon}
                                alt="x"
                                width={50}
                                height={50}
                                className="size-7"
                              />
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* INDUSTRIES MENU  */}
                {openMenu === "industries" && (
                  <div className="root-container mt-5 space-y-10 divide-y divide-gray-200 overflow-y-auto">
                    <div className="space-y-3 pb-5">
                      <h3 className="text-primary text-lg font-semibold">
                        Industries
                      </h3>
                      <p className="text-sm text-neutral-500">
                        Explore top industrial sectors we serve across the
                        globe.
                      </p>
                    </div>
                    <div className="space-y-6">
                      {Industries.map((item) => {
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
                              <span className="font-medium capitalize">
                                {item.title}
                              </span>
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* CAPABILITIES MENU  */}
                {openMenu === "capabilities" && (
                  <div className="root-container mt-5 space-y-10 divide-y divide-gray-200 overflow-y-auto">
                    <div className="space-y-3 pb-5">
                      <h3 className="text-primary text-lg font-semibold capitalize">
                        What we do
                      </h3>
                      <p className="text-sm text-neutral-500">
                        Explore our wide range of capabilities to help you
                        succeed in your digital transformation journey.
                      </p>
                    </div>
                    <div className="space-y-6 pb-5">
                      {Services.slice(9, 13).map((item) => {
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
                              <span className="font-medium capitalize">
                                {item.title}
                              </span>
                            </Link>
                          </div>
                        );
                      })}
                    </div>

                    <div className="space-y-6">
                      {Services.slice(0, 9).map((item) => {
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
                              <span className="font-medium capitalize">
                                {item.title}
                              </span>
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* ABOUT US MENU  */}
                {openMenu === "about" && (
                  <div className="root-container mt-5 space-y-10 divide-y divide-gray-200 overflow-y-auto">
                    <div className="space-y-3 pb-5">
                      <h3 className="text-primary text-lg font-semibold capitalize">
                        our organization
                      </h3>
                      <p className="text-sm text-neutral-500">
                        Harnessing the power of technology for business
                        transformations through strategic global collaborations.
                      </p>
                    </div>
                    <div className="space-y-6 pb-5">
                      {AboutUs.map((item) => {
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
                              <span className="font-medium capitalize">
                                {item.title}
                              </span>
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* CAREERS MENU  */}
                {openMenu === "careers" && (
                  <div className="root-container mt-5 space-y-10 divide-y divide-gray-200 overflow-y-auto">
                    <div className="space-y-3 pb-5">
                      <h3 className="text-primary text-lg font-semibold capitalize">
                        careers
                      </h3>
                      <p className="text-sm text-neutral-500">
                        Explore our career opportunities and join our team.
                      </p>
                    </div>
                    <div className="space-y-6 pb-5">
                      {Career.map((item) => {
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
                              <span className="font-medium capitalize">
                                {item.title}
                              </span>
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </SheetContent>
            )}
          </Sheet>
        </div>

        <div>
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/icons/logo.svg"
              alt="logo"
              width={50}
              height={50}
              className="size-7"
            />
            {/* <span className="text-2xl font-manrope font-bold text-primary tracking-tight lowercase">
              indisis
            </span> */}
          </Link>
        </div>

        <div>
          {/* Language Selection  */}
          <div className="flex gap-4">
            <Search className="cursor-pointer text-basecolor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
