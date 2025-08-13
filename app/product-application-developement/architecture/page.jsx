import React from "react";
import HeroSection from "../../component/testing/HeroSection";
import { Why } from "../../component/Plugin/PluginWhyWhatUseBusinessHowStep";
import WhyItMatter from "../../component/product-application-development/WhyItMatters";
import Steps from "../../component/product-application-development/Steps";

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
      <Steps />
    </>
  );
}
