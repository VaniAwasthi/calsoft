"use client";

import React from "react";
import HeroSec from "../../../component/infra/HeroSec";
import WhyItMatters from "../../../component/infra/Cloud-Migration/WhyItMatters";
import IntelligentPlanning from "../../../component/infra/Multi-Cloud-Provisioning/IntelligentPlanning";
import UseCases from "../../../component/infra/UseCases";
import FirstStep from "../../../component/infra/FirstStep";
import WhyCalsoft from "../../../component/infra/WhyCalsoft";
import Agility from "../../../component/infra/Agility";
import { ContactSecDataAi } from "../../../component/utilities/ChallengeSolutionDataAi";

const Page = () => {
  return (
    <>
      <HeroSec />
      <WhyItMatters />
      <IntelligentPlanning />
      <Agility />
      <UseCases />
      <WhyCalsoft />
      <FirstStep />
      <ContactSecDataAi
        lightContent={
          "Want to create a connected, intelligent, & resilient manufacturing ecosystem?"
        }
        link={"#"}
      />
    </>
  );
};
export default Page;
