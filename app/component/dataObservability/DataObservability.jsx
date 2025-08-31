"use client";
import React, { useState } from "react";
import BackgroundImage from "../../assets/Data-Ai/data-observibility/oberservabilityBanner.svg";
import BannerWithRightSec from "../utilities/BannerWithRightsec";
import Submenu from "../utilities/Submenu";
import ButtonImage from "../../assets/home/buttonImg.webp";

import InfoSec1 from "../../assets/Data-Ai/data-observibility/InfoSec-1.svg";
import InfoSec2 from "../../assets/Data-Ai/data-observibility/InfoSec-2.svg";
import InfoSec3 from "../../assets/Data-Ai/data-observibility/InfoSec-3.svg";
import InfoSec4 from "../../assets/Data-Ai/data-observibility/InfoSec-4.svg";
import {
  ChallengeSolutionComp,
  DataInfoSection,
} from "../utilities/ChallengeSolutionDataAi";
export const DataJounery = () => {
  const [activeTab, setActiveTab] = useState("benefits");
  const slide = {
    title: "Data observability",

    description: `Monitor, analyze, and safeguard data
    ecosystems with continuous visibility.`,
    buttonText: "Download Datasheet",
    image: BackgroundImage,
  };
  const navItems = [
    "Benefits",
    "Streaming",
    "Compliance",
    "Orchestration",
    "Resilience",
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
        buttonWidth="!w-[250px]"
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
        secId="benefits"
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
        // buttonText="Learn More"
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
        secid="streaming"
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
        // buttonText="Learn More"
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
        secid="compliance"
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
        // buttonText="Learn More"
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
        isDivider={true}
        secid="orchestration"
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
        // buttonText="Learn More"
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
        secid="resilience"
      />
    </>
  );
};
