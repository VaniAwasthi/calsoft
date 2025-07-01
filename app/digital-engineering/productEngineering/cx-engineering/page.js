"use client";

import {
  BannerSection,
  ContactSecData,
} from "../../../app/component/utilities/InfraSectorSec";
import React from "react";
import BannerwithButtonBg from "../../../assets/DigitalEngineering/Product/BannerwithButton.webp";
import {
  ChallengeToSolutionSec,
  FrontEndSec,
  HeroSectionCXEngineering,
  IntelligentUISec,
  MobileEngineeringSec,
  RapidprototypingSec,
  UXModernizationSec,
} from "../../../app/component/cx-engineering/HeroSecChallengesIno";

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
        title={
          <>
            Great user experiences lead to higher
            <br className="hidden md:block" />
            market share – <b>Let’s do it</b>
          </>
        }
        buttonText="Know More"
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
