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
