"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import tabImg from "../../assets/home/tabImg.webp";

const Submenu = ({ navItems, activeTab, setActiveTab }) => {
  const formatId = (str) => str.toLowerCase().replace(/\s+/g, "-");

  return (
    <motion.div className="sticky top-30 z-90 md:block hidden">
      <div className="w-full transition-all duration-300 text-white bg-[#2E3092]">
        <div className="relative flex items-center px-4 py-2 container mx-auto xl:px-20">
          {/* Left Icon */}
          <div className="flex items-center w-full overflow-x-scroll md:overflow-x-auto">
            <div className="flex-shrink-0 mr-6">
              <Image
                src={tabImg}
                alt="icon"
                className="w-10 h-10 object-contain"
              />
            </div>

            {/* Navigation Items */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="  flex xl:ml-[2rem] space-x-4 lg:space-x-10 text-sm md:text-base"
            >
              {navItems.map((item, index) => (
                <div key={index} className="flex  items-center w-max md:w-auto">
                  <div
                    className={`relative cursor-pointer text-[14px]  ${
                      activeTab === item
                        ? "text-white font-bold"
                        : "text-gray-400"
                    }`}
                    onClick={() => {
                      setActiveTab(item);
                      const sectionId = formatId(item);
                      const section = document.getElementById(sectionId);
                      console.log("sectionId", sectionId);
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

                  {/* Divider except last item */}
                  {index !== navItems.length - 1 && (
                    <div className="border-r border-white h-4 mx-2 xl:ml-9" />
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Submenu;
