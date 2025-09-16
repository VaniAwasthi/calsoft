"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Guesswork({
  stepsData = [
    {
      title: "Readiness Assessment",
      description:
        "Identify functional gaps, automation levels, test data issues, and performance SLAs.",
      output: "Output: QA Heatmap + Coverage Scorecard",
      alignment: "left",
    },
    {
      title: "Test Strategy Design",
      description:
        "Map user journeys, business workflows, and SLAs to functional and non-functional test plans.",
      output: "Output: Unified Test Plan (Functional + Non-Functional)",
      alignment: "right",
    },
    {
      title: "Tooling & Framework Setup",
      description:
        "Establish automation, test data generation, performance test tools, and CI/CD hooks.",
      output: "Output: Test Automation Stack + Environment Readiness",
      alignment: "left",
    },
    {
      title: " Pilot Run + Baseline Establishment",
      description:
        "Run pilot on a representative module to validate time, coverage, and defects detected.",
      output: "Output: QA Effectiveness Report",
      alignment: "right",
    },
    {
      title: "Full-Scale Rollout + SLA Tracking",
      description:
        "Apply test strategy across releases and track KPIs like defect leakage, cycle time, and stability index.",
      output: "Output: QA Dashboard + Executive Summary",
      alignment: "left",
    },
  ],
}) {
  return (
    <div className="py-14">
      <div className="relative">
        <div className="absolute left-1/2 top-20 bottom-20 w-3 bg-[#d9d9d9] transform -translate-x-1/2 z-0" />

        {stepsData.map((step, index) => (
          <div key={index} className="relative mb-16 last:mb-0">
            <div className="flex items-center justify-center">
              {step.alignment === "left" ? (
                <>
                  {/* Left-aligned content box that crosses center */}
                  <div className="w-full flex justify-start items-center">
                    <motion.div
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: false, amount: 0.3 }}
                      className="relative"
                      style={{ width: "calc(50% + 70px)" }}
                    >
                      <div
                        className="bg-white border-2 border-[#2e3092] px-8 py-6 w-full relative"
                        style={{
                          borderRadius: "200px 9999px 9999px 200px", // Increased border radius to 200px for better visibility
                        }}
                      >
                        <div className="pr-24">
                          <h3 className="text-black text-3xl font-semibold mb-2 leading-tight">
                            {step.title}
                          </h3>
                          <p className="text-black text-lg mb-3 leading-relaxed">
                            {step.description}
                          </p>
                          <p className="text-black text-lg font-bold">
                            {step.output}
                          </p>
                        </div>

                        <div
                          className="absolute top-1/2 transform -translate-y-1/2 z-10"
                          style={{ right: "20px" }}
                        >
                          <div className="w-24 h-24 bg-[#2e3092] rounded-full flex items-center justify-center">
                            <span className="text-white text-7xl font-londrina">
                              {index + 1}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ x: 50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: false, amount: 0.3 }}
                      className="ml-12"
                    >
                      <span className="text-6xl font-bold">Step</span>
                    </motion.div>
                  </div>
                </>
              ) : (
                <>
                  {/* Right-aligned content box that crosses center */}
                  <div className="w-full flex justify-end items-center">
                    <motion.div
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: false, amount: 0.3 }}
                      className="mr-12"
                    >
                      <span className="text-6xl font-bold">Step</span>
                    </motion.div>
                    <motion.div
                      initial={{ x: 50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: false, amount: 0.3 }}
                      className="relative"
                      style={{ width: "calc(50% + 70px)" }}
                    >
                      <div
                        className="bg-white border-2 border-[#2e3092] px-8 py-6 w-full relative"
                        style={{
                          borderRadius: "9999px 200px 200px 9999px", // Increased border radius to 200px for better visibility
                        }}
                      >
                        <div className="pl-24 text-right">
                          <h3 className="text-black text-3xl font-semibold mb-2 leading-tight">
                            {step.title}
                          </h3>
                          <p className="text-black text-lg mb-3 leading-relaxed">
                            {step.description}
                          </p>
                          <p className="text-black text-lg font-bold">
                            {step.output}
                          </p>
                        </div>
                        <div
                          className="absolute top-1/2 transform -translate-y-1/2 z-10"
                          style={{ left: "20px" }}
                        >
                          <div className="w-24 h-24 bg-[#2e3092] rounded-full flex items-center justify-center">
                            <span className="text-white text-7xl font-londrina">
                              {index + 1}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
