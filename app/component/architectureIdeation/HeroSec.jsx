"use client";
import React from "react";
import BannerWithRightSec from "../utilities/BannerWithRightsec";

export const ArchitectureBanner = () => {
  const [activeTab, setActiveTab] = useState("benefits");
  const slide = {
    title: "Turn Ideas into Intelligent Products",

    description: `De-risk early decisions with the right architecture,
built for scale, speed, and ROI.`,
    buttonText: "Get Architecture Readiness Score",
    image: BackgroundImage,
  };
  const navItems = [
    "Why it Matters",
    "What We Offer",
    "Use Cases",
    "Business Value",
    "How to Start",
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
        buttonWidth="!w-[240px]"
      />
      <Submenu
        navItems={navItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </>
  );
};
