"use client";

import React from "react";
import HeroSec from "../../../component/infra/HeroSec";

import IntelligentPlanning from "../../../component/infra/Infra-roadmap/IntelligentPlanning";
import UseCases from "../../../component/infra/UseCases";
import FirstStep from "../../../component/infra/FirstStep";
import WhyCalsoft from "../../../component/infra/WhyCalsoft";
import WhyItMatters from "../../../component/product-application-development/WhyItMatters";
import InfraRoadmap from "../../../component/infra/InfraRoadmapMatters";
import Agility from "../../../component/infra/Agility";

const Page = () => {
  return (
    <>
      <HeroSec />
      <WhyItMatters
        title="Problem + Solution Fit"
        desc="Most enterprises operate in a fragmented infra state — with
                    on-prem, cloud-native, and edge setups running in silos.
                    This complexity leads to:"
        desc2="Calsoft's Roadmap Approach begins with mapping your existing ecosystem, identifying technical and business bottlenecks, and creating a data-backed transformation baseline."
        buttonText="Download Case Study"
        MainComponenent={InfraRoadmap}
      />
      <IntelligentPlanning />
      <Agility />
      <UseCases />
      <WhyCalsoft />
      <FirstStep />
    </>
  );
};
export default Page;
