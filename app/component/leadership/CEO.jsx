import React from "react";
import Image from "next/image";
import anupam from "../../assets/leadership/Anupam.png";

export default function CEO() {
  return (
    <>
      {/* Desktop view */}
      <div className="items-center border-2 border-[#3F3D9B] border-l-0 rounded-l-none rounded-2xl p-0 max-w-2xl mx-auto bg-white my-12 hidden md:flex relative justify-end">
        {/* Main circular container */}
        <div className="absolute -left-[4.7rem] h-full rounded-full overflow-hidden bg-[#F2F0F5]">
          {/* Person's image */}
          <Image
            src={anupam}
            alt="Person"
            className="w-full h-full object-cover"
          />
          {/* Left half border */}
          <div
            className="absolute inset-0 h-full rounded-full border-8 border-[#3F3D9B]"
            style={{
              clipPath: "polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)",
            }}
          ></div>

          {/* Right half border */}
          <div
            className="absolute inset-0 h-full rounded-full border-2 border-[#3F3D9B]"
            style={{
              clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)",
            }}
          ></div>
        </div>

        {/* Text Content */}
        <div className="w-5/6 my-4 mr-3 -ml-16 self-end">
          <h2 className="text-xl font-semibold text-black">Anupam Bhide</h2>
          <p className="text-base text-gray-800 mb-3">CEO, Co-founder</p>
          <p className="text-sm text-gray-700 max-w-xl">
            Our success has always come from keeping customers at the heart of
            engineering. We’re here to solve real-world challenges with
            scalable, intelligent, and secure technology solutions that evolve
            with our clients’ ambitions.
          </p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col items-center justify-center md:hidden my-10 gap-3">
        <Image
          src={anupam}
          className="border-2 border-[#3F3D9B] size-20 rounded-full bg-[#E0E0E0]"
        />
        <div className="text-center">
          <p className="text-xl font-semibold">Anupam Bhide</p>
          <p className="text-xl font-medium">CEO, Co-founder</p>
        </div>
        <p className="mx-4 text-center">
          Our success has always come from keeping customers at the heart of
          engineering. We’re here to solve real-world challenges with scalable,
          intelligent, and secure technology solutions that evolve with our
          clients’ ambitions.
        </p>
      </div>
    </>
  );
}
