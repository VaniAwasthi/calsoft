import Image from "next/image";
import { motion } from "framer-motion";
import BannerBg from "../../assets/Infographic/Bg.webp";
import React, { useEffect, useState } from "react";

import { FaBook, FaDatabase, FaFileImage, FaVideo } from "react-icons/fa";
import { FiBarChart2, FiFileText } from "react-icons/fi";
import { InfographicCard } from "./InfographicCard";
import { IndustryReportCard } from "../industryReport/IndustryReportCard";
const tabs = [
  {
    id: "case-study",
    name: "Case Study",
    icon: FiFileText,
    // component: <CaseStudyContent />,
    component: <h1>Hello Case Study</h1>,
  },
  {
    id: "whitepapers",
    name: "Whitepapers",
    icon: FaBook,
    // component: <WhitepapersContent />,
    component: <h1>Hello WhitepapersContent</h1>,
  },
  {
    id: "datasheets",
    name: "Datasheets",
    icon: FaDatabase,
    // component: <DatasheetsContent />,
    component: <h1>Hello DatasheetsContent</h1>,
  },
  {
    id: "infographics",
    name: "Infographics",
    icon: FaFileImage,
    component: <InfographicCard />,
    // component: <h1>Hello InfographicsContent</h1>,
  },
  {
    id: "industry-reports",
    name: "Industry Reports",
    icon: FiBarChart2,
    component: <IndustryReportCard />,
  },
  {
    id: "videos",
    name: "Videos",
    icon: FaVideo,
    // component: <VideosContent />
    component: <h1>Hello VideosContent</h1>,
  },
];
export const BannerInfo = ({ heading }) => {
  return (
    <div className=" relative">
      {/* Background Image */}
      <Image
        src={BannerBg}
        alt="Background Image"
        className="w-full md:h-full h-[500px] object-cover"
      />
      <motion.h1
        className="absolute top-1 left-1/2 transform -translate-x-1/2 translate-y-12 manrope text-white text-3xl md:text-6xl font-regular text-center z-20"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {heading}
      </motion.h1>
    </div>
  );
};
export const TabsInfo = ({ defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0].id);

  // Function to render the content based on the active tab
  const renderContent = () => {
    const currentTab = tabs.find((tab) => tab.id === activeTab);
    return currentTab ? currentTab.component : null;
  };
  useEffect(() => {
    if (defaultTab && defaultTab !== activeTab) {
      setActiveTab(defaultTab);
    }
  }, [defaultTab]);
  return (
    <>
      <div className="w-full  bg-[#F4F4F4]  overflow-hidden">
        {/* Tab Navigation */}
        <div className="container mx-auto px-4 md:px-20">
          <div className="flex flex-wrap justify-between p-2 sm:p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                flex flex-col sm:flex-row items-center justify-center px-3 py-2 sm:px-2 sm:py-2 mx-1  sm:mx-2
                rounded-lg transition-all duration-300 ease-in-out
                ${
                  activeTab === tab.id
                    ? "bg-gray-200 text-[#2E3092]"
                    : " text-[#2E3092] hover:text-gray-800"
                }
              `}
              >
                {/* Icon component for the tab */}
                <tab.icon className="w-5 h-5 sm:w-6 sm:h-6 mr-0 sm:mr-2 mb-1 sm:mb-0" />
                <span className="text-xs sm:text-base font-medium whitespace-nowrap">
                  {tab.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Area */}
      </div>
      <div className="p-4 sm:p-8">{renderContent()}</div>
    </>
  );
};
