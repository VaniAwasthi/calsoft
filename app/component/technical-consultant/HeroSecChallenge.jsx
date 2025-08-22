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
    title: "End-to-end data pipeline implementation ",

    description: `Engineer and accelerate data flow, 
integration, and trust across hybrid 
environments.`,
    buttonText: "Get in touch",
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
  ];
  return (
    <>
      <ChallengeSolutionComp
        secId="benefits"
        data={data}
        BlackHeading="Architect, implement, and scale data pipelines "
        GradientHeading="Challenge to solutions:"
      />
    </>
  );
};

export const StrategicSecTechnicalConsulting = () => {
  return (
    <>
      <DataInfoSection
        title="Data architecture enhancement"
        description="Design resilient and high-velocity pipelines 
for evolving data needs. "
        buttonText="Case study (or asset)"
        link="#"
        whatWeDo={[
          "Map pipelines for hybrid data flows ",
          "Support varied formats and scales ",
          "Build resilient, parallel systems",
        ]}
        businessImpact={[
          "Speed up trusted data delivery ",
          "Scale easily with new sources",
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
        title="Data platform and ecosystem integration "
        description="Unify distributed data sources for seamless, intelligent operations. "
        buttonText="Case study (or asset)"
        link="#"
        whatWeDo={[
          "Link lakes, warehouses, and stores",
          "Connect process and storage layers",
          "Build APIs to unify data movement ",
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
        secid="mitigation"
      />
    </>
  );
};

export const PlatformSecTechnicalConsulting = () => {
  return (
    <>
      <DataInfoSection
        title="Effortless and faultless data migration"
        description="Move critical data assets with integrity, speed, and zero disruption. "
        buttonText="Case study (or asset)"
        link="#"
        whatWeDo={[
          "Create migration maps by system type",
          "Add rollback and audit routines ",
          "Manage transitions with low risk ",
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
        secid="connectivity"
      />
    </>
  );
};
export const CostOptimizedSecTechnicalConsulting = () => {
  return (
    <>
      <DataInfoSection
        title="Data sanity and lineage handling"
        description="Ensure transparency, trust, and traceability across your data pipelines. "
        buttonText="Case study (or asset)"
        link="#"
        whatWeDo={[
          "Add checks across each pipeline step ",
          "Map full data journeys visually ",
          "Use tags and metadata for audits ",
        ]}
        businessImpact={[
          "Trust rises with full traceability",
          "Audits take less time to execute ",
          "Root causes are faster to uncover ",
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
