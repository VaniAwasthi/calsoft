"use client";

import React, { useState } from "react";
import HeroSection from "@/app/component/caltia/HeroSection";

const Page = () => {
  const [activeTab, setActiveTab] = useState("why-it-matters");
  const navItems = [
    "Why it Matters",
    "Intelligent Planning",
    "Business Value",
    "Use Cases",
    "Why Calsoft",
    "How to Start",
  ];
  return (
    // <div className="relative w-full h-auto">
    //   <Image
    //     src={DemoImage}
    //     alt="Containerization and orchestration"
    //     width={1200}
    //     height={600}
    //     className="w-full h-auto object-contain"
    //     priority
    //   />
    // </div>
    <>
      <HeroSection
        heading="VMware Migration Simplified"
        data={null}
        desc="Migrate to your preferred VMware alternative using a phased approach designed for near-zero business disruption and clear financial planning."
        buttonText="Check Your Readiness"
        button2Text="Download Whitepaper"
        navItems={navItems}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
    </>
  );
};

export default Page;
