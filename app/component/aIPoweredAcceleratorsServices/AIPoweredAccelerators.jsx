"use client";
import React, { useState } from "react";
import BackgroundImage from "../../assets/Data-Ai/ai-accelerate/Banner.webp";
import BannerWithRightSec from "../utilities/BannerWithRightsec";
import Submenu from "../utilities/Submenu";
import ButtonImage from "../../assets/home/buttonImg.webp";
import Info1 from "../../assets/Data-Ai/ai-accelerate/Info-1.webp";
import Info2 from "../../assets/Data-Ai/ai-accelerate/Info-2.webp";
import Info3 from "../../assets/Data-Ai/ai-accelerate/Info-3.webp";
import Info4 from "../../assets/Data-Ai/ai-accelerate/Info-4.webp";

import {
  ChallengeSolutionComp,
  DataInfoSection,
} from "../utilities/ChallengeSolutionDataAi";
export const AiBanner = () => {
  const [activeTab, setActiveTab] = useState("Journey");
  const slide = {
    title: "AI-powered accelerators",
    title2: "",
    description: `Deploy pre-built accelerators to solve
    targeted engineering and operational challenges.`,
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

export const AiChallengeSec = () => {
  const data = [
    {
      tag: "Test acceleration",
      challenge: "Is manual QA slowing down release cycles for modern apps?",
      solution:
        "Use CalTIA to automate test coverage analysis and reduce redundant test execution",
    },
    {
      tag: "Production reliability",
      challenge:
        "Want to trace and resolve  recurring incidents post deployment?",
      solution:
        "Deploy CalPSR to capture issue fingerprints and proactively surface incident patterns",
    },
    {
      tag: "Production reliability",
      challenge:
        "Facing delays and risks during infrastructure or workload migrations?",
      solution:
        "Apply our migration utility to autodiscover dependencies and sequence moves efficiently",
    },
    {
      tag: "Engineering velocity",
      challenge: "Can’t scale delivery without overloading internal teams?",
      solution:
        "Plug in accelerators across the lifecycle to reduce engineering effort on repeatable tasks",
    },
  ];
  return (
    <>
      <ChallengeSolutionComp
        data={data}
        BlackHeading="Accelerate outcomes with AI-powered tools"
        GradientHeading=" Challenge to solutions:"
      />
    </>
  );
};

export const CalTiaSec = () => {
  return (
    <>
      <DataInfoSection
        title="CalTIA – Faster, better, and
        consistent testing"
        description="Streamline test planning
        and reduce QA fatigue with
        AI-driven prioritization."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Analyze test logs to spot redundancies",
          "Recommend test sets by risk and scope",
          "Auto-run tests via CI/CD workflows",
        ]}
        businessImpact={[
          "Focus shifts to high-impact testing",
          "Shorter QA time, faster delivery",
          "Smarter tests with ongoing learning",
        ]}
        imageSrc={Info1}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={true}
      />
    </>
  );
};

export const CalPsrSec = () => {
  return (
    <>
      <DataInfoSection
        title="CalPSR – Calsoft Performance, Scalability, and Resilience"
        description="Validate release readiness with real-world fault simulation and pre-GA testing."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Simulate faults and latency delays",
          "Benchmark releases on failure data",
          "Validate resilience through CI tools",
        ]}
        businessImpact={[
          "Build trust with pre-release signals",
          "Fix issues before production hit",
          "Fewer manual tests for resilience",
        ]}
        imageSrc={Info2}
        imageAlt="Image"
        imageLeft={true}
        isDivider={false}
      />
    </>
  );
};

export const ECalsoftSec = () => {
  return (
    <>
      <DataInfoSection
        title="Calsoft’s migration accelerator"
        description="Simplify workload transitions with guided, dependency-aware migration flows."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Discover app and infra dependencies",
          "Recommend migration flows by logic",
          "Automate checks and post-move tests",
        ]}
        businessImpact={[
          "Map cutovers without manual errors",
          "Speed up transitions via scripting",
          "Avoid service gaps with dry runs",
        ]}
        imageSrc={Info3}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={false}
      />
    </>
  );
};
export const CalsoftSec = () => {
  return (
    <>
      <DataInfoSection
        title="Calsoft Mozaic | Engineering intelligence framework"
        description="Accelerate solution delivery with reusable AI, platform, and process components."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Provide AI-ready modular toolkits",
          "Reuse blueprints for core functions",
          "Govern builds through shared rules",
        ]}
        businessImpact={[
          "Launch solutions with less dev time",
          "Fewer bugs via aligned modules",
          "Consistent builds across projects",
        ]}
        imageSrc={Info4}
        imageAlt="Infrastructure globe"
        imageLeft={true}
        isDivider={false}
      />
    </>
  );
};
