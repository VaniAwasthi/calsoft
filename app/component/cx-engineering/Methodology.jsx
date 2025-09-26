"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import tab_img from "@/app/assets/DigitalEngineering/CX/cx_tab_img.webp";
import Image from "next/image";
import ButtonLayout from "../utilities/ButtonLayout";
import buttonImage from "@/app/assets/home/buttonImg.webp";

export default function MethodologyTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Guide Over Guess",
    "Data Inside the Design",
    "It Learns. It Improves.",
  ];

  const tabContent = [
    {
      title: "Every Click Should Be a Confident One.",
      subtitle:
        "Traditional UIs wait for user input. Intelligent UIs guide the next best action.",
      strategies: [
        "Smart tooltips based on usage frequency",
        "Path guidance through conditional logic",
        "Learn-from-mistakes patterns (auto-correct, field validation memory)",
        "Real-time UI scoring of form completeness",
        "Voice/gesture input options where applicable",
      ],
      stats: [
        "40% faster form completion",
        "2x more self-serve usage",
        "25% fewer user errors",
      ],
      buttonText: "See Our Guided UX Samples",
      onClick: () => {},
    },
    {
      title: "Why Guess What’s Working — When Your UI Can Tell You?",
      subtitle:
        "We embed analytics directly into the interface fabric. Every UI element is observable, measurable, and improvable.",
      strategies: [
        "Element-level engagement tracking",
        "Heatmaps + scrollmaps + dwell time",
        "Drop-off and rage-click detection",
        "Real-time experience feedback widgets",
        "Behavior funnels tied to business outcomes",
      ],
      stats: [
        "40% faster form completion",
        "2x more self-serve usage",
        "25% fewer user errors",
      ],
      buttonText: "Request Interface Analytics Blueprint",
      onClick: () => {},
    },
    {
      title:
        "Smart UIs don’t just help users — they help themselves get better.",
      subtitle:
        "We implement feedback loops and lightweight ML models that enable UI components to evolve:",
      strategies: [
        "Button text changing based on conversion rates",
        "Layout adjusting to dominant user paths",
        "Predictive form fill based on past inputs",
        "Clickstream-informed content reshuffling",
        "Element prioritization by role + action frequency",
      ],
      stats: [
        "40% faster form completion",
        "2x more self-serve usage",
        "25% fewer user errors",
      ],
      buttonText: "Enable Learning in My Interface",
      onClick: () => {},
    },
  ];

  return (
    <div className="bg-[#f7f7f7] py-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold bg-[linear-gradient(to_right,#2E3092_30%,#ED1C24_60%)] bg-clip-text text-transparent mb-3 text-balance leading-14">
            The Methodology
          </h1>
        </div>

        {/* Tabs */}
        <div className="overflow-x-auto mb-8">
          <div className="flex gap-2 min-w-max">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-8 text-lg font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                  activeTab === index
                    ? "bg-[#2e3092] text-white py-5 rounded-none"
                    : "bg-white text-[#000000] hover:bg-[#f3f3f3] py-4 rounded-lg"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl font-bold text-[#000000] mb-6 leading-tight">
                {tabContent[activeTab].title}
              </h2>

              <p className="text-xl text-[#000000] mb-8 leading-relaxed">
                {tabContent[activeTab].subtitle}
              </p>

              <div className="mb-10">
                <h3 className="text-xl font-semibold text-[#000000] mb-6">
                  Our Interface Strategies:
                </h3>

                <div className="space-y-4">
                  {tabContent[activeTab].strategies.map((strategy, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#2e3092] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-lg text-[#000000] leading-relaxed">
                        {strategy}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <ButtonLayout
                text={tabContent[activeTab].buttonText}
                buttonImage={buttonImage}
                hoverImage={buttonImage}
                onClick={tabContent[activeTab].onClick}
                className="w-fit whitespace-nowrap"
              />
            </div>

            {/* Right Content - Image */}
            <div className="flex justify-center">
              <Image
                src={tab_img}
                alt="AI Brain Visualization"
                className="size-full aspect-square rounded-lg"
              />
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-gray-200">
            {tabContent[activeTab].stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-[#2e3092] flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="w-6 h-6 text-[#2e3092]" />
                </div>
                <span className="text-xl font-semibold text-[#000000]">
                  {stat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
