"use client";

import React, { useState } from "react";
import HeroSection from "@/app/component/caltia/HeroSection";
import {
  CheckIn,
  PrefferedPlatform,
  VmwareMigration,
  WhyMigrate,
} from "@/app/component/vmware/Vmware";
import BookMeeting from "@/app/component/utilities/BookMeeting";
import meeting from "@/app/assets/caltia/meeting.webp";
import { ManufacturingEcosystem } from "@/app/component/calPSR/CalPSR";
import { showHubSpotForm } from "@/app/component/utilities/showHubSpotForm";

const Page = () => {
  const [activeTab, setActiveTab] = useState("why-it-matters");
  const navItems = [
    "Why Migrate",
    "Integration",
    "Migration Solution",
    "What We Offer",
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
      <PrefferedPlatform  />
      <WhyMigrate secId="why-migrate" />
      <div className="mt-5 mb-10">
        <div className="container">
          <BookMeeting
            img={meeting}
            title="Edge Cloud Provider Seamlessly Migrates from VMware"
            titleClass="text-[32px] font-bold"
            desc="Calsoft developed a CLI-based migration tool designed to simplify and standardize the VM migration process."
            buttonText="Download Case Study"
            buttonClicked={()=>showHubSpotForm("download-vmware-case-study")}
          />
        </div>
      </div>
      <VmwareMigration  secId="integration"/>
      <CheckIn  onClick={()=>showHubSpotForm("request-vmware-poc")} secId="migration-solution"/>
      <ManufacturingEcosystem secId="what-we-offer" text="Simplify VMware migrations with speed, accuracy, and confidence." />
    </>
  );
};

export default Page;
