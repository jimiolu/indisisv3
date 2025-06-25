import Image from "next/image";
import Link from "next/link";
import React from "react";

const WorktheWay = () => {
  return (
    <section className="py-20">
      <div className="flex flex-col lg:flex-row h-full items-center">
        <div className="flex-1 w-full overflow-hidden">
          <Image
            src="/bg/bg2.webp"
            alt="worktheWay"
            width={500}
            height={500}
            className="w-full object-cover"
          />
        </div>
        <div className="flex-1 root-container">
          <div className="space-y-10">
            <div className="space-y-5 font-manrope  max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-bold leading-snug">
                Empower your <br /> workflow, your way
              </h3>
              <p className="text-gray-600 text-base md:text-lg font-medium leading-relaxed">
                Indisis’s Adaptive Hiring model empowers you to design and
                manage high-performing teams with the agility your business
                demands.
              </p>
            </div>
            <div className="space-y-8  max-w-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3 min-w-[120px] border-l border-slate-300 pl-5">
                  <h4 className="text-gray-700 font-bold">
                    Nearshore Staff Augmentation
                  </h4>
                  <p className="text-sm text-gray-500 font-medium">
                    Fill a critical gap or place a highly skilled problem
                    solver. Have someone cover maternity leave. Or put a
                    full-time, project-driven technologist in place.
                  </p>
                </div>
                <div className="space-y-3 min-w-[120px] border-l border-slate-300 pl-5">
                  <h4 className="text-gray-700 font-bold">Hire Virtual CTO</h4>
                  <p className="text-sm text-gray-500 font-medium">
                    Get strategic guidance or technical leadership on demand.
                    Launch smarter, scale faster, and solve complex challenges
                    with a seasoned CTO by your side.
                  </p>
                </div>
              </div>
              <Link href="/contact">
                <button className="button hover-effect font-medium">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorktheWay;
