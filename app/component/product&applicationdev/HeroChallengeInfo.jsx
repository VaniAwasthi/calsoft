"use client";
import React, { useState } from "react";
import BackgroundImage from "../../assets/DigitalEngineering/product-app/Banner.webp";
import BannerWithRightSec from "../utilities/BannerWithRightsec";
import Submenu from "../utilities/Submenu";
import ButtonImage from "../../assets/home/buttonImg.webp";
import { ChallengeToSolution, InfraSection } from "../utilities/InfraSectorSec";
import Info1 from "../../assets/DigitalEngineering/product-app/Info-1.svg";
import Info2 from "../../assets/DigitalEngineering/product-app/Info-2.svg";
import Info3 from "../../assets/DigitalEngineering/product-app/Info-3.svg";
import Info4 from "../../assets/DigitalEngineering/product-app/Info-4.svg";
import Info5 from "../../assets/DigitalEngineering/product-app/Info-5.svg";
import Info6 from "../../assets/DigitalEngineering/product-app/Info-6.svg";
export const HeroSectionProductandApplicationDev = () => {
  const [activeTab, setActiveTab] = useState("benefits");
  const slide = {
    title: "Product and application development",

    description: `Engineer ideas into robust, scalable solutions
with speed and precision.`,
    buttonText: "Download Datasheet",
    image: BackgroundImage,
  };
  const navItems = [
    "Benefits",
    "Architecture",
    "Lifecycle",
    "Quality",
    "DevOps",
    "Deployment",
    "Mozaic",
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

export const ProdandAppChallengeSec = () => {
  const challengesData = [
    {
      title: "Ideation and architecture",
      description: "lifecycle processes slowing down product delivery",
      solution:
        "Integrate ideation, architecture, development, and DevOps seamlessly",
    },
    {
      title: "Quality engineering",
      description:
        "High development overheads impacting scalability and quality",
      solution:
        "Apply agile development models with embedded quality engineering",
    },
    {
      title: "Collaboration and integration",
      description:
        "Siloed teams cause misalignment between vision and execution",
      solution:
        "Cross-functional collaboration through structured blueprints and DevOps integration",
    },
    {
      title: "Modernization and scaling",
      description:
        "Legacy systems delay modernization and new feature rollouts",
      solution:
        "Support future-ready system builds with scalable, cloud-native frameworks",
    },
  ];

  return (
    <ChallengeToSolution
      title="Challenge to solution:"
      blackTitle="Quickly, effortlessly, and with cost-efficiency"
      challenges={challengesData}
      secId="benefits"
    />
  );
};

export const IdeationSec = () => {
  return (
    <>
      <InfraSection
        title="Ideation & architecture orchestration"
        description="Translate ideas into actionable blueprints with
clarity and precision."
        buttonText="Learn More"
        link="#"
        whatWeDo={[
          "Shape product ideas with stakeholders",
          "Design scalable system blueprints",
          "Check tech fit before build starts",
        ]}
        businessImpact={[
          "Clear start to product planning",
          "Less waste from late tech changes",
          "Tech scope matches real needs",
        ]}
        imageSrc={Info1}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={true}
        secId="architecture"
      />
    </>
  );
};

export const DevelopmentSec = () => {
  return (
    <>
      <InfraSection
        title="Development lifecycle services"
        description="Deliver scalable, secure products through agile development practices."
        buttonText="Learn More"
        link="#"
        whatWeDo={[
          "Use agile and CI/CD workflows",
          "Secure code with regular reviews",
          "Plan and track all release steps",
        ]}
        businessImpact={[
          "Better flow from dev to release",
          "Early bug fixes save dev time",
          "Easier compliance with audit logs",
        ]}
        imageSrc={Info2}
        imageAlt="Image"
        imageLeft={true}
        isDivider={true}
        secId="lifecycle"
      />
    </>
  );
};

export const QualityengineeringSec = () => {
  return (
    <>
      <InfraSection
        title="Quality engineering"
        description="Embed testing and validation throughout the product lifecycle for consistency."
        buttonText="Learn More"
        link="#"
        whatWeDo={[
          "Test UX, speed, and data safety",
          "Use automation for test cycles",
          "Add checks in every sprint",
        ]}
        businessImpact={[
          "Fewer issues after launch",
          "More stable releases each time",
          "Good UX across all devices",
        ]}
        imageSrc={Info3}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={false}
        secId="quality"
      />
    </>
  );
};
export const DevOpsSec = () => {
  return (
    <>
      <InfraSection
        title="DevOps + SRE with AI-driven enhancements"
        description="Automate, optimize, and proactively manage systems through intelligent DevOps."
        buttonText="Learn More"
        link="#"
        whatWeDo={[
          "Automate build, test, deploy tasks",
          "Add AI to catch risks early",
          "Monitor uptime and system limits",
        ]}
        businessImpact={[
          "Fewer failures in live systems",
          "Faster recovery when things break",
          "Meet SLAs without pressure",
        ]}
        imageSrc={Info4}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={true}
        secId="devops"
      />
    </>
  );
};
export const DeploymentSec = () => {
  return (
    <>
      <InfraSection
        title="Deployment and Upgrades"
        description="Execute smooth deployments and controlled upgrades without disrupting operations."
        buttonText="Learn More"
        link="#"
        whatWeDo={[
          "Automate updates and rollbacks",
          "Test before going live",
          "Version control is built-in",
        ]}
        businessImpact={[
          "Upgrades run with less effort",
          "Users get new features faster",
          "Less downtime during updates",
        ]}
        imageSrc={Info5}
        imageAlt="Infrastructure globe"
        imageLeft={true}
        isDivider={true}
        secId="deployment"
      />
    </>
  );
};
export const AccelerateSec = () => {
  return (
    <>
      <InfraSection
        title="Accelerate with Calsoft’s Mozaic"
        description="Fast-track product engineering using proven frameworks and ready assets."
        buttonText="Learn More"
        link="#"
        whatWeDo={[
          "Use starter kits and templates",
          "Skip boilerplate coding tasks",
          "Plug in cloud tools easily",
        ]}
        businessImpact={[
          "Teams launch faster from day one",
          "Less dev time on basic features",
          "Systems scale without redesign",
        ]}
        imageSrc={Info6}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={false}
        secId="mozaic"
      />
    </>
  );
};
