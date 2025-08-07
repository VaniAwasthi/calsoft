"use client";
import React, { useState } from "react";
import BannerWithRightSec from "../utilities/BannerWithRightsec";
import Submenu from "../utilities/Submenu";
import BackgroundImage from "../../assets/Data-Ai/mainPage/AIBg.webp";
import ButtonImage from "../../assets/home/buttonImg.webp";

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
      <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-[#3b3b3b]">
        <span className="text-blue-600">{heading}</span>
      </h2>
      {sections.map((section, index) => (
        <div key={index} className="mb-16">
          {/* Section Heading */}

          {/* Mobile Purple Label */}
          <div className="sm:hidden mb-6 flex justify-center">
            <div className="bg-[#2e2f92] text-white px-6 py-3 rounded-lg shadow text-sm font-semibold text-center">
              {section.label}
            </div>
          </div>

          {/* Grid of Cards */}
          <div className="relative grid grid-cols-2 sm:grid-cols-2 gap-6">
            {section.items.map((item, idx) => (
              <Card key={idx} title={item.title} desc={item.desc} />
            ))}

            {/* Purple Center Label (Desktop only) */}
            <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="bg-[#2e2f92] text-white px-6 py-3 rounded-lg shadow-lg text-center text-sm font-semibold h-28 flex items-center justify-center">
                {section.label}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

const Card = ({ title, desc }) => (
  <div className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition py-10 px-6 sm:px-8">
    <h3 className="font-semibold text-lg mb-2 text-[#2c2c2c]">{title}</h3>
    <p className="text-gray-600 text-sm">{desc}</p>
  </div>
);
