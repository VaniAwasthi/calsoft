"use client";
import React, { useState } from "react";
import BackgroundImage from "../../assets/Data-Ai/dataGovernance/HeroBanner.svg";
import BannerWithRightSec from "../utilities/BannerWithRightsec";
import Submenu from "../utilities/Submenu";
import ButtonImage from "../../assets/home/buttonImg.webp";
import Info1 from "../../assets/Data-Ai/dataGovernance/InfoSec-1.svg";
import Info2 from "../../assets/Data-Ai/dataGovernance/InfoSec-2.svg";
import Info3 from "../../assets/Data-Ai/dataGovernance/InfoSec-3.svg";
import Info4 from "../../assets/Data-Ai/dataGovernance/InfoSec-4.svg";
import {
  ChallengeSolutionComp,
  DataInfoSection,
} from "../utilities/ChallengeSolutionDataAi";
export const GovernJounery = () => {
  const [activeTab, setActiveTab] = useState("benefits");
  const slide = {
    title: "Data governance and quality",

    description: `Establish control, compliance, and trust across
        your enterprise data landscape.`,
    buttonText: "Download Datasheet",
    image: BackgroundImage,
  };
  const navItems = [
    "Benefits",
    "Cataloging",
    "Deduplication",
    "Governance",
    "Collaboration",
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

export const GovernSolutionSec = () => {
  const data = [
    {
      tag: "Data profiling",
      challenge:
        "Unsure about the structure, quality, and completeness of enterprise data?",
      solution:
        "Profile datasets automatically to uncover gaps, anomalies, and optimization opportunities",
    },
    {
      tag: "Quality assurance",
      challenge:
        "Struggling to cleanse, deduplicate, and standardize growing data volumes?",
      solution:
        "Implement dynamic cleansing frameworks to ensure consistency, accuracy, and trust",
    },
    {
      tag: "Policy governance",
      challenge:
        "Lacking enforcement of data usage, retention, and compliance policies?",
      solution:
        "Embed automated governance protocols and role-based access controls at all data touchpoints",
    },
    {
      tag: "Collaborative stewardship",
      challenge:
        "Difficult to synchronize governance practices across distributed teams?",
      solution:
        "Establish collaborative stewardship platforms for unified policy alignment and operational efficiency",
    },
  ];
  return (
    <>
      <ChallengeSolutionComp
        data={data}
        BlackHeading="Govern enterprise data flows"
        GradientHeading=" Challenge to solutions:"
        secId="benefits"
      />
    </>
  );
};

export const ProfilingSec = () => {
  return (
    <>
      <DataInfoSection
        title="Data profiling and cataloging"
        description="Discover, assess, and  organize your enterprise data for better control."
        buttonText="Learn More "
        link="#"
        whatWeDo={[
          "Scan and profile datasets for structure",
          "Create metadata-rich data catalogs",
          "Integrate profiling into data flows",
        ]}
        businessImpact={[
          "Clear visibility into data assets",
          "Faster rollout of governance rules",
          "Quicker access to trusted datasets",
        ]}
        imageSrc={Info1}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={true}
        secid="cataloging"
      />
    </>
  );
};

export const CleansingSec = () => {
  return (
    <>
      <DataInfoSection
        title="Data cleansing
                and deduplication"
        description="Elevate data integrity through intelligent correction and consolidation."
        buttonText="Learn More "
        link="#"
        whatWeDo={[
          "Detect and fix issues using AI tools",
          "Remove duplicates across systems",
          "Align formats and naming standards",
        ]}
        businessImpact={[
          "Improved quality for analytics use",
          "Reduced storage and process waste",
          "Better data flow for applications",
        ]}
        imageSrc={Info2}
        imageAlt="Image"
        imageLeft={true}
        isDivider={false}
        secid="deduplication"
      />
    </>
  );
};

export const PolicySec = () => {
  return (
    <>
      <DataInfoSection
        title="Policy governance"
        description="Enforce data compliance and protect assets through automated controls."
        buttonText="Learn More "
        link="#"
        whatWeDo={[
          "Apply access, use, and retention rules",
          "Control access with RBAC and encryption",
          "Enforce policy via tags and logging",
        ]}
        businessImpact={[
          "Stronger compliance with less risk",
          "Protected data at every stage",
          "Less effort spent on manual checks",
        ]}
        imageSrc={Info3}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={false}
        secid="governance"
      />
    </>
  );
};
export const CollaborationSec = () => {
  return (
    <>
      <DataInfoSection
        title="Data collaboration & orchestration"
        description="Align teams and policies to drive enterprise-wide data responsibility."
        buttonText="Learn More "
        link="#"
        whatWeDo={[
          "Set up hubs for cross-team oversight",
          "Run shared workflows for governance",
          "Lead training on policies and roles",
        ]}
        businessImpact={[
          "Broader adoption of governance rules",
          "Faster response to policy gaps",
          "Culture of shared data ownership",
        ]}
        imageSrc={Info4}
        imageAlt="Infrastructure globe"
        imageLeft={true}
        isDivider={false}
        secid="collaboration"
      />
    </>
  );
};
