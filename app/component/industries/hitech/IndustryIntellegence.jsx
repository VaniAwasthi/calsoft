"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Purplewave from "../../../assets/industries/hitech/Purplewave.svg";
import GrayWave from "../../../assets/industries/hitech/GrayWave.svg";
import HitechIcon1 from "../../../assets/industries/hitech/HitechIcon1.svg";
import HitechIcon2 from "../../../assets/industries/hitech/HitechIcon2.svg";
import HitechIcon3 from "../../../assets/industries/hitech/HitechIcon3.svg";
import HitechIcon4 from "../../../assets/industries/hitech/HitechIcon4.svg";
import HitechIcon5 from "../../../assets/industries/hitech/HitechIcon5.svg";
import Intellegence from "../../../assets/industries/hitech/intelegentImg.webp";
import { IndustryMobileLay } from "./IndustryMobileLay";
const icons = [
  {
    icon: HitechIcon1,
    title: "Build high-performance applications",
    desc: "Cloud-first, API-driven architectures",
    positionClass:
      "md:translate-x-[-13px] md:translate-y-[-39px] xl:translate-y-[-12px]",
    translateprop: "translate-x-[33px] translate-y-[10px]",
  },
  {
    icon: HitechIcon2,
    title: "Modernize products",
    desc: "Upgrade legacy applications for agility & security",
    positionClass:
      "translate-x-[-10px] xl:translate-y-[-18px] md:translate-y-[-39px]",
    translateprop: "translate-x-[-70px] translate-y-[10px]",
  },
  {
    icon: HitechIcon3,
    title: "Enhance automation & intelligence",
    desc: "Smarter decision making with AI and analytics",
    positionClass:
      "translate-x-[-10px] xl:translate-y-[-5px] md:translate-y-[-39px]",
    translateprop: "translate-x-[70px] translate-y-[10px]",
  },
  {
    icon: HitechIcon4,
    title: "Enable seamless integrations",
    desc: "Unified platform connectivity with full interoperability",
    positionClass:
      "translate-x-[-13px] xl:translate-y-[-6px] md:translate-y-[-39px]",
    translateprop: "translate-x-[-80px] translate-y-[-5px]",
  },
  {
    icon: HitechIcon5,
    title: "Optimize software lifecycles",
    desc: "Streamlined development, testing, & deployment",
    positionClass:
      "translate-x-[-25px] xl:translate-y-[-12px] md:translate-y-[-39px]",
    translateprop: "translate-x-[48px] translate-y-[-3px]",
  },
];

export default function ConnectedCirclesSection() {
  return (
    <section className="py-3 md:py-16 px-4 sm:px-8 lg:px-16 bg-white relative overflow-hidden">
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-[300px] md:w-full text-left md:text-center text-xl sm:text-[38px] font-medium text-black md:mb-12 leading-relaxed"
      >
        <span className=" px-2 font-semibold bg-[linear-gradient(to_right,#2E3092_25%,#ED1C24_88%)] bg-clip-text text-transparent">
          All our intelligence
        </span>
        AI-refined for ready-to-go perfection
      </motion.h2>

      {/* DESKTOP VIEW with connected circle wave */}
      <div className="relative hidden  md:block w-full max-w-[1200px] mx-auto">
        <div className="relative w-full h-[180px]">
          {/* Gray wave (behind) */}
          <Image
            src={GrayWave}
            alt="Gray Wave"
            width={1200}
            height={180}
            className="absolute top-0 left-0 w-full h-auto z-0"
          />

          {/* Purple wave (front) */}
          <Image
            src={Purplewave}
            alt="Purple Wave"
            width={1200}
            height={180}
            className="absolute top-0 left-0 w-full h-auto z-10"
          />

          {/* Icon*/}
          <div className="absolute top-0 left-10 w-full h-full z-20">
            {icons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="absolute top-8 flex flex-col items-center text-center translate-x-[-102px] translate-y-[62px] "
                style={{
                  left: `${index * 20 + 10}%`, // 10%, 30%, 50%, 70%, 90%
                  width: "160px",
                }}
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  height={70}
                  width={70}
                  className={`${item.positionClass} md:w-10  xl:w-20`}
                />
              </motion.div>
            ))}
          </div>
        </div>
        {/* Aligned text below each icon */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative w-full md:h-40 lg:h-64  "
          style={{
            border: "3px solid",
            borderImageSource:
              "linear-gradient(180deg, rgba(46, 48, 146, 0) 0%, #2E3092 100%)",
            borderImageSlice: 1,
          }}
        >
          {icons.map((item, index) => (
            <div
              key={index}
              className="absolute flex flex-col items-center text-center  xl:my-8 px-2"
              style={{
                left: `${index * 20 + 10}%`,
                transform: "translateX(-50%)",
                width: "160px",
              }}
            >
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.3 }}
                className="px-2 text-base md:text-sm lg:text-md font-semibold text-[#2e2c91] md:mt-4 lg:mt-16 mb-4 break-words md:h-10 lg:h-12 xl:h-14 line-clamp-4"
              >
                {item.title}
              </motion.h3>

              <div className="grid grid-cols-[auto_2px] items-center gap-4 xl:mb-[2rem] md:px-2">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="text-xs sm:text-xs text-gray-600"
                >
                  {item.desc}
                </motion.p>

                {/* Vertical Divider - only if not last item */}
                {index !== icons.length - 1 && (
                  <div className="h-10 bg-[#091D60] w-0.5"></div>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      {/* Mobile View  */}
      <IndustryMobileLay />
    </section>
  );
}
