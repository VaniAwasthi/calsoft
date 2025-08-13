import React from "react";
import HeroSection from "../../component/testing/HeroSection";
import WhyItMatter from "../../component/product-application-development/WhyItMatters";

export default function page() {
  return (
    <>
      <HeroSection
        title="Turn Ideas into Intelligent Products."
        description="De-risk early decisions with the right architecture,
built for scale, speed, and ROI."
        buttonText="Get Architecture Readiness Score"
      />
      <WhyItMatter />
    </>
  );
}
