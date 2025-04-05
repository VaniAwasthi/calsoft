"use-client";
import React, { useState } from "react";
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

  return (
    <>
      <div className="w-full bg-[#021553] rounded-b-xl min-h-screen">
        <div className="mx-auto px-4 xl:px-20" id="customers">
          {/* icon-with heading*/}
          <div className="flex gap-6 md:gap-6 items-center mb-6 py-5">
            <div className="rounded-full bg-[#ffff] w-8 h-8 p-2 flex items-center justify-center my-2">
              <Image src={icon} alt="icon" width={16} height={16} />
            </div>
            <p className="font-light text-xl text-white my-2">Industry</p>
          </div>
          <div className="container mx-auto px-4 xl:px-20">
            {/* tab */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 2, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="h-full w-full bg-[#E5E5E5] py-4 justify-center items-center flex rounded-full">
                {/* Left Icon */}
                <div className="flex justify-between items-center">
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 2, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {/* Navigation Items */}
                    <div className="relative z-10 flex justify-center space-x-4 lg:space-x-6 text-sm md:text-base">
                      {navItems.map((item, index) => (
                        <div key={index} className="flex items-center">
                          <div
                            className={`relative cursor-pointer lg:w-[180px] text-center px-4 py-2 ${
                              activeTab === item
                                ? "text-black font-semibold bg-white rounded-full h-full flex items-center justify-center"
                                : "text-[#747474]"
                            }`}
                            onClick={() => setActiveTab(item)}
                          >
                            {item}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 2, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-[4rem] mb-[2rem]"
            >
              {/* Image */}
              {activeIndustry && (
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 4, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="lg:col-span-4"
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
              <div className="ml-[4rem] text-white  lg:col-span-8">
                {activeIndustry && (
                  <>
                    <motion.h2
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 2, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className=" text-3xl py-3"
                    >
                      {activeIndustry.title}
                    </motion.h2>
                    <motion.p
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 2, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="py-3 text-lg"
                    >
                      {activeIndustry.description}
                    </motion.p>
                    <div className="flex gap-6 flex-col lg:flex-row mt-6">
                      <button
                        className="relative flex gap-2 justify-between items-center  px-8 py-4 rounded-full shadow-md bg-[#E8282B] text-white transition-all duration-500 overflow-hidden group"
                        style={{
                          boxShadow: "0px 12px 16px rgba(0, 54, 19, 0.25",
                        }}
                      >
                        <span className="relative z-10 group-hover:text-[#E8282B] w-full flex gap-4 items-center transition-colors duration-500">
                          Explore More
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

                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 4, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="flex flex-col justify-between mt-16 space-y-6"
                >
                  <div className="flex flex-wrap gap-6">
                    {activeIndustry?.iconData.map((card) => (
                      <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 4, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        key={card.id}
                        className="card-hover w-[100px] h-[110px] hover:h-[120px] hover:w-[105px] perspective cursor-pointer"
                      >
                        <div className="card-inner relative w-full h-full">
                          {/* Front Side */}
                          <div className="absolute inset-0 flex items-center justify-center bg-[#FFFFFF] text-black border border-[#FFFFFF] rounded-lg shadow-md backface-hidden">
                            <Image
                              src={card.icon}
                              alt={card.title}
                              width={40}
                              height={40}
                            />
                          </div>

                          {/* Back Side */}
                          <div className="absolute inset-0 flex items-center justify-center bg-[#FFFFFF] text-[#021553] rounded-lg rotate-y-180 backface-hidden">
                            <p className="text-[12px] font-semibold text-center px-2">
                              {card.title}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nextgen;
