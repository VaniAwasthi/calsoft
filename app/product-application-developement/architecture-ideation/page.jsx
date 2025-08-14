import React from "react";
import HeroSection from "../../component/testing/HeroSection";
import { Why } from "../../component/Plugin/PluginWhyWhatUseBusinessHowStep";
import Steps from "../../component/product-application-development/Steps";
import WhatWeOffer from "../../component/product-application-development/WhatWeOffer";
import UseCases from "../../component/product-application-development/UseCases";
import HowToStart from "../../component/product-application-development/HowToStart";

export default function page() {
  return (
    <>
      <HeroSection
        title="Turn Ideas into Intelligent Products."
        description="De-risk early decisions with the right architecture,
        built for scale, speed, and ROI."
        buttonText="Get Architecture Readiness Score"
      />
      <Why />
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
    </>
  );
}
