"use client";
import React, { useState } from "react";
import BackgroundImage from "../../assets/DigitalEngineering/mordernization/Banner.webp";
import BannerWithRightSec from "../utilities/BannerWithRightsec";
import Submenu from "../utilities/Submenu";
import ButtonImage from "../../assets/home/buttonImg.webp";
import { ChallengeToSolution, InfraSection } from "../utilities/InfraSectorSec";
import Info1 from "../../assets/DigitalEngineering/mordernization/Info-1.svg";
import Info2 from "../../assets/DigitalEngineering/mordernization/Info-2.svg";
import Info3 from "../../assets/DigitalEngineering/mordernization/Info-3.svg";
import Info4 from "../../assets/DigitalEngineering/mordernization/Info-4.svg";

import { showHubSpotForm } from "../utilities/showHubSpotForm"; // import utility

export const HeroSectionModernization = () => {
  const [activeTab, setActiveTab] = useState("benefits");
  const slide = {
    title: "Modernization and ecosystem management",

    description: `Reengineer systems, integrate ecosystems, and
future-proof operations with agility and precision.`,
    buttonText: "Download Datasheet",
    image: BackgroundImage,
  };
  const navItems = [
    "Benefits",
    "Assessment",
    "Modernization",
    "Ecosystem",
    "Plugin",
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
  className="modernization-ecosystem-download-datasheet"
  onButtonClick={() => showHubSpotForm("modernization-ecosystem-download-datasheet")}
/>
      <Submenu
        navItems={navItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </>
  );
};

export const ModernizationChallengeSec = () => {
  const challengesData = [
    {
      title: "Assessment",
      description:
        "Legacy architectures and technical debt slow innovation and increase costs",
      solution:
        "Structured assessments to prioritize modernization efforts and align with business goals",
    },
    {
      title: "Refactoring",
      description:
        "Monolithic systems restrict flexibility, scalability, and responsiveness",
      solution:
        "Re-architect systems into modular, cloud-ready, and API-driven frameworks",
    },
    {
      title: "Integration",
      description:
        "Ecosystem expansion creates complexity in system interoperability and governance",
      solution:
        "Seamless integration across platforms, APIs, and partners with secure, scalable frameworks",
    },
    {
      title: "Scaling",
      description:
        "Evolving business needs outpace legacy system capabilities and agility",
      solution:
        "Flexible, future-ready systems that support continuous growth and technology evolution",
    },
  ];

  return (
    <ChallengeToSolution
      title="Challenge to solution:"
      blackTitle="Create rewarding user experiences"
      challenges={challengesData}
      secId="benefits"
    />
  );
};

export const MaturityAssessmentSec = () => {
  return (
    <>
      <InfraSection
        title="Maturity assessment and planning"
        description="Map your modernization journey with structured assessments and actionable roadmaps."
        buttonText="Learn More"
        link="/digital-product-engineering/modernization-ecosystem/maturity-assessment-and-planning"
        whatWeDo={[
          "Find technical debt and scale gaps",
          "Build phased, goal-aligned roadmaps",
          "Draft clear, actionable strategies",
        ]}
        businessImpact={[
          "Focused roadmap encourages buy-in",
          "Assessments reduce upgrade risk",
          "Tech plans tied to business goals",
        ]}
        imageSrc={Info1}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={true}
        secId="assessment"
      />
    </>
  );
};

export const FutureReadinessSec = () => {
  return (
    <>
      <InfraSection
        title="Future readiness with application modernization"
        description="Modernize platforms for agility, responsiveness, and long-term competitiveness."
        buttonText="Learn More"
        link="/digital-product-engineering/modernization-ecosystem/future-readiness-with-application-modernization"
        whatWeDo={[
          "Refactor apps and update flows",
          "Modernize UX with agile designs",
          "Apply DevOps and SRE patterns",
        ]}
        businessImpact={[
          "Fast changes for new demands",
          "Resilient systems with uptime",
          "Flexible UI and better CX fit",
        ]}
        imageSrc={Info2}
        imageAlt="Image"
        imageLeft={true}
        isDivider={true}
        secId="modernization"
      />
    </>
  );
};

export const EcosystemManagementSec = () => {
  return (
    <>
      <InfraSection
        title="Ecosystem management"
        description="Integrate platforms, partners, and tools for unified digital ecosystems."
        buttonText="Learn More"
        link="/digital-product-engineering/modernization-ecosystem/connected-ecosystem"
        whatWeDo={[
          "Securely connect APIs and tools",
          "Sync hybrid cloud workflows",
          "Add controls for governance",
        ]}
        businessImpact={[
          "Fewer blocks between systems",
          "Safer partner and platform ops",
          "Add tools without disruption",
        ]}
        imageSrc={Info3}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={false}
        secId="ecosystem"
      />
    </>
  );
};
export const PlugindevelopmentSec = () => {
  return (
    <>
      <InfraSection
        title="Plugin development: Improve extendibility"
        description="Build lightweight plugins to enhance ecosystem connectivity and user workflows."
        buttonText="Learn More"
        link="/digital-product-engineering/modernization-ecosystem/plugin-development"
        whatWeDo={[
          "Build plugins for faster linking",
          "Ensure safe, seamless usage",
          "Enable plugin scaling over time",
        ]}
        businessImpact={[
          "Extend tools with less effort",
          "Easy upgrades with fewer breaks",
          "Future-ready plugin structure",
        ]}
        imageSrc={Info4}
        imageAlt="Infrastructure globe"
        imageLeft={true}
        isDivider={false}
        secId="plugin"
      />
    </>
  );
};
