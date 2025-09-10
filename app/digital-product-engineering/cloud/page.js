"use client";

import React from "react";
import BannerwithButtonBg from "../../assets/DigitalEngineering/cloud-service/KnowMore.svg";
import {
  ChallengeToSolutionSec,
  CloudMigrationInfraSec,
  CloudNativetInfraSec,
  CostInfraSec,
  HeroSectionProduct,
  ItInfraSec,
  MultiCloudInfraSec,
  SREInfraSec,
} from "../../component/cloud-service/HeroSection.jsx";
import { showHubSpotForm } from "../../component/utilities/showHubSpotForm"; // import utility
import {
  BannerSection,
  ContactSecData,
} from "../../component/utilities/InfraSectorSec";

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
  title="Become cloud-native for faster and collaborative DevOps + SRE – It’s
time to adopt"
  buttonText="Book a Meeting"
  onButtonClick={() => showHubSpotForm("book-a-meeting")}
/>
      <CloudMigrationInfraSec />
      <CostInfraSec />
      <SREInfraSec />
      <ContactSecData
        BoldContent="Engineer cloud environments "
        lightContent="with us that are scalable, resilient,
        and cost - efficient "
      />
    </>
  );
};

export default Page;
