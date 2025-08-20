"use client";

import React from "react";
import Vision from "../../assets/about-us/Vision.webp";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WeWork() {
  return (
    <div className="container mx-auto my-10">
      <div className="w-full md:h-[24rem] lg:h-[22rem] xl:h-[20rem] bg-[#ECF3FF] rounded-lg flex justify-between md:flex-row flex-col-reverse px-8 md:px-0">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="md:w-[50%] lg:w-[40%] md:pl-14 py-10 lg:py-16 space-y-8"
        >
          <p className="text-4xl text-[#2E3092] font-medium">Vision</p>
          <div className="text-lg">
            <p className="w-[80%]">
              To enable businesses to build and scale resilient digital
              platforms and solutions, backed by cutting-edge technology to
              create a lasting impact
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="h-56 px- md:w-[50%] lg:w-[60%] md:h-full mt-10 md:mt-0"
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/OzO-2LZv4kk?si=Hylk0zNjDGLH8oc-"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="sm:h-full h-72 sm:w-full w-fit"
          ></iframe>
        </motion.div>
      </div>
      <div className="h-8" />
    </div>
  );
}
