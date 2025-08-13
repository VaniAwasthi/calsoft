"use client";
import React from "react";
import HeroSec from "../../../component/infra/HeroSec";
import WhyItMatters from "../../../component/infra/Infra-roadmap/WhyItMatters";
import IntelligentPlanning from "../../../component/infra/Infra-roadmap/IntelligentPlanning";
import UseCases from "../../../component/infra/UseCases";
import FirstStep from "../../../component/infra/FirstStep";
import WhyCalsoft from "../../../component/infra/WhyCalsoft";

export const Page = () => {
  return (
    <>
      <HeroSec />
      <WhyItMatters />
      <IntelligentPlanning />
      <UseCases />
      <WhyCalsoft />
      <FirstStep />
    </>
  );
};
