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
import { showHubSpotForm } from "../utilities/showHubSpotForm"; // import utility
export const HeroSectionProduct = () => {
  const [activeTab, setActiveTab] = useState("benefits");
  const slide = {
    title: "Grow with cloud-induced efficiency",
    description: `Engineer scalable, secure, and cost-efficient<br/>
cloud solutions aligned to your business goals.`,
    buttonText: "Get in Touch",
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
      {/* <BannerWithRightSec
        heroBg={BackgroundImage}
        title={slide.title}
        description={slide.description}
        rightImage={slide.rightImage}
        buttonText={slide.buttonText}
        buttonImage={ButtonImage}
        hoverImage={ButtonImage}
        rightSec={false}
        buttonWidth="!w-[250px]"
      /> */}
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
        buttonClassName="cloud-datasheet"
        onButtonClick={() => showHubSpotForm("cloud-datasheet")}
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
      title: "Infrastructre Assessmnet",
      description:
        "Legacy environments lack cloud readiness and modernization alignment",
      solution:
        "Assess existing infrastructure for cloud adoption feasibility, gaps, and roadmap creation",
    },
    {
      title: "Cloud-Native Development",
      description:
        "Monolithic application designs restrict scalability, resilience, and agility",
      solution:
        "Cloud-native architectures with microservices, containerization, and serverless models",
    },
    {
      title: "Migration and Scaling",
      description:
        "Migrations are risky, disruptive, and often lead to bottlenecks",
      solution:
        "Execute structured workload migration, scaling optimization, and validation",
    },
    {
      title: "Cost and Usage Optimization",
      description:
        "Cloud spending escalates due to inefficient resource management",
      solution:
        "Implement continuous cost optimization with right-sizing, tagging, and usage governance",
    },
    {
      title: "SRE and Operation",
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
        buttonText="Case Study (or asset)"
        link="/digital-product-engineering/cloud/infrastructure-roadmap"
        whatWeDo={[
          "Review infra readiness for the cloud",
          "Define phased migration strategies",
          "Prioritize updates by business value",
        ]}
        businessImpact={[
          "Clear steps reduce migration risk",
          "Gaps addressed before execution",
          "Aligned plans for future growth",
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
        buttonText="Case study (or asset)"
        link="/digital-product-engineering/cloud/multi-cloud-provisioning"
        whatWeDo={[
          "Automate cloud provisioning flows",
          "Add shared control and governance",
          "Enable flexible workload mobility",
        ]}
        businessImpact={[
          "Fewer outages via cloud failover",
          "Central control of all resources",
          "Deploy faster across platforms",
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
        buttonText="Case study (or asset)"
        link="/digital-product-engineering/cloud/cloud-native-enablement"
        whatWeDo={[
          "Design systems with microservices",
          "Optimize containerization and orchestration",
          "Add native tools for observability",
        ]}
        businessImpact={[
          "Built-in scale and fault control",
          "CI/CD speeds up release cycles",
          "Safer rollouts support innovation",
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
        buttonText="Case study (or asset)"
        link="/digital-product-engineering/cloud/cloud-migration"
        whatWeDo={[
          "Plan app and infra migration steps",
          "Tune workloads for cloud targets",
          "Validate scale and availability",
        ]}
        businessImpact={[
          "Migrate with minimal service gaps",
          "Better performance post-move",
          "Scale on demand, not by guesswork",
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
        buttonText="Case study (or asset)"
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
        buttonText="Case study (or asset)"
        link="#"
        whatWeDo={[
          "Set SLOs and track SLIs live",
          "Detect and fix issues early",
          "Learn from incidents and refine",
        ]}
        businessImpact={[
          "Predictable service performance",
          "Less downtime, faster fixes",
          "Stable ops with fast delivery",
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
