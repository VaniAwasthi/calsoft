"use client";
import React from "react";
import HeroSec from "../../../component/infra/HeroSec";
import WhyItMatters from "../../../component/infra/Cloud-Migration/WhyItMatters";
import IntelligentPlanning from "../../../component/infra/Multi-Cloud-Provisioning/IntelligentPlanning";
import UseCases from "../../../component/infra/UseCases";
import FirstStep from "../../../component/infra/FirstStep";
import WhyCalsoft from "../../../component/infra/WhyCalsoft";
import Agility from "../../../component/infra/Agility";
import Connect from "../../../component/infra/Connect";

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
      <Connect />
    </>
  );
};
export default Page;
