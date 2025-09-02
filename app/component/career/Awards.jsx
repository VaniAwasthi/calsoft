"use client";

import React from "react";
import Image from "next/image";
import Award_1 from "../../assets/career/award_1.webp";
import Award_2 from "../../assets/career/award_2.webp";
import Award_3 from "../../assets/career/award_3.webp";
import Award_4 from "../../assets/career/award_4.webp";
import { motion } from "framer-motion";

export default function Awards() {
  const awards = [Award_1, Award_2, Award_3, Award_4];
  return (
    <div className="w-full h-56 bg-[#2E3092] px-16 py-12">
      <div className="flex justify-center gap-16 overflow-x-auto w-full no-scrollbar">
        {awards.map((award, idx) => (
          <motion.div
            key={idx}
            className="flex-shrink-0" // prevents items from shrinking
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <Image src={award} alt={`award_${idx}`} className="h-24 w-auto" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
