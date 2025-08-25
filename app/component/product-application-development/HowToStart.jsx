"use client";

import React from "react";
import { motion } from "framer-motion";
import img from "../../assets/infra/FirstStep.webp";
import Image from "next/image";

export default function HowToStart({
  headerContent = {
   
    title: "Start Smart, Scale Fast",
    description:
      "Every engagement starts with a focused 2-week Architecture Sprint designed to align stakeholders, define priorities, and deconstruct risks before any code is written.",
  },
   id="",
}) {
  return (
    <div id={id} className="container">
      <div className="grid lg:grid-cols-2 gap-5 mb-10 mt-5 px-3">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-8 flex-1"
        >
          <div className="text-4xl font-bold bg-[linear-gradient(to_right,#2E3092_10%,#ED1C24_28%)] bg-clip-text text-transparent mb-8 leading-[2.5rem] flex flex-col">
            <p>How to Start</p>
          </div>
          <div className="space-y-4">
            <p className="text-3xl font-medium">{headerContent.title}</p>
            <p className="text-lg">{headerContent.description}</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Image
            src={img}
            alt="FirstStep"
            className="w-full h-72 flex-1 rounded-xl object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
