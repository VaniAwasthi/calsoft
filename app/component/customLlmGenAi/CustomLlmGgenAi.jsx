"use client";
import React, { useState } from "react";
import BackgroundImage from "../../assets/Data-Ai/customllm/Banner.webp";
import BannerWithRightSec from "../utilities/BannerWithRightsec";
import Submenu from "../utilities/Submenu";
import ButtonImage from "../../assets/home/buttonImg.webp";
import Info1 from "../../assets/Data-Ai/customllm/Info-1.svg";
import Info2 from "../../assets/Data-Ai/customllm/Info-2.svg";
import Info3 from "../../assets/Data-Ai/customllm/Info-3.svg";
import Info4 from "../../assets/Data-Ai/customllm/Info-4.svg";

import {
  ChallengeSolutionComp,
  DataInfoSection,
} from "../utilities/ChallengeSolutionDataAi";
export const CustomBanner = () => {
  const [activeTab, setActiveTab] = useState("Journey");
  const slide = {
    title: "Custom LLM for GenAI and RAG",
    description: `Build domain-specific GenAI systems that
    deliver grounded, trusted responses.`,
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

export const AnalyticsSec = () => {
  const data = [
    {
      tag: "Domain alignment",
      challenge:
        "Struggling to get accurate results from general purpose LLMs?",
      solution:
        "Fine-tune models using organization specific data, workflows, and language",
    },
    {
      tag: "Context grounding",
      challenge:
        "Concerned about hallucinations and unverified answers from GenAI tools?",
      solution:
        "Retrieval- Augmented Generation (RAG) pipelines with trusted, internal content sources",
    },
    {
      tag: "Deployment control",
      challenge:
        "How to manage infrastructure, security, and performance at scale?",
      solution:
        "Customizable deployment options, onprem, hybrid, or cloud with full governance",
    },
    {
      tag: "System interoperability",
      challenge:
        "Want to simplify LLM integrations with existing business systems?",
      solution:
        "Build connectors and orchestration layers that embed LLMs into enterprise processes",
    },
  ];
  return (
    <>
      <ChallengeSolutionComp
        data={data}
        BlackHeading="Make LLMs work for your business"
        GradientHeading=" Challenge to solutions:"
      />
    </>
  );
};

export const LlmSec = () => {
  return (
    <>
      <DataInfoSection
        title="LLM fine-tuning"
        description="Adapt language models to your data, tone,
        and business logic."
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

export const RagSec = () => {
  return (
    <>
      <DataInfoSection
        title="RAG pipeline design"
        description="Ground your GenAI responses in real-time, trusted enterprise knowledge."
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
        imageSrc={Info2}
        imageAlt="Image"
        imageLeft={true}
        isDivider={false}
      />
    </>
  );
};

export const EnterpriseSec = () => {
  return (
    <>
      <DataInfoSection
        title="Enterprise deployment models"
        description="Run custom LLMs where they best fit without tradeoffs."
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
        imageSrc={Info3}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={false}
      />
    </>
  );
};
export const SystemSec = () => {
  return (
    <>
      <DataInfoSection
        title="System integration and orchestration"
        description="Connect LLMs into real workflows, not just chat windows."
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
        imageSrc={Info4}
        imageAlt="Infrastructure globe"
        imageLeft={true}
        isDivider={false}
      />
    </>
  );
};
