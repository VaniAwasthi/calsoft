"use client";
import Image from "next/image";
import ZigzagImage from "../../assets/home/zigzag.png"; // Your zigzag background
import { motion } from "framer-motion";

const labels = [
  { text: "Architect", translateprop: "translate-x-[33px] translate-y-[10px]" },
  {
    text: "Engineer + Modernize",
    translateprop: "translate-x-[-70px] translate-y-[10px]",
  },
  {
    text: "Secure Apps & Data",
    translateprop: "translate-x-[70px] translate-y-[10px]",
  },
  {
    text: "Scale + Deploy",
    translateprop: "translate-x-[-80px] translate-y-[-5px]",
  },
  {
    text: "Updates + Support",
    translateprop: "translate-x-[48px] translate-y-[-3px]",
  },
];

export default function JourneySectionMobile() {
  return (
    <section className="md:hidden relative bg-[#021553] flex flex-col items-center py-3 overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
        className="mb-12 w-full px-6 text-left"
      >
        <p className="text-white text-sm mb-2">Journey</p>
        <h2 className="text-white text-3xl font-semibold">
          Innovate <span className="font-bold">at</span>
        </h2>
        <p className="text-white text-lg mt-2">
          every stage of your digital journey
        </p>
      </motion.div>

      {/* Zigzag Image */}
      <div className="relative w-[220px] h-[500px]">
        <Image
          src={ZigzagImage}
          alt="Journey Zigzag"
          layout="fill"
          objectFit="contain"
        />

        {/* Labels */}
        <div className="absolute inset-0 flex flex-col justify-around items-center">
          {labels.map((label, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-2">
              {/* Label Text */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className={`text-white text-center text-sm font-medium w-[150px] ${label.translateprop}`}
              >
                {label.text}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
