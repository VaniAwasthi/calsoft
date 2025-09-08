"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SmartDevelopmentMatters() {
  return (
    <div className="w-[34.5rem] h-[30rem] flex justify-center items-center relative -left-5 self-center">
      <div className="absolute top-40">
        <svg
          width="620"
          height="170"
          viewBox="0 0 550 170"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M578.633 150.334L428.378 0L412.127 16.2599L290.981 137.47L153.622 0.0387479L3.36664 150.373C-1.12221 154.86 -1.12221 162.141 3.36664 166.632C7.85549 171.12 15.1292 171.12 19.618 166.632L153.622 32.5586L290.991 170L428.378 32.5198L562.382 166.597C566.871 171.085 574.144 171.085 578.633 166.597C583.122 162.106 583.122 154.829 578.633 150.337V150.334Z"
            fill="#BA0007"
          />
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: false, amount: 0.3 }}
        className="w-48 h-48 bg-blue-800 absolute top-12 left-[12.3rem] rotate-45 rounded-lg text-white hover:scale-105 transition-all"
      >
        <div className="w-full h-full -rotate-45 text-center space-y-1.5 flex flex-col justify-center items-center p-5">
          <p className="text-3xl font-bold">70%</p>
          <p>of SaaS teams still deploy manually</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: false, amount: 0.3 }}
        className="w-48 h-48 bg-blue-800 absolute bottom-9 left-[3.6rem] rotate-45 rounded-lg text-white hover:scale-105 transition-all"
      >
        <div className="w-full h-full -rotate-45 text-center space-y-1.5 flex flex-col justify-center items-center p-5">
          <p className="text-3xl font-bold">35%</p>
          <p>infra cost wastage occurs due to static provisioning.</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: false, amount: 0.3 }}
        className="w-48 h-48 bg-blue-800 absolute bottom-9 right-[1.6rem] rotate-45 rounded-lg text-white hover:scale-105 transition-all"
      >
        <div className="w-full h-full -rotate-45 text-center flex flex-col justify-center items-center p-6 ml-2.5 mt-1.5">
          <p className="text-[29px] font-bold">30%-50%</p>
          <p className="text-[15.5px]">
            quicker rollouts for Calsoft clients, along with 40% fewer
            deployment issues
          </p>
        </div>
      </motion.div>
    </div>
  );
}
