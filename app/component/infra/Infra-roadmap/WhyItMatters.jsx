"use client";

import React from "react";
import ButtonLayout from "../../utilities/ButtonLayout";
import buttonImage from "../../../assets/home/buttonImg.webp";
import { motion } from "framer-motion";

const WhyItMatters = () => {
  return (
    <>
      <div className="container">
        <div className="h-8" />
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-10">
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-4xl font-bold bg-[linear-gradient(to_right,#2E3092_0%,#ED1C24_50%)] bg-clip-text text-transparent"
              >
                Why It Matters
              </motion.p>
              <div className="space-y-6">
                <motion.p
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="text-3xl font-semibold"
                >
                  Problem + Solution Fit
                </motion.p>
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="space-y-6 text-black text-lg leading-relaxed"
                >
                  <p>
                    Most enterprises operate in a fragmented infra state — with
                    on-prem, cloud-native, and edge setups running in silos.
                    This complexity leads to:
                  </p>
                  <p>
                    Calsoft's Roadmap Approach begins with mapping your existing
                    ecosystem, identifying technical and business bottlenecks,
                    and creating a data-backed transformation baseline.
                  </p>
                </motion.div>
              </div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: false, amount: 0.3 }}
                className="mt-9"
              >
                <ButtonLayout
                  text={"Download Case Study"}
                  image={buttonImage}
                  hoverImage={buttonImage}
                  className={"w-fit shadow-2xl"}
                />
              </motion.div>
            </div>

            {/* Right Hexagonal Visualization */}
            <div className="relative w-full h-[380px] flex justify-center items-center">
              {/* Center hexagon - 2.4X */}
              {/* From left */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: false, amount: 0.3 }}
                className="absolute top-[13rem] left-[4rem] transform -translate-y-1/2 -translate-x-8"
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
          </div>
        </div>
        <div className="h-8" />
      </div>
    </>
  );
};
export default WhyItMatters;
