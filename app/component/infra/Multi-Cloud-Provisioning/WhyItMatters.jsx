"use client";

import React from "react";
import ButtonLayout from "../../utilities/ButtonLayout";
import buttonImage from "../../../assets/home/buttonImg.webp";
import { motion } from "framer-motion";

export default function WhyItMatters() {
  return (
    <div className="p-8 lg:p-12 py-8 pb-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-10">
            <p className="text-4xl font-bold bg-[linear-gradient(to_right,#2E3092_0%,#ED1C24_50%)] bg-clip-text text-transparent">
              Why It Matters
            </p>
            <div className="space-y-6">
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-3xl font-semibold"
              >
                Multi-Cloud Without Governance = Risk
              </motion.p>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
                className="space-y-6 text-black text-lg leading-relaxed"
              >
                <p>
                  Most enterprises today operate in multi-cloud by accident, not
                  by design. Teams spin up resources on AWS, Azure, or GCP to
                  meet speed needs — but without centralized visibility or
                  governance. The result:
                </p>
                <p className="font-medium">
                  Calsoft’s approach ensures intentional, governed multi-cloud
                  provisioning — without slowing down innovation.
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

          {/* <div className="relative w-full h-[380px] flex justify-center items-center">
            <div className="absolute top-[13rem] left-[6.7rem] transform -translate-y-1/2 -translate-x-8">
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
            </div>

            <div className="absolute top-0 right-40">
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
            </div>

            <div className="absolute top-[4.8rem] right-0 transform translate-y-8">
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
            </div>

            <div className="absolute -bottom-[2rem] right-48 transform translate-x-8">
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
            </div>
          </div> */}
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
        </div>
      </div>
    </div>
  );
}
