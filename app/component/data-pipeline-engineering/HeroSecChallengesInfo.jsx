"use client";
import React, { useState } from "react";
import BackgroundImage from "../../assets/Data-Ai/Banner-Pipe.webp";
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
export const HeroSectionDatapipelineengineering = () => {
  const [activeTab, setActiveTab] = useState("Journey");
  const slide = {
    title: "End-to-end data",
    title2: "pipeline implementation",
    description: `Engineer and accelerate data flow, integration,
and trust across hybrid environments.`,
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

export const ChallengeSolutionSec = () => {
  const data = [
    {
      tag: "Fragmented systems",
      challenge:
        "Are fragmented systems slowing your data consolidation efforts?",
      solution:
        "Architect unified, scalable pipelines that streamline multi-source ingestion and integration.",
    },
    {
      tag: "Resilience assessment",
      challenge:
        "Facing risks of inconsistent or incomplete data during migration?",
      solution:
        "Enable governed, validated migration frameworks for seamless data transitions.",
    },
    {
      tag: "Migration and scaling",
      challenge:
        "Struggling to maintain transparency across complex data flows?",
      solution:
        "Implement real-time data lineage tracking and impact analysis mechanisms.",
    },
    {
      tag: "Lack of transparency",
      challenge: "Worried about slow onboarding of new data sources?",
      solution:
        "Design modular, cloud-ready ingestion pipelines to accelerate source integration.",
    },
  ];
  return (
    <>
      <ChallengeSolutionComp
        data={data}
        BlackHeading="Architect, implement, and scale data pipelines"
        GradientHeading=" Challenge to solutions :"
      />
    </>
  );
};

export const DataArchitectureSec = () => {
  return (
    <>
      <DataInfoSection
        title="Data architecture enhancement"
        description="Design resilient and
high-velocity pipelines
for evolving data needs."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Map pipelines for hybrid data flows",
          "Support varied formats and scales",
          "Build resilient, parallel systems",
        ]}
        businessImpact={[
          "Speed up trusted data delivery",
          "Scale easily with new sources",
          "Reduce failures and fixes over time",
        ]}
        imageSrc={cloudInfrIt}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={true}
      />
    </>
  );
};

export const DataPlatformSec = () => {
  return (
    <>
      <DataInfoSection
        title="Data platform
and ecosystem integration"
        description="Unify distributed data
sources for seamless, intelligent operations."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Link lakes, warehouses, and stores",
          "Connect process and storage layers",
          "Build APIs to unify data movement",
        ]}
        businessImpact={[
          "Faster access to connected data",
          "Lower integration effort at scale",
          "Better policy control across flows",
        ]}
        imageSrc={RiskImage}
        imageAlt="Image"
        imageLeft={true}
        isDivider={false}
      />
    </>
  );
};

export const EffortlessSec = () => {
  return (
    <>
      <DataInfoSection
        title="Effortless and faultless data migration"
        description="Move critical data assets with integrity, speed, and zero disruption."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Create migration maps by system type",
          "Add rollback and audit routines",
          "Manage transitions with low risk",
        ]}
        businessImpact={[
          "Migration is quicker and cleaner",
          "Cloud moves become smoother",
          "Data quality stays intact end-to-end",
        ]}
        imageSrc={PlatformImage}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={false}
      />
    </>
  );
};
export const DataSanitySec = () => {
  return (
    <>
      <DataInfoSection
        title="Data sanity and lineage handling"
        description="Ensure transparency, trust, and traceability across your data pipelines."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Add checks across each pipeline step",
          "Map full data journeys visually",
          "Use tags and metadata for audits",
        ]}
        businessImpact={[
          "Trust rises with full traceability",
          "Audits take less time to execute",
          "Root causes are faster to uncover",
        ]}
        imageSrc={CostImage}
        imageAlt="Infrastructure globe"
        imageLeft={true}
        isDivider={false}
      />
    </>
  );
};
