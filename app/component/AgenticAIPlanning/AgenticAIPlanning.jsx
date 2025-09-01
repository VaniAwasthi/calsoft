"use client";
import React, { useState } from "react";
import BackgroundImage from "../../assets/Data-Ai/agenetic/Banner.svg";
import BannerWithRightSec from "../utilities/BannerWithRightsec";
import Submenu from "../utilities/Submenu";
import ButtonImage from "../../assets/home/buttonImg.webp";
import Info1 from "../../assets/Data-Ai/agenetic/Info-1.svg";
import Info2 from "../../assets/Data-Ai/agenetic/Info-2.svg";
import Info3 from "../../assets/Data-Ai/agenetic/Info-3.svg";
import Info4 from "../../assets/Data-Ai/agenetic/Info-4.svg";

import {
  ChallengeSolutionComp,
  DataInfoSection,
} from "../utilities/ChallengeSolutionDataAi";
export const AgenticBanner = () => {
  const [activeTab, setActiveTab] = useState("benefits");
  const slide = {
    title: "Agentic AI planning & development",

    description: `Design, deploy, and manage AI agents with
    precision and accountability.`,
    buttonText: "Download Datasheet",
    image: BackgroundImage,
  };
  const navItems = [
    "Benefits",
    "AIOps",
    "AI Agents",
    "Monitoring",
    "Agent lifecycle",
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
        onButtonClick={() => showHubSpotForm("agentic-ai-datasheet")}
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
        BlackHeading="Proactive action with predictive insights"
        GradientHeading="Challenge to solutions:"
        secId="benefits"
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
        // buttonText=" Learn More"
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
        imageSrc={Info1}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={true}
        secid="aiops"
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
        // buttonText=" Learn More"
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
        imageSrc={Info2}
        imageAlt="Image"
        imageLeft={true}
        isDivider={false}
        secid="ai-agents"
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
        // buttonText=" Learn More"
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
        imageSrc={Info3}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={true}
        secid="monitoring"
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
        // buttonText=" Learn More"
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
        imageSrc={Info4}
        imageAlt="Infrastructure globe"
        imageLeft={true}
        isDivider={false}
        secid="agent-lifecycle"
      />
    </>
  );
};
