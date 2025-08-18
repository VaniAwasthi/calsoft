"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Guesswork() {
  const steps = [
    {
      number: "1",
      title: "Readiness Assessment",
      description:
        "Evaluate infrastructure, workloads, compliance constraints, and cloud goals.",
      output: "Output: Migration Feasibility Report + Risk Scorecard",
      alignment: "left",
    },
    {
      number: "2",
      title: "Workload Discovery & Mapping",
      description:
        "Use automated tools to classify workloads, dependencies, and optimization opportunities.",
      output: "Output: Cloud Suitability Map + Prioritized Backlog",
      alignment: "right",
    },
    {
      number: "3",
      title: "Migration Strategy Design",
      description:
        "Choose the right approach — Rehost / Replatform / Refactor — based on impact and complexity.",
      output: "Output: 6R Decision Plan + TCO Estimate",
      alignment: "left",
    },
    {
      number: "4",
      title: "Pilot Migration & Cutover Testing",
      description:
        "Execute pilot migration, monitor cutover behavior, test rollback and audit workflows.",
      output: "Output: Pilot Outcome Report + Security Validation",
      alignment: "right",
    },
    {
      number: "5",
      title: "Infra Readiness Review",
      description:
        "Kick off with a structured 60-minute discovery call. We assess your current infra stack across:",
      output: "Output: Migration Feasibility Report + Risk Scorecard",
      alignment: "left",
    },
  ];

  return (
    <div className="py-14">
      <div className="relative">
        <div className="absolute left-1/2 top-20 bottom-20 w-3 bg-[#d9d9d9] transform -translate-x-1/2 z-0" />

        {steps.map((step, index) => (
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
                            <span
                              className="text-white text-2xl font-light"
                              style={{ WebkitTextStroke: "1px #ffffff" }}
                            >
                              {step.number}
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
                          <p className="text-black text-lg font-medium">
                            {step.output}
                          </p>
                        </div>
                        <div
                          className="absolute top-1/2 transform -translate-y-1/2 z-10"
                          style={{ left: "20px" }}
                        >
                          <div className="w-24 h-24 bg-[#2e3092] rounded-full flex items-center justify-center">
                            <span
                              className="text-white text-2xl font-light"
                              style={{ WebkitTextStroke: "1px #ffffff" }}
                            >
                              {step.number}
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
