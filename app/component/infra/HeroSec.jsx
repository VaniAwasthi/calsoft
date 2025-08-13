"use client";

import React, { useState } from "react";
import BannerLayout from "../utilities/BannerLayout";
import ButtonImage from "../../assets/home/buttonImg.webp";
import Hero_bg from "../../assets/infra/Hero_bg.webp";
import Submenu from "../utilities/Submenu";

export default function HeroSec() {
  const [activeTab, setActiveTab] = useState("Journey");

  const navItems = [
    "What it Matters",
    "Intelligent Planning",
    "Business Value",
    "Use Cases",
    "Why Calsoft",
    "How to Start",
  ];
  return (
    <>
      <BannerLayout
        image={Hero_bg}
        title={"Future-Proof Your Infrastructure with a Strategic Roadmap."}
        description={
          "Build an actionable infrastructure roadmap aligned to your growth, resilience, and cost objectives. No guesswork. Just clarity, performance, and ROI."
        }
        buttonText={"Request your custom roadmap"}
        buttonImage={ButtonImage}
        hoverImage={ButtonImage}
        titleOneClass="font-bold md:text-5xl text-[20px] mt-2"
        titleTwoClass="text-[28px] md:text-5xl md:mt-4"
        descriptionClass="hidden md:block mt-4 text-lg leading-8 w-[200px] md:w-full"
        BgClassname="object-cover w-full h-full object-center"
      />
      <Submenu
        navItems={navItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </>
  );
}
