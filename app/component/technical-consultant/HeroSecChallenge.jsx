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
import {
  ChallengeSolutionComp,
  DataInfoSection,
} from "../utilities/ChallengeSolutionDataAi";
export const HeroSectionTechnicalConsulting = () => {
  const [activeTab, setActiveTab] = useState("benefits");
  const slide = {
    title: "Technical Consulting",

    description: `Bridge strategy and execution through data-driven
technical advisory.`,
    buttonText: "Talk to an Expert",
    image: BackgroundImage,
  };
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
      />
      <Submenu
        navItems={navItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </>
  );
};

export const ChallengeSolutionSecTechnicalConsulting = () => {
  const data = [
    {
      tag: "ARCHITECTURE ALIGNMENT",
      challenge:
        "Is your current infrastructure misaligned with evolving business demands?",
      solution:
        "Evaluate and refine data and system architectures to match strategic objectives and scale",
    },
    {
      tag: "OPERATIONAL GAPS",
      challenge:
        "Are inefficiencies and bottlenecks slowing down delivery and responsiveness?",
      solution:
        "Identify system-level friction points and redesign workflows for improved throughput and agility",
    },
    {
      tag: "TECH ROI",
      challenge:
        "Uncertain whether current tools and platforms are delivering ROI?",
      solution:
        "Assess utilization patterns, recommend right-sizing, and guide platform rationalization",
    },
    {
      tag: "CHANGE READINESS",
      challenge:
        "Struggling to plan and execute tech shifts (change) without disruption?",
      solution:
        "Structured roadmaps for adoption, migration, or modernization initiatives with built-in risk safeguards",
    },
  ];
  return (
    <>
      <ChallengeSolutionComp
        secId="benefits"
        data={data}
        BlackHeading="Scalable AI Agents"
        GradientHeading="Challenge to solutions:"
      />
    </>
  );
};

export const StrategicSecTechnicalConsulting = () => {
  return (
    <>
      <DataInfoSection
        title="Strategic architecture advisory"
        description="Blueprint scalable systems aligned to long-term
business objectives."
        buttonText="View Case Study"
        link="#"
        whatWeDo={[
          "Assess system fit for future scale",
          "Propose modular, flexible design",
          "Add security and governance layers",
        ]}
        businessImpact={[
          "Systems scale with business goals",
          "Architecture supports key strategy",
          "Modular design cuts future rework",
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
        title="Risk mitigation and recovery planning"
        description="Anticipate disruptions and strengthen resilience across your tech environment."
        buttonText="View Case Study"
        link="#"
        whatWeDo={[
          "Find weak points across platforms",
          "Plan for fallbacks and recovery",
          "Align with SLAs and compliance",
        ]}
        businessImpact={[
          "Fewer breakdowns during stress",
          "Fast recovery from disruptions",
          "Greater trust in tech planning",
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
        title="Platform interoperability consulting"
        description="Create cohesive systems through guided integration and alignment strategies."
        buttonText="View Case Study"
        link="#"
        whatWeDo={[
          "Map cross-platform connection gaps",
          "Align integration with governance",
          "Guide phased API and data setup",
        ]}
        businessImpact={[
          "Simpler system-to-system flow",
          "Fewer issues from data drift",
          "Quicker integration launches",
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
        title="Balance performance and spend through expert system-wide planning"
        description="Bring ideas to life early and streamline decision-making with interactive prototypes."
        buttonText="View Case Study"
        link="#"
        whatWeDo={[
          "Analyze workloads for imbalance",
          "Plan orchestration to match use",
          "Map cost to real business value",
        ]}
        businessImpact={[
          "Waste cut from unused capacity",
          "Systems use fewer idle cycles",
          "Spend matches performance goals",
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
