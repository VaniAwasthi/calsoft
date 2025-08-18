"use client";
import React from "react";
import BannerwithButtonBg from "../../assets/DigitalEngineering/Product/BannerwithButton.webp";
import {
  BannerSection,
  ContactSecData,
} from "../../component/utilities/InfraSectorSec.jsx";
import {
  EcosystemManagementSec,
  FutureReadinessSec,
  HeroSectionModernization,
  IoTEngineeringSec,
  MaturityAssessmentSec,
  ModernizationChallengeSec,
  PlugindevelopmentSec,
} from "../../component/modernizationandecosystem/HeroChallengesInfoSec.jsx";
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
           Cut legacy costs by 40% via modernization strategy.
          </>
        }
        buttonText="Book a Meeting"
        buttonLink="#"
      />
      <PlugindevelopmentSec />
      <ContactSecData
        BoldContent="Modernize and build ecosystems ready for tomorrow’s growth "
        lightContent="- take the next step"
        link="#"
      />
    </>
  );
};

export default page;
