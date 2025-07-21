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




const ClientPage = () => {
  
  return (
    <>

      <Seo
        title="End-to-End Data Pipeline Implementation Services | CalSoft Inc."
        description="Accelerate insights with our end-to-end data pipeline implementation—covering ETL, real-time and cloud pipelines for robust, scalable data solutions."
        keywords="End-to-end data pipeline implementation"
        url="/data-ai/end-to-end-data-pipeline-implementation"
        image="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInfoSec4.84a355ab.webp&w=1080&q=75"
      />
    
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

export default ClientPage;
