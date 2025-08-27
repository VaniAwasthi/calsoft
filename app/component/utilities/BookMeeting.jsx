"use client";

import React from "react";
import predict from "@/app/assets/infra/predictibility.webp";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BookMeeting({
  img = predict,
  title = "Build scalable infra plans with 40% cost predictability.",
  desc = null,
  buttonText = "Book a Meeting",
  titleClass = "",
}) {
  return (
    <div className="w-full h-72 2xs:h-60 md:h-40 relative rounded-xl overflow-hidden mt-10">
      <Image src={img} alt="image" className="w-full h-full object-cover" />
      <div className="absolute top-0 w-full h-full bg-[#2e309293] bg-[linear-gradient(90deg,rgba(46,48,146,0.7)_0%,rgba(46,48,146,0.5)_60%,rgba(255,255,255,0)_100%)] text-white">
        <div className="w-full h-full flex flex-col md:flex-row justify-center md:justify-between items-start md:items-center gap-5  md:m-0 p-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col items-start justify-center"
          >
            <p className="text-3xl md:text-4xl font-medium">{title}</p>
            {desc && <p>{title}</p>}
          </motion.div>
          <motion.button
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-lg md:text-xl font-medium px-6 py-2.5 bg-[#BA0007] rounded-lg whitespace-nowrap"
          >
            {buttonText}
          </motion.button>
        </div>
      </div>
    </div>
  );
}
