"use client";
import BannerwithButtonBg from "../../assets/DigitalEngineering/Product/BannerwithButton.webp";

import React from "react";

import { BannerSection } from "../../component/utilities/InfraSectorSec";
import { ContactSecDataAi } from "../../component/utilities/ChallengeSolutionDataAi";
import {
  ChallengeSolutionSec,
  DataArchitectureSec,
  DataPlatformSec,
  DataSanitySec,
  EffortlessSec,
  HeroSectionDatapipelineengineering,
} from "../../component/data-pipeline-engineering/HeroSecChallengesInfo.jsx";

const page = () => {
  return (
    <>
      <HeroSectionDatapipelineengineering />
      <ChallengeSolutionSec />
      <DataArchitectureSec />
      <DataPlatformSec />
      <BannerSection
        backgroundImage={BannerwithButtonBg}
        title={
          <>
            Design intelligent data pipelines that
            <br className="hidden md:block" />
            drive faster insights and integration
          </>
        }
        buttonText="Know More"
        buttonLink="#"
      />
      <EffortlessSec />
      <DataSanitySec />
      <ContactSecDataAi
        BoldContent="Innovate and grow with
future-ready data pipelines"
        lightContent="Calsoft can show you how"
        link="#"
      />
    </>
  );
};

export default page;
