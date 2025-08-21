"use client";

import React from "react";
import HeroSection from "../../../component/testing/HeroSection";
import Steps from "../../../component/product-application-development/Steps";
import WhatWeOffer from "../../../component/product-application-development/WhatWeOffer";
import UseCases from "../../../component/product-application-development/UseCases";
import HowToStart from "../../../component/product-application-development/HowToStart";
import WhyItMatters from "../../../component/product-application-development/WhyItMatters";
import { ContactSecDataAi } from "../../../component/utilities/ChallengeSolutionDataAi";
import ArchitectureSprint from "../../../component/product-application-development/ArchitectureSprint";

const Page = () => {
  return (
    <>
      <HeroSection
        title="Build Fast. Ship Often. Stay Always-On."
        description="Calsoft’s DevOps & Site Reliability Engineering services automate delivery,
        accelerate releases, and ensure 99.99 % uptime— across cloud, hybrid, and edge deployments.
        "
        buttonText="Book your DevOps Health Check"
      />
      <WhyItMatters />
      <WhatWeOffer
        heading="Automation. Observability. Reliability. All in One Flow."
        description="We deliver production-grade DevOps & SRE services that fit your team, stack, and scale ambition."
      />
      <UseCases CTACopy="Speed up release cycles by 60% using SRE practices." />
      <HowToStart
        headerContent={{
          title: "Start Smart, Scale Fast",
          description:
            "Every engagement starts with a focused 2-week Architecture Sprint designed to align stakeholders, define priorities, and deconstruct risks before any code is written.",
        }}
      />{" "}
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
z;
