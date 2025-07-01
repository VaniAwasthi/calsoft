"use client";
import {
  HeroSectionProduct,
  // ChallengeToSolution,
  ItInfraSec,
  MultiCloudInfraSec,
  CloudNativetInfraSec,
  CostInfraSec,
  CloudMigrationInfraSec,
  SREInfraSec,
  ChallengeToSolutionSec,
} from "../../../app/component/cloud-service/HeroSection";
import {
  BannerSection,
  ContactSecData,
} from "../../../app/component/utilities/InfraSectorSec";
import React from "react";
import BannerwithButtonBg from "../../../assets/DigitalEngineering/Product/BannerwithButton.webp";

const Page = () => {
  return (
    <>
      <HeroSectionProduct />
      <ChallengeToSolutionSec />
      <ItInfraSec />
      <MultiCloudInfraSec />
      <CloudNativetInfraSec />
      <BannerSection
        backgroundImage={BannerwithButtonBg}
        title={
          <>
            Become cloud-native for faster and{" "}
            <br className="hidden md:block" />
            collaborative DevOps + SRE – It’s time to adopt
          </>
        }
        buttonText="Know More"
        buttonLink="#"
      />
      <CloudMigrationInfraSec />
      <CostInfraSec />
      <SREInfraSec />
      <ContactSecData
        BoldContent="Engineer cloud environments "
        lightContent="with us that are scalable, resilient,
and cost-efficient"
        link="#"
      />
    </>
  );
};

export default Page;
