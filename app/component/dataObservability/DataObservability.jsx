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
import { showHubSpotForm } from "../utilities/showHubSpotForm";
export const DataJounery = () => {
  const [activeTab, setActiveTab] = useState("benefits");
  const slide = {
    title: "Data Modernization That  Moves the Business Forward",

    description: `Turn legacy data into agile, cloud-first, AI-ready assets-securely and without disruption`,
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
        onButtonClick={()=>showHubSpotForm("data-observability-datasheet")}
        
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
      tag: "Legacy Platforms",
      challenge:
        "Aging data warehouses limit scale and flexibility",
      solution:
        "We replatform monoliths to modern, cloud-native data stacks for agility and cost savings.",
    },
    {
      tag: "Schema Chaos",
      challenge: "Lack of standardization slows innovation",
      solution:
        "We implement governed, interoperable data models across the enterprise.",
    },
    {
      tag: "Modernization Debt",
      challenge:
        "Complex tech debt blocks cloud and AI adoption",
      solution:
        "We decouple and refactor workloads for phased modernization—without disruption.",
    },
    {
      tag: "Access Gaps",
      challenge: "Business teams can’t access or trust the data",
      solution:
        "We democratize access through catalogs, quality checks, and self-serve analytics.",
    },
    {
      tag: "Uncoordinated Shifts",
      challenge: "Siloed migrations lead to fragmented architectures",
      solution:
        "We drive modernization through an orchestrated, enterprise-wide roadmap.",
    },
    {
      tag: "Compliance Bottlenecks",
      challenge: "Compliance requirements stall modernization efforts",
      solution:
       "We ensure every modernization step aligns with data privacy and governance needs.",
    },
  ];
  return (
    <>
      <ChallengeSolutionComp
        data={data}
        BlackHeading="Legacy to Leadership"
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
