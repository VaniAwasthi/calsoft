"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import tabImg from "../../assets/home/tabImg.svg";

const Submenu = ({ navItems, activeTab, setActiveTab }) => {
  const formatId = (str) => str.toLowerCase().replace(/\s+/g, "-");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-35% 0px -35% 0px", // section triggers when it's near the middle of the screen
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute("id");
          const formatted = navItems.find(
            (item) => formatId(item) === sectionId
          );
          if (formatted) {
            setActiveTab(formatted);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    navItems.forEach((item) => {
      const section = document.getElementById(formatId(item));
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [navItems, setActiveTab]);

  return (
    <motion.div className="sticky top-25 z-70 md:block hidden">
      <div className="w-full transition-all duration-300 py-3 text-white bg-[#2E3092]">
        <div className="relative flex items-center px-4 py-4 container mx-auto xl:px-20">
          <div className="flex items-center w-full overflow-x-scroll md:overflow-x-auto">
            <div className="flex-shrink-0 mr-[1rem] xl:mr-[1.5rem] xl:ml-4">
              <Image src={tabImg} alt="icon" className="w-5 h-5 object-cover" />
            </div>

            <motion.div
             
              className="flex justify-between w-full text-sm md:text-base xl:mr-[3.5rem] items-center"
            >
              {navItems.map((item, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div
                    className={`relative cursor-pointer text-[16px] ${
                      activeTab === item
                        ? "text-white font-bold"
                        : "text-gray-400"
                    }`}
                    onClick={() => {
                      setActiveTab(item);
                      const sectionId = formatId(item);
                      const section = document.getElementById(sectionId);
                      if (section) {
                        section.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        });
                      }
                    }}
                  >
                    {item}
                  </div>
                  {index !== navItems.length - 1 && (
                    <div className="border-r border-white h-4 px-4  xl:px-5" />
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
