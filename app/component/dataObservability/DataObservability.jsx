"use client";
import React, { useState } from "react";
import BackgroundImage from "../../assets/Data-Ai/data-observibility/oberservabilityBanner.png";
import BannerWithRightSec from "../utilities/BannerWithRightsec";
import Submenu from "../utilities/Submenu";
import ButtonImage from "../../assets/home/buttonImg.webp";
import { ChallengeToSolution, InfraSection } from "../utilities/InfraSectorSec";
import cloudInfrIt from "../../assets/DigitalEngineering/Product/cloudInfrIt.webp";
import InfoSec1 from "../../assets/Data-Ai/data-observibility/InfoSec-1.webp";
import InfoSec2 from "../../assets/Data-Ai/data-observibility/InfoSec-2.webp";
import InfoSec3 from "../../assets/Data-Ai/data-observibility/InfoSec-3.webp";
import InfoSec4 from "../../assets/Data-Ai/data-observibility/InfoSec-4.webp";
import {
  ChallengeSolutionComp,
  DataInfoSection,
} from "../utilities/ChallengeSolutionDataAi";
export const DataJounery = () => {
  const [activeTab, setActiveTab] = useState("Journey");
  const slide = {
    title: "Data observability",
    title2: "",
    description: `Monitor, analyze, and safeguard data
    ecosystems with continuous visibility.`,
    buttonText: "Get in touch",
    image: BackgroundImage,
  };
  const navItems = [
    "Journey",
    "Personalization",
    "Forecasting",
    "Security",
    " Case studies",
    "Services",
  ];
  return (
    <>
      <BannerWithRightSec
        heroBg={BackgroundImage}
        title={slide.title}
        title2={slide.title2}
        description={slide.description}
        rightImage={slide.rightImage}
        buttonText={slide.buttonText}
        buttonImage={ButtonImage}
        hoverImage={ButtonImage}
        rightSec={false}
        backgroundMain="!h-[250px] md:!h-[650px]"
        ImageClassname="![object-position:37%_43%]"
        titleOneClass="font-semibold lg:text-[52px] md:text-[40px] text-[21px] mt-2"
        titleTwoClass={`font-semibold lg:text-[52px] md:text-[40px] text-[21px] md:mt-4 md:mb-[5rem]`}
        descriptionClass="hidden md:block mt-4 text-[12px] leading-6 w-[200px] md:w-full"
      />
      <Submenu
        navItems={navItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </>
  );
};

export const DataSolutionSec = () => {
  const data = [
    {
      tag: "Unified  monitoring",
      challenge:
        "Struggling to track data health across distributed environments?",
      solution:
        "Centralized observability frameworks across hybrid and multicloud data systems",
    },
    {
      tag: "Real-time insights",
      challenge: "Finding anomalies too late in streaming data pipelines?",
      solution:
        "Implement realtime telemetry and anomaly detection across ingestion and processing layers",
    },
    {
      tag: "Lineage visibility",
      challenge:
        "Lacking transparency over data movement and transformation journeys?",
      solution:
        "Map complete data lineage and audit trails from source to consumption",
    },
    {
      tag: "Proactive risk alerts",
      challenge: "Reacting only after data issues impact downstream analytics?",
      solution:
        "Deploy predictive monitoring and early warning systems for data quality risks.",
    },
  ];
  return (
    <>
      <ChallengeSolutionComp
        data={data}
        BlackHeading="Monitor, Predict, and Fortify Data Ecosystems"
        GradientHeading=" Challenge to solutions:"
      />
    </>
  );
};

export const RealSec = () => {
  return (
    <>
      <DataInfoSection
        title="Real-time data streaming
                analytics"
        description="Boost agility and efficiency as you capture, analyze, and act on live data flows."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Set up live data pipeline monitors",
          "Auto-scale streams with fault control",
          "Build alerting tied to live KPIs",
        ]}
        businessImpact={[
          "Spot pipeline issues immediately",
          "Respond faster with real-time views",
          "Reduce delays and data loss risks",
        ]}
        imageSrc={InfoSec1}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={true}
      />
    </>
  );
};

export const ComplianceSec = () => {
  return (
    <>
      <DataInfoSection
        title="Compliance tracking"
        description="Embed governance to strengthen observability, risk mitigation, and audit readiness."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Add compliance checks at each step",
          "Capture lineage, tag with policies",
          "Match rules with frameworks like GDPR",
        ]}
        businessImpact={[
          "Audit trails always up to date",
          "Fewer policy violations at scale",
          "Stakeholders trust verified data",
        ]}
        imageSrc={InfoSec2}
        imageAlt="Image"
        imageLeft={true}
        isDivider={false}
      />
    </>
  );
};

export const Real2Sec = () => {
  return (
    <>
      <DataInfoSection
        title="Real-time data workflow synchronization"
        description="Coordinate data flows across platforms with precision and agility."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Sync flows across systems in real-time",
          "Trigger processing via events",
          "Use one view for all data motion",
        ]}
        businessImpact={[
          "Bottlenecks resolved more quickly",
          "Live sync keeps analytics on time",
          "Visibility across platforms grows",
        ]}
        imageSrc={InfoSec3}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={false}
      />
    </>
  );
};
export const ProactiveSec = () => {
  return (
    <>
      <DataInfoSection
        title="Proactive risk alerts"
        description="Detect anomalies early and safeguard data integrity proactively."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Predict issues before they disrupt",
          "Score risks to sort alert urgency",
          "Send smart alerts to fix issues fast",
        ]}
        businessImpact={[
          "Stop issues before impact spreads",
          "Faster triage of high-risk events",
          "Keep systems stable and trusted",
        ]}
        imageSrc={InfoSec4}
        imageAlt="Infrastructure globe"
        imageLeft={true}
        isDivider={false}
      />
    </>
  );
};
