"use client";

import React from "react";
import ButtonLayout from "../utilities/ButtonLayout";
import buttonImage from "../../assets/home/buttonImg.webp";
import { motion } from "framer-motion";
import Image from "next/image";
import img from "@/app/assets/sustenance/Intelligent_planning.webp";

export default function IntelligentPlanning({
  data = [
    {
      title: "Define KPIs",
      subTitle: "across performance, stability, cost, and scalability",
    },
    {
      title: "Identify workloads,",
      subTitle: "endpoints, and APIs to be benchmarked",
    },
    {
      title: "Run synthetic workloads",
      subTitle: "that simulate real usage scenarios",
    },
    {
      title: "Benchmark across",
      subTitle: "infra layers (app, DB, network, edge)",
    },
    {
      title: "Use A/B or pre-post models",
      subTitle: "to compare tech stacks or deployments",
    },
    // {
    //   title: "Map against SLAs,",
    //   subTitle: "industry standards, or competitor data if available",
    // },
  ],
  title = "Intelligent Planning",
  heading = "Move What Matters, Not Just What Exists",
  description = " We don’t just move workloads — we evaluate, prioritize, and engineer them for performance and ROI. Calsoft’s approach includes:",
  buttonText = "Request POC",
  bottomContent = {
    text: "We create docs that are version-controlled, searchable, modular, and traceable.",
    btnText: "Request POC",
  },
}) {
  return (
    <div
      id="intelligent-planning"
      className={`w-full relative z-0 ${bottomContent && "bg-[#f9f9f9]"}`}
    >
      <div className="h-8" />
      <div className="absolute top-0 -z-10 h-96 w-full">
        <div className="bg-[#0000007e] w-full h-full z-0 absolute top-0" />
        <Image
          src={img}
          alt="intelligent_planning"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="space-y-8 container z-20">
        <div className="text-white">
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-4xl font-bold mb-3 leading-16"
          >
            {title}
          </motion.h1>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-5">
            <div className="max-w-2xl">
              <motion.h2
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: false, amount: 0.3 }}
                className=" text-3xl font-bold mb-4"
              >
                {heading}
              </motion.h2>
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: false, amount: 0.3 }}
                className=" text-lg leading-relaxed"
              >
                {description}
              </motion.p>
            </div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              {bottomContent ? (
                <div className="flex justify-center items-center gap-5">
                  <button
                    // onClick={scrollLeft}
                    // disabled={!canScrollLeft}
                    className={`transition-opacity duration-200 ${
                      // !canScrollLeft
                      true
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:opacity-80"
                    }`}
                  >
                    <svg
                      width="55"
                      height="55"
                      viewBox="0 0 55 55"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.0971 0.0014059C42.0386 0.00140685 54.1934 12.1556 54.1934 27.0964C54.1934 42.0372 42.0386 54.1914 27.0971 54.1914C12.1555 54.1914 0.000764324 42.0372 0.000766026 27.0964C0.000767728 12.1556 12.1555 0.00140495 27.0971 0.0014059ZM27.0971 52.3545C41.0246 52.3545 52.3563 41.0242 52.3563 27.0964C52.3563 13.1687 41.0246 1.83836 27.0971 1.83835C13.1696 1.83835 1.8378 13.1687 1.8378 27.0964C1.8378 41.0242 13.1696 52.3545 27.0971 52.3545Z"
                        fill="#2E3092"
                      />
                      <path
                        d="M30.446 18.4886L31.7429 19.7901L24.3911 27.1112L31.7549 34.7272L30.435 36.0039L21.811 27.0874L30.446 18.4886Z"
                        fill="#2E3092"
                      />
                    </svg>
                  </button>
                  <button
                    // onClick={scrollRight}
                    // disabled={!canScrollRight}
                    className={`transition-opacity duration-200 ${
                      // !canScrollRight
                      false
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:opacity-80"
                    }`}
                  >
                    <svg
                      width="55"
                      height="55"
                      viewBox="0 0 55 55"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.9049 54.3814C12.9633 54.3814 0.808594 42.2272 0.808594 27.2864C0.808594 12.3456 12.9633 0.191406 27.9049 0.191406C42.8464 0.191406 55.0012 12.3456 55.0012 27.2864C55.0012 42.2272 42.8464 54.3814 27.9049 54.3814ZM27.9049 2.02836C13.9774 2.02836 2.64563 13.3587 2.64563 27.2864C2.64563 41.2142 13.9774 52.5445 27.9049 52.5445C41.8324 52.5445 53.1642 41.2142 53.1642 27.2864C53.1642 13.3587 41.8324 2.02836 27.9049 2.02836Z"
                        fill="#2E3092"
                      />
                      <path
                        d="M24.556 35.8981L23.259 34.5966L30.6108 27.2755L23.2471 19.6595L24.567 18.3828L33.191 27.2994L24.556 35.8981Z"
                        fill="#2E3092"
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                <ButtonLayout
                  text={buttonText}
                  image={buttonImage}
                  hoverImage={buttonImage}
                  className={"whitespace-nowrap"}
                />
              )}
            </motion.div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 gap-y-9">
          {data.map((ele, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              className={`p-6 space-y-4 text-center shadow-[0_10px_10px_-5px_#ba0007,_0_10px_10px_-5px_#ba0007] hover:bg-[linear-gradient(to_bottom,#2E3092_60%,#ED1C24_105%)] hover:text-white bg-[#f9f9f9] rounded-lg transition-all`}
            >
              {ele.title && <p className="text-2xl font-bold">{ele.title}</p>}
              {ele.subTitle && <p className="text-lg">{ele.subTitle}</p>}
            </motion.div>
          ))}
        </div>
        {bottomContent && (
          <div className="flex justify-center lg:items-center mt-10 lg:flex-row flex-col items-start">
            <p className="text-2xl font-semibold w-10/12">
              {bottomContent.text}
            </p>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <ButtonLayout
                text={bottomContent.btnText}
                image={buttonImage}
                hoverImage={buttonImage}
                className={"whitespace-nowrap"}
              />
            </motion.div>
          </div>
        )}
      </div>
      <div className="h-10" />
    </div>
  );
}
