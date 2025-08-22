"use client";
import BannerwithButtonBg from "../../assets/Data-Ai/technical-consultant/KnowMoreBanner.webp";

import React from "react";

import {
  ChallengeSolutionSecTechnicalConsulting,
  CostOptimizedSecTechnicalConsulting,
  HeroSectionTechnicalConsulting,
  PlatformSecTechnicalConsulting,
  RiskMitigationSecTechnicalConsulting,
  StrategicSecTechnicalConsulting,
} from "../../component/technical-consultant/HeroSecChallenge.jsx";
import { BannerSection } from "../../component/utilities/InfraSectorSec.jsx";
import { ContactSecDataAi } from "../../component/utilities/ChallengeSolutionDataAi.jsx";

import { showHubSpotForm } from "../../component/utilities/showHubSpotForm"; // import utility

const page = () => {
  return (
    <>
      <HeroSectionTechnicalConsulting />
      <ChallengeSolutionSecTechnicalConsulting />
      <StrategicSecTechnicalConsulting />
      <RiskMitigationSecTechnicalConsulting />
      <BannerSection
        backgroundImage={BannerwithButtonBg}
        title={
          <>
            Strategize, stabilize, and scale
            <br className="hidden md:block px-1" /> with expert engineering
            insight
          </>
        }
        buttonText="Book a Meeting"
        buttonLink="#"
        onButtonClick={() => showHubSpotForm("book-a-meeting")}
      />
      <PlatformSecTechnicalConsulting />
      <CostOptimizedSecTechnicalConsulting />
      <ContactSecDataAi
        BoldContent="Let Calsoft guide your technology transformation"
        lightContent="Bridge strategy and execution"
        link="#"
      />
    </>
  );
};

export default page;
