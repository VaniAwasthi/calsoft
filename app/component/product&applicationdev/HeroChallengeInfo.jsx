"use client";
import React, { useState } from "react";
import BackgroundImage from "../../assets/DigitalEngineering/Product/CloudServiceBanner.webp";
import BannerWithRightSec from "../utilities/BannerWithRightsec";
import Submenu from "../utilities/Submenu";
import ButtonImage from "../../assets/home/buttonImg.webp";
import { ChallengeToSolution, InfraSection } from "../utilities/InfraSectorSec";
import cloudInfrIt from "../../assets/DigitalEngineering/Product/cloudInfrIt.webp";
export const HeroSectionProductandApplicationDev = () => {
  const [activeTab, setActiveTab] = useState("Journey");
  const slide = {
    title: "Product and application",
    title2: "development",
    description: `Engineer ideas into robust, scalable solutions
with speed and precision.`,
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
        buttonText="Free Assessment"
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
        imageSrc={cloudInfrIt}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={true}
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
        imageSrc={cloudInfrIt}
        imageAlt="Image"
        imageLeft={true}
        isDivider={true}
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
        buttonText="Datasheet"
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
        imageSrc={cloudInfrIt}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={false}
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
        buttonText="Datasheet"
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
        imageSrc={cloudInfrIt}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={true}
      />
    </>
  );
};
export const DeploymentSec = () => {
  return (
    <>
      <InfraSection
        title="Deployment and upgrades"
        description="Execute smooth deployments and controlled upgrades without disrupting operations."
        buttonText="Datasheet"
        link="#"
        whatWeDo={[
          "Automate updates and rollbacks",
          "Test before going live",
          "Version control is built-in",
        ]}
        businessImpact={[
          "Upgrades run with less effort",
          "Users get new features faster",
          "Less downtime during updatess",
        ]}
        imageSrc={cloudInfrIt}
        imageAlt="Infrastructure globe"
        imageLeft={true}
        isDivider={true}
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
        buttonText="Flyer"
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
        imageSrc={cloudInfrIt}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={false}
      />
    </>
  );
};
