"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CloudNativeMatters() {
  return (
    <div className="xl:w-[40rem] flex justify-center py-8">
      <div className="relative w-[750px] h-[320px]">
        {/* Top row - Slow release */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="absolute top-0 left-28 w-44 h-44 transform rotate-45 rounded-3xl border-4 border-[#ba0007] bg-[#2e3092] flex items-center justify-center hover:scale-105 transition-all"
        >
          <div className="transform -rotate-45 text-center px-4">
            <h3 className="text-white text-xl font-bold mb-2 leading-tight">
              Slow release
            </h3>
            <p className="text-white text-sm opacity-90 leading-tight">
              cycles despite CI/CD pipelines
            </p>
          </div>
        </motion.div>

        {/* Top row - Toolchain */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="absolute top-0 right-28 w-44 h-44 transform rotate-45 rounded-3xl border-4 border-[#ba0007] bg-[#2e3092] flex items-center justify-center hover:scale-105 transition-all"
        >
          <div className="transform -rotate-45 text-center px-4">
            <h3 className="text-white text-xl font-bold mb-2 leading-tight">
              Toolchain
            </h3>
            <p className="text-white text-sm opacity-90 leading-tight">
              sprawl without governance
            </p>
          </div>
        </motion.div>

        {/* Bottom row - Tightly */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="absolute bottom-0 -left-2 w-44 h-44 transform rotate-45 rounded-3xl border-4 border-[#ba0007] bg-[#2e3092] flex items-center justify-center hover:scale-105 transition-all"
        >
          <div className="transform -rotate-45 text-center px-3">
            <h3 className="text-white text-xl font-bold mb-2 leading-tight">
              Tightly
            </h3>
            <p className="text-white text-sm opacity-90 leading-tight">
              coupled legacy apps lifted into containers without re-architecture
            </p>
          </div>
        </motion.div>

        {/* Bottom row - Toolchain (center) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="absolute bottom-0 left-1/2 -ml-22 w-44 h-44 transform rotate-45 rounded-3xl border-4 border-[#ba0007] bg-[#2e3092] flex items-center justify-center hover:scale-105 transition-all"
        >
          <div className="transform -rotate-45 text-center px-4">
            <h3 className="text-white text-xl font-bold mb-2 leading-tight">
              Toolchain
            </h3>
            <p className="text-white text-sm opacity-90 leading-tight">
              sprawl without governance
            </p>
          </div>
        </motion.div>

        {/* Bottom row - Security */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="absolute bottom-0 -right-2 w-44 h-44 transform rotate-45 rounded-3xl border-4 border-[#ba0007] bg-[#2e3092] flex items-center justify-center hover:scale-105 transition-all"
        >
          <div className="transform -rotate-45 text-center px-3">
            <h3 className="text-white text-xl font-bold mb-2 leading-tight">
              Security
            </h3>
            <p className="text-white text-sm opacity-90 leading-tight">
              blind spots across runtime environments
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
