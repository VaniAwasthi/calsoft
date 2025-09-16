"use client";
import React from "react";
import BannerwithButtonBg from "../../assets/DigitalEngineering/product-app/KnowMore.webp";
import {
  BannerSection,
  ContactSecData,
} from "../../component/utilities/InfraSectorSec.jsx";

import { showHubSpotForm } from "../../component/utilities/showHubSpotForm"; // import utility

import {
  AccelerateSec,
  DeploymentSec,
  DevelopmentSec,
  DevOpsSec,
  HeroSectionProductandApplicationDev,
  IdeationSec,
  ProdandAppChallengeSec,
  QualityengineeringSec,
} from "../../component/product&applicationdev/HeroChallengeInfo.jsx";
const page = () => {
  return (
    <>
      <HeroSectionProductandApplicationDev />
      <ProdandAppChallengeSec />
      <IdeationSec />
      <DevelopmentSec />
      <QualityengineeringSec />
      <BannerSection
  backgroundImage={BannerwithButtonBg}
  title={
    <>
      Reduce time-to-market by 35% with rapid development.
    </>
  }
  buttonText="Book a Meeting"
  onButtonClick={() => showHubSpotForm("book-a-meeting")}
/>
      <DevOpsSec />
      <DeploymentSec />
      <AccelerateSec />
      <ContactSecData
        BoldContent="Engineer your next product idea
into a future-ready reality."
        lightContent="Get in touch"
        buttonClicked={() => showHubSpotForm("contact-us-popup")}
       
      />
    </>
  );
};

export default page;
