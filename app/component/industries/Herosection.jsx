"use client";
import React, { useState } from "react";
import BannerWithRightSec from "../utilities/BannerWithRightsec";
import Submenu from "../utilities/Submenu";
import ButtonImage from "../../assets/home/buttonImg.webp";
import sampleImage from "../../assets/industries/CaseStudyImage.webp";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCaretDown } from "react-icons/fa";
import tabDataImage1 from "../../assets/industries/industry-image/Retail.webp"
import tabDataImage2 from "../../assets/industries/industry-image/Manufacturing.webp"
import tabDataImage3 from "../../assets/industries/industry-image/Telecom.webp"
import tabDataImage4 from "../../assets/industries/industry-image/HiTech.webp"
import { showHubSpotForm } from "../utilities/showHubSpotForm";

export const Herosection = ({
  slide,
  navItems,
  activeTab,
  setActiveTab,
  titleTwoClass,
}) => {
  return (
    <>
      <BannerWithRightSec
        heroBg={slide.BackgroundImage}
        title={slide.title}
        title2={slide.title2}
        description={slide.description}
        rightImage={slide.rightImage}
        buttonText={slide.buttonText}
        buttonImage={ButtonImage}
        onButtonClick={()=>showHubSpotForm("talk-to-expert")}
        hoverImage={ButtonImage}
        rightSec={slide.rightSecImg}
        titleOneClass="font-semibold lg:text-[52px] md:text-[40px] text-[25px] mt-2"
        titleTwoClass={`font-semibold lg:text-[52px] md:text-[40px] text-[25px] md:mt-4 md:mb-[5rem] ${titleTwoClass}`}
        descriptionClass="hidden md:block mt-4 text-[12px] leading-6 w-[200px] md:w-full"
      />
      <Submenu
        navItems={navItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </>
  );
};

export const CaseStudies = ({ secId }) => {
  const tabs = ["Hi-Tech", "Telecom", "Retail", "Manufacturing"];

  const tabData = [
    {
      key: "Hi-Tech",
      titlePart1:
        "Hi-Tech - Cloud Provider Accelerates VMware Migration with Calsoft’s CLI Tool",
      titlePart2: null,
      image: tabDataImage4,
    },
    {
      key: "Telecom",
      titlePart1:
        "Telecom - Telecom Data Analytics: Validation and Performance Benchmarking",
      titlePart2: null,
      image: tabDataImage3,
    },
    {
      key: "Retail",
      titlePart1:
        "Retail - Retail chain improves in-store performance with AI behavior analytics",
      titlePart2: null,
      image: tabDataImage1,
    },
    {
      key: "Manufacturing",
      titlePart1:
        "Manufacturing - AI-driven predictive operations for minimal-downtime data centers",
      titlePart2: null,
      image: tabDataImage2,
    },
  ];

  const [activeTab, setActiveTab] = useState(1); // default first tab

  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay },
    },
  });

  return (
    <section className="container mx-auto px-4 xl:px-20" id={secId}>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-[38px] font-normal my-8"
      >
        <span className="font-semibold bg-[linear-gradient(to_right,#2E3092_25%,#ED1C24_88%)] bg-clip-text text-transparent">
          Client Case Study:
        </span>{" "}
        Client stories from your industry
      </motion.h2>

      <div className="w-full px-4">
        {/* Tabs */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-4 gap-4 mb-10 justify-center"
        >
          {tabs.map((tab, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={fadeIn(index * 0.1)}
            >
              <button
                onClick={() => setActiveTab(index)}
                className={`w-[70px] md:w-full px-4 py-2 rounded-md font-medium text-[8px] md:text-base h-10 md:h-16 transition-all bg-[#2E3092] text-white ${
                  activeTab === index ? "scale-100" : "scale-90"
                }`}
              >
                {tab}
              </button>

              {activeTab === index && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: -5 }}
                  transition={{ type: "spring", stiffness: 120 }}
                >
                  <FaCaretDown className="text-[#2E3092]" size={30} />
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-start justify-center">
          {/* Active tab card (mobile only) */}
          <motion.div
            key={`active-image-${activeTab}`}
            className="col-span-2 md:hidden mx-auto text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              className="overflow-hidden w-full max-w-[280px]"
            >
              <Image
                src={tabData[activeTab].image}
                alt="Active Image"
                width={200}
                height={400}
                className="object-cover w-full h-52 rounded-2xl"
              />
              <p className="text-sm my-6 font-medium px-2">
                <span className="font-semibold bg-[linear-gradient(to_right,#2E3092_25%,#ED1C24_88%)] bg-clip-text text-transparent">
                  {tabData[activeTab].titlePart1}
                </span>{" "}
                {tabData[activeTab].titlePart2}
              </p>
            </motion.div>
          </motion.div>

          {/* All cards */}
          {tabData.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={fadeIn(index * 0.1)}
              className={`rounded-xl overflow-hidden text-center transition-all duration-300
                ${
                  index === activeTab
                    ? "hidden md:block md:scale-100 md:col-span-2"
                    : "scale-90"
                }`}
            >
              <Image
                src={item.image}
                alt="Card"
                width={350}
                height={400}
                className={`object-cover rounded-xl w-full ${
                  index === activeTab ? "h-72 w-[250px]" : "h-52 w-[300px]"
                }`}
              />

              {activeTab === index ? (
                <p className="text-lg mt-2 font-medium px-2">
                  <span className="font-semibold bg-[linear-gradient(to_right,#2E3092_25%,#ED1C24_88%)] bg-clip-text text-transparent">
                    {item.titlePart1}
                  </span>{" "}
                  {item.titlePart2}
                </p>
              ) : (
                <p className="text-sm mt-2 font-medium px-2">
                  {item.titlePart1}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
