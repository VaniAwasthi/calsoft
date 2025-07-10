"use client";
import BannerwithButtonBg from "../../assets/Data-Ai/PipeLine/KnowMoreBg.webp";

import React from "react";

import { BannerSection } from "../../component/utilities/InfraSectorSec.jsx";
import { ContactSecDataAi } from "../../component/utilities/ChallengeSolutionDataAi.jsx";
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
            Design intelligent data pipelines that {""}
            <br className="hidden md:block px-1" />
            drive faster insights and integration
          </>
        }
        buttonText="Explore More"
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
