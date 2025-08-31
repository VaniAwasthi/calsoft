"use client";

import React, { useState } from "react";
import HeroSection from "@/app/component/caltia/HeroSection";
import {
  BookaMeeting,
  ConventionalTool,
  ManufacturingEcosystem,
  RealWorldBenefits,
  SystemTest,
  TestAll,
} from "@/app/component/calPSR/CalPSR";

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
      <SystemTest />
      <RealWorldBenefits />
      <BookaMeeting />
      <TestAll />
      <ConventionalTool />
      <ManufacturingEcosystem />
    </>
  );
};

export default Page;
