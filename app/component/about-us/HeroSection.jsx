"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // removed Navigation
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import Image from "next/image";

// Import assets
import heroImage1 from "../../assets/about-us/Hero_image.webp";
import heroImage2 from "../../assets/CEOBanner.png";
import logo from "../../assets/about-us/aboutLogo.png";

const slides = [
  {
    image: heroImage1,
    title: "Technology-first partner",
    isLeftContent: true,
    description:
      "Engineer smarter outcomes with the right tech and dependable delivery. Designed for your goals, Optimized for cost, time, and scale.",
  },
  {
    image: heroImage2,
    title: "Building Future Solutions",
    isLeftContent: false,
    description:
      "Harness innovation to create scalable, cost-efficient, and intelligent business solutions.",
  },
];

export default function HeroSection() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop={true}
      pagination={{ clickable: true }}
      className="w-full h-[90vh]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <motion.section
            className="relative w-full h-full text-white flex items-center"
            style={{
              backgroundImage: `url(${slide.image.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 sm:px-6 lg:px-8">
              {/* Left Text Content */}
              {slide.isLeftContent && (
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
                    {slide.title}
                  </h1>
                  <p className="text-base sm:text-xl opacity-90 max-w-lg">
                    {slide.description}
                  </p>
                </motion.div>
              )}
            </div>
          </motion.section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
