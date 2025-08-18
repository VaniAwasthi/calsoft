"use client";

import React from "react";
import HeroSec from "../../../component/infra/HeroSec";
// import WhyItMatters from "../../../component/infra/Multi-Cloud-Provisioning/WhyItMatters";
import IntelligentPlanning from "../../../component/infra/Multi-Cloud-Provisioning/IntelligentPlanning";
import UseCases from "../../../component/infra/UseCases";
import FirstStep from "../../../component/infra/FirstStep";
import WhyCalsoft from "../../../component/infra/WhyCalsoft";
import WhyItMatters from "../../../component/product-application-development/WhyItMatters";
import MultiCloudMatters from "../../../component/infra/MultiCloudMatters";

const Page = () => {
  return (
    <>
      <HeroSec />
      <WhyItMatters
        title="Multi-Cloud Without Governance = Risk"
        desc="Most enterprises today operate in multi-cloud by accident, not
                  by design. Teams spin up resources on AWS, Azure, or GCP to
                  meet speed needs — but without centralized visibility or
                  governance. The result:"
        desc2="Calsoft’s approach ensures intentional, governed multi-cloud
                  provisioning — without slowing down innovation."
        MainComponenent={MultiCloudMatters}
      />
      <IntelligentPlanning />
      <UseCases />
      <WhyCalsoft />
      <FirstStep />
    </>
  );
};
export default Page;
