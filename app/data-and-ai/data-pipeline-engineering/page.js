import {
  ChallengeSolutionSec,
  CostOptimizedSec,
  HeroSectionDatapipelineengineering,
  PlatformSec,
  RiskMitigationSec,
  StrategicSec,
} from "@/app/component/data-pipeline-engineering/HeroSecChallengesInfo";
import { BannerSection } from "@/app/component/utilities/InfraSectorSec";
import BannerwithButtonBg from "../../assets/DigitalEngineering/Product/BannerwithButton.webp";

import React from "react";
import { ContactSecDataAi } from "@/app/component/utilities/ChallengeSolutionDataAi";

const page = () => {
  return (
    <>
      <HeroSectionDatapipelineengineering />
      <ChallengeSolutionSec />
      <StrategicSec />
      <RiskMitigationSec />
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
      <PlatformSec />
      <CostOptimizedSec />
      <ContactSecDataAi
        BoldContent="Let Calsoft guide your technology transformation"
        lightContent="Bridge strategy and execution"
        link="#"
      />
    </>
  );
};

export default page;
