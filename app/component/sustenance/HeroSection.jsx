"use client";

import React, { useState } from "react";
import BannerLayout from "../utilities/BannerLayout";
import heroImage from "@/app/assets/sustenance/Sustenance_BG.webp";
import ButtonImage from "../../assets/home/buttonImg.webp";
import Submenu from "../utilities/Submenu";

export default function HeroSection({
  title = "Know Before You Grow\nBenchmark with Intent",
  description = "Establish performance, scalability, and quality baselines before your next release, migration, or modernization effort — with Calsoft’s Benchmarking Readiness service.",
  buttonText = "Access Readiness",
  navItems = [
    "Why it Matters",
    "Intelligent Planning",
    "Business Value",
    "Use Cases",
    "Why Calsoft",
    "How to Start",
  ],
}) {
  const [activeTab, setActiveTab] = useState(
    navItems.length > 0 ? navItems[0] : ""
  );

  return (
    <>
      <BannerLayout
        image={heroImage}
        title2={title}
        description={description}
        buttonText={buttonText}
        buttonImage={ButtonImage}
        hoverImage={ButtonImage}
        titleOneClass="md:text-5xl text-[20px] mt-2"
        titleTwoClass="text-[28px] md:text-5xl md:mt-4 whitespace-pre-line"
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
