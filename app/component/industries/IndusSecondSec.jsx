"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import left1 from "../../assets/industries/left1.svg";
import left2 from "../../assets/industries/linenew.svg";
import left3 from "../../assets/industries/linenew.svg";
import left4 from "../../assets/industries/left4.svg";

import right1 from "../../assets/industries/right1.svg";
import right2 from "../../assets/industries/linenew.svg";
import right3 from "../../assets/industries/linenew.svg";
import right4 from "../../assets/industries/right4.svg";

import DataProduct from "../../assets/industries/DataProduct.webp";
import DataArtificial from "../../assets/industries/DataArtificial.webp";

import LeftIcon1 from "../../assets/industries/leftIcon1.svg";
import LeftIcon2 from "../../assets/industries/leftIcon2.svg";
import LeftIcon3 from "../../assets/industries/leftIcon3.svg";
import LeftIcon4 from "../../assets/industries/leftIcon4.svg";

import RightIcon1 from "../../assets/industries/rightIcon1.svg";
import RightIcon2 from "../../assets/industries/rightIcon2.svg";
import RightIcon3 from "../../assets/industries/rightIcon3.svg";
import RightIcon4 from "../../assets/industries/rightIcon4.svg";
import firstLine from "../../assets/industries/firstLine.svg";
import secondLine from "../../assets/industries/SecondLine.svg";
import thirdLine from "../../assets/industries/thirdLine.svg";
import fourthLine from "../../assets/industries/fourthLine.svg";
const leftItems = [
  {
    icon: LeftIcon1,
    label: "Product Dev",
    line: firstLine,
    boxPosition: "translate-x-[-124px] translate-y-[-15px]",
    linePosition: "translate-x-[-80px] translate-y-[-80px]",
  },
  {
    icon: LeftIcon2,
    label: "Ecosystem integration",
    line: secondLine,
    boxPosition: "translate-x-[-120px] translate-y-[56px]",
    linePosition: "translate-x-[-74px] translate-y-[-51px]",
  },
  {
    icon: LeftIcon3,
    label: "Testing & DevOps",
    line: thirdLine,
    boxPosition: "translate-x-[125px] translate-y-[-15px]",
    linePosition: "translate-x-[40px] translate-y-[-80px]",
  },
  {
    icon: LeftIcon4,
    label: "CloudOps & Virtualization",
    line: fourthLine,
    boxPosition: "translate-x-[125px] translate-y-[56px]",
    linePosition: "translate-x-[31px] translate-y-[-53px]",
  },
];

const leftLines = [
  {
    line: left1,
    translateProps: "translate-x-[3px] translate-y-[116px]",
  },
  {
    line: left2,
    translateProps: "translate-x-[-21px] translate-y-[233px]",
  },
  {
    line: left3,
    translateProps: "translate-x-[-21px] translate-y-[335px]",
  },
  {
    line: left4,
    translateProps: "translate-x-[18px] translate-y-[370px]",
  },
];
const rightLines = [
  { line: right1, translateProps: "translate-x-[-22px] translate-y-[95px]" },
  { line: right2, translateProps: "translate-x-[27px] translate-y-[225px]" },
  { line: right3, translateProps: "translate-x-[27px] translate-y-[323px]" },
  { line: right4, translateProps: "translate-x-[-9px] translate-y-[349px]" },
];

const rightItems = [
  {
    icon: RightIcon1,
    label: "AI and ML",
    line: firstLine,
    boxPosition: "translate-x-[-124px] translate-y-[-15px]",
    linePosition: "translate-x-[-80px] translate-y-[-80px]",
  },
  {
    icon: RightIcon2,
    label: "Data engineering",
    line: secondLine,
    boxPosition: "translate-x-[-120px] translate-y-[56px]",
    linePosition: "translate-x-[-74px] translate-y-[-51px]",
  },
  {
    icon: RightIcon3,
    label: "Analytics / Visualization",
    line: thirdLine,
    boxPosition: "translate-x-[125px] translate-y-[-15px]",
    linePosition: "translate-x-[40px] translate-y-[-80px]",
  },
  {
    icon: RightIcon4,
    label: "Data Ops/Management",
    line: fourthLine,
    boxPosition: "translate-x-[125px] translate-y-[56px]",
    linePosition: "translate-x-[31px] translate-y-[-53px]",
  },
];

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

export default function IndustryIntelligence() {
  return (
    <div className="bg-[#F8F9FA]">
      <section className="container mx-auto px-4 xl:px-20 relative py-16 overflow-hidden  ">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl md:text-3xl text-black font-semibold mb-16 mt-10"
        >
          <span className="font-semibold bg-[linear-gradient(to_right,#2E3092_25%,#ED1C24_88%)] bg-clip-text text-transparent">
            All our industry intelligence
          </span>
          – AI-refined for ready-to-go perfection
        </motion.h2>

        <div className="relative hidden md:grid grid-cols-1 md:grid-cols-3  gap-4 z-10">
          {/* Left Points */}
          <div className="space-y-8 flex flex-col items-center relative mb-8">
            {leftItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.3 + index * 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                variants={fadeIn(0.6 + index * 0.2)}
                className="flex items-center gap-4 bg-[#2E3092] text-white px-4 py-4 rounded-full w-56 h-16 z-10"
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={30}
                  height={30}
                />
                <span className="text-sm md:text-base">{item.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Center Images */}
          <div className="flex gap-4 items-center justify-center relative">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeIn(1.2)}
              className="relative w-[400px] h-[200px] rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={DataProduct}
                alt="Digital Product Engineering"
                fill
                className="object-cover brightness-75"
              />
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-center p-4">
                Digital
                <br />
                Product
                <br />
                Engineering
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeIn(1.2)}
              className="relative w-[400px] h-[200px] rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={DataArtificial}
                alt="Data and AI"
                fill
                className="object-cover brightness-75"
              />
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-center p-4">
                Data and
                <br />
                Artificial
                <br />
                Intelligence
              </div>
            </motion.div>
          </div>

          {/* Right Points */}
          <div className="space-y-8 flex flex-col items-center relative">
            {rightItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.2 + index * 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                variants={fadeIn(0.6 + index * 0.4)}
                className="flex items-center gap-4 bg-[#2E3092] text-white px-4 py-4 rounded-full w-56 h-16 z-10"
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={30}
                  height={30}
                />
                <span className="text-sm md:text-base">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dotted Line Connectors */}
        <motion.div className="hidden md:block absolute inset-0 z-0 pointer-events-none">
          {/* Left SVGs */}
          {leftLines.map((line, idx) => (
            <motion.div
              key={idx}
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.2 + idx * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeIn(0.6 + idx * 0.2)}
            >
              <Image
                key={`left-${idx}`}
                src={line.line}
                alt={`left-line-${idx}`}
                width={110}
                height={30}
                className={`absolute left-[29%] top-[10%] ${line.translateProps}`}
              />
            </motion.div>
          ))}

          {/* Right SVGs */}
          {rightLines.map((line, idx) => (
            <motion.div
              key={idx}
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: idx * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeIn(0.6 + idx * 0.2)}
            >
              <Image
                key={idx}
                src={line.line}
                alt="Image"
                width={120}
                height={30}
                className={`absolute right-[29%] top-[10%]  ${line.translateProps}`}
              />
            </motion.div>
          ))}
        </motion.div>
        {/* for mobile */}
        <div className="block md:hidden relative py-5 px-6">
          {/* Top Section */}
          <div className="relative justify-center items-center z-10">
            <Image
              src={DataProduct}
              alt="Digital Product Engineering"
              width={300}
              height={300}
              className="rounded-lg w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center w-full rounded-lg">
              <h2 className="text-white text-2xl font-bold text-center">
                Digital Product <br /> Engineering
              </h2>
            </div>
          </div>

          {/* Lines + Service Boxes */}
          <div className="relative  h-[200px] flex justify-center items-center">
            {leftItems.map((item, index) => (
              <>
                <div className={`absolute ${item.linePosition}`} key={index}>
                  <Image src={item.line} alt="Line" width={100} height={100} />
                </div>

                {/* Box */}
                <div
                  className={`absolute ${item.boxPosition} bg-[#1C2B6B] text-white p-2 rounded-4xl flex items-center gap-2 shadow-md w-36 h-14`}
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={30}
                    height={30}
                  />
                  <span className="text-wrap text-xs">{item.label}</span>
                </div>
              </>
            ))}
          </div>
          <div className="relative justify-center items-center z-10">
            <Image
              src={DataArtificial}
              alt="Digital Product Engineering"
              width={300}
              height={300}
              className="rounded-lg w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center w-full rounded-lg">
              <h2 className="text-white text-2xl font-bold text-center">
                Data and Artificial <br /> Intelligence
              </h2>
            </div>
          </div>

          {/* Lines + Service Boxes */}
          <div className="relative  h-[200px] flex justify-center items-center">
            {rightItems.map((item, index) => (
              <>
                <div className={`absolute ${item.linePosition}`} key={index}>
                  <Image src={item.line} alt="Line" width={100} height={100} />
                </div>

                {/* Box */}
                <div
                  className={`absolute ${item.boxPosition} bg-[#1C2B6B] text-white p-2 rounded-4xl flex items-center gap-2 shadow-md w-[170px] h-14`}
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={30}
                    height={30}
                  />
                  <span className="text-wrap text-xs">{item.label}</span>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
