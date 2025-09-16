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
import Img from "@/app/assets/DigitalEngineering/cloud-service/Infrastructure-Roadmap.webp"
import { showHubSpotForm } from "@/app/component/utilities/showHubSpotForm";
import { ContactSecDataAi } from "@/app/component/utilities/ChallengeSolutionDataAi";

const Page = () => {
  return (
    <>
      <HeroSec 
      Hero_bg={Img}
      />
      <WhyItMatters
      id="why-it-matters"
        title="Problem + Solution Fit"
        desc="Most enterprises operate in a fragmented infra state — with
                    on-prem, cloud-native, and edge setups running in silos.
                    This complexity leads to:"
        desc2="Calsoft's Roadmap Approach begins with mapping your existing ecosystem, identifying technical and business bottlenecks, and creating a data-backed transformation baseline."
        buttonText="Get in Touch"
        MainComponenent={InfraRoadmap}
        buttonClicked={()=>showHubSpotForm("get-in-touch")}
      />
      <IntelligentPlanning />
      <Agility />
      <UseCases />
      <WhyCalsoft />
      <FirstStep />
      <ContactSecDataAi
                    lightContent={
                      "Chart infrastructure roadmaps for scalable transformation."
                    }
                   
                  />
    </>
  );
};
export default Page;
