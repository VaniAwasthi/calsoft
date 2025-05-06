"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Intellegence from "../../../assets/industries/hitech/intelegentImg.webp";

const labels = [
  {
    title: "Build high-performance applications",
    position: "left",
    transformProps: "translate-x-[-55px] translate-y-[22px]",
  },
  {
    title: "Modernize products",
    position: "right",
    transformProps: "translate-x-[52px] translate-y-[22px]",
  },
  {
    title: "Enhance automation & intelligence",
    position: "left",
    transformProps: "translate-x-[-55px] translate-y-[22px]",
  },
  {
    title: "Enable seamless integrations",
    position: "right",
    transformProps: "translate-x-[52px] translate-y-[22px]",
  },
  {
    title: "Optimize software lifecycles",
    position: "left",
    transformProps: "translate-x-[-55px] translate-y-[22px]",
  },
];

export const IndustryMobileLay = () => {
  return (
    <div className="relative w-full flex justify-center mt-6 md:hidden">
      <div className="relative w-[250px] h-[500px]">
        {/* Center Image */}
        <Image
          src={Intellegence}
          alt="Timeline Graphic"
          fill
          className="object-contain"
        />

        {/* Overlay Labels */}
        <div className="absolute inset-0 flex flex-col justify-around">
          {labels.map((item, idx) => (
            <div
              key={idx}
              className={`absolute w-full ${
                item.position === "left"
                  ? "justify-start pl-1"
                  : "justify-end pr-1"
              } flex`}
              style={{ top: `${idx * 20}%` }}
            >
              <motion.p
                initial={{ x: item.position === "left" ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className={`text-[#2E3092] text-sm font-medium w-[120px] text-center ${item.transformProps}`}
              >
                {item.title}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
