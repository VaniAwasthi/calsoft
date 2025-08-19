import React from "react";
import HeroSection from "../../../component/testing/HeroSection";
import Steps from "../../../component/product-application-development/Steps";
import WhatWeOffer from "../../../component/product-application-development/WhatWeOffer";
import UseCases from "../../../component/product-application-development/UseCases";
import HowToStart from "../../../component/product-application-development/HowToStart";
import { ContactSecDataAi } from "../../../component/utilities/ChallengeSolutionDataAi";
import WhyItMatters from "../../../component/product-application-development/WhyItMatters";
import ModerizationMatters from "@/app/component/cx-engineering/ModerizationMatters";

const Page = () => {
  return (
    <>
      <HeroSection
        title="Turn Ideas into Intelligent Products."
        description="De-risk early decisions with the right architecture,
              built for scale, speed, and ROI."
        buttonText="Get Architecture Readiness Score"
      />
      <WhyItMatters
        title="Mobile Isn’t a Channel. It’s the Frontline."
        desc="Mobile is where business happens—whether it’s a field rep capturing leads, a consumer placing an order, or a manager approving workflows. Yet 60% of enterprise apps fail user expectations due to poor UX, offline issues, or clunky performance. Calsoft solves this by engineering apps that align business goals with intuitive, dependable experiences."
        buttonText="Download Case Study"
        MainComponenent={ModerizationMatters}
        // contentClass="h-[31.5rem]"
        gridClass="sm:h-[55rem] md:h-[53rem] xl:h-[31.5rem]"
        mainComponenentClass="justify-start"
      />
      <WhatWeOffer />
      <UseCases />
      <HowToStart
        headerContent={{
          title: "Start Smart, Scale Fast",
          description:
            "Every engagement starts with a focused 2-week Architecture Sprint designed to align stakeholders, define priorities, and deconstruct risks before any code is written.",
        }}
      />
      <Steps />
      <ContactSecDataAi
        BoldContent="Let’s talk!"
        lightContent="Want to create a connected, intelligent, & resilient manufacturing ecosystem? "
        link="#"
      />
    </>
  );
};

export default Page;
