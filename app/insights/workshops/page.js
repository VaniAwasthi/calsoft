"use client";
import Image from "next/image";
import { FaCalendarAlt, FaClock, FaHourglassHalf } from "react-icons/fa";

import bgImage from "../assets/banner-bg.webp"; // Replace with your actual path
import rightImage from "../assets/banner-right.webp"; // Replace with your actual path

const Page = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 w-full flex flex-col md:flex-row items-center justify-between py-12">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-white space-y-6 z-10">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Master Regression <br /> Testing with AI
          </h1>
          <p className="text-sm md:text-base text-white/80">
            Speedup your QA with AI | Feat. CalTIA™ Demo
          </p>

          {/* Date-Time-Info */}
          <div className="flex flex-wrap gap-4 text-sm text-white items-center">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-white" />
              <span>16th–18th July 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-white" />
              <span>10:30 AM IST</span>
            </div>
            <div className="flex items-center gap-2">
              <FaHourglassHalf className="text-white" />
              <span>Duration: 2 Hrs.</span>
            </div>
          </div>

          {/* CTA Button */}
          <button className="mt-4 inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all">
            Reserve Your Session Now!
            <span className="bg-white text-red-600 rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <Image
              src={rightImage}
              alt="AI Regression Demo"
              width={500}
              height={400}
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Optional: Overlay if needed */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>
    </section>
  );
};

export default Page;
