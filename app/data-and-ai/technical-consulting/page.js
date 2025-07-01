"use client";
import BannerwithButtonBg from "../../assets/DigitalEngineering/Product/BannerwithButton.webp";

import React from "react";

import {
  ChallengeSolutionSecTechnicalConsulting,
  CostOptimizedSecTechnicalConsulting,
  HeroSectionTechnicalConsulting,
  PlatformSecTechnicalConsulting,
  RiskMitigationSecTechnicalConsulting,
  StrategicSecTechnicalConsulting,
} from "../../component/technical-consultant/HeroSecChallenge.jsx";
import { BannerSection } from "../../component/utilities/InfraSectorSec";
import { ContactSecDataAi } from "../../component/utilities/ChallengeSolutionDataAi";

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
            <br className="hidden md:block" />
            with expert engineering insight
          </>
        }
        buttonText="Know More"
        buttonLink="#"
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
