"use client";
import React, { useState } from "react";
import BannerWithRightSec from "../utilities/BannerWithRightsec";
import Submenu from "../utilities/Submenu";
import BackgroundImage from "../../assets/Data-Ai/mainPage/AIBg.webp";
import ButtonImage from "../../assets/home/buttonImg.webp";
import { motion } from "framer-motion";
import Link from "next/link";

export const DataAiBanner = () => {
  const [activeTab, setActiveTab] = useState("benefits");
  const slide = {
    title: "Calsoft’s Data and AI services",

    description: `Full-lifecycle data engineering, AI/ML development, and GenAI integration services to amp up intelligence and automation.`,
    buttonText: "Contact Us",
    image: BackgroundImage,
  };
  const navItems = [
    "Journey",
    "Expertise",
    "Industries",
    "Latest at Calsoft ",
    "Partners",
    "Services",
    "Case Studies",
  ];
  return (
    <>
      <BannerWithRightSec
        heroBg={BackgroundImage}
        title={slide.title}
        description={slide.description}
        rightImage={slide.rightImage}
        buttonText={slide.buttonText}
        buttonImage={ButtonImage}
        hoverImage={ButtonImage}
        rightSec={false}
        buttonWidth="!w-[250px]"
      />
      <Submenu
        navItems={navItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </>
  );
};

export const MultiFeatureGrid = ({ sections, heading }) => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-14 py-12 bg-white text-gray-900">
      <motion.h2
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
        className="my-8 text-xl md:text-2xl lg:text-[40px] font-semibold mb-4 text-transparent bg-clip-text bg-[linear-gradient(to_right,#2E3092_10%,#ED1C24_20%)]"
      >
        {heading}
      </motion.h2>
      {sections.map((section, index) => (
        <div key={index} className="mb-16">
          {/* Section Heading */}

          {/* Mobile Purple Label */}
          <div className="md:hidden mb-6 flex justify-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="bg-[#2e2f92] text-white px-6 py-3 rounded-lg shadow text-sm font-semibold text-center"
            >
              {section.label}
            </motion.div>
          </div>

          {/* Grid of Cards */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2  gap-6">
            {section.items.map((item, idx) => (
             <Link  key={idx} href={item.link}>
             <Card title={item.title} desc={item.desc} />
             </Link> 
            ))}

            {/* Purple Center Label (Desktop only) */}
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className="bg-[#2e2f92] text-white px-2 py-3 rounded-lg shadow-lg  text-center text-lg font-semibold h-28 flex items-center justify-center"
              >
                {section.label}
              </motion.div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

const Card = ({ title, desc }) => (
  <div className="group bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition py-10 px-[4rem] hover:bg-[#2e2f92]">
    <motion.h3
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: false, amount: 0.3 }}
      className="font-semibold text-2xl mb-2 text-[#2c2c2c] px-3 group-hover:text-white"
    >
      {title}
    </motion.h3>
    <motion.p
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: false, amount: 0.3 }}
      className="text-gray-600 text-lg px-3 group-hover:text-white"
    >
      {desc}
    </motion.p>
  </div>
);
