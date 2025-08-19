import React from "react";
import HeroSection from "../../../component/testing/HeroSection";
import WhyItMatters from "../../../component/product-application-development/WhyItMatters";
import SmartDevelopmentMatters from "../../../component/product-application-development/SmartDevelopmentMatters";
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
        title="Deploy Smarter. Run Leaner. Stay Ahead."
        description="Accelerate go-to-market, reduce infrastructure waste, and
eliminate downtime with Calsoft’s intelligent deployment strategies."
        buttonText="Request Deployment Blueprint"
      />
      <WhyItMatters
        title="Code That’s Ready Is Useless If It
Can’t Ship Reliably."
        desc="Your releases shouldn’t break production. And they shouldn’t break the bank either. Yet, 40% of teams experience downtime during deployments and overspend on underutilized infrastructure. Calsoft brings automation, predictability, and flexibility—so you ship faster, with fewer resources, and zero surprises."
        buttonText="Download Case Study"
        MainComponenent={SmartDevelopmentMatters}
        contentClass="w-[90%]"
      />
      <WhatWeOffer />
      <UseCases CTACopy="Cut deployment time by 50% through automation."/>
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
