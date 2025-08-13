"use client";
import React, { useState } from "react";
import BackgroundImage from "../../assets/DigitalEngineering/cloud-service/Banner.svg";
import BannerWithRightSec from "../utilities/BannerWithRightsec";
import Submenu from "../utilities/Submenu";
import ButtonImage from "../../assets/home/buttonImg.webp";
import { ChallengeToSolution, InfraSection } from "../utilities/InfraSectorSec";
import Info1 from "../../assets/DigitalEngineering/cloud-service/Info1.svg";
import Info2 from "../../assets/DigitalEngineering/cloud-service/Info2.svg";
import Info3 from "../../assets/DigitalEngineering/cloud-service/Info3.svg";
import Info4 from "../../assets/DigitalEngineering/cloud-service/Info4.svg";
import Info5 from "../../assets/DigitalEngineering/cloud-service/Info5.svg";
import Info6 from "../../assets/DigitalEngineering/cloud-service/Info6.svg";
import Info7 from "../../assets/DigitalEngineering/cloud-service/Info7.svg";
export const HeroSectionProduct = () => {
  const [activeTab, setActiveTab] = useState("benefits");
  const slide = {
    title: "Cloud | Grow with cloud-induced efficiency",
    description: `Engineer scalable, secure, and cost-efficient<br/>
cloud solutions aligned to your business goals.`,
    buttonText: "Download Datasheet",
    image: BackgroundImage,
  };
  const navItems = [
    "Benefits",
    "Assessment",
    "Multi-Cloud",
    "Cloud-Native",
    "Migration",
    "Cost",
    "SRE",
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
      secId="benefits"
    />
  );
};

export const ItInfraSec = () => {
  return (
    <>
      <InfraSection
        title="IT infrastructure assessment & road mapping"
        description="Assess infrastructure readiness and define clear, actionable migration roadmaps."
        buttonText="Learn More"
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
        imageSrc={Info1}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={true}
        secId="assessment"
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
        buttonText="Learn More"
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
        imageSrc={Info2}
        imageAlt="MultiCloud"
        imageLeft={true}
        isDivider={true}
        secId="multi-cloud"
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
        buttonText="Learn More"
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
        imageSrc={Info3}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={false}
        secId="cloud-native"
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
        buttonText="Learn More"
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
        imageSrc={Info4}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={true}
        secId="migration"
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
        buttonText="Learn More"
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
        imageSrc={Info6}
        imageAlt="Infrastructure globe"
        imageLeft={true}
        isDivider={true}
        secId="cost"
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
        buttonText="Learn More"
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
        imageSrc={Info7}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={false}
        secId="sre"
      />
    </>
  );
};
