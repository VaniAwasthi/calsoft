"use client";

import React from "react";
import { motion } from "framer-motion";

export default function InfraRoadmapMatters() {
  return (
    <div className="relative w-[30.6rem] h-[380px] flex justify-center items-center">
      {/* Center hexagon - 2.4X */}
      {/* From left */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: false, amount: 0.3 }}
        className="absolute top-[13rem] left-[0rem] transform -translate-y-1/2 -translate-x-8"
      >
        <div
          className="hexagon bg-gradient-to-b from-[#2e3092] to-[#6b4fb8] text-white flex flex-col items-center justify-center text-center"
          style={{
            width: "200px",
            height: "200px",
            clipPath:
              "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
          }}
        >
          <div className="text-4xl font-bold mb-2">2.4X</div>
          <div className="text-sm leading-tight px-4">
            increase in rework
            <br />
            cost due to lack of
            <br />
            interoperability
          </div>
        </div>
      </motion.div>

      {/* Top right hexagon - 30% redundant tools */}
      {/* From Top */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: false, amount: 0.3 }}
        className="absolute top-0 right-40"
      >
        <div
          className="hexagon bg-gradient-to-b from-[#2e3092] to-[#4a4fb8] text-white flex flex-col items-center justify-center text-center"
          style={{
            width: "200px",
            height: "200px",
            clipPath:
              "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
          }}
        >
          <div className="text-4xl font-bold mb-2">30%</div>
          <div className="text-sm leading-tight px-4">
            from redundant tools
            <br />& inconsistent
            <br />
            provisioning
          </div>
        </div>
      </motion.div>

      {/* Right hexagon - Outage */}
      {/* From right */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: false, amount: 0.3 }}
        className="absolute top-[4.8rem] right-0 transform translate-y-8"
      >
        <div
          className="hexagon bg-gradient-to-b from-[#2e3092] to-[#8b4fb8] text-white flex flex-col items-center justify-center text-center"
          style={{
            width: "200px",
            height: "200px",
            clipPath:
              "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
          }}
        >
          <div className="text-4xl font-bold mb-2">Outage</div>
          <div className="text-sm leading-tight px-4">
            risks from aging
            <br />
            workloads on
            <br />
            brittle infra
          </div>
        </div>
      </motion.div>

      {/* Bottom hexagon - 30% fail */}
      {/* From bottom */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: false, amount: 0.3 }}
        className="absolute -bottom-[2rem] right-48 transform translate-x-8"
      >
        <div
          className="hexagon bg-gradient-to-b from-[#6b4fb8] to-[#ba0007] text-white flex flex-col items-center justify-center text-center"
          style={{
            width: "200px",
            height: "200px",
            clipPath:
              "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
          }}
        >
          <div className="text-4xl font-bold mb-2">30%</div>
          <div className="text-sm leading-tight px-4">
            fail due to
            <br />
            wrong stack
          </div>
        </div>
      </motion.div>
    </div>
  );
}
