"use client";
import React, { useState } from "react";
import HeroSection from "../../../component/testing/HeroSection";
import Steps from "../../../component/product-application-development/Steps";
import WhatWeOffer from "../../../component/product-application-development/WhatWeOffer";
import UseCases from "../../../component/product-application-development/UseCases";
import HowToStart from "../../../component/product-application-development/HowToStart";
import { ContactSecDataAi } from "../../../component/utilities/ChallengeSolutionDataAi";
import ArchitectureSprint from "../../../component/product-application-development/ArchitectureSprint";
import WhyItMatters from "../../../component/product-application-development/WhyItMatters";
import ArchitectureIdeation from "../../../component/product-application-development/ArchitectureIdeationMatters";
import img from "@/app/assets/DigitalEngineering/product-app/Architecture-and-Ideation.webp";

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
        title="Turn Ideas into Intelligent Products."
        description="De-risk early decisions with the right architecture,
              built for scale, speed, and ROI."
        buttonText="Get Architecture Readiness Score"
        navItems={navItems}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        heroImage={img}
      />
      <WhyItMatters
        title="Don’t Build Blind. Architect to Win."
        desc="75% of digital product failures stem from poor early decisions—wrong tech stack, unclear user flows, or over-engineered features. Calsoft helps you cut through ambiguity and shape a scalable, cloud-first, cost-efficient architecture that aligns with your business goals from Day 1."
        buttonText="Download"
        MainComponenent={ArchitectureIdeation}
        id="why-it-matters"
      // contentClass="w-[90%]"
      />
      <WhatWeOffer
        description="Our architecture-led ideation workshops deliver clarity in just 7–10 working days. You walk away with:"
        id="what-we-offer"
      />
      <UseCases
        CTACopy="Reduce design cycle by 30% via architecture-led ideation."
        id="use-cases"
        BussinessId="business-value"
        data={{
          leftSideContent: {
            title: "Faster MVP. Lower Costs. Zero Rework.",
            subTitle: null,
            description:
              "Our approach de-risks the early phases by up to 40%. You get:",
          },
          rightSideContent: [
            {
              title: "30%",
              subTitle: "faster time-to-MVP",
            },
            {
              title: "Up to 25%",
              subTitle: "cost saving through right-stack decisions",
            },
            {
              title: "100%",
              subTitle:
                "cloud readiness with reusable components",
            },
            {
              title: "3X",
              subTitle: "faster onboarding of dev teams with clean blueprints",
            },
          ],
        }}
      />
      <HowToStart
        headerContent={{
          title: "Start Smart, Scale Fast",
          description:
            "Every engagement starts with a focused 2-week Architecture Sprint designed to align stakeholders, define priorities, and deconstruct risks before any code is written.",
        }}
        id="how-to-start"
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
