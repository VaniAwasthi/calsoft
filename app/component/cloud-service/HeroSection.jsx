"use client";
import React, { useState } from "react";
import BackgroundImage from "../../assets/DigitalEngineering/Product/CloudServiceBanner.webp";
import BannerWithRightSec from "../utilities/BannerWithRightsec";
import Submenu from "../utilities/Submenu";
import ButtonImage from "../../assets/home/buttonImg.webp";
import CircleArrow from "../../assets/DigitalEngineering/Product/circleArrow.svg";
import { ChallengeToSolution, InfraSection } from "../utilities/InfraSectorSec";
import cloudInfrIt from "../../assets/DigitalEngineering/Product/cloudInfrIt.webp";
export const HeroSectionProduct = () => {
  const [activeTab, setActiveTab] = useState("Journey");
  const slide = {
    title: "Cloud | Grow with cloud",
    title2: "induced efficiency",
    description: `Engineer scalable, secure, and cost-efficient<br/>
cloud solutions aligned to your business goals.`,
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

export const ChallengeToSolutionSec = () => {
  const challengesData = [
    {
      title: "INFRASTRUCTURE ASSESSMENT",
      description:
        "Legacy environments lack cloud readiness and modernization alignment",
      solution:
        "Assess existing infrastructure for cloud adoption feasibility, gaps, and roadmap creation",
    },
    {
      title: "CLOUD-NATIVE DEVELOPMENT",
      description:
        "Monolithic application designs restrict scalability, resilience, and agility",
      solution:
        "Cloud-native architectures with microservices, containerization, and serverless models",
    },
    {
      title: "MIGRATION AND SCALING",
      description:
        "Migrations are risky, disruptive, and often lead to bottlenecks",
      solution:
        "Execute structured workload migration, scaling optimization, and validation",
    },
    {
      title: "COST AND USAGE OPTIMIZATION",
      description:
        "Cloud spending escalates due to inefficient resource management",
      solution:
        "Implement continuous cost optimization with right-sizing, tagging, and usage governance",
    },
    {
      title: "SRE AND OPERATIONS",
      description:
        "Lack of proactive monitoring impacts uptime, reliability, and user experience",
      solution:
        "Embed SRE practices, observability, and automated remediation for service resilience",
    },
  ];

  return (
    <ChallengeToSolution
      title="Challenge to solution:"
      blackTitle="Go from legacy to cloud-native"
      challenges={challengesData}
    />
  );
};

export const ItInfraSec = () => {
  return (
    <>
      <InfraSection
        title="IT infrastructure assessment & road mapping"
        description="Assess infrastructure readiness and define clear, actionable migration roadmaps."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Evaluate existing environments for cloud readiness",
          "Define migration strategies aligned with performance",
          "Prioritize infrastructure modernization based on business",
        ]}
        businessImpact={[
          "Clear migration roadmap",
          "Reduced implementation friction",
          "Better long-term decision-making",
        ]}
        imageSrc={cloudInfrIt}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={true}
      />
    </>
  );
};

export const MultiCloudInfraSec = () => {
  return (
    <>
      <InfraSection
        title="Multi-cloud infrastructure provisioning"
        description="Deploy and manage scalable, governed environments across multiple cloud platforms."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Automate resource provisioning across hybrid & multi-cloud",
          "Implement unified monitoring, access control, & policy",
          "Cloud architectures that support flexible workload movement without lock-in",
        ]}
        businessImpact={[
          "Improved service resilience",
          "Unified resource visibility",
          "Faster provisioning cycles",
        ]}
        imageSrc={cloudInfrIt}
        imageAlt="MultiCloud"
        imageLeft={true}
        isDivider={true}
      />
    </>
  );
};

export const CloudNativetInfraSec = () => {
  return (
    <>
      <InfraSection
        title="Cloud-native development enablement"
        description="Engineer resilient, scalable systems using microservices, containers, and serverless models."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Architect distributed systems with microservices ",
          "Implement containerization and orchestration frameworks ",
          "Integrate cloud-native observability and automation toolchains",
        ]}
        businessImpact={[
          "Built-in scalability and fault tolerance",
          "Faster release cycles",
          "Easier feature experimentation",
        ]}
        imageSrc={cloudInfrIt}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={false}
      />
    </>
  );
};
export const CloudMigrationInfraSec = () => {
  return (
    <>
      <InfraSection
        title="Cloud migration and scaling"
        description="Execute smooth cloud transitions and enable dynamic, on-demand scalability."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Plan and execute structured application and infrastructure migrations",
          "Optimize workloads post-migration for scale & performance ",
          "Validate performance, availability, and resilience across cloud targets",
        ]}
        businessImpact={[
          "Minimal disruption to services",
          "Improved workload performance",
          "Simplified resource management",
        ]}
        imageSrc={cloudInfrIt}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={true}
      />
    </>
  );
};
export const CostInfraSec = () => {
  return (
    <>
      <InfraSection
        title="Cost and usage optimization"
        description="Control costs, optimize usage, and drive sustainable cloud operations."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Continuously monitor resource utilization and spending patterns",
          "Implement cost governance, tagging, and budget enforcement policies",
          "Adjust allocations dynamically to match actual workload demands",
        ]}
        businessImpact={[
          "Reduced cloud waste",
          "Budget adherence",
          "Performance without overspend",
        ]}
        imageSrc={cloudInfrIt}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={true}
      />
    </>
  );
};
export const SREInfraSec = () => {
  return (
    <>
      <InfraSection
        title="SRE (Site Reliability Engineering)"
        description="Balance development velocity with system stability through proactive operations management."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Define service-level indicators (SLIs) and service-level objectives (SLOs)",
          "Detect anomalies early, automate remediation, and improve response times",
          "Analyze incidents, refine processes, and increase fault tolerance over time",
        ]}
        businessImpact={[
          "Predictable service behavior",
          "Reduced incident response time",
          "Balanced speed and stability",
        ]}
        imageSrc={cloudInfrIt}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={false}
      />
    </>
  );
};
