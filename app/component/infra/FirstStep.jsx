"use client";

import Image from "next/image";
import React from "react";
import img from "../../assets/infra/FirstStep.webp";
import Guesswork from "./GuessWork";
import { motion } from "framer-motion";

export default function FirstStep({
  headerContent = {
    title1: "Take the First Step –",
    title2: "Without the Guesswork",
    description:
      "We don’t ask you to commit to a massive overhaul. Instead, we guide you step-by-step — from discovery to deployment — with zero ambiguity and measurable outcomes.",
  },
  Component = Guesswork,
}) {
  return (
    <div className="container">
      <div className="h-8" />
      <div className="grid lg:grid-cols-2 gap-5">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-8 flex-1"
        >
          <div className="text-4xl font-bold bg-[linear-gradient(to_right,#2E3092_10%,#ED1C24_28%)] bg-clip-text text-transparent mb-8 leading-[2.5rem] flex flex-col">
            <span>{headerContent.title1}</span>
            <span>{headerContent.title2}</span>
          </div>
          <p className="text-lg">{headerContent.description}</p>
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
      <Component />
    </div>
  );
}
