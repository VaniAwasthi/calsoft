import React from "react";
import HeroSection from "../../../component/testing/HeroSection";
import { Why } from "../../../component/Plugin/PluginWhyWhatUseBusinessHowStep";
import Steps from "../../../component/product-application-development/Steps";
import WhatWeOffer from "../../../component/product-application-development/WhatWeOffer";
import UseCases from "../../../component/product-application-development/UseCases";
import HowToStart from "../../../component/product-application-development/HowToStart";
import { ContactSecDataAi } from "../../../component/utilities/ChallengeSolutionDataAi";
import ArchitectureSprint from "../../../component/product-application-development/ArchitectureSprint";
import WhyItMatters from "../../../component/product-application-development/WhyItMatters";
import ArchitectureIdeation from "../../../component/product-application-development/ArchitectureIdeationMatters";

const Page = () => {
  return (
    <>
      <HeroSection
        title="Turn Ideas into Intelligent Products."
        description="De-risk early decisions with the right architecture,
              built for scale, speed, and ROI."
        buttonText="Get Architecture Readiness Score"
      />
      {/* <Why /> */}
      <WhyItMatters
        title="Don’t Build Blind. Architect to Win."
        desc="75% of digital product failures stem from poor early decisions—wrong tech stack, unclear user flows, or over-engineered features. Calsoft helps you cut through ambiguity and shape a scalable, cloud-first, cost-efficient architecture that aligns with your business goals from Day 1."
        buttonText="Download"
        MainComponenent={ArchitectureIdeation}
        // contentClass="w-[90%]"
      />
      <WhatWeOffer />
      <UseCases CTACopy="Reduce design cycle by 30% via architecture-led ideation."/>
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
};

export default Page;
