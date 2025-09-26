"use client";
import BannerwithButtonBg from "../../assets/Data-Ai/technical-consultant/KnowMoreBanner.webp";

import React from "react";
import BackgroundImage from "../../assets/Data-Ai/technical-consultant/TechnicalBanner.svg";

import {
  ChallengeSolutionSecTechnicalConsulting,
  CostOptimizedSecTechnicalConsulting,
  HeroSectionTechnicalConsulting,
  PlatformSecTechnicalConsulting,
  RiskMitigationSecTechnicalConsulting,
  StrategicSecTechnicalConsulting,
  // DataProtectionSecTechnicalConsulting,
  // EffortlessSecTechnicalConsulting,
} from "../../component/technical-consultant/HeroSecChallenge";
import { BannerSection } from "../../component/utilities/InfraSectorSec";
import { ContactSecDataAi } from "../../component/utilities/ChallengeSolutionDataAi";

import { showHubSpotForm } from "../../component/utilities/showHubSpotForm"; // import utility

const page = () => {
  return (
    <>
      <HeroSectionTechnicalConsulting
        slide={{
          title: "Enterprise Data Management, Engineered for Control",

          description: `Build a trusted, scalable, future-ready data backbone for compliance, continuity, and clarity.`,
          buttonText: "Get in touch",
          image: BackgroundImage,
        }}
      />
      <ChallengeSolutionSecTechnicalConsulting
        data={[
          {
            tag: "Data Silos ",
            challenge:
              "Fragmented data sources slow decision-making	Data Silos	We unify enterprise data across platforms, functions, and geographies.",
            solution:
              "We unify enterprise data across platforms, functions, and geographies. ",
          },
          {
            tag: "Lineage Gaps ",
            challenge: "Lack of metadata and lineage affects auditability.",
            solution:
              "We bring transparency through lineage capture, versioning, and tagging. ",
          },
          {
            tag: "Tech Overload ",
            challenge: "Overlapping tools create operational inefficiencies",
            solution:
              "We rationalize tools and embed ecosystem connectors with minimal overhead. ",
          },
          {
            tag: "Data Risk",
            challenge: "Increased cyber threats call for proactive safeguards ",
            solution:
              "We embed policy-driven protection, access control, and anomaly detection. ",
          },
        ]}
      />
      <StrategicSecTechnicalConsulting />
      <RiskMitigationSecTechnicalConsulting />
      <BannerSection
        backgroundImage={BannerwithButtonBg}
        title={
          <>
            Increase data integrity by 80% with automation.
            <br className="cursor pointer hidden md:block px-1" />
          </>
        }
        buttonText="Book a Meeting"
        buttonLink="#"
        onButtonClick={() => showHubSpotForm("book-a-meeting")}
      />
      <PlatformSecTechnicalConsulting />
      <CostOptimizedSecTechnicalConsulting />
      <ContactSecDataAi
        BoldContent="Calsoft can show you how"
        lightContent="Simplify complexity with end-to-end enterprise data management."
        link="#"
      />
    </>
  );
};

export default page;
