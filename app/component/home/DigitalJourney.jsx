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
const DigitalJounery = () => {
  const [activeTab, setActiveTab] = useState("Journey");

  const navItems = [
    "Journey",
    "Customers",
    "Industries",
    "Latest at Calsoft",
    "Partners",
    "Services",
    "Case Studies",
  ];
  const features = [
    {
      title: "Architect",
      description: "Design future-ready systems for smarter solutions.",
      icon: Architect,
    },
    {
      title: "Engineer + Modernize",
      description:
        "Build innovative software, optimize infra for peak performance.",
      icon: Engineer,
    },
    {
      title: "Secure Apps & Data",
      description:
        "Protect data, ensure compliance, and manage risk with full control.",
      icon: SecureApp,
    },
    {
      title: "Scale + Deploy",
      description:
        "Easily integrate, manage, launch, and scale across environments.",
      icon: Scale,
    },
    {
      title: "Updates + Support",
      description:
        "Seamless operations, continuous improvement, and resilient growth.",
      icon: Update,
    },
  ];
  const formatId = (str) =>
    str
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");
  return (
    <div className="flex justify-center bg-[#021553] min-h-screen">
      <div className="container mx-auto px-4 xl:px-20">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 2, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative flex items-center justify-center px-4 lg:px-8 py-3  text-white bg-[#0B1633] rounded-full">
            {/* Border Gradient Effect */}
            <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-gray-300 to-red-500">
              <div className="h-full w-full bg-[#0B1633] rounded-full"></div>
            </div>

            {/* Left Icon */}
            <div className="flex justify-between items-center">
              <div className="relative z-10 lg:mr-4">
                <Image src={tabImg} alt="icon" />
              </div>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 2, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {/* Navigation Items */}
                <div className="relative z-10 flex space-x-4 lg:space-x-6 text-sm md:text-base">
                  {navItems.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div
                        className={`relative cursor-pointer ${
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
                        <div className="border-r border-white h-4 mx-2 xl:mx-5" />
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="text-white relative" id="journey">
          <div className="absolute left-0 top-0 bottom-0 traslate-y-[-52px] lg:translate-x-[4px] xl:translate-y-[-57px]">
            {/* Gradient Border */}
            <div className="w-[2px] h-full bg-gradient-to-b from-gray-300 to-red-500"></div>
          </div>
          <div className="xl:ml-[8rem] my-4 ">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-4xl mt-[3rem] ml-[4rem] pt-5 font-semibold leading-11">
                Innovate at every stage of your digital journey
              </h2>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-4xl  mb-[4rem] ml-[4rem] font-light leading-11">
                We make it simple
              </h2>
            </motion.div>
            {/* cards */}
            <div className="flex justify-start items-center gap-2 p-2  text-white">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center w-[200px]"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <div className="flex h-[80px]">
                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                      <Image src={Icon} alt={feature.title} />
                    </motion.div>

                    {/* Heading */}
                    <motion.div
                      className="text-md font-normal"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.4 }}
                    >
                      <h3 className="text-md font-normal w-[90px]">
                        {feature.title}
                      </h3>
                    </motion.div>
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="rounded-full mr-1 mt-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.5 }}
                  >
                    <Image src={feature.icon} alt={feature.title} />
                  </motion.div>

                  {/* Content */}
                  <motion.p
                    className="mt-2 text-sm text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.6 }}
                  >
                    {feature.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalJounery;
