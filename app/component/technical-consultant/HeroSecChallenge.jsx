"use client";
import React, { useState } from "react";
import BackgroundImage from "../../assets/DigitalEngineering/Product/CloudServiceBanner.webp";
import BannerWithRightSec from "../utilities/BannerWithRightsec";
import Submenu from "../utilities/Submenu";
import ButtonImage from "../../assets/home/buttonImg.webp";
import { ChallengeToSolution, InfraSection } from "../utilities/InfraSectorSec";
import cloudInfrIt from "../../assets/DigitalEngineering/Product/cloudInfrIt.webp";
import RiskImage from "../../assets/Data-Ai/Risk.webp";
import PlatformImage from "../../assets/Data-Ai/4sec.webp";
import CostImage from "../../assets/Data-Ai/5sec.webp";
import {
  ChallengeSolutionComp,
  DataInfoSection,
} from "../utilities/ChallengeSolutionDataAi";
export const HeroSectionTechnicalConsulting = () => {
  const [activeTab, setActiveTab] = useState("Journey");
  const slide = {
    title: "Technical-consulting",
    title2: "",
    description: `Bridge strategy and execution through datadriven
technical advisory.`,
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
        "Identify systemlevel friction points and redesign workflows for improved throughput and agility",
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
        data={data}
        BlackHeading="AI Agents that work at scale"
        GradientHeading=" Challenge to solutions :"
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
        buttonText="Case Study"
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
        imageSrc={cloudInfrIt}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={true}
      />
    </>
  );
};

export const RiskMitigationSecTechnicalConsulting = () => {
  return (
    <>
      <DataInfoSection
        title="Risk mitigation and recovery planning"
        description="Anticipate disruptions and build resilience into your technology landscape."
        buttonText="Case Study"
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
        imageSrc={RiskImage}
        imageAlt="Image"
        imageLeft={true}
        isDivider={false}
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
        buttonText="Case Study"
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
        imageSrc={PlatformImage}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={false}
      />
    </>
  );
};
export const CostOptimizedSecTechnicalConsulting = () => {
  return (
    <>
      <DataInfoSection
        title="Balance performance and spend through expert system-wide planning."
        description="Bring ideas to life early and streamline decision-making with interactive prototypes."
        buttonText="Case Study"
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
        imageSrc={CostImage}
        imageAlt="Infrastructure globe"
        imageLeft={true}
        isDivider={false}
      />
    </>
  );
};
