"use client";

import {
  BannerSection,
  ContactSecData,
} from "../../component/utilities/InfraSectorSec.jsx";
import React from "react";
import BannerwithButtonBg from "../../assets/DigitalEngineering/CX/BannerKnow.svg";
import {
  ChallengeToSolutionSec,
  FrontEndSec,
  HeroSectionCXEngineering,
  IntelligentUISec,
  MobileEngineeringSec,
  RapidprototypingSec,
  UXModernizationSec,
} from "../../component/cx-engineering/HeroSecChallengesIno.jsx";

const Page = () => {
  return (
    <>
      <HeroSectionCXEngineering />
      <ChallengeToSolutionSec />
      <FrontEndSec />
      <UXModernizationSec />
      <IntelligentUISec />
      <BannerSection
        backgroundImage={BannerwithButtonBg}
        title="Boost user retention by 50% through smart CX."
        buttonText="Book a Meeting"
        buttonLink="#"
      />

      <RapidprototypingSec />
      <MobileEngineeringSec />

      <ContactSecData
        BoldContent="Reimagine your digital
experiences for faster growth."
        lightContent="Let’s talk..."
        link="#"
      />
    </>
  );
};

export default Page;
