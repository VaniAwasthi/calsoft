import React from "react";
import HeroSection from "../../../component/testing/HeroSection";
import WhyItMatters from "../../../component/product-application-development/WhyItMatters";
import QualityEngineering from "../../../component/product-application-development/QualityEngineeringMatters";
import Steps from "../../../component/product-application-development/Steps";
import WhatWeOffer from "../../../component/product-application-development/WhatWeOffer";
import UseCases from "../../../component/product-application-development/UseCases";
import HowToStart from "../../../component/product-application-development/HowToStart";
import { ContactSecDataAi } from "../../../component/utilities/ChallengeSolutionDataAi";
import ArchitectureSprint from "../../../component/product-application-development/ArchitectureSprint";

export default function page() {
  return (
    <>
      <HeroSection
        title="Turn Ideas into Intelligent Products"
        description="De-risk early decisions with the right architecture,
built for scale, speed, and ROI."
        buttonText="Get Architecture Readiness Score"
        navItems={[
          "Why it Matters",
          "What We Offer",
          "Use Cases",
          "Business Value",
          "How to Start",
        ]}
      />
      <WhyItMatters
        title="Don’t Build Blind. Architect to Win."
        desc="75% of digital product failures stem from poor early decisions—wrong tech stack, unclear user flows, or over-engineered features. Calsoft helps you cut through ambiguity and shape a scalable, cloud-first, cost-efficient architecture that aligns with your business goals from Day 1."
        buttonText="Download"
        MainComponenent={QualityEngineering}
        contentClass="w-[90%]"
      />
      <WhatWeOffer />
      <UseCases CTACopy="Ensure 98% defect-free releases with automation." />
      <HowToStart
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
}
