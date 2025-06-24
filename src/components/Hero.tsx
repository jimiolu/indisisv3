import { BannerRating } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen md:h-[80vh] overflow-hidden">
      {/* <Image src="https://images.pexels.com/photos/32615328/pexels-photo-32615328.jpeg" alt="hero" width={1000} height={1000} className='w-full h-full object-cover' /> */}
      <video
        src="/hero/bg2.mp4"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="relative root-container z-20 flex items-center h-full">
        <div className="flex flex-col gap-5 lg:px-20">
          <div className="space-y-5 text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Empowering Ambitious Teams to Build the Future
            </h1>
            <p className="text-lg">
              Our promise is to help enterprises across industries to accelerate
              transformation, driving agility, resilience, and operational
              excellence at scale.
            </p>
            <div className="flex gap-5 items-center mt-10">
              <Link href="/services">
                <button className="button hover-effect font-medium">
                  See what we do
                </button>
              </Link>
              <Link href="/services">
                <button className="capitalize hover-effect hover:text-accent font-medium py-3">
                  Explore Insights
                </button>
              </Link>
            </div>
          </div>

          <div className="absolute bottom-10 max-w-2xl px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 text-white w-full">
              {BannerRating.map((item) => (
                <div
                  key={item.id}
                  className="min-w-[120px] border-l border-slate-300 pl-5"
                >
                  <h4 className="font-semibold text-xl">{item.title}</h4>
                  <span className="text-slate-200 text-sm font-medium">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
