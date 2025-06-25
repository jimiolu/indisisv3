"use client";

import Image from "next/image";
import Link from "next/link";

const LogicSection = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Top content */}
      <div className="relative z-10 root-container pt-5 pb-32">
        <div className="max-w-2xl space-y-6 font-manrope">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-basecolor">
            Lead with Logic
            <br />
            <span className="text-accent">with Indisis</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Thriving in the current dynamic landscape demands technological
            solutions that enable both transformative scale and unparalleled
            speed.
          </p>
        </div>
      </div>

      {/* Diagonal Image Background */}
      <div className="relative w-full h-[60vh] -mt-28">
        <div className="absolute inset-0 bottom-0 transform -skew-y-3 origin-bottom">
          <Image
            src="/bg/bg.jpg"
            alt="Background"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>

        {/* Black Card Overlay */}
        <div className="absolute right-10 md:right-20 bottom-10 w-[350px] md:w-[450px] bg-primary text-white px-10 py-24 shadow-xl space-y-4 z-20">
          <span className="text-sm text-gray-400 uppercase tracking-wide">
            lead with logic
          </span>
          <h3 className="text-2xl font-semibold leading-snug">
            True Scalability, Agility, and Responsiveness
          </h3>
          <Link
            href="/lead-with-logic"
            className="inline-block mt-4 px-5 py-2 border border-white text-white hover:bg-white hover:text-primary transition-all duration-300 text-sm font-medium"
          >
            KNOW MORE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LogicSection;
