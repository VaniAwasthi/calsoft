"use client";

import React, { useState } from "react";
import BannerLayout from "../utilities/BannerLayout";
import ButtonImage from "../../assets/home/buttonImg.webp";
// import Hero_bg from "@/app/assets/DigitalEngineering/cloud-service/Infrastructure-Roadmap.webp";
import Submenu from "../utilities/Submenu";
import { showHubSpotForm } from "../utilities/showHubSpotForm";

export default function HeroSec({
  title = "Future-Proof Your Infrastructure with a Strategic Roadmap.",
  description = "Build an actionable infrastructure roadmap aligned to your growth, resilience, and cost objectives. No guesswork. Just clarity, performance, and ROI.",
  buttonText = "Request your custom roadmap",
  Hero_bg,
  navItems,
  buttonClicked=()=>showHubSpotForm("custom-roadmap-infrastructure")
}) {
  const [activeTab, setActiveTab] = useState("why-it-matters");

  // const navItems = [
  //   "Why it Matters",
  //   "Intelligent Planning",
  //   "Business Value",
  //   "Use Cases",
  //   "Why Calsoft",
  //   "How to Start",
  // ];
  return (
    <>
      <BannerLayout
        image={Hero_bg}
        title={title}
        description={description}
        buttonText={buttonText}
        buttonImage={ButtonImage}
        hoverImage={ButtonImage}
        titleOneClass="font-bold md:text-5xl text-[20px] mt-2"
        titleTwoClass="text-[28px] md:text-5xl md:mt-4"
        descriptionClass="hidden md:block mt-4 text-lg leading-8 w-[200px] md:w-full"
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
