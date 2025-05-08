"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Purplewave from "../../../assets/industries/hitech/Purplewave.svg";
import GrayWave from "../../../assets/industries/hitech/GrayWave.svg";

export default function IndustryIntelligence({
  MobileImg,
  icons,
  Gradientheading,
  BlackHeading,
  headingClass,
  contentClass,
}) {
  return (
    <section className="py-3 md:py-16 px-4 sm:px-8 lg:px-16 bg-white relative overflow-hidden">
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-[300px] md:w-full text-left md:text-center text-xl sm:text-[38px] font-medium text-black md:mb-12 leading-relaxed"
      >
        <span className=" px-2 font-semibold bg-[linear-gradient(to_right,#2E3092_25%,#ED1C24_88%)] bg-clip-text text-transparent">
          {Gradientheading}
        </span>
        {BlackHeading}
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
            className="absolute top-1 left-0 w-full h-auto z-10"
          />

          {/* Purple wave (front) */}
          <Image
            src={Purplewave}
            alt="Purple Wave"
            width={1200}
            height={180}
            className="absolute top-1 left-0 w-full h-auto z-10"
          />

          {/* Icon*/}
          <div className="absolute top-0 left-10 w-full h-full z-100">
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
                  alt={item.title}
                  height={70}
                  width={70}
                  className={`${item.positionClass} md:w-10  xl:w-20  `}
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
          className={`relative w-full ${contentClass} bg-gradient-to-t from-[#D9D9D9] to-[#F8F9FA] `}
          style={{
            border: "3px solid",
            borderTop: "0",
            borderImageSource:
              "linear-gradient(180deg, rgba(46, 48, 146, 0) 0%, #2E3092 100%)",
            borderImageSlice: 1,
          }}
        >
          {icons.map((item, index) => (
            <div
              key={index}
              className="absolute flex flex-col items-center text-center  xl:my-8  w-[160px] xl:w-[200px]"
              style={{
                left: `${index * 20 + 10}%`,
                transform: "translateX(-50%)",
              }}
            >
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.3 }}
                className={`px-2 text-base md:text-sm lg:text-md font-semibold text-[#2e2c91] md:mt-4 lg:mt-16  ${headingClass}`}
              >
                {item.title}
              </motion.h3>

              <div className="grid grid-cols-[auto_2px] items-center gap-4 xl:mb-[2rem] md:px-2">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="text-xs sm:text-[12px]"
                >
                  {item.desc}
                </motion.p>

                {/* Vertical Divider - only if not last item */}
                {index !== icons.length - 1 && (
                  <div className="h-10 bg-[#091D60] w-0.5 "></div>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      {/* Mobile View  */}
      <div className="relative w-full flex justify-center mt-6 md:hidden">
        <div className="relative w-[250px] h-[500px]">
          {/* Center Image */}
          <Image
            src={MobileImg}
            alt="Timeline Graphic"
            fill
            className="object-contain"
          />

          {/* Overlay Labels */}
          <div className="absolute inset-0 flex flex-col justify-around">
            {icons.map((item, idx) => (
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
                  initial={{
                    x: item.position === "left" ? -50 : 50,
                    opacity: 0,
                  }}
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
    </section>
  );
}
