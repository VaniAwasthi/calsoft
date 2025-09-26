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
export const DataJounery = ({
  slide = {
    title: "Data observability",

    description: `Monitor, analyze, and safeguard data
    ecosystems with continuous visibility.`,
    buttonText: "Download Datasheet",
    image: BackgroundImage,
  },
}) => {
  const [activeTab, setActiveTab] = useState("benefits");
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
        onButtonClick={() => showHubSpotForm("data-observability-datasheet")}
      />
      <Submenu
        navItems={navItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </>
  );
};

export const DataSolutionSec = ({
  data = [
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
  ],
}) => {
  return (
    <>
      <ChallengeSolutionComp
        data={data}
        BlackHeading="– Legacy to Leadership"
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
        title="Event-ready Data Frameworks"
        description="Architected for real-time decisions and streaming intelligence."
        // buttonText="Learn More"
        link="#"
        whatWeDo={[
          "Design event-driven data pipelines",
          "Enable Kafka, Flink, or equivalent integration",
          "Build fault-tolerant, high-throughput ingestion layers",
        ]}
        businessImpact={[
          "Reduced latency in decision-making",
          "Real-time insights across critical ops",
          "Future-ready for AI/ML and RAG use cases",
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
        title="Data & Storage Optimization"
        description="Lean data architectures without compromising performance."
        // buttonText="Learn More"
        link="#"
        whatWeDo={[
          "Apply storage tiering and deduplication",
          "Optimize file formats (Parquet, ORC, Delta)",
          "Rationalize redundant datasets and unused pipelines",
        ]}
        businessImpact={[
          "Up to 30% reduction in storage costs",
          "Better query performance with smaller data footprint",
          "Sustainable scalability as data grows",
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
        title="Data Warehouse Modernization"
        description="From legacy monoliths to cloud-native warehouses."
        // buttonText="Learn More"
        link="#"
        whatWeDo={[
          "Assess existing DW architecture",
          "Migrate to Snowflake, BigQuery, Redshift, etc.",
          "Implement ELT models with performance tuning",
        ]}
        businessImpact={[
          "Faster analytics and reporting cycles",
          "Lower infrastructure and license cost",
          "Elastic scaling aligned with usage",
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
        title="Analytics Engine (BI) Updates"
        description="Analytics pipelines re-engineered for business velocity."
        // buttonText="Learn More"
        link="#"
        whatWeDo={[
          "Upgrade or migrate BI tools (Power BI, Tableau, Looker)",
          "Refresh dashboards with actionable KPIs",
          "Optimize queries and materialized views",
        ]}
        businessImpact={[
          "Reduced dashboard load times",
          "Better visualization relevance and adoption",
          "Increased self-service for business teams",
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
