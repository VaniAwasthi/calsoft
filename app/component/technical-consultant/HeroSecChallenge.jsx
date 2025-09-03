"use client";
import React, { useState } from "react";
import BackgroundImage from "../../assets/Data-Ai/technical-consultant/TechnicalBanner.svg";
import BannerWithRightSec from "../utilities/BannerWithRightsec";
import Submenu from "../utilities/Submenu";
import ButtonImage from "../../assets/home/buttonImg.webp";
import InfoSec1 from "../../assets/Data-Ai/technical-consultant/InfoSec1.svg";
import InfoSec2 from "../../assets/Data-Ai/technical-consultant/InfoSec2.svg";
import InfoSec3 from "../../assets/Data-Ai/technical-consultant/InfoSec3.svg";
import InfoSec4 from "../../assets/Data-Ai/technical-consultant/InfoSec4.svg";
import { showHubSpotForm } from "../utilities/showHubSpotForm"; // import utility
import {
  ChallengeSolutionComp,
  DataInfoSection,
} from "../utilities/ChallengeSolutionDataAi";
export const HeroSectionTechnicalConsulting = ({ slide = {
  title: "End-to-end data pipeline implementation ",

  description: `Engineer and accelerate data flow, 
integration, and trust across hybrid 
environments.`,
  buttonText: "Get in touch",
  image: BackgroundImage,
} }) => {
  const [activeTab, setActiveTab] = useState("benefits");

  const navItems = [
    "Benefits",
    "Architecture",
    "Mitigation",
    "Connectivity",
    "Cost-optimized",
  ];
  return (
    <>
      <BannerWithRightSec
        heroBg={BackgroundImage}
        title={slide.title}
        description={slide.description}
        rightImage={slide.rightImage}
        buttonText={slide.buttonText}
        buttonImage={ButtonImage}
        hoverImage={ButtonImage}
        rightSec={false}
        onButtonClick={() => showHubSpotForm("technical-consulting-datasheet")}
      />
      <Submenu
        navItems={navItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </>
  );
};

export const ChallengeSolutionSecTechnicalConsulting = ({ data = [
  {
    tag: "Fragmented systems ",
    challenge:
      "Are fragmented systems slowing your data consolidation efforts? ",
    solution:
      "Architect unified, scalable pipelines that streamline multi-source ingestion and integration. ",
  },
  {
    tag: "Resilience assessment ",
    challenge:
      "Facing risks of inconsistent or incomplete data during migration? ",
    solution:
      "Enable governed, validated migration frameworks for seamless data transitions. ",
  },
  {
    tag: "Migration and scaling ",
    challenge:
      "Struggling to maintain transparency across complex data flows?",
    solution:
      "Implement real-time data lineage tracking and impact analysis mechanisms. ",
  },
  {
    tag: "Lack of transparency",
    challenge:
      "Worried about slow onboarding of new data sources? ",
    solution:
      "Design modular, cloud-ready ingestion pipelines to accelerate source integration. ",
  },
] }) => {

  return (
    <>
      <ChallengeSolutionComp
        secId="benefits"
        data={data}
        BlackHeading="–Data Discipline"
        GradientHeading="Challenge to solutions:"
      />
    </>
  );
};

export const StrategicSecTechnicalConsulting = () => {
  return (
    <>
      <DataInfoSection
        title="Modern Data Architecture"
        description="Laying the foundation for scalable, AI-ready data systems. "
        // buttonText="Learn More"
        link="#"
        whatWeDo={[
          "Architect centralized and federated data systems",
          "Standardize modeling and storage layers",
          "Align with business-specific SLAs and latency goals",
        ]}
        businessImpact={[
          "Faster data availability across teams",
          "Reduced overhead with standardized blueprints",
          "Future-ready foundation for analytics and GenAI",
        ]}
        imageSrc={InfoSec1}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={true}
        secid="architecture"
      />
    </>
  );
};

export const RiskMitigationSecTechnicalConsulting = () => {
  return (
    <>
      <DataInfoSection
        title="Data Sanity and Lineage Handling"
        description="Making your data trustworthy, auditable, and compliant. "
        // buttonText="Learn More"
        link="#"
        whatWeDo={[
          "Capture end-to-end data lineage",
          "Automate validation and profiling workflows",
          "Integrate metadata governance tools",
        ]}
        businessImpact={[
          "Improved audit and compliance readiness",
          "Reduced rework from poor-quality data",
          "Clear traceability for business decisions",
        ]}
        imageSrc={InfoSec2}
        imageAlt="Image"
        imageLeft={true}
        isDivider={false}
        secid="mitigation"
      />
    </>
  );
};

export const PlatformSecTechnicalConsulting = () => {
  return (
    <>
      <DataInfoSection
        title="Data Platform and Ecosystem Integration"
        description="Bringing your data tools, platforms, and pipelines into sync. "
        // buttonText="Learn More"
        link="#"
        whatWeDo={[
          "Integrate diverse data tools (ETL, lakes, BI)",
          "Enable plug-and-play connectors across environments ",
          "Build composable data pipelines with API-first design",
        ]}
        businessImpact={[
          "Seamless user experience across ecosystems",
          "Lower integration costs and faster time-to-insight",
          "Avoid vendor lock-in with modular design",
        ]}
        imageSrc={InfoSec3}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={true}
        secid="connectivity"
      />
    </>
  );
};
export const CostOptimizedSecTechnicalConsulting = () => {
  return (
    <>
      <DataInfoSection
        title="Risk Mitigation and Recovery"
        description="Prepare for the worst with data protection by design. "
        // buttonText="Learn More"
        link="#"
        whatWeDo={[
          "Implement backup and replication strategies",
          "Define RTO/RPO aligned with business needs",
          "Conduct regular recovery testing and drills ",
        ]}
        businessImpact={[
          "Rapid recovery from outages or cyberattacks",
          "Minimized operational downtime",
          "Confidence in business continuity planning",
        ]}
        imageSrc={InfoSec4}
        imageAlt="Infrastructure globe"
        imageLeft={true}
        isDivider={false}
        secid="cost-optimized"
      />
    </>
  );
};

// export const DataProtectionSecTechnicalConsulting = () => {
//   return (
//     <>
//       <DataInfoSection
//         title="Data Protection and Privacy"
//         description="Protecting your data against internal and external threats."
        // buttonText="Learn More"
//         link="#"
//         whatWeDo={[
//           "Apply role-based access and encryption",
//           "Align with GDPR, HIPAA, and CCPA policies",
//           "Enable real-time monitoring for anomalies",
//         ]}
//         businessImpact={[
//           "Strengthened customer trust and brand reputation",
//           "Reduced regulatory and financial risk",
//           "Secure foundation for AI and analytics initiatives",
//         ]}
//         imageSrc={InfoSec3}
//         imageAlt="Infrastructure globe"
//         imageLeft={false}
//         isDivider={true}
//         secid="connectivity"
//       />
//     </>
//   );
// };

// export const EffortlessSecTechnicalConsulting = () => {
//   return (
//     <>
//       <DataInfoSection
//         title="Effortless and Faultless Data Migration"
//         description="Seamless migration with zero compromise on data integrity."
        // buttonText="Learn More"
//         link="#"
//         whatWeDo={[
//           "Plan and execute phased migrations",
//           "Use automated validation at every stage",
//           "Support hybrid and multi-cloud transitions",
//         ]}
//         businessImpact={[
//           "No loss or corruption of data during move",
//           "Reduced migration time and cost",
//           "Business continuity with no user disruption",
//         ]}
//         imageSrc={InfoSec4}
//         imageAlt="Infrastructure globe"
//         imageLeft={true}
//         isDivider={false}
//         secid="cost-optimized"
//       />
//     </>
//   );
// };
