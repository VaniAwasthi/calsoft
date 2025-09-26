"use client";
import { motion } from "framer-motion";
import ButtonLayout from "../utilities/ButtonLayout";
import buttonImage from "../../assets/home/buttonImg.webp";

export default function WhatMakeUIIntelliegnt({
  sectionDescription = "Core Principles We Engineer Into Your UI:",
  buttonText = "Talk to Expert",
  title = "Intelligent UI is not just UI with AI. It is situational awareness + real-time guidance + adaptive rendering.",
  id = "why-calsoft",
  heading = "What Makes a UI Intelligent?",
  data = {
    tableHeadings: ["Principle", "Manifestation", "Result"],
    tableContent: [
      {
        name: "Behavioral Prediction",
        calsoft: "Auto-suggested actions based on usage patterns",
        vendor: "35% faster task completion",
      },
      {
        name: "Contextual Personalization",
        calsoft: "Adaptive UI by role, time, device, workflow",
        vendor: "3x engagement vs static UIs",
      },
      {
        name: "Action Scoring Engine",
        calsoft: "Interface optimizes CTA placement in real-time",
        vendor: "60% higher conversion opportunity",
      },
      {
        name: "Microfeedback Loops",
        calsoft: "UI elements train themselves via usage feedback",
        vendor: "Self-improving interactions",
      },
      {
        name: "System Awareness",
        calsoft: "UI reflects system health/load/input states",
        vendor: "50% fewer failed actions",
      },
    ],
  },
}) {
  const CheckIcon = () => (
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
  );

  const CrossIcon = () => (
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
  );

  return (
    <div id={id} className="max-w-7xl mx-auto px-6 container overflow-x-hidden">
      <div className="h-8" />
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-5 lg:mb-8 bg-[linear-gradient(to_right,#2E3092_5%,#ED1C24_18%)] bg-clip-text text-transparent">
          {heading}
        </h1>

        <div className="flex justify-between items-center mb-5 sm:mb-8 lg:mb-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
            className="max-w-2xl"
          >
            <h2 className="text-black text-xl sm:text-2xl lg:text-base mb-4">
              {title}
            </h2>
            {sectionDescription && (
              <p className="text-black text-sm sm:text-base lg:text-lg leading-relaxed">
                {sectionDescription}
              </p>
            )}
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <ButtonLayout
              text={buttonText}
              image={buttonImage}
              hoverImage={buttonImage}
              className={"w-fit"}
            />
          </motion.div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto">
        <div className="border border-[#e3e3e3] min-w-[600px]">
          {/* Table Header */}
          <div className="bg-[#2e3092] text-white grid grid-cols-3 py-6 px-8">
            {data.tableHeadings.map((heading, i) => (
              <div
                key={heading}
                className={`text-lg sm:text-xl lg:text-2xl font-bold`}
              >
                {heading}
              </div>
            ))}
          </div>

          {/* Table Rows */}
          {data.tableContent.map((feature, index) => (
            <motion.div
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
              key={feature.name}
              className={`grid grid-cols-3 py-6 px-8 items-center ${
                index % 2 === 0 ? "bg-[#f2f0f5]" : "bg-white"
              }`}
            >
              {/* Feature Name */}
              <div className="text-black sm:text-lg lg:text-xl font-medium">
                {feature.name}
              </div>

              {/* Calsoft Column */}
              <div className="flex items-center justify-start gap-3">
                <CheckIcon />
                <span className="text-black sm:text-lg lg:text-xl font-medium">
                  {feature.calsoft}
                </span>
              </div>

              {/* Vendor Column */}
              <div className="flex items-center justify-start gap-3">
                <CrossIcon />
                <span className="text-black sm:text-lg lg:text-xl font-medium">
                  {feature.vendor}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="h-10" />
    </div>
  );
}
