"use client";
import React, { useState } from "react";
import BackgroundImage from "../../assets/Data-Ai/dataDriven/Banner.svg";
import BannerWithRightSec from "../utilities/BannerWithRightsec";
import Submenu from "../utilities/Submenu";
import ButtonImage from "../../assets/home/buttonImg.webp";
import Info1 from "../../assets/Data-Ai/dataDriven/Info1.svg";
import Info2 from "../../assets/Data-Ai/dataDriven/Info2.svg";
import Info3 from "../../assets/Data-Ai/dataDriven/Info3.svg";
import Info4 from "../../assets/Data-Ai/dataDriven/Info4.svg";
import {
  ChallengeSolutionComp,
  DataInfoSection,
} from "../utilities/ChallengeSolutionDataAi";
export const DrivenBanner = () => {
  const [activeTab, setActiveTab] = useState("Journey");
  const slide = {
    title: "AI-driven predictions and inferences",

    description: `Predict trends and infer actionable insights at
    enterprise speed.`,
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

export const DrivenChallengeSec = () => {
  const data = [
    {
      tag: "Predictive modeling",
      challenge:
        "Want to anticipate business risks, failures, or opportunities early?",
      solution:
        "Develop AI models trained to forecast critical business events and outcomes",
    },
    {
      tag: "Pattern detection",
      challenge:
        "Missing subtle trends and anomalies hidden within complex datasets?",
      solution:
        "Build intelligent systems that surface hidden correlations and emerging signals",
    },
    {
      tag: "Inferential analytics",
      challenge:
        "How to move beyond descriptive reporting to actionable guidance?",
      solution:
        "Inferential models that recommend next best actions and optimizations",
    },
    {
      tag: "Model adaptability",
      challenge: "Concerned about AI models degrading as environments change?",
      solution:
        "Self-improving AI systems that retrain dynamically with evolving data streams",
    },
  ];
  return (
    <>
      <ChallengeSolutionComp
        data={data}
        BlackHeading="Proactive action with predictive insights"
        GradientHeading=" Challenge to solutions:"
      />
    </>
  );
};

export const PredictiveSec = () => {
  return (
    <>
      <DataInfoSection
        title="Predictive modeling"
        description="Anticipate events, mitigate risks, and unlock
        data-driven foresight."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Train models to forecast key outcomes",
          "Predict events across data sources",
          "Embed triggers in operational flows",
        ]}
        businessImpact={[
          "Spot risks early, act before impact",
          "Improve resource and planning ops",
          "Capture shifts for faster GTM action",
        ]}
        imageSrc={Info1}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={true}
      />
    </>
  );
};

export const PatternSec = () => {
  return (
    <>
      <DataInfoSection
        title="Pattern detection"
        description="Reveal hidden signals
        and uncover emerging
        opportunities with intelligent models."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Use ML to reveal hidden patterns",
          "Track shifts across all data formats",
          "Detect outliers and key anomalies",
        ]}
        businessImpact={[
          "Better prep through early signals",
          "Adapt to market changes quickly",
          "Reduce losses with early response",
        ]}
        imageSrc={Info2}
        imageAlt="Image"
        imageLeft={true}
        isDivider={false}
      />
    </>
  );
};

export const InferentialSec = () => {
  return (
    <>
      <DataInfoSection
        title="Inferential analytics"
        description="Move beyond observation to confident, data-backed
        decision pathways."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Recommend actions based on data",
          "Simulate impact for smarter choices",
          "Guide ops through live inference",
        ]}
        businessImpact={[
          "Gain confidence in each decision",
          "Plan better with simulations",
          "Optimize with real-time inputs",
        ]}
        imageSrc={Info3}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={false}
      />
    </>
  );
};
export const ModelSec = () => {
  return (
    <>
      <DataInfoSection
        title="Model
        adaptability"
        description="Ensure AI models evolve alongside your business
        and data landscapes."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Retrain models as new data flows in",
          "Detect drift and auto-tune models",
          "Use feedback to improve accuracy",
        ]}
        businessImpact={[
          "Retain relevance as context shifts",
          "Avoid frequent rebuild costs",
          "React fast to market changes",
        ]}
        imageSrc={Info4}
        imageAlt="Infrastructure globe"
        imageLeft={true}
        isDivider={false}
      />
    </>
  );
};
