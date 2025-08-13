"use client";
import React, { useState } from "react";
import BackgroundImage from "../../assets/DigitalEngineering/CX/Banner.svg";
import BannerWithRightSec from "../utilities/BannerWithRightsec";
import Submenu from "../utilities/Submenu";
import ButtonImage from "../../assets/home/buttonImg.webp";
import { ChallengeToSolution, InfraSection } from "../utilities/InfraSectorSec";
import Info1 from "../../assets/DigitalEngineering/CX/Info-1.svg";
import Info2 from "../../assets/DigitalEngineering/CX/Info-2.svg";
import Info3 from "../../assets/DigitalEngineering/CX/Info-3.svg";
import Info4 from "../../assets/DigitalEngineering/CX/Info-4.svg";
import Info5 from "../../assets/DigitalEngineering/CX/Info-5.svg";

export const HeroSectionCXEngineering = () => {
  const [activeTab, setActiveTab] = useState("benefits");
  const slide = {
    title: "CX Engineering Elevate user experiences",
    description: `Intuitive, scalable, and intelligent interfaces
that drive adoption and engagement.`,
    buttonText: "Download Datasheet",
    image: BackgroundImage,
  };
  const navItems = [
    "Benefits",
    "Front-end",
    "Modernization",
    "Intelligent UI",
    "Prototyping",
    "Mobile",
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
        "Slow feedback loops during design phase, delay decision making and increase rework",
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
      blackTitle="Create rewarding user experiences"
      challenges={challengesData}
      secId="benefits"
    />
  );
};

export const FrontEndSec = () => {
  return (
    <>
      <InfraSection
        title="Front-end development"
        description="Deliver fast, responsive, and accessible digital experiences across all devices."
        buttonText="Learn More"
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
        imageSrc={Info1}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={true}
        secId="front-end"
      />
    </>
  );
};

export const UXModernizationSec = () => {
  return (
    <>
      <InfraSection
        title="UX modernization: Better user journeys"
        description="Modernize experiences to align with today’s usability and engagement standards."
        buttonText="Learn More"
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
        imageSrc={Info2}
        imageAlt="Image"
        imageLeft={true}
        isDivider={true}
        secId="modernization"
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
        buttonText="Learn More"
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
        imageSrc={Info3}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={false}
        secId="intelligent-ui"
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
        buttonText="Learn More"
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
        imageSrc={Info4}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={true}
        secId="prototyping"
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
        buttonText="Learn More"
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
        imageSrc={Info5}
        imageAlt="Infrastructure globe"
        imageLeft={true}
        isDivider={false}
        secId="mobile"
      />
    </>
  );
};
