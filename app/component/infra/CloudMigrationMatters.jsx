"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CloudMigrationMatters() {
  return (
    <div className="w-[31rem] xl:w-full mx-auto p-4 py-0">
      <div className="grid grid-cols-2 gap-3">
        {/* Top Left - Lift-and-shift pitfalls */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="relative w-full aspect-square hover:scale-105 transition-all"
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
          className="relative w-full aspect-square hover:scale-105 transition-all"
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
          className="relative w-full aspect-square hover:scale-105 transition-all"
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
          className="relative w-full aspect-square hover:scale-105 transition-all"
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
              classification leading to misalignment of cloud-native benefits
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
  );
}
