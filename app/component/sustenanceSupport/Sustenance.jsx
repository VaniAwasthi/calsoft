"use client";
import React, { useState } from "react";
import BackgroundImage from "../../assets/DigitalEngineering/Sustaine/Banner.svg";
import BannerWithRightSec from "../utilities/BannerWithRightsec";
import Submenu from "../utilities/Submenu";
import ButtonImage from "../../assets/home/buttonImg.webp";
import { ChallengeToSolution, InfraSection } from "../utilities/InfraSectorSec";
import Info1 from "../../assets/DigitalEngineering/Sustaine/Info-1.svg";
import Info2 from "../../assets/DigitalEngineering/Sustaine/Info-2.svg";
import Info3 from "../../assets/DigitalEngineering/Sustaine/Info-3.svg";
import Info4 from "../../assets/DigitalEngineering/Sustaine/Info-4.svg";

export const SustenanceTab = () => {
  const [activeTab, setActiveTab] = useState("Journey");
  const slide = {
    title: "Sustenance & Support",
    description: `Deliver reliable, scalable products with comprehensive
        testing across the development lifecycle.`,
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

export const SustenanceChallenge = () => {
  const challengesData = [
    {
      title: "Release management",
      description:
        "Uncoordinated updates can introduce instability or downtime post-deployment",
      solution:
        "Manage structured release planning, validation, and rollout processes to minimize disruption",
    },
    {
      title: "Documentation streamlining",
      description:
        "Outdated or inefficient documentation hampers support efficiency",
      solution:
        "Maintain consistent, up-to-date technical and operational documentation libraries",
    },
    {
      title: "Multi-tiered support",
      description:
        "Lack of L1, L2, and L3 support causes delays in resolving technical issues",
      solution:
        "Provide complete technical support services tailored to problem complexity",
    },
    {
      title: "Uptime continuity",
      description:
        "Downtime or degraded services impact customer trust and revenue",
      solution:
        "Monitor system health proactively, resolve incidents, and optimize uptime aligned with best practices",
    },
  ];

  return (
    <ChallengeToSolution
      title="Challenge to solution:"
      blackTitle="Ensure value-inducing support while
            sustaining high qualities"
      challenges={challengesData}
    />
  );
};

export const ReleaseSec = () => {
  return (
    <>
      <InfraSection
        title="Release management"
        description="Deliver updates and enhancements smoothly
                without disrupting operational continuity."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Plan updates with minimal downtime",
          "Validate features pre-deployment",
          "Add rollback paths for risk mitigation",
        ]}
        businessImpact={[
          "Fewer issues during new releases",
          "Safer launches with better prep",
          "Product changes without disruption",
        ]}
        imageSrc={Info1}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={true}
      />
    </>
  );
};

export const StreamlineSec = () => {
  return (
    <>
      <InfraSection
        title="Streamline technical documentation"
        description="Keep operational and technical information accurate, accessible, and actionable."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Keep docs accurate and easy to use",
          "Build APIs to auto-manage traffic",
          "Connect to edge and cloud stacks",
        ]}
        businessImpact={[
          "Shift network config on the fly",
          "Less manual work, fewer errors",
          "One setup for hybrid networking",
        ]}
        imageSrc={Info2}
        imageAlt="Image"
        imageLeft={true}
        isDivider={true}
      />
    </>
  );
};

export const MultiSec = () => {
  return (
    <>
      <InfraSection
        title="Multi-tier support (L1, L2, and L3)"
        description="Validate application performance and resilience under real-world and extreme load conditions."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Solve common issues and questions",
          "Fix bugs and config-related gaps",
          "Handle deep system-level errors",
        ]}
        businessImpact={[
          "Faster fixes by right support tier",
          "Less user downtime or wait time",
          "More trust in service response",
        ]}
        imageSrc={Info3}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={true}
      />
    </>
  );
};
export const UptimeSec = () => {
  return (
    <>
      <InfraSection
        title="Uptime continuity"
        description="Proactively monitor, manage, and optimize system availability and performance."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Monitor systems 24x7 with alerts",
          "Apply fixes with automated steps",
          "Tune performance to cut risk",
        ]}
        businessImpact={[
          "Higher uptime and fewer outages",
          "Faster recovery from incidents",
          "Smoother service for end users",
        ]}
        imageSrc={Info4}
        imageAlt="Infrastructure globe"
        imageLeft={true}
        isDivider={true}
      />
    </>
  );
};
