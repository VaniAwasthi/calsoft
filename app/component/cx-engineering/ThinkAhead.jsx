"use client";

import { useState } from "react";
import ButtonLayout from "../utilities/ButtonLayout";
import buttonImage from "@/app/assets/home/buttonImg.webp";

export function DesignTabsComponent({
  tabsData = [
    {
      id: "business-first",
      title: "Business First",
      subtitle: "(For Decision-Makers)",
      content: {
        description:
          "An intelligent UI is a decision accelerator—learning from behavior to shorten paths, cut inputs, and reduce drop-offs",
        metrics: [
          "28-40% faster workflows",
          "3x repeat usage via contextual design",
          "35% lower training costs",
          "60% less data-to-action latency",
        ],
        buttonText: "See ROI of Intelligent UI",
      },
    },
    {
      id: "interaction-intelligence",
      title: "Interaction Intelligence",
      subtitle: "(For Product Owners)",
      content: {
        description:
          "Anticipates needs using history, intent, and backend cues to remove noise and enable flow.",
        metrics: [
          "Behavioral UX: auto-reorder menus",
          "Predictive Inputs: suggest answers",
          "Adaptive CTAs: change by urgency",
          "Layout mutation: persona / context-based",
          "Live data micro-components: show change impact instantly",
        ],
      },
      buttonText: "Try the Interaction Sample Kit",
    },
    {
      id: "system-ready-design",
      title: "System-Ready Design",
      subtitle: "(For Architects)",
      content: {
        description:
          "Scalable design systems with built-in intelligence that maintain consistency while adapting to user needs and business requirements.",
        metrics: [
          "Modular JS (React, Vue)",
          "Atomic design, reusable components",
          "GraphQL, REST, WebSockets",
          "Role-based rendering + auth-aware UI decisions",
          "Headless CMS, micro - frontends, edge rendering",
        ],
      },
      buttonText: "Try the Interaction Sample Kit",
    },
    {
      id: "live-feedback-loop",
      title: "Live Feedback Loop",
      subtitle: "(For CX & Analytics Teams)",
      content: {
        description:
          "Real-time analytics and feedback systems that provide actionable insights to continuously improve user experience and business outcomes.",
        metrics: [
          "Heatmaps",
          "Smart A/B testing",
          "Drop-off analysis",
          "Microcopy performance testing",
          "Task completion scores",
        ],
        buttonText: "Try the Interaction Sample Kit",
      },
    },
  ],
  buttonText = "See ROI of Intelligent UI",
  onButtonClick = () => {},
}) {
  const [activeTab, setActiveTab] = useState("business-first");

  const currentTabData =
    tabsData.find((tab) => tab.id === activeTab) || tabsData[0];

  const navigateToPrevious = () => {
    const currentIndex = tabsData.findIndex((tab) => tab.id === activeTab);
    const previousIndex =
      currentIndex > 0 ? currentIndex - 1 : tabsData.length - 1;
    setActiveTab(tabsData[previousIndex].id);
  };

  const navigateToNext = () => {
    const currentIndex = tabsData.findIndex((tab) => tab.id === activeTab);
    const nextIndex = currentIndex < tabsData.length - 1 ? currentIndex + 1 : 0;
    setActiveTab(tabsData[nextIndex].id);
  };

  return (
    <div className="container mx-auto">
      {/* Header Section */}
      <div className="flex lg:flex-row flex-col items-start lg:items-center justify-between mb-12 my-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold bg-[linear-gradient(to_right,#2E3092_30%,#ED1C24_60%)] bg-clip-text text-transparent mb-3 text-balance leading-14">
            Design That Thinks Ahead
          </h1>
          <p className="text-xl text-blackleading-relaxed">
            Adaptive, measurable, and system-ready interfaces that accelerate
            decisions, delight users, and integrate seamlessly.
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center gap-5">
          <button
            onClick={navigateToPrevious}
            className={`transition-opacity duration-200 hover:opacity-80`}
          >
            <svg
              width="55"
              height="55"
              viewBox="0 0 55 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.0971 0.0014059C42.0386 0.00140685 54.1934 12.1556 54.1934 27.0964C54.1934 42.0372 42.0386 54.1914 27.0971 54.1914C12.1555 54.1914 0.000764324 42.0372 0.000766026 27.0964C0.000767728 12.1556 12.1555 0.00140495 27.0971 0.0014059ZM27.0971 52.3545C41.0246 52.3545 52.3563 41.0242 52.3563 27.0964C52.3563 13.1687 41.0246 1.83836 27.0971 1.83835C13.1696 1.83835 1.8378 13.1687 1.8378 27.0964C1.8378 41.0242 13.1696 52.3545 27.0971 52.3545Z"
                fill="#2E3092"
              />
              <path
                d="M30.446 18.4886L31.7429 19.7901L24.3911 27.1112L31.7549 34.7272L30.435 36.0039L21.811 27.0874L30.446 18.4886Z"
                fill="#2E3092"
              />
            </svg>
          </button>
          <button
            onClick={navigateToNext}
            className={`transition-opacity duration-200 hover:opacity-80`}
          >
            <svg
              width="55"
              height="55"
              viewBox="0 0 55 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.9049 54.3814C12.9633 54.3814 0.808594 42.2272 0.808594 27.2864C0.808594 12.3456 12.9633 0.191406 27.9049 0.191406C42.8464 0.191406 55.0012 12.3456 55.0012 27.2864C55.0012 42.2272 42.8464 54.3814 27.9049 54.3814ZM27.9049 2.02836C13.9774 2.02836 2.64563 13.3587 2.64563 27.2864C2.64563 41.2142 13.9774 52.5445 27.9049 52.5445C41.8324 52.5445 53.1642 41.2142 53.1642 27.2864C53.1642 13.3587 41.8324 2.02836 27.9049 2.02836Z"
                fill="#2E3092"
              />
              <path
                d="M24.556 35.8981L23.259 34.5966L30.6108 27.2755L23.2471 19.6595L24.567 18.3828L33.191 27.2994L24.556 35.8981Z"
                fill="#2E3092"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="mb-12">
        {/* Mobile: Horizontal scroll */}
        <div className="flex gap-4 overflow-x-auto pb-2 md:hidden">
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-6 rounded-xl text-left transition-all duration-200 flex-shrink-0 min-w-[280px] ${
                activeTab === tab.id
                  ? "text-white shadow-lg"
                  : "bg-white border-2 border-gray-200 text-blackhover:border-gray-300 hover:shadow-md"
              }`}
              style={activeTab === tab.id ? { backgroundColor: "#2E3092" } : {}}
            >
              <div className="font-semibold text-lg mb-1">{tab.title}</div>
              <div
                className={`text-lg ${
                  activeTab === tab.id ? "text-white" : "text-[#414141]"
                }`}
              >
                {tab.subtitle}
              </div>
            </button>
          ))}
        </div>

        {/* Desktop: Equal width grid */}
        <div className="hidden md:grid grid-cols-4 gap-6">
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-6 rounded-xl text-left transition-all duration-200 ${
                activeTab === tab.id
                  ? "text-white shadow-lg"
                  : "bg-white border-2 border-gray-200 text-blackhover:border-gray-300 hover:shadow-md"
              }`}
              style={activeTab === tab.id ? { backgroundColor: "#2E3092" } : {}}
            >
              <div className="font-semibold text-lg mb-1">{tab.title}</div>
              <div
                className={`text-sm ${
                  activeTab === tab.id ? "text-blue-100" : "text-gray-500"
                }`}
              >
                {tab.subtitle}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <div className="space-y-8">
          <p className="text-xl text-black leading-relaxed">
            {currentTabData.content.description}
          </p>

          <ButtonLayout
            text={buttonText}
            onClick={onButtonClick}
            hoverImage={buttonImage}
            buttonImage={buttonImage}
            className="w-fit whitespace-nowrap"
          />
        </div>

        {/* Right Content - Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {currentTabData.content.metrics.map((metric, index) => (
            <div className="bg-[linear-gradient(to_right,#2E3092_25%,#ED1C24_68%)] p-[3px] rounded-xl">
              <div key={index} className="w-full h-full flex overflow-hidden">
                <div className="w-7 h-full rounded-l-xl bg-[#2E3092]"></div>
                <div className="w-full px-6 py-4 bg-white rounded-r-2xl">
                  <div className="font-semibold text-lg text-black text-balance">
                    {metric}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
