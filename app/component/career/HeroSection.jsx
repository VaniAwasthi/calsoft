"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Hero_1 from "../../assets/career/Hero_1.webp";
import Hero_2 from "../../assets/career/Hero_2.webp";
import Hero_3 from "../../assets/career/Hero_3.webp";
import Hero_4 from "../../assets/career/Hero_4.webp";
import img from "@/app/assets/leadership/L&D.png";
import MainHeroImage from "../../assets/career/Main_hero_image.webp";
import ButtonLayout from "../utilities/ButtonLayout";
import buttonImage from "@/app/assets/home/buttonImg.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function HeroSection() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      loop={true}
      className="w-full"
      autoplay={{ delay: 20000 }}
    >
      <SwiperSlide className="relative w-full h-full">
        {/* Background Image */}
        <div className="h-full w-full relative">
          <div className="absolute top-0 w-full h-full bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
          <Image
            src={MainHeroImage}
            alt="Background Image"
            width={200}
            height={200}
            className="w-full h-[37.5rem] object-cover"
          />
        </div>

        {/* Content Section - Centered */}
        <div className="absolute top-[0%] md:top-[0%] left-0 z-10 md:w-full px-4 md:px-20">
          <div className="flex items-start justify-center h-full md:min-h-screen text-white w-full mt-20 gap-5 xl:gap-0">
            <div className="h-full flex-1 flex flex-col justify-between items-start gap-y-10">
              <div>
                <motion.h2
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className={`font-bold  text-left leading-8 md:leading-14 md:text-5xl 2xs:text-4xl text-[20px] mt-2`}
                >
                  Evolve with Calsoft
                </motion.h2>
                <motion.p
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className={`md:text-lg font-light max-w-[90%] md:max-w-[400px] mt-4 text-lg leading-8 sm:w-[200px] md:w-full`}
                >
                  Build cutting-edge solutions with a team that values your
                  growth.
                </motion.p>
              </div>
              {/* <div className="flex  gap-5">
              <motion.div
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className="relative rounded-full w-40 h-40 overflow-hidden shrink-0"
              >
                <Image
                  src={Hero_4}
                  alt="image_3"
                  className="shrink-0  w-full h-full"
                />
                <div className="absolute top-0 w-full h-full flex justify-center items-center p-8 bg-[#ba0006bb]">
                  <p className="text-white text-center">SEE ALL OPENINGS (5)</p>
                </div>
              </motion.div> */}
              {/* <motion.div
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.4 }}
                viewport={{ once: false, amount: 0.3 }}
                className="relative md:size-auto size-[110%]"
              >
                <Image
                  src={Hero_3}
                  alt="image_4"
                  className="shrink-0 rounded-full border-4 border-white md:w-40 md:h-40 w-64 h-64 md:mt-0 mt-8"
                />
                <div className="absolute top-0 w-full h-full flex justify-center items-center">
                  <svg
                    width="40"
                    height="42"
                    viewBox="0 0 40 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40 20.9962C40 22.9451 38.9322 24.7208 37.2277 25.6248L7.57665 41.391C6.81956 41.8078 5.99275 42 5.16599 42C4.25259 42 3.3241 41.7564 2.4973 41.252C0.947341 40.2947 0 38.6237 0 36.7794L0.00188333 5.23157C0.00188333 3.38733 0.949175 1.71634 2.49918 0.758989C4.06611 -0.198312 5.96074 -0.249714 7.57844 0.602926L37.2295 16.3866C38.934 17.2906 40 19.0644 40 20.9962Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </motion.div> */}
              {/* </div> */}
            </div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="xl:flex-1 hidden xl:flex justify-center items-center gap-5"
            >
              <Image
                src={Hero_1}
                alt="Hero image"
                width={300}
                height={200}
                className="shrink-0"
              />
              <Image
                src={Hero_2}
                alt="Hero image"
                width={300}
                height={200}
                className="shrink-0"
              />
            </motion.div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative w-full h-full">
        <Image
          src={img}
          alt="leadership hero section"
          height={900}
          className="min-h-screen w-full object-[right_80%] md:object-right object-cover"
        />
        <div className="absolute top-0 w-full h-full flex justify-center items-center">
          <div className="w-full h-full flex justify-between items-center container">
            <div className="flex-1 space-y-8">
              <motion.h1 className="whitespace-pre-line text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                "Our focus is simple -\ncontinous learning, continuous growth.
                From technical certifications to technical programs, we prepare
                teams for tomorrow"
              </motion.h1>
              <motion.p className="text-white text-lg lg:text-xl">
                "Head of L&D, Calsoft Inc."
              </motion.p>
              <ButtonLayout
                text={"Explore L&D"}
                image={buttonImage}
                hoverImage={buttonImage}
                className={"whitespace-nowrap"}
              />
            </div>
            <div className="flex-1 hidden lg:block"></div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
