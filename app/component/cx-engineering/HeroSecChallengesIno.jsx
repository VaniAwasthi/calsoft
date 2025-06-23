"use client";
import React, { useState } from "react";
import BackgroundImage from "../../assets/DigitalEngineering/Product/CloudServiceBanner.webp";
import BannerWithRightSec from "../utilities/BannerWithRightsec";
import Submenu from "../utilities/Submenu";
import ButtonImage from "../../assets/home/buttonImg.webp";
import { ChallengeToSolution, InfraSection } from "../utilities/InfraSectorSec";
import cloudInfrIt from "../../assets/DigitalEngineering/Product/cloudInfrIt.webp";
export const HeroSectionCXEngineering = () => {
  const [activeTab, setActiveTab] = useState("Journey");
  const slide = {
    title: "CX Engineering",
    title2: "Elevate user experiences",
    description: `Intuitive, scalable, and intelligent interfaces
that drive adoption and engagement.`,
    buttonText: "What we do",
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

export const ChallengeToSolutionSec = () => {
  const challengesData = [
    {
      title: "Front-end development",
      description:
        "Interfaces struggle with performance, accessibility, and crossdevice consistency",
      solution:
        "Build sleek, responsive, standards-based interfaces with modern frameworks",
    },
    {
      title: "UX modernization",
      description:
        "Legacy user experiences cause friction, low adoption, and user dissatisfaction",
      solution:
        "Redesign user journeys and interfaces to align with modern usability standards",
    },
    {
      title: "Intelligent UI",
      description:
        "Static interfaces fail to adapt to user behavior or context",
      solution:
        "Develop adaptive, AI-enabled UIs that personalize workflows and reduce user effort",
    },
    {
      title: "Rapid prototyping",
      description:
        "Slow feedback loops during design phase delay decision making and increase rework",
      solution:
        "Create interactive prototypes early to validate workflows and reduce downstream errors",
    },
    {
      title: "Mobile development",
      description:
        "Fragmented mobile experiences impact engagement and operational efficiency",
      solution:
        "Engineer high-performance native and cross-platform mobile apps",
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

export const FrontEndSec = () => {
  return (
    <>
      <InfraSection
        title="Front-end development"
        description="Deliver fast, responsive, and accessible digital experiences across all devices."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Build device-agnostic front-end apps",
          "Tune performance and accessibility",
          "Follow design systems for scaling",
        ]}
        businessImpact={[
          "Faster loads improve satisfaction",
          "Easier upgrades via modular code",
          "Broader reach with compliant UI",
        ]}
        imageSrc={cloudInfrIt}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={true}
      />
    </>
  );
};

export const UXModernizationSec = () => {
  return (
    <>
      <InfraSection
        title="UX modernization : Better user journeys"
        description="Modernize experiences to align with today’s usability and engagement standards."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Redesign legacy user journeys",
          "Test usability with real users",
          "Improve flows with visual clarity",
        ]}
        businessImpact={[
          "Faster task completion per session",
          "Interfaces match user behaviors",
          "Journeys feel modern and relevant",
        ]}
        imageSrc={cloudInfrIt}
        imageAlt="Image"
        imageLeft={true}
        isDivider={true}
      />
    </>
  );
};

export const IntelligentUISec = () => {
  return (
    <>
      <InfraSection
        title="Intelligent UI: Make interfaces adaptive"
        description="Design intelligent user interfaces that personalize workflows and automate decisions."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Use AI to adapt UIs by behavior",
          "Add rules for predictive flow shifts",
          "Design for cross-role collaboration",
        ]}
        businessImpact={[
          "Personalized flows boost engagement",
          "Less manual input via smart steps",
          "Shared interfaces for all teams",
        ]}
        imageSrc={cloudInfrIt}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={false}
      />
    </>
  );
};
export const RapidprototypingSec = () => {
  return (
    <>
      <InfraSection
        title="Rapid prototyping"
        description="Bring ideas to life early and streamline decision-making with interactive prototypes."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Create clickable UI mockups early",
          "Use tools for fast design cycles",
          "Spot issues before build phase",
        ]}
        businessImpact={[
          "Quicker alignment on direction",
          "Fewer change requests later",
          "Faster approvals, quicker launch",
        ]}
        imageSrc={cloudInfrIt}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={true}
      />
    </>
  );
};
export const MobileEngineeringSec = () => {
  return (
    <>
      <InfraSection
        title="Mobile engineering & development"
        description="Create high-performance mobile applications optimized for usability, security, and scalability."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Build native and hybrid mobile apps",
          "Ensure offline use and security",
          "Connect apps with backend systems",
        ]}
        businessImpact={[
          "Reach users across all devices",
          "Keep UX smooth without signal",
          "Safeguard enterprise connections",
        ]}
        imageSrc={cloudInfrIt}
        imageAlt="Infrastructure globe"
        imageLeft={true}
        isDivider={false}
      />
    </>
  );
};
