"use client";
import React, { useState } from "react";
import ButtonImage from "../../../assets/home/buttonImg.webp";
import IndustriesBanner from "../../utilities/IndustriesBanner";
import Submenu from "../../utilities/Submenu";
import { motion } from "framer-motion";
import Dell from "../../../assets/home/logos/Dell.webp";
import Cisco from "../../../assets/home/logos/Cisco.webp";
import Hplogo from "../../../assets/home/logos/HP.webp";
import Broadcom from "../../../assets/home/logos/Broadcom.webp";
import Sumologic from "../../../assets/home/logos/Sumologic.webp";
import OlaKrutrim from "../../../assets/home/logos/OlaKrutrim.webp";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/scrollbar";
import { Autoplay, Scrollbar } from "swiper/modules";
import { showHubSpotForm } from "../../utilities/showHubSpotForm";
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
export const Herosection = ({
  activeTab,
  setActiveTab,
  slide,
  navItems,
  isCaseStudyButton,
  titleTwoClass,
}) => {
  return (
    <>
      <IndustriesBanner
        image={slide.image}
        title={slide.title}
        title2={slide.title2}
        description={slide.description}
        buttonText={slide.buttonText}
        buttonImage={ButtonImage}
        hoverImage={ButtonImage}
        onBtnClick={() => showHubSpotForm("retail-industry-report")}
        titleOneClass="font-normal lg:text-[52px] md:text-[40px] text-[25px] mt-2"
        titleTwoClass={`font-normal lg:text-[52px] md:text-[40px] text-[25px] md:mt-4 ${titleTwoClass}`}
        descriptionClass="hidden md:block mt-4 text-[18px] leading-8 w-[200px] md:w-full"
        BgClassname="object-cover w-full h-full object-center"
        isCaseStudyButton={isCaseStudyButton}
      />
      <Submenu
        navItems={navItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </>
  );
};

export const TopClients = () => {
  const logos = [
    { id: 1, name: "Dell", image: Dell },
    { id: 2, name: "Cisco", image: Cisco },
    { id: 3, name: "Hp", image: Hplogo },
    { id: 4, name: "Broadcom", image: Broadcom },
    { id: 5, name: "Sumologic", image: Sumologic },
    { id: 6, name: "OlaKrutrim ", image: OlaKrutrim },
  ];
  return (
    <section className="md:py-14">
      <div className="container mx-auto px-4 xl:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-[38px] font-normal mt-4"
        >
          <span className="font-semibold bg-[linear-gradient(to_right,#2E3092_25%,#ED1C24_88%)] bg-clip-text text-transparent">
            Top Clients
          </span>{" "}
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={gridVariants}
          viewport={{ once: false, amount: 0.3 }}
          className="hidden md:grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-8 mt-6 lg:mt-[2rem]"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="h-18 md:h-28 rounded-lg overflow-hidden flex items-center justify-center"
            >
              <Image src={logo.image} alt={logo.name} />
            </motion.div>
          ))}
        </motion.div>

        {/* Swiper for smaller screens */}
        <div className="block md:hidden mt-6 mb-10">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000 }}
            spaceBetween={10}
            slidesPerView={4}
            loop
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className=" rounded-lg overflow-hidden flex items-center justify-center bg-white shadow">
                  <Image src={logo.image} alt={logo.name} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
