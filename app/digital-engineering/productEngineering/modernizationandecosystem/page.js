"use client";
import React from "react";
import BannerwithButtonBg from "../../../assets/DigitalEngineering/Product/BannerwithButton.webp";
import {
  BannerSection,
  ContactSecData,
} from "@/component/utilities/InfraSectorSec";
import {
  EcosystemManagementSec,
  FutureReadinessSec,
  HeroSectionModernization,
  IoTEngineeringSec,
  MaturityAssessmentSec,
  ModernizationChallengeSec,
  PlugindevelopmentSec,
} from "../../../app/component/modernizationandecosystem/HeroChallengesInfoSec";
const page = () => {
  return (
    <>
      <HeroSectionModernization />
      <ModernizationChallengeSec />
      <MaturityAssessmentSec />
      <FutureReadinessSec />
      <EcosystemManagementSec />
      <BannerSection
        backgroundImage={BannerwithButtonBg}
        title={
          <>
            All future-readiness advantages are
            <br className="hidden md:block" />
            ready to unlock–<b>Let’s connect</b>
          </>
        }
        buttonText="Know More"
        buttonLink="#"
      />
      <PlugindevelopmentSec />
      <IoTEngineeringSec />
      <ContactSecData
        BoldContent="Modernize and build ecosystems ready for tomorrow’s growth"
        lightContent="take the next step"
        link="#"
      />
    </>
  );
};

export default page;
