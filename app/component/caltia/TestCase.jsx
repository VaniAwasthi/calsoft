"use client";

import React from "react";
import code from "@/app/assets/caltia/code.webp";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TestCase({secId}) {
  const data = [
    "On-Prem test case generation using AI for specific code change",
    "Leveraging LLMs to identify gaps in existing test suites and generate missing tests",
    "Enhanced test coverage by adding missing tests, adapting to frequent product changes, and creating new tests for validation",
    "Generate tests based on the reference architecture diagram",
    "Seamless CI/CD integration to transform continuous testing services",
  ];
  return (
    <div className="container" id={secId}>
      <div className="flex flex-col lg:flex-row gap-5 mb-12">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 space-y-4"
        >
          <p className="text-[38px] font-semibold bg-[linear-gradient(to_right,#2E3092_25%,#ED1C24_88%)] bg-clip-text text-transparent">
            Test Case Generation using AI Code and Documented Test Cases
          </p>
          <p className="text-[25px]">
            Don’t miss production defects due to gaps in testing – enhance
            coverage with Automated Regression Testing 
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 rounded-lg overflow-hidden border-2 border-[#ED1C24]"
        >
          <Image
            src={code}
            alt="code"
            className="w-full h-full object-cover aspect-video"
          />
        </motion.div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5 mb-10">
        {data.map((ele, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-5 hover:text-white bg-[#f7f7f7] hover:bg-[#2E3092] p-5 rounded-xl transition-all"
          >
            <p className="text-[97px] font-londrina">0{idx + 1}</p>
            <p className="text-lg">{ele}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
