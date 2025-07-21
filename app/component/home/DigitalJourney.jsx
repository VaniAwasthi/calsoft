"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { useState } from "react";
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
import Submenu from "../utilities/Submenu";
import ConnectorLine from "../../assets/home/connectorLine.svg";
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
      <Submenu
        navItems={navItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className="hidden md:flex justify-center bg-[#021553]" id="journey">
        <div className="container mx-auto px-4 xl:px-20 transition-all duration-300">
          <div className="text-white relative">
            {/* Vertical Gradient Line */}
            {/* <div className="hidden md:block absolute left-0 top-0 bottom-0 xl:translate-x-[-46px] xl:translate-y-[-52px]">
              <div className="w-[2px] h-full bg-gradient-to-b from-gray-300 to-red-500"></div>
            </div> */}

            <div className="lg:ml-[4rem] xl:ml-[8rem] my-4 pt-8 gradient-bright">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className="ml-[2rem]"
              >
                <h2 className="text-2xl md:text-4xl pt-2 md:pt-5 font-semibold md:leading-11">
                  Innovate at <br className="md:hidden block" />
                  every stage of your digital journey
                </h2>
              </motion.div>

              <motion.div
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className="ml-[2rem]"
              >
                <h2 className="text-2xl md:text-4xl mb-8 font-light leading-11">
                  We make it simple
                </h2>
              </motion.div>

              {/* Swiper Section */}
              <Swiper
                spaceBetween={30}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                breakpoints={{
                  320: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1280: { slidesPerView: 5 },
                }}
                className="pt-5 pagination_white ml-[2rem]"
              >
                {features.map((feature, index) => (
                  <SwiperSlide key={index}>
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: false, amount: 0.5 }}
                      className="ml-[2rem]"
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
                          <h3 className="text-sm md:text-base text-left md:text-left font-normal w-[90px]">
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
