"use client";

import React from "react";
import heroImage from "../../assets/about-us/Hero_image.webp";
import BannerLayout from "../utilities/BannerLayout";
import ButtonImage from "../../assets/home/buttonImg.webp";
import logo from "../../assets/about-us/logo.webp";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <motion.section
      className="relative text-white"
      style={{
        backgroundImage: `url(${heroImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" w-full h-full">
        <div className="manrope max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 sm:px-6 lg:px-8 py-16">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center max-w-md"
          >
            <Image
              src={logo}
              alt="logo"
              width={200}
              height={200}
              className="mb-5"
            />
            <h1 className="text-3xl sm:text-4xl md:text-[50px] font-light mb-4 leading-tight">
              Technology-first partner
            </h1>
            <p className="text-base sm:text-xl opacity-90 max-w-lg">
              Engineer smarter outcomes with the right tech and dependable
              delivery. Designed for your goals, Optimized for cost, time, and
              scale.
            </p>
          </motion.div>

          {/* Right Video/Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative w-full h-60 sm:h-72 md:h-80 lg:h-96"
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
            ></iframe>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
