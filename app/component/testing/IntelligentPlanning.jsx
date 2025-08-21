"use client";

import React from "react";
import ButtonLayout from "../utilities/ButtonLayout";
import buttonImage from "../../assets/home/buttonImg.webp";
import { motion } from "framer-motion";

export default function IntelligentPlanning({
  data=[
    {
      title: "Automated regression suites for UI, API, and business logicad Rationalization",
      subTitle:
        null,
    },
    {
      title: "Test data generation, version control, and environment isolation",
      subTitle: null,
    },
    {
      title: "Change-aware test triggers via Git-based automation",
      subTitle: null,
    },
    {
      title: "Test suite optimization with tagging, parallelization, and prioritization",
      subTitle: null,
    },
    {
      title: "Continuous regression validation as part of CI/CD workflows",
      subTitle: null,
    },
  ],
  title="Move What Matters, Not Just What Exists",
  description=" We don’t just move workloads — we evaluate, prioritize, and engineer them for performance and ROI. Calsoft’s approach includes:",
}) {
  
  return (
    <div className="container">
      <div className="h-8" />
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-3 bg-[linear-gradient(to_right,#2E3092_5%,#ED1C24_18%)] bg-clip-text text-transparent leading-16">
          Intelligent Planning
        </h1>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-5">
          <div className="max-w-2xl">
            <h2 className="text-[#000000] text-3xl font-bold mb-4">
              {title}
            </h2>
            <p className="text-[#000000] text-lg leading-relaxed">
              {description}
            </p>
          </div>

          <ButtonLayout
            text={"Get a Free 6R Analysis Report"}
            image={buttonImage}
            hoverImage={buttonImage}
            className={" whitespace-nowrap"}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 gap-y-9">
        {data.map((ele, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
            className={`p-6 space-y-4 text-center shadow-xl hover:shadow-[0_20px_25px_-5px_#ba0007,_0_10px_10px_-5px_#ba0007] hover:bg-[#2E3092] hover:text-white bg-[#f9f9f9] rounded-lg transition-all`}
          >
            <p className="text-2xl font-bold">{ele.title}</p>
            <p className="text-lg">{ele.subTitle}</p>
          </motion.div>
        ))}
      </div>
      <div className="h-10" />
    </div>
  );
}
