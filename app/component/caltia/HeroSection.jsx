"use client";

import React from "react";
import Image from "next/image";
import HeroImg from "@/app/assets/caltia/HeroImg.webp";
import ButtonLayout from "../utilities/ButtonLayout";
import buttonImage from "@/app/assets/home/buttonImg.webp";
import { motion } from "framer-motion";

export default function HeroSection({
  data = [
    {
      title: "15%",
      desc: "Faster\n GTM",
    },
    {
      title: "36%",
      desc: "Reduced\n Infrastructure Cost",
    },
    {
      title: "40%",
      desc: "Faster Test\n Cycles",
    },
  ],
  heading = "AI-Driven Testing Solution",
  desc = "Optimize Testing and Accelerate Your GTM with On-Prem AI-Driven Regression Testing and Test Automation Services.",
  buttonText = "Request a Case Study",
}) {
  return (
    <div className="relative flex justify-center h-[50rem] lg:h-[30rem] text-white">
      <div className="absolute top-0 w-full h-full bg-[linear-gradient(90deg,rgba(14,14,18,1)_40%,rgba(255,255,255,0)_55%)]"></div>
      <div className="w-[40%]"></div>
      <Image src={HeroImg} alt="Caltia hero_section" className="w-[60%]" />
      <div className="absolute top-0 h-full flex flex-col justify-center gap-9 container">
        <div className="space-y-6">
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-[55px] font-semibold"
          >
            {heading}
          </motion.p>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
            className="sm:text-lg w-1/2"
          >
            {desc}
          </motion.p>
        </div>
        <div className="flex lg:flex-row flex-col gap-8">
          {data.map((ele, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex lg:flex-row flex-col gap-8"
            >
              <div className="flex gap-5">
                <p className="text-[45px] font-semibold">{ele.title}</p>
                <p className="text-lg whitespace-pre-line">{ele.desc}</p>
              </div>
              {data.length - 1 !== idx && (
                <>
                  <div className="w-px h-[60%] self-center bg-white lg:block hidden" />
                  <div className="w-28 ml-10 h-px bg-white lg:hidden" />
                </>
              )}
            </motion.div>
          ))}
        </div>
        <ButtonLayout
          text={buttonText}
          image={buttonImage}
          hoverImage={buttonImage}
          className={"w-fit"}
        />
      </div>
    </div>
  );
}
