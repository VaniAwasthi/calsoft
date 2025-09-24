"use client";

import React from "react";
import BannerLayout from "../utilities/BannerLayout";
import ButtonImage from "../../assets/home/buttonImg.webp";
import ButtonImage2 from "../../assets/home/btn2Img.webp";
import Submenu from "../utilities/Submenu";

export default function HeroSection({
  navItems,
  buttonClicked,
  activeTab,
  setActiveTab,
  title = "Technology-first partner",
  description = "Accelerate cloud adoption through risk-aware, business-aligned migration strategies — backed by automation, security, and predictable ROI.",
  buttonText = "Access Readiness",
  buttonText2 = "Watch SRE Dashboard Demo",
  heroImage,
}) {
  return (
    <>
      <BannerLayout
        image={heroImage}
        title={title}
        description={description}
        buttonText={buttonText}
        buttonImage={ButtonImage}
        buttonImage2={ButtonImage2}
        hoverImage={ButtonImage}
        titleOneClass="text-[20px] md:text-5xl mt-2 md:w-[550px]"
        descriptionClass="hidden md:block mt-4 text-lg leading-8 w-[250px] md:w-full"
        BgClassname="object-cover w-full h-full object-center"
        buttonClicked={buttonClicked}
      />
      <Submenu
        navItems={navItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </>
  );
}
