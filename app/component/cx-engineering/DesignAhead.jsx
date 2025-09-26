"use client";
import React, { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function DesignAhead() {
  const [activeTab, setActiveTab] = useState("Business First");

  const tabs = [
    { title: "Business First", subtitle: "(For Decision-Makers)" },
    { title: "Interaction Intelligence", subtitle: "(For Product Owners)" },
    { title: "System-Ready Design", subtitle: "(For Architects)" },
    { title: "Live Feedback Loop", subtitle: "(For CX & Analytics Teams)" },
  ];

  const stats = [
    { text: "28–40% faster workflows", style: " text-black" },
    { text: "3x repeat usage via contextual design", style: "border border-red-500 text-black" },
    { text: "35% lower training costs", style: "text-black" },
    { text: "60% less data-to-action latency", style: "border border-red-500 text-black" },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl mb-3 font-semibold bg-[linear-gradient(to_right,#2E3092_5%,#ED1C24_18%)] bg-clip-text text-transparent">
        Design That Thinks Ahead
      </h2>
      <span className="text-gray-600 mt-2 max-w-3xl ">
        Adaptive, measurable, and system-ready interfaces that accelerate decisions,
        delight users, and integrate seamlessly.
      </span>

      {/* Tabs */}
      <div className="flex flex-wrap mt-6 gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.title}
            onClick={() => setActiveTab(tab.title)}
            className={`px-4 py-2 rounded-md text-sm text-left border transition transform duration-200
            ${
              activeTab === tab.title
                ? "bg-[#2E3092] text-white hover:bg-[#2E3092] hover:text-white scale-110 "
                : "bg-white text-black border-gray-300 hover:bg-[#2E3092] hover:text-white hover:scale-105"
            }`}
          >
            <div className="font-semibold">{tab.title}</div>
            <div className="text-xs opacity-80">{tab.subtitle}</div>
          </button>
        ))}
      </div>

      {/* Left description + CTA and Right stats */}
      <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
        {/* Left */}
        <div>
          <p className="text-gray-700 leading-relaxed">
            An intelligent UI is a decision accelerator—learning from behavior to
            shorten paths, cut inputs, and reduce drop-offs.
          </p>
{/* 
          <button className="mt-6 inline-flex items-center gap-2 bg-[#BA0007] text-white px-5 py-3 rounded-full font-medium transition">
            See ROI of Intelligent UI <ArrowRight size={18} />
          </button> */}
        </div>

        {/* Right Stats */}
        <div className="bg-[linear-gradient(to_right,#2E3092_5%,#ED1C24_18%)]">
        <div className="grid grid-cols-2 gap-4 p-2 bg-white">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-md text-center font-medium text-sm ${s.style}`}
            >
              {s.text}
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
