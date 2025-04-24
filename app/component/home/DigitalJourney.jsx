"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { useState } from "react";
import tabImg from "../../assets/home/tabImg.webp";
// import FeatureSection from "./FeatureSection";
import Architect from "../../assets/home/Architect.webp";
import Engineer from "../../assets/home/Engineer.webp";
import SecureApp from "../../assets/home/SecureApp.webp";
import Scale from "../../assets/home/Scale.webp";
import Update from "../../assets/home/update.webp";
import Icon from "../../assets/home/lineDot.svg";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
const DigitalJounery = () => {
  const [activeTab, setActiveTab] = useState("Journey");

  const navItems = [
    "Journey",
    "Customers",
    "Industries",
    "What's New",
    "Partners",
    "Services",
    "Case Studies",
  ];
  const features = [
    {
      title: "Architect",
      description: "Design future-ready systems for smarter solutions.",
      icon: Architect,
      line: Icon,
    },
    {
      title: "Engineer + Modernize",
      description:
        "Build innovative software, optimize infra for peak performance.",
      icon: Engineer,
      line: Icon,
    },
    {
      title: "Secure Apps & Data",
      description:
        "Protect data, ensure compliance, and manage risk with full control.",
      icon: SecureApp,
      line: Icon,
    },
    {
      title: "Scale + Deploy",
      description:
        "Easily integrate, manage, launch, and scale across environments.",
      icon: Scale,
      line: Icon,
    },
    {
      title: "Updates + Support",
      description:
        "Seamless operations, continuous improvement, and resilient growth.",
      icon: Update,
      line: Icon,
    },
  ];
  const formatId = (str) =>
    str
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");

  return (
    <>
      <motion.div
        // initial={{ x: 50, opacity: 0 }}
        // whileInView={{ x: 0, opacity: 1 }}
        // transition={{ duration: 1, delay: 0.2 }}
        // viewport={{ once: false, amount: 0.3 }}
        className="sticky top-30 z-90 md:block hidden"
      >
        <div className="w-full transition-all duration-300 text-white bg-[#2E3092]  ">
          <div className="relative flex items-center justify-center  px-4 lg:px-5 py-3 container max-w-8xl ">
            {/* Border Gradient Effect */}

            {/* Left Icon */}
            <div className="flex justify-between items-center overflow-scroll md:overflow-auto xl:overflow-hidden">
              <div className="relative z-10 lg:mr-[6rem] lg:pr-[4rem]">
                <Image src={tabImg} alt="icon" />
              </div>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                {/* Navigation Items */}
                <div className="relative z-10 flex space-x-4 lg:space-x-9 text-sm md:text-base">
                  {navItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center w-max md:w-auto"
                    >
                      <div
                        className={`relative cursor-pointer text-lg ${
                          activeTab === item
                            ? "text-white font-semibold"
                            : "text-gray-400"
                        }`}
                        onClick={() => {
                          setActiveTab(item);
                          const sectionId = formatId(item);
                          const section = document.getElementById(sectionId);
                          if (section) {
                            section.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                          }
                        }}
                      >
                        {item}
                      </div>

                      {/* Add Divider Except for Last Item */}
                      {index !== navItems.length - 1 && (
                        <div className="border-r border-white h-4 mx-2 xl:ml-9" />
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="flex justify-center bg-[#021553] pb-10 md:pb-0 md:min-h-screen1">
        <div className="container max-w-7xl mx-auto px-4   transition-all duration-300">
          <div className="text-white relative" id="journey">
            <div className="hidden md:block absolute left-0 top-0 bottom-0 traslate-y-[-52px] lg:translate-x-[-17px] xl:translate-y-[-57px]">
              {/* Gradient Border */}
              <div className="w-[2px] mr-2 mt-6 h-full bg-gradient-to-b from-gray-300 to-red-500"></div>
            </div>
            <div className="xl:ml-[8rem] my-4 ">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h2 className="text-2xl md:text-4xl md:mt-[3rem]  pt-2 md:pt-5 font-semibold md:leading-11">
                  Innovate at <br className="md:hidden block" /> every stage of
                  your digital journey
                </h2>
              </motion.div>
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h2 className="text-2xl md:text-4xl  mb-[4rem]  font-light leading-11">
                  We make it simple
                </h2>
              </motion.div>
              {/* cards */}

              <Swiper
                spaceBetween={30}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                breakpoints={{
                  320: { slidesPerView: 3, spaceBetween: 20 },
                  768: { slidesPerView: 3, spaceBetween: 30 }, // iPad
                  1024: { slidesPerView: 4, spaceBetween: 30 }, // iPad Pro
                  1280: { slidesPerView: 5, spaceBetween: 20 }, // Desktop
                }}
                className="pt-5 pagination_white "
              >
                {features.map((feature, index) => (
                  <SwiperSlide key={index}>
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: false, amount: 0.5 }}
                    >
                      <div className="flex h-[80px] items-center1 gap-2 ">
                        {/* Animated Icon (Image above heading) */}
                        <motion.div
                          initial={{ y: 50, opacity: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          viewport={{ once: false, amount: 0.3 }}
                        >
                          <Image
                            className="min-w-[16px] md:w-auto"
                            src={feature.line}
                            alt={feature.title}
                          />
                        </motion.div>

                        {/* Animated Heading */}
                        <motion.div
                          className="text-md font-normal"
                          initial={{ opacity: 0, y: 20 }}
                          transition={{ duration: 0.5, delay: index * 0.4 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          viewport={{ once: false, amount: 0.3 }}
                        >
                          <h3 className="text-sm md:text-base text-left md:text-center font-normal w-[90px]">
                            {feature.title}
                          </h3>
                        </motion.div>
                      </div>

                      {/* Animated Round Icon */}
                      <motion.div
                        className="rounded-full mr-1 mt-2"
                        initial={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.5, delay: index * 0.5 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                      >
                        <Image src={feature.icon} alt={feature.title} />
                      </motion.div>

                      {/* Animated Description */}
                      <motion.p
                        className="mt-2 text-[10px] md:text-sm text-center text-white md:w-3/4 "
                        initial={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: index * 0.6 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                      >
                        {feature.description}
                      </motion.p>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalJounery;
