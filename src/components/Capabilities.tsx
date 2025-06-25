"use client";

import { CapabilitiesData } from "@/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const Capabilities = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const amount = scrollRef.current.offsetWidth * 0.8;
      scrollRef.current.scrollBy({
        left: dir === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="root-container py-20">
      <div className="space-y-10">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-5 w-full text-basecolor">
          <h1 className="text-2xl md:text-4xl font-semibold font-manrope">
            Capabilities
          </h1>
          <p className="max-w-xl text-sm md:text-base font-manrope">
            We deliver a comprehensive suite of digital solutions and
            industry-leading platforms designed to drive measurable outcomes,
            elevate customer experiences, and enable large-scale transformation
            with unmatched speed and efficiency.
          </p>
        </div>

        <div className="space-y-6">
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:gap-2 lg:overflow-visible"
          >
            {CapabilitiesData.map((item) => (
              <Link
                href={item.url}
                key={item.id}
                className="group snap-start flex-shrink-0 w-[80%] sm:w-[320px] lg:w-full relative aspect-[4/5] bg-black rounded-md overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="100%"
                  className="object-cover transition-all duration-500 group-hover:blur-sm group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors z-10" />
                <div className="absolute inset-0 z-20 flex flex-col items-start justify-between px-6 py-12 gap-5 text-white">
                  <h3 className="text-xl font-semibold leading-relaxed">
                    {item.title}
                  </h3>
                  {item.desc && (
                    <p className="mt-2 text-sm font-medium leading-relaxed text-neutral-200 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.desc}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* Slider buttons below - only on mobile and tablet */}
          <div className="lg:hidden flex justify-end gap-3">
            <button
              onClick={() => scroll("left")}
              className="p-2 bg-white border border-gray-300 rounded-full shadow hover:bg-blue-100 transition"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 bg-white border border-gray-300 rounded-full shadow hover:bg-blue-100 transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
