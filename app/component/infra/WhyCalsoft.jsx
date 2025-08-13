import React from "react";
import ButtonLayout from "../utilities/ButtonLayout";
import buttonImage from "../../assets/home/buttonImg.webp";

export default function WhyCalsoft() {
  return (
    <div className="max-w-7xl mx-auto px-6 container">
      <div className="h-8" />
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-[#2e3092] text-4xl font-bold mb-8">Why Calsoft</h1>

        <div className="flex justify-between items-center mb-12">
          <div className="max-w-2xl">
            <h2 className="text-[#000000] text-3xl font-bold mb-4">
              Competitive Edge
            </h2>
            <p className="text-[#000000] text-lg leading-relaxed">
              Unlike generalist cloud consultants, Calsoft brings a tech-first,
              product-driven mindset. Here's how we stand apart:
            </p>
          </div>

          <ButtonLayout
            text={"Download Case Study"}
            image={buttonImage}
            hoverImage={buttonImage}
            className={"w-fit"}
          />
        </div>
      </div>

      {/* Comparison Table */}
      <div className=" border border-[#e3e3e3]">
        {/* Table Header */}
        <div className="bg-[#2e3092] text-white grid grid-cols-3 py-6 px-8">
          <div className="text-2xl font-bold">Feature</div>
          <div className="text-2xl font-bold text-center">Calsoft</div>
          <div className="text-2xl font-bold text-center">
            Traditional Vendors
          </div>
        </div>

        {/* Table Rows */}
        <div className="bg-[#f2f0f5] grid grid-cols-3 py-6 px-8 items-center">
          <div className="text-[#000000] text-xl font-medium">
            Workload Suitability Mapping
          </div>
          <div className="flex items-center justify-start gap-3 pl-8">
            <div className="w-8 h-8 bg-[#2e3092] rounded-full flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M13 4L6 11L3 8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-[#000000] text-xl font-medium">Yes</span>
          </div>
          <div className="flex items-center justify-start gap-3 pl-8">
            <div className="w-8 h-8 bg-[#ba0007] rounded-full flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M12 4L4 12M4 4L12 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-[#000000] text-xl font-medium">
              Generic Mapping
            </span>
          </div>
        </div>

        <div className="bg-white grid grid-cols-3 py-6 px-8 items-center">
          <div className="text-[#000000] text-xl font-medium">
            DevOps-Aware Infra Planning
          </div>
          <div className="flex items-center justify-start gap-3 pl-8">
            <div className="w-8 h-8 bg-[#2e3092] rounded-full flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M13 4L6 11L3 8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-[#000000] text-xl font-medium">
              Integrated
            </span>
          </div>
          <div className="flex items-center justify-start gap-3 pl-8">
            <div className="w-8 h-8 bg-[#ba0007] rounded-full flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M12 4L4 12M4 4L12 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-[#000000] text-xl font-medium">
              Afterthought
            </span>
          </div>
        </div>

        <div className="bg-[#f2f0f5] grid grid-cols-3 py-6 px-8 items-center">
          <div className="text-[#000000] text-xl font-medium">
            IP-led Cost & Performance Tools
          </div>
          <div className="flex items-center justify-start gap-3 pl-8">
            <div className="w-8 h-8 bg-[#2e3092] rounded-full flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M13 4L6 11L3 8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-[#000000] text-xl font-medium">
              Available
            </span>
          </div>
          <div className="flex items-center justify-start gap-3 pl-8">
            <div className="w-8 h-8 bg-[#ba0007] rounded-full flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M12 4L4 12M4 4L12 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-[#000000] text-xl font-medium">
              Manual Calculations
            </span>
          </div>
        </div>

        <div className="bg-white grid grid-cols-3 py-6 px-8 items-center">
          <div className="text-[#000000] text-xl font-medium">
            AI-Driven Optimization Insights
          </div>
          <div className="flex items-center justify-start gap-3 pl-8">
            <div className="w-8 h-8 bg-[#2e3092] rounded-full flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M13 4L6 11L3 8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-[#000000] text-xl font-medium">Built-In</span>
          </div>
          <div className="flex items-center justify-start gap-3 pl-8">
            <div className="w-8 h-8 bg-[#ba0007] rounded-full flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M12 4L4 12M4 4L12 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-[#000000] text-xl font-medium">Lacking</span>
          </div>
        </div>

        <div className="bg-[#f2f0f5] grid grid-cols-3 py-6 px-8 items-center">
          <div className="text-[#000000] text-xl font-medium">
            OEM Co-Engineering Partnerships
          </div>
          <div className="flex items-center justify-start gap-3 pl-8">
            <div className="w-8 h-8 bg-[#2e3092] rounded-full flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M13 4L6 11L3 8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-[#000000] text-xl font-medium">Active</span>
          </div>
          <div className="flex items-center justify-start gap-3 pl-8">
            <div className="w-8 h-8 bg-[#ba0007] rounded-full flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M12 4L4 12M4 4L12 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-[#000000] text-xl font-medium">Limited</span>
          </div>
        </div>
      </div>
      <div className="h-10" />
    </div>
  );
}
