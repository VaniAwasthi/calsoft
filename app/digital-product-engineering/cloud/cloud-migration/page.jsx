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
      <Agility
        data={{
          leftSideContent: {
            title: "Faster, Safer, Smarter Cloud Transitions",
            subTitle: "Cloud migration done right delivers real impact:",
            description:
              "Calsoft delivers engineering-led outcomes, not just infrastructure uplift.",
          },
          rightSideContent: [
            {
              title: "Up to 40%",
              subTitle: "reduction in infra costs via right-sized provisioning",
            },
            {
              title: "Zero-downtime",
              subTitle: "cutovers for production-critical systems",
            },
            {
              title: "50-70%",
              subTitle: "faster migration through automation",
            },
            {
              title: "90%",
              subTitle:
                "improvement in post-migration application performance ",
            },
          ],
        }}
        bookMeetingData={{
          title: "Achieve 80% app modernization with native tech.",
          buttonText: "Book a Meeting",
        }}
        buttonText="Try Now"
      />
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
