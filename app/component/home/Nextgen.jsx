"use-client";
import React, { useEffect, useState } from "react";
import icon from "../../assets/home/industry.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { IndustryData } from "../utilities/data/IndustryData";

const Nextgen = () => {
  const [activeTab, setActiveTab] = useState("Hi-Tech");
  const [selectedCard, setSelectedCard] = useState(null);

  const navItems = [
    "Hi-Tech",
    "Telecom",
    "Retail",
    "Manufacturing",
    "LegalTech",
  ];

  const activeIndustry = IndustryData.find(
    (industry) => industry.category === activeTab
  );

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!activeIndustry?.iconData) return null;

  return (
    <>
      <div
        className="w-full bg-[#021553] md:rounded-b-xl py-4 md:py-0 md:min-h-screen"
        id="industries"
      >
        <div className="mx-auto px-4 xl:px-20" id="customers">
          {/* icon-with heading*/}
          <div className="flex gap-6 md:gap-6 items-center mb-4 md:mb-6 md:py-5">
            <div className="rounded-full bg-[#ffff] w-8 h-8 p-2 hidden md:flex items-center justify-center my-2">
              <Image src={icon} alt="icon" width={16} height={16} />
            </div>
            <p className="font-light text-sm md:text-base text-white  my-2">
              Industry
            </p>
          </div>
          <div className="container mx-auto  md:px-4 xl:px-2">
            {/* tab */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="overflow-scroll md:overflow-auto bg-[#E5E5E5] rounded-full">
                <div className="w-full bg-[#E5E5E5]  flex justify-between items-center rounded-full">
                  {navItems.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(item)}
                      className={`min-w-24 md:w-1/5 text-center transition-all duration-300 py-3 md:py-4 text-sm lg:text-base rounded-full ${
                        activeTab === item
                          ? "bg-white text-black font-semibold"
                          : "text-[#747474]"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-8 mt-8 md:mt-[4rem] mb-[2rem]"
            >
              {/* Image */}
              {activeIndustry && (
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="md:col-span-5 lg:col-span-4"
                >
                  <Image
                    src={activeIndustry.image}
                    alt={activeIndustry.title}
                    className="rounded-lg"
                    width={400}
                    height={300}
                  />
                </motion.div>
              )}
              {/* content */}
              <div className=" md:ml-[2rem] text-white md:col-span-7 lg:col-span-8">
                {activeIndustry && (
                  <>
                    <motion.h2
                      initial={{ y: 50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: false, amount: 0.3 }}
                      className=" text-xl md:text-3xl md:py-3"
                    >
                      {activeIndustry.title}
                    </motion.h2>
                    <motion.p
                      initial={{ y: 50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      viewport={{ once: false, amount: 0.3 }}
                      className="py-3 text-xs md:text-lg"
                    >
                      {activeIndustry.description}
                    </motion.p>
                    <div className="hidden md:flex gap-6 flex-col lg:flex-row mt-6">
                      <button
                        className="relative flex gap-2 justify-between items-center  px-8 py-4 rounded-full shadow-md bg-[#E8282B] text-white transition-all duration-500 overflow-hidden group"
                        style={{
                          boxShadow: "0px 12px 16px rgba(0, 54, 19, 0.25",
                        }}
                      >
                        <span className="relative z-10 group-hover:text-[#E8282B] w-full flex gap-4 items-center transition-colors duration-500">
                          Case Studies
                          <IoArrowForwardCircleSharp className="text-3xl tra" />
                        </span>
                        <span className="absolute inset-0 bg-white w-full h-full left-0 -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
                      </button>
                      <button
                        className="relative flex gap-2 justify-between items-center bg-transparent border-1 border-white  px-8 py-4 rounded-full shadow-md text-white transition-all duration-500 overflow-hidden group"
                        style={{
                          boxShadow: "0px 12px 16px rgba(0, 54, 19, 0.25",
                        }}
                      >
                        <span className="relative z-10 group-hover:text-[#E8282B] w-full flex gap-4 items-center transition-colors duration-500">
                          know More
                        </span>
                        <span className="absolute inset-0 bg-white w-full h-full left-0 -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
                      </button>
                    </div>
                  </>
                )}

                {!isMobile ? (
                  // Desktop & Tablet View with Animation
                  <motion.div
                    initial={{ y: 0, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="flex flex-col justify-between mt-4 md:mt-16 space-y-6"
                  >
                    <div className="flex overflow-x-auto md:overflow-visible gap-6 px-2 pb-2 scroll-smooth">
                      {activeIndustry.iconData.map((card, index) => (
                        <motion.div
                          key={card.id}
                          initial={{ y: 0, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.1, delay: index * 0.2 }}
                          viewport={{ once: false, amount: 0.3 }}
                          className="card-hover flex-shrink-0 min-w-[70px] min-h-[60px] md:w-[90px] md:h-[80px] xl:w-[100px] xl:h-[90px] transition-transform duration-500 hover:scale-150 perspective cursor-pointer"
                        >
                          <div className="card-inner relative w-full h-full">
                            {/* Front */}
                            <div className="absolute inset-0 flex items-center justify-center bg-white text-black border border-white rounded-lg shadow-md backface-hidden">
                              <Image
                                src={card.icon}
                                alt={card.title}
                                width={40}
                                height={40}
                              />
                            </div>
                            {/* Back */}
                            <div className="absolute inset-0 flex items-center justify-center bg-white text-[#021553] rounded-lg rotate-y-180 transform scale-105 mx-2 backface-hidden">
                              <p className="text-[6px] md:text-[8px] xl:text-[10px] font-semibold text-center px-2">
                                {card.title}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  // Mobile View without Animation
                  <div className="flex flex-col justify-between mt-4 md:mt-16 space-y-6">
                    <div className="flex overflow-x-auto gap-2 md:gap-6 px-2 pb-2 scroll-smooth">
                      {activeIndustry.iconData.map((card) => (
                        <div
                          key={card.id}
                          className="card-hover flex-shrink-0 min-w-[50px] min-h-[50px] w-[90px] h-[80px] transition-none perspective cursor-pointer"
                        >
                          <div className="card-inner relative w-full h-full">
                            {/* Front */}
                            <div className="absolute inset-0 flex items-center justify-center bg-white text-black border border-white rounded-lg shadow-md backface-hidden">
                              <Image
                                src={card.icon}
                                alt={card.title}
                                width={40}
                                height={40}
                              />
                            </div>
                            {/* Back */}
                            <div className="absolute inset-0 flex items-center justify-center bg-white text-[#021553] rounded-lg rotate-y-180 transform scale-105 mx-2 backface-hidden">
                              <p className="text-[8px] md:text-[8px] xl:text-[10px] font-semibold text-center px-2">
                                {card.title}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            <div className="md:hidden flex gap-4 justify-center pb-6 lg:flex-row mt-6">
              <button
                className="relative flex gap-2 justify-between items-center  px-4 py-3 rounded-full shadow-md bg-[#E8282B] text-white transition-all duration-500 overflow-hidden group"
                style={{
                  boxShadow: "0px 12px 16px rgba(0, 54, 19, 0.25",
                }}
              >
                <span className="relative z-10 group-hover:text-[#E8282B] text-xs w-full flex gap-4 items-center transition-colors duration-500">
                  Case Studies
                  <IoArrowForwardCircleSharp className="text-2xl tra" />
                </span>
                <span className="absolute inset-0 bg-white w-full h-full left-0 -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
              </button>
              <button
                className="relative flex gap-2 justify-between items-center bg-transparent border-1 border-white  px-8 py-3 rounded-full shadow-md text-white transition-all duration-500 overflow-hidden group"
                style={{
                  boxShadow: "0px 12px 16px rgba(0, 54, 19, 0.25",
                }}
              >
                <span className="relative z-10 group-hover:text-[#E8282B] text-xs w-full flex gap-4 items-center transition-colors duration-500">
                  know More
                </span>
                <span className="absolute inset-0 bg-white w-full h-full left-0 -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nextgen;
