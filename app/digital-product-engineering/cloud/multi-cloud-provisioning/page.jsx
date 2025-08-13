import React from "react";
import HeroSec from "../../../component/infra/HeroSec";
import WhyItMatters from "../../../component/infra/Multi-Cloud-Provisioning/WhyItMatters";
import IntelligentPlanning from "../../../component/infra/Multi-Cloud-Provisioning/IntelligentPlanning";
import UseCases from "../../../component/infra/UseCases";
import FirstStep from "../../../component/infra/FirstStep";
import WhyCalsoft from "../../../component/infra/WhyCalsoft";

export default function page() {
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
}
