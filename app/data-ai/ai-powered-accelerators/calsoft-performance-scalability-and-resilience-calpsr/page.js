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
    "Features",
    "Benefits",
    "Test",
    "Validate",
    "Integrate to Pipeline",
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
        onClick={()=>showHubSpotForm("check-your-readiness")}
        buttonClicked2={()=>showHubSpotForm("download-vmware-whitepaper")}
        
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
