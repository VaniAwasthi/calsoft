import Image from "next/image";
import React from "react";
import sendResume from "../../assets/career/SendResume.webp";

export default function SendResume() {
  return (
    <div className="relative w-full h-64 overflow-hidden">
      <div className="absolute top-0 h-full w-full bg-[linear-gradient(90deg,_rgba(0,0,0,1)_0%,_rgba(0,0,0,0.5)_50%,_rgba(0,0,0,0)_100%)] text-white">
        {" "}
        <div className="p-8 sm:p-16 md:p-20 flex md:flex-row flex-col md:gap-0 gap-2 xs:gap-8 justify-between items-center">
          <div className="space-y-2">
            <p className="text-4xl font-bold">Didn’t find relevant jobs?</p>
            <p className="text-2xl">Send us your resume anyway.</p>
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 transition-colors">
            Send Resume
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      <Image
        src={sendResume}
        className="w-full h-full object-cover object-[center_50%]"
      />
    </div>
  );
}
