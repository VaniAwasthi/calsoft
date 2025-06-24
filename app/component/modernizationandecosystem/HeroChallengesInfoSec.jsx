"use client";
import React, { useState } from "react";
import BackgroundImage from "../../assets/DigitalEngineering/Product/CloudServiceBanner.webp";
import BannerWithRightSec from "../utilities/BannerWithRightsec";
import Submenu from "../utilities/Submenu";
import ButtonImage from "../../assets/home/buttonImg.webp";
import { ChallengeToSolution, InfraSection } from "../utilities/InfraSectorSec";
import cloudInfrIt from "../../assets/DigitalEngineering/Product/cloudInfrIt.webp";
export const HeroSectionModernization = () => {
  const [activeTab, setActiveTab] = useState("Journey");
  const slide = {
    title: "Modernization and",
    title2: "ecosystem management",
    description: `Reengineer systems, integrate ecosystems, and
future-proof operations with agility and precision.`,
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
      blackTitle=" Create rewarding user experiences"
      challenges={challengesData}
    />
  );
};

export const MaturityAssessmentSec = () => {
  return (
    <>
      <InfraSection
        title="Maturity assessment and planning"
        description="Map your modernization journey with structured assessments and actionable roadmaps."
        buttonText="Case Study"
        link="#"
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
        imageSrc={cloudInfrIt}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={true}
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
        buttonText="Case Study"
        link="#"
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
        imageSrc={cloudInfrIt}
        imageAlt="Image"
        imageLeft={true}
        isDivider={true}
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
        buttonText="Case Study"
        link="#"
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
        imageSrc={cloudInfrIt}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={false}
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
        buttonText="Case Study"
        link="#"
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
        imageSrc={cloudInfrIt}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={true}
      />
    </>
  );
};
export const IoTEngineeringSec = () => {
  return (
    <>
      <InfraSection
        title="IoT Engineering"
        description="Build intelligent, scalable IoT solutions for
real-time data analytics and op-led automation."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Use sensors for faster insights",
          "Transmit data with full security",
          "Link IoT to data and analytics",
        ]}
        businessImpact={[
          "Real-time ops visibility improves",
          "IoT scaling is simple and safe",
          "Better data, better decisions",
        ]}
        imageSrc={cloudInfrIt}
        imageAlt="Infrastructure globe"
        imageLeft={true}
        isDivider={false}
      />
    </>
  );
};
