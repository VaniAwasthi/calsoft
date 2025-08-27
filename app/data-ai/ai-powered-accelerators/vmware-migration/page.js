"use client";

import React, { useState } from "react";
import HeroSection from "@/app/component/caltia/HeroSection";
import {
  PrefferedPlatform,
  VmwareMigration,
  WhyMigrate,
} from "@/app/component/vmware/Vmware";
import BookMeeting from "@/app/component/utilities/BookMeeting";
import meeting from "@/app/assets/caltia/meeting.webp";

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
      <PrefferedPlatform />
      <WhyMigrate />
      <div className="mt-5 mb-10">
        <div className="container">
          <BookMeeting
            img={meeting}
            title="Edge Cloud Provider Seamlessly Migrates from VMware"
            titleClass="text-[32px] font-bold"
            desc="Calsoft developed a CLI-based migration tool designed to simplify and standardize the VM migration process."
            buttonText="Download Case Study"
          />
        </div>
      </div>
      <VmwareMigration />
    </>
  );
};

export default Page;
