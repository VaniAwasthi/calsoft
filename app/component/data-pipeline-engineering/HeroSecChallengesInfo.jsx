"use client";
import React, { useState } from "react";
import BackgroundImage from "../../assets/Data-Ai/PipeLine/BannerPipe.svg";
import BannerWithRightSec from "../utilities/BannerWithRightsec";
import Submenu from "../utilities/Submenu";
import ButtonImage from "../../assets/home/buttonImg.webp";
import InfoSec1 from "../../assets/Data-Ai/PipeLine/Info1.svg";
import InfoSec2 from "../../assets/Data-Ai/PipeLine/Info2.svg";
import InfoSec3 from "../../assets/Data-Ai/PipeLine/Info3.svg";
import InfoSec4 from "../../assets/Data-Ai/PipeLine/Info4.svg";
import {
  ChallengeSolutionComp,
  DataInfoSection,
} from "../utilities/ChallengeSolutionDataAi";
export const HeroSectionDatapipelineengineering = () => {
  const [activeTab, setActiveTab] = useState("benefits");
  const slide = {
    title: "End-to-end data pipeline implementation",

    description: `Engineer and accelerate data flow, integration,
and trust across hybrid environments.`,
    buttonText: "Download Datasheet",
    image: BackgroundImage,
  };
  const navItems = [
    "Benefits",
    "Architecture",
    "Integration",
    "Migration",
    "Data sanity",
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

export const ChallengeSolutionSec = () => {
  const data = [
    {
      tag: "Fragmented systems",
      challenge: "Is system fragmentation delaying your data consolidation?",
      solution:
        "Architect unified, scalable pipelines that streamline multi-source ingestion and integration.",
    },
    {
      tag: "Resilience assessment",
      challenge:
        "Facing risks of inconsistent or incomplete data during migration?",
      solution:
        "Use validated, governed frameworks to ensure seamless data migration",
    },
    {
      tag: "Migration and scaling",
      challenge:
        "Struggling to maintain transparency across complex data flows?",
      solution:
        "Track data lineage and analyze impact in real time with intelligent mechanisms",
    },
    {
      tag: "Lack of transparency",
      challenge: "Worried about slow onboarding of new data sources?",
      solution:
        "Accelerate source integration with modular, cloud-ready ingestion pipelines.",
    },
  ];
  return (
    <>
      <ChallengeSolutionComp
        data={data}
        BlackHeading="Architect, implement, and scale data pipelines"
        GradientHeading=" Challenge to solutions:"
        secId="benefits"
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
        buttonText="Learn More"
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
        imageSrc={InfoSec1}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={true}
        secid="architecture"
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
        buttonText="Learn More"
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
        imageSrc={InfoSec2}
        imageAlt="Image"
        imageLeft={true}
        isDivider={false}
        secid="integration"
      />
    </>
  );
};

export const EffortlessSec = () => {
  return (
    <>
      <DataInfoSection
        title="Effortless and faultless data migration"
        description="Move critical data assets with speed & integrity. Zero disruption guaranteed."
        buttonText="Learn More"
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
        imageSrc={InfoSec3}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={true}
        secid="migration"
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
        buttonText="Learn More"
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
        imageSrc={InfoSec4}
        imageAlt="Infrastructure globe"
        imageLeft={true}
        isDivider={false}
        secid="data-sanity"
      />
    </>
  );
};
