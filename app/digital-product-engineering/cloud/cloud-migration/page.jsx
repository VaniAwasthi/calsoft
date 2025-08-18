"use client";

import React from "react";
import HeroSec from "../../../component/infra/HeroSec";
// import WhyItMatters from "../../../component/infra/Cloud-Migration/WhyItMatters";
import IntelligentPlanning from "../../../component/infra/Multi-Cloud-Provisioning/IntelligentPlanning";
import UseCases from "../../../component/infra/UseCases";
import FirstStep from "../../../component/infra/FirstStep";
import WhyCalsoft from "../../../component/infra/WhyCalsoft";
import Agility from "../../../component/infra/Agility";
import { ContactSecDataAi } from "../../../component/utilities/ChallengeSolutionDataAi";
import WhyItMatters from "../../../component/product-application-development/WhyItMatters";
import CloudMigration from "../../../component/infra/CloudMigrationMatters";

const Page = () => {
  return (
    <>
      <HeroSec />
      <WhyItMatters
        title="Debunking Cloud-Native Myths"
        desc="For most enterprises, “cloud-native” remains aspirational —
                    often misunderstood as just container adoption. In reality,
                    incomplete strategies lead to:"
        desc2="Calsoft ensures true cloud-native enablement by aligning
                    architecture, engineering practices, security, and
                    operations — at scale."
        MainComponenent={CloudMigration}
      />
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
