"use client";
import React, { useState } from "react";
import HeroSection from "../../../component/testing/HeroSection";
import WhyItMatters from "../../../component/product-application-development/WhyItMatters";
import SmartDevelopmentMatters from "../../../component/product-application-development/SmartDevelopmentMatters";
import Steps from "../../../component/product-application-development/Steps";
import WhatWeOffer from "../../../component/product-application-development/WhatWeOffer";
import UseCases from "../../../component/product-application-development/UseCases";
import HowToStart from "../../../component/product-application-development/HowToStart";
import { ContactSecDataAi } from "../../../component/utilities/ChallengeSolutionDataAi";
import ArchitectureSprint from "../../../component/product-application-development/ArchitectureSprint";
import img from "@/app/assets/DigitalEngineering/product-app/Smart-Deployment.webp";

const Page = () => {
  const [activeTab, setActiveTab] = useState("why-it-matters");

  const navItems = [
    "Why it Matters",
    "What We Offer",
    "Use Cases",
    "Business Value",
    "How to Start",
  ];
  return (
    <>
      <HeroSection
        title="Deploy Smarter. Run Leaner. Stay Ahead."
        description="Accelerate go-to-market, reduce infrastructure waste, and
eliminate downtime with Calsoft’s intelligent deployment strategies."
        buttonText="Request Deployment Blueprint"
        activeTab={activeTab}
        navItems={navItems}
        setActiveTab={setActiveTab}
        heroImage={img}
      />
      <WhyItMatters
        title="Code That’s Ready Is Useless If It
Can’t Ship Reliably."
        desc="Your releases shouldn’t break production. And they shouldn’t break the bank either. Yet, 40% of teams experience downtime during deployments and overspend on underutilized infrastructure. Calsoft brings automation, predictability, and flexibility—so you ship faster, with fewer resources, and zero surprises."
        buttonText="Download Case Study"
        MainComponenent={SmartDevelopmentMatters}
        contentClass="w-[90%]"
        id="why-it-matters"
      />
      <WhatWeOffer />
      <UseCases CTACopy="Cut deployment time by 50% through automation." 
      data={{
          leftSideContent: {
            title: "Faster Shipping. Fewer Incidents. Lower Spend.",
            subTitle:
              null,
            description:
              "Here's what our clients gained by deploying the smart way:",
          },
          rightSideContent: [
            {
              title: "2X",
              subTitle: "release frequency with canary-based automation",
            },
            {
              title: "Up to 35%",
              subTitle: "reduction in cloud infra spend",
            },
            {
              title: "Zero",
              subTitle: "major downtime events during updates",
            },
            {
              title: "50%",
              subTitle:
                "faster rollback times with pre-baked strategies",
            },
          ],
        }}
      />
      <HowToStart
        id="how-to-start"
        headerContent={{
          title: "Start Smart, Scale Fast",
          description:
            "Every engagement starts with a focused 2-week Architecture Sprint designed to align stakeholders, define priorities, and deconstruct risks before any code is written.",
        }}
      />
      <Steps />
      <ArchitectureSprint />
      <ContactSecDataAi
        BoldContent="Let’s talk!"
        lightContent="Want to create a connected, intelligent, & resilient manufacturing ecosystem? "
        link="#"
      />
    </>
  );
};
export default Page;
