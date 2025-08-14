"use client";

import React from "react";
import ButtonLayout from "../../utilities/ButtonLayout";
import buttonImage from "../../../assets/home/buttonImg.webp";
import { motion } from "framer-motion";

export default function WhyItMatters() {
  return (
    <>
      <div className="m-8 lg:m-12 my-8 mb-0 container">
        <div className="h-8 lg:h-12" />
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
                  Debunking Cloud-Native Myths
                </motion.p>
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="space-y-6 text-black text-lg leading-relaxed"
                >
                  <p>
                    For most enterprises, “cloud-native” remains aspirational —
                    often misunderstood as just container adoption. In reality,
                    incomplete strategies lead to:
                  </p>
                  <p className="font-medium">
                    Calsoft ensures true cloud-native enablement by aligning
                    architecture, engineering practices, security, and
                    operations — at scale.
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

            <div className="w-full max-w-lg mx-auto p-4 pt-0">
              <div className="grid grid-cols-2 gap-3">
                {/* Top Left - Lift-and-shift pitfalls */}
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="relative w-full aspect-square"
                >
                  {/* Red background shape */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "#ba0007",
                      borderRadius: "50% 50% 0% 50%",
                    }}
                  />
                  {/* Blue circular content */}
                  <div
                    className="absolute top-0 left-0 right-4 bottom-4 rounded-full flex flex-col items-center justify-center text-center p-6"
                    style={{
                      background: "#2e3092",
                      color: "#ffffff",
                    }}
                  >
                    <h3 className="text-xl font-bold mb-1 leading-tight">
                      Lift-and-shift pitfalls
                    </h3>
                    <p className="opacity-90 leading-relaxed">
                      with bloated costs and poor performance
                    </p>
                  </div>
                  {/* Quarter circle at sharp corner */}
                  <div
                    className="absolute bottom-0 right-0 w-8 h-8"
                    style={{
                      background: "#2e3092",
                      borderRadius: "100% 0 0 0",
                    }}
                  />
                </motion.div>

                {/* Top Right - Downtime Risk */}
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="relative w-full aspect-square"
                >
                  {/* Red background shape */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "#ba0007",
                      borderRadius: "50% 50% 50% 0%",
                    }}
                  />
                  {/* Blue circular content */}
                  <div
                    className="absolute top-0 left-4 right-0 bottom-4 rounded-full flex flex-col items-center justify-center text-center p-6"
                    style={{
                      background: "#2e3092",
                      color: "#ffffff",
                    }}
                  >
                    <h3 className="text-xl font-bold mb-1 leading-tight">
                      Downtime Risk
                    </h3>
                    <p className="opacity-90 leading-relaxed">
                      due to unplanned cutovers or rollback loops
                    </p>
                  </div>
                  {/* Quarter circle at sharp corner */}
                  <div
                    className="absolute bottom-0 left-0 w-8 h-8"
                    style={{
                      background: "#2e3092",
                      borderRadius: "0 100% 0 0",
                    }}
                  />
                </motion.div>

                {/* Bottom Left - Inconsistent security */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="relative w-full aspect-square"
                >
                  {/* Red background shape */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "#ba0007",
                      borderRadius: "50% 0% 50% 50%",
                    }}
                  />
                  {/* Blue circular content */}
                  <div
                    className="absolute top-4 left-0 right-4 bottom-0 rounded-full flex flex-col items-center justify-center text-center p-6"
                    style={{
                      background: "#2e3092",
                      color: "#ffffff",
                    }}
                  >
                    <h3 className="text-xl font-bold mb-1 leading-tight">
                      Inconsistent security
                    </h3>
                    <p className="opacity-90 leading-relaxed">
                      models across migrated workloads
                    </p>
                  </div>
                  {/* Quarter circle at sharp corner */}
                  <div
                    className="absolute top-0 right-0 w-8 h-8"
                    style={{
                      background: "#2e3092",
                      borderRadius: "0 0 0 100%",
                    }}
                  />
                </motion.div>

                {/* Bottom Right - Inadequate workload */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="relative w-full aspect-square"
                >
                  {/* Red background shape */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "#ba0007",
                      borderRadius: "0% 50% 50% 50%",
                    }}
                  />
                  {/* Blue circular content */}
                  <div
                    className="absolute top-4 left-4 right-0 bottom-0 rounded-full flex flex-col items-center justify-center text-center p-6"
                    style={{
                      background: "#2e3092",
                      color: "#ffffff",
                    }}
                  >
                    <h3 className="text-xl font-bold mb-1 leading-tight">
                      Inadequate workload
                    </h3>
                    <p className="opacity-90 leading-relaxed">
                      classification leading to misalignment of cloud-native
                      benefits
                    </p>
                  </div>
                  {/* Quarter circle at sharp corner */}
                  <div
                    className="absolute top-0 left-0 w-8 h-8"
                    style={{
                      background: "#2e3092",
                      borderRadius: "0 0 100% 0",
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-8 lg:h-12" />
      </div>
    </>
  );
}
