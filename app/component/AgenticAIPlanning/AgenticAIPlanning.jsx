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
export const AgenticBanner = () => {
  const [activeTab, setActiveTab] = useState("Journey");
  const slide = {
    title: "Agentic AI planning & development",
    title2: "",
    description: `Design, deploy, and manage AI agents with
    precision and accountability.`,
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

export const AgenticChallengeSec = () => {
  const data = [
    {
      tag: "AIOps Design",
      challenge:
        "How to architect intelligent agents for IT operations and autonomy?",
      solution:
        "Collaborate to scope, model, and test agent roles aligned with specific enterprise goals",
    },
    {
      tag: "Purpose built Agents",
      challenge:
        "Finding it difficult to define agent boundaries and business outcomes?",
      solution:
        "Modular, purpose-driven AI agents with embedded learning and monitoring logic",
    },
    {
      tag: "Oversight and Safety",
      challenge:
        "Concerned about lack of visibility into autonomous agent behavior?",
      solution:
        "Supervision layers for real-time observation, intervention, and behaviour correction",
    },
    {
      tag: "Lifecycle Management",
      challenge:
        "Struggling to maintain, evolve, or retire AI agents effectively and consistently?",
      solution:
        "Frameworks for continuous learning, feedback integration, and version governance",
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

export const AiOopsSec = () => {
  return (
    <>
      <DataInfoSection
        title="AIOps Planning"
        description="Enable intelligent operations through autonomous,
        purpose-built agents."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Agents monitor systems, logs, and events",
          "Link with ITSM workflows for automation",
          "Agents learn from ongoing system feedback",
        ]}
        businessImpact={[
          "Reduced manual diagnostic workload",
          "Faster detection and issue response",
          "Standardized resolution processes",
        ]}
        imageSrc={cloudInfrIt}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={true}
      />
    </>
  );
};

export const UseSec = () => {
  return (
    <>
      <DataInfoSection
        title="Use-case specific AI agents"
        description="Deploy configured agents that fulfill focused business and operational roles."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Build agents for domain-specific tasks",
          "Define boundaries for safe autonomy",
          "Test agents using business-set metrics",
        ]}
        businessImpact={[
          "Automation outcomes match objectives",
          "Agents reduce system-wide error risks",
          "Faster validation and deployment cycle",
        ]}
        imageSrc={RiskImage}
        imageAlt="Image"
        imageLeft={true}
        isDivider={false}
      />
    </>
  );
};

export const MonitorSec = () => {
  return (
    <>
      <DataInfoSection
        title="Monitor and control"
        description="Ensure transparency and oversight across autonomous agent behavior."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Track agent behavior with telemetry",
          "Real-time dashboards enable oversight",
          "Logs ensure traceability and audits",
        ]}
        businessImpact={[
          "Complete visibility into agent actions",
          "Audit support with tracked decisions",
          "Minimized risk of agent misbehavior",
        ]}
        imageSrc={PlatformImage}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={false}
      />
    </>
  );
};
export const LifecycleSec = () => {
  return (
    <>
      <DataInfoSection
        title="Lifecycle and adaptability"
        description="Manage agent evolution from deployment through continuous improvement."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Define update and rollback protocols",
          "Use telemetry and feedback to adapt",
          "Automate retraining and threshold checks",
        ]}
        businessImpact={[
          "No version drift across deployments",
          "Quicker updates to agent behavior",
          "Maintained link to business outcomes",
        ]}
        imageSrc={CostImage}
        imageAlt="Infrastructure globe"
        imageLeft={true}
        isDivider={false}
      />
    </>
  );
};
