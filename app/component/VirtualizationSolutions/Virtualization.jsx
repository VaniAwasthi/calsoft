"use client";
import React, { useState } from "react";
import BackgroundImage from "../../assets/DigitalEngineering/virtualisation/Banner.svg";
import BannerWithRightSec from "../utilities/BannerWithRightsec";
import Submenu from "../utilities/Submenu";
import ButtonImage from "../../assets/home/buttonImg.webp";
import { ChallengeToSolution, InfraSection } from "../utilities/InfraSectorSec";
import Info1 from "../../assets/DigitalEngineering/virtualisation/Info1.svg";
import Info2 from "../../assets/DigitalEngineering/virtualisation/Info2.svg";
import Info3 from "../../assets/DigitalEngineering/virtualisation/Info3.svg";
import Info4 from "../../assets/DigitalEngineering/virtualisation/Info4.svg";
import Info5 from "../../assets/DigitalEngineering/virtualisation/Info5.svg";
export const VirtualizationTab = () => {
  const [activeTab, setActiveTab] = useState("Journey");
  const slide = {
    title: "Virtualization solutions",
    description: `Simplify operations, accelerate deployments, and scale infrastructure with modern virtualization strategies.`,
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

export const VirtualizationChallenge = () => {
  const challengesData = [
    {
      title: "Virtualization lifecycle management (Day 0–N)",
      description:
        "Complex infrastructure setup and lifecycle management slow agility",
      solution:
        "Manage end-to-end virtualization setup, deployment, maintenance, and scaling from Day 0 through operations",
    },
    {
      title: "Containerization and orchestration",
      description:
        "Applications struggle with portability, scalability, and environment consistency",
      solution:
        "Implement containerization strategies and orchestration frameworks like Kubernetes for agile deployments",
    },
    {
      title: "Hypervisor",
      description:
        "Traditional VM management adds operational overhead and complexity",
      solution:
        "Optimize hypervisor environments for performance, efficiency, and automation",
    },
    {
      title: "Migration",
      description:
        "Mismanaged platform shifts (V2V, P2V, V2C) cause disruptions and data risks",
      solution:
        "Execute seamless migration strategies across virtualization environments with minimal downtime",
    },
    {
      title: "OpenStack environment configuration",
      description:
        "Private cloud environments may become complex and hard to optimize",
      solution:
        "Configure, deploy, and fine-tune OpenStack-based cloud infrastructures for flexibility and cost efficiency",
    },
  ];

  return (
    <ChallengeToSolution
      title="Challenge to solution:"
      blackTitle="Offer best solutions powered by
            effective virtualization"
      challenges={challengesData}
    />
  );
};

export const VirtualizationSec = () => {
  return (
    <>
      <InfraSection
        title="Virtualization lifecycle management (Day 0–N)"
        description="Handle the complete virtualization lifecycle from setup through scaling and optimization."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Design virtual infra for flexibility",
          "Maintain system health over time",
          "Use automation to cut manual work",
        ]}
        businessImpact={[
          "Faster setup of virtual systems",
          "Less overhead from manual tasks",
          "Reliable environments with uptime",
        ]}
        imageSrc={Info1}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={true}
      />
    </>
  );
};

export const Containerization = () => {
  return (
    <>
      <InfraSection
        title="Containerization and orchestration"
        description="Accelerate application portability, scalability, and resilience with containerization strategies."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Build container stacks with Kubernetes",
          "Add autoscale and self-healing",
          "Tie containers into CI/CD flow",
        ]}
        businessImpact={[
          "Run apps across hybrid setups",
          "Auto-recover from failures fast",
          "Quicker feature rollout cycles",
        ]}
        imageSrc={Info2}
        imageAlt="Image"
        imageLeft={true}
        isDivider={true}
      />
    </>
  );
};

export const HypervisorSec = () => {
  return (
    <>
      <InfraSection
        title="Hypervisor: Optimizing foundations"
        description="Streamline hypervisor environments for performance, scalability, and operational efficiency."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Tune VM density and resources",
          "Automate VM scale and setup",
          "Ensure multi-cloud portability",
        ]}
        businessImpact={[
          "VMs use fewer compute cycles ",
          "Easier VM control and scaling",
          "Extend VMs to hybrid clouds",
        ]}
        imageSrc={Info3}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={false}
      />
    </>
  );
};
export const MigrateSec = () => {
  return (
    <>
      <InfraSection
        title="Migrate seamlessly across platforms"
        description="Transition virtual environments with minimal downtime and operational risk."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Shift workloads across setups",
          "Map risk paths before moving",
          "Verify post-move stability",
        ]}
        businessImpact={[
          "Migration runs with less risk",
          "Faster infra transition speed",
          "Smoother systems after move",
        ]}
        imageSrc={Info4}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={true}
      />
    </>
  );
};
export const OpenSec = () => {
  return (
    <>
      <InfraSection
        title="OpenStack environment configuration"
        description="Design, deploy, and optimize OpenStack environments for scalable, cost-effective cloud operations."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Deploy OpenStack infra layers",
          "Link to hybrid cloud systems",
          "Tune for speed and governance",
        ]}
        businessImpact={[
          "Build private clouds that scale",
          "Cut cost via open frameworks",
          "Mix cloud types with ease",
        ]}
        imageSrc={Info5}
        imageAlt="Infrastructure globe"
        imageLeft={true}
        isDivider={false}
      />
    </>
  );
};
