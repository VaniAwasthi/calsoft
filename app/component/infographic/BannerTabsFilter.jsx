import Image from "next/image";
import { motion } from "framer-motion";
import BannerBg from "../../assets/Infographic/Background.webp";
import React, { useEffect, useState } from "react";
import InfoIcon from "../../assets/Infographic/infographic.svg";
import IndustryIcon from "../../assets/Infographic/IndustryReports.svg";
import CaseStudiesIcon from "../../assets/Infographic/case-study.svg";
import DatesheetIcon from "../../assets/Infographic/datesheets.svg";
import WhitepaperIcon from "../../assets/Infographic/whitepaper.svg";
import VideosIcon from "../../assets/Infographic/videos.svg";
import { InfographicCard } from "./InfographicCard";
import { IndustryReportCard } from "../industryReport/IndustryReportCard";
import BannerTags from "../../assets/Infographic/BannerTags.webp";
const tabs = [
  {
    id: "case-study",
    name: "Case Study",
    icon: CaseStudiesIcon,
    // component: <CaseStudyContent />,
    component: <h1 className="my-6 text-center"> Case Study</h1>,
  },
  {
    id: "whitepapers",
    name: "Whitepapers",
    icon: WhitepaperIcon,
    // component: <WhitepapersContent />,
    component: <h1 className="my-6 text-center"> Whitepapers Content</h1>,
  },
  {
    id: "datasheets",
    name: "Datasheets",
    icon: DatesheetIcon,
    // component: <DatasheetsContent />,
    component: <h1 className="my-6 text-center">Datasheets Content</h1>,
  },
  {
    id: "infographics",
    name: "Infographics",
    icon: InfoIcon,
    component: <InfographicCard />,
  },
  {
    id: "industry-reports",
    name: "Industry Reports",
    icon: IndustryIcon,
    component: <IndustryReportCard />,
  },
  {
    id: "videos",
    name: "Videos",
    icon: VideosIcon,
    // component: <VideosContent />
    component: <h1 className="my-6 text-center">Videos Content</h1>,
  },
];

export const BannerInfo = ({ heading }) => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
      {/* Background Image */}
      <Image
        src={BannerBg}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
        priority
      />

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
        <motion.h2
          className="text-white text-2xl sm:text-3xl md:text-5xl font-semibold mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {heading}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Image src={BannerTags} alt="Icon" className="w-full h-[200px] " />
        </motion.div>
      </div>
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
                  flex flex-col sm:flex-row items-center justify-center px-3 py-2 sm:px-2 sm:py-2 mx-1 sm:mx-2
                  rounded-lg transition-all duration-300 ease-in-out
                  ${
                    activeTab === tab.id
                      ? "bg-gray-200 text-[#2E3092]"
                      : "text-[#2E3092] hover:text-gray-800"
                  }
                `}
              >
                {typeof tab.icon === "function" ? (
                  <tab.icon className="w-5 h-5 sm:w-6 sm:h-6 mr-0 sm:mr-2 mb-1 sm:mb-0" />
                ) : (
                  <Image
                    src={tab.icon}
                    alt={tab.name}
                    width={24}
                    height={24}
                    className="w-5 h-5 sm:w-6 sm:h-6 mr-0 sm:mr-2 mb-1 sm:mb-0"
                  />
                )}
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
