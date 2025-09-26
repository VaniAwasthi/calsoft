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
import { showHubSpotForm } from "@/app/component/utilities/showHubSpotForm";

const Page = () => {
  const [activeTab, setActiveTab] = useState("why-it-matters");
  const navItems = [
    "Why it Matters",
    "Benefits",
    "Values",
    "Integration",
    "Why CalPSR",
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
        onClick={()=>showHubSpotForm("check-your-readiness")}
        buttonClicked2={()=>showHubSpotForm("download-vmware-whitepaper")}
        
      />
      
      <SystemTest secId="why-it-matters" />
      <RealWorldBenefits secId="benefits"/>
      <BookaMeeting  />
      <TestAll secId="values"/>
      <ConventionalTool secId="integration" />
      <ManufacturingEcosystem secId="why-calpsr"/>
    </>
  );
};

export default Page;
