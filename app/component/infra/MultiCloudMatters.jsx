"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MultiCloudMatters() {
  return (
    <div className="relative w-full aspect-[5/4]">
      {/* Top Left Card - Redundant */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: false, amount: 0.3 }}
        className="absolute top-3.5 left-2.5 w-[47%] h-[45%]"
      >
        <div className="relative w-full h-full">
          {/* Outer gradient border */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#4338ca] via-[#7c3aed] to-[#be185d] p-[2px] sm:p-[3px]"
            style={{
              borderTopLeftRadius: "9999px",
              borderBottomLeftRadius: "9999px",
              borderTopRightRadius: "9999px",
              borderBottomRightRadius: "0px",
            }}
          >
            {/* White border */}
            <div
              className="w-full h-full bg-white p-[4px] sm:p-[6px]"
              style={{
                borderTopLeftRadius: "9999px",
                borderBottomLeftRadius: "9999px",
                borderTopRightRadius: "9999px",
                borderBottomRightRadius: "0px",
              }}
            >
              {/* Inner content with gradient background */}
              <div
                className="w-full h-full bg-gradient-to-b from-[#4338ca] to-[#7c2d12] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8"
                style={{
                  borderTopLeftRadius: "9999px",
                  borderBottomLeftRadius: "9999px",
                  borderTopRightRadius: "9999px",
                  borderBottomRightRadius: "0px",
                }}
              >
                <h2 className="text-white text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight mb-1 sm:mb-2">
                  Redundant
                </h2>
                <p className="text-white text-sm sm:text-base lg:text-lg font-light leading-tight">
                  workloads across
                  <br />
                  clouds
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Top Right Card - Policy */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: false, amount: 0.3 }}
        className="absolute top-3.5 right-2.5 w-[47%] h-[45%]"
      >
        <div className="relative w-full h-full">
          {/* Outer gradient border */}
          <div
            className="absolute inset-0 bg-gradient-to-bl from-[#4338ca] via-[#7c3aed] to-[#be185d] p-[2px] sm:p-[3px]"
            style={{
              borderTopLeftRadius: "9999px",
              borderBottomLeftRadius: "0px",
              borderTopRightRadius: "9999px",
              borderBottomRightRadius: "9999px",
            }}
          >
            {/* White border */}
            <div
              className="w-full h-full bg-white p-[4px] sm:p-[6px]"
              style={{
                borderTopLeftRadius: "9999px",
                borderBottomLeftRadius: "0px",
                borderTopRightRadius: "9999px",
                borderBottomRightRadius: "9999px",
              }}
            >
              {/* Inner content with gradient background */}
              <div
                className="w-full h-full bg-gradient-to-b from-[#4338ca] to-[#7c2d12] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8"
                style={{
                  borderTopLeftRadius: "9999px",
                  borderBottomLeftRadius: "0px",
                  borderTopRightRadius: "9999px",
                  borderBottomRightRadius: "9999px",
                }}
              >
                <h2 className="text-white text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight mb-1 sm:mb-2">
                  Policy
                </h2>
                <p className="text-white text-sm sm:text-base lg:text-lg font-light leading-tight">
                  inconsistencies
                  <br />
                  and compliance
                  <br />
                  drift
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Left Card - 80% */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: false, amount: 0.3 }}
        className="absolute bottom-3.5 left-2.5 w-[47%] h-[45%]"
      >
        <div className="relative w-full h-full">
          {/* Outer gradient border */}
          <div
            className="absolute inset-0 bg-gradient-to-tr from-[#be185d] via-[#7c3aed] to-[#4338ca] p-[2px] sm:p-[3px]"
            style={{
              borderTopLeftRadius: "9999px",
              borderBottomLeftRadius: "9999px",
              borderTopRightRadius: "0px",
              borderBottomRightRadius: "9999px",
            }}
          >
            {/* White border */}
            <div
              className="w-full h-full bg-white p-[4px] sm:p-[6px]"
              style={{
                borderTopLeftRadius: "9999px",
                borderBottomLeftRadius: "9999px",
                borderTopRightRadius: "0px",
                borderBottomRightRadius: "9999px",
              }}
            >
              {/* Inner content with gradient background */}
              <div
                className="w-full h-full bg-gradient-to-b from-[#4338ca] to-[#7c2d12] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8"
                style={{
                  borderTopLeftRadius: "9999px",
                  borderBottomLeftRadius: "9999px",
                  borderTopRightRadius: "0px",
                  borderBottomRightRadius: "9999px",
                }}
              >
                <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-1 sm:mb-2">
                  80%
                </h2>
                <p className="text-white text-sm sm:text-base lg:text-lg font-light leading-tight">
                  of cloud spend
                  <br />
                  unoptimized
                  <br />
                  <span className="text-xs sm:text-sm">
                    (industry estimate)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Right Card - Fragmented */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: false, amount: 0.3 }}
        className="absolute bottom-3.5 right-2.5 w-[47%] h-[45%]"
      >
        <div className="relative w-full h-full">
          {/* Outer gradient border */}
          <div
            className="absolute inset-0 bg-gradient-to-tl from-[#be185d] via-[#7c3aed] to-[#4338ca] p-[2px] sm:p-[3px]"
            style={{
              borderTopLeftRadius: "0px",
              borderBottomLeftRadius: "9999px",
              borderTopRightRadius: "9999px",
              borderBottomRightRadius: "9999px",
            }}
          >
            {/* White border */}
            <div
              className="w-full h-full bg-white p-[4px] sm:p-[6px]"
              style={{
                borderTopLeftRadius: "0px",
                borderBottomLeftRadius: "9999px",
                borderTopRightRadius: "9999px",
                borderBottomRightRadius: "9999px",
              }}
            >
              {/* Inner content with gradient background */}
              <div
                className="w-full h-full bg-gradient-to-b from-[#4338ca] to-[#7c2d12] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8"
                style={{
                  borderTopLeftRadius: "0px",
                  borderBottomLeftRadius: "9999px",
                  borderTopRightRadius: "9999px",
                  borderBottomRightRadius: "9999px",
                }}
              >
                <h2 className="text-white text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight mb-1 sm:mb-2">
                  Fragmented
                </h2>
                <p className="text-white text-sm sm:text-base lg:text-lg font-light leading-tight">
                  tools & workflows for
                  <br />
                  provisioning & cost
                  <br />
                  control
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
