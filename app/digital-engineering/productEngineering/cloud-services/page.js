"use client";

import React from "react";
import BannerwithButtonBg from "../../../assets/DigitalEngineering/Product/BannerwithButton.webp";
import {
  ChallengeToSolutionSec,
  CloudMigrationInfraSec,
  CloudNativetInfraSec,
  CostInfraSec,
  HeroSectionProduct,
  ItInfraSec,
  MultiCloudInfraSec,
  SREInfraSec,
} from "@/app/component/cloud-service/HeroSection.jsx";
import {
  BannerSection,
  ContactSecData,
} from "@/app/component/utilities/InfraSectorSec.jsx";

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
            collaborative DevOps + SRE – Its time to adopt
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
