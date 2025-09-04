"use client";
import React, { useState } from "react";
import BackgroundImage from "../../assets/DigitalEngineering/security/Banner.svg";
import BannerWithRightSec from "../utilities/BannerWithRightsec";
import Submenu from "../utilities/Submenu";
import ButtonImage from "../../assets/home/buttonImg.webp";
import { ChallengeToSolution, InfraSection } from "../utilities/InfraSectorSec";
import Info1 from "../../assets/DigitalEngineering/security/Info1.svg";
import Info2 from "../../assets/DigitalEngineering/security/Info2.svg";
import Info3 from "../../assets/DigitalEngineering/security/Info3.svg";
import Info4 from "../../assets/DigitalEngineering/security/Info4.svg";
import Info5 from "../../assets/DigitalEngineering/security/Info5.svg";
import Info6 from "../../assets/DigitalEngineering/security/Info6.svg";
import { showHubSpotForm } from "../utilities/showHubSpotForm"; // import utility
export const SecurityTab = () => {
  const [activeTab, setActiveTab] = useState("benefits");
  const slide = {
    title: "Security for your digital landscape ",

    description: `Strengthen endpoint, identity, and infrastructure
        security for operational resilience and continuity.`,
    buttonText: "Download Datasheet",
    image: BackgroundImage,
  };
  const navItems = [
    "Benefits",
    "Endpoint",
    "IAM",
    "DevSecOps",
    "Zero Trust",
    "Continuity",
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
        buttonWidth="!w-[250px]"
         onButtonClick={() => showHubSpotForm("security-datasheet")}
      />
      <Submenu
        navItems={navItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </>
  );
};

export const SecurityChallenge = () => {
  const challengesData = [
    {
      title: "Endpoint and perimeter protection",
      description:
        "Expanding attack surfaces leave endpoints and networks vulnerable",
      solution:
        "Implement multi-layered endpoint protection and perimeter security architectures",
    },
    {
      title: "Identity and access management (IAM)",
      description:
        "Unmanaged identities and access lead to data breaches and compliance risks",
      solution:
        "Enable structured IAM frameworks with centralized identity governance and role-based access control",
    },
    {
      title: "DevSecOps",
      description:
        "Security is often an afterthought in rapid DevOps workflows",
      solution:
        "Embed security early into CI/CD pipelines through DevSecOps practices",
    },
    {
      title: "Zero Trust enablement",
      description:
        "Traditional perimeter-based models cannot protect against internal and external threats effectively",
      solution:
        "Architect Zero Trust models with continuous verification and least-privilege access principles",
    },
    {
      title: "Service continuity",
      description:
        "Outages, attacks, and data losses disrupt operations without strong recovery plans",
      solution:
        "Automate backup strategies and ensure operational continuity through resilient recovery frameworks",
    },
  ];

  return (
    <ChallengeToSolution
      title="Challenge to solution:"
      blackTitle="Make your security robust and responsive"
      challenges={challengesData}
      secId="benefits"
    />
  );
};

export const Endpoint = () => {
  return (
    <>
      <InfraSection
        title="Endpoint and perimeter security enablement"
        description="Deploy multi-layered defenses to secure devices, users, and network perimeters."
        // buttonText="Learn More"
        link="/digital-product-engineering/security/endpoint-and-perimeter-security-enablement"
        whatWeDo={[
          "Deploy EPP, EDR, firewalls, and VPNs",
          "Add intrusion and threat detection tools",
          "Use intel to automate fast response",
        ]}
        businessImpact={[
          "Detect threats before they spread",
          "Secure devices and network edges",
          "Cut downtime from security issues",
        ]}
        imageSrc={Info1}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={true}
        secId="endpoint"
      />
    </>
  );
};

export const IdentitySec = () => {
  return (
    <>
      <InfraSection
        title="Identity and access management (IAM)"
        description="Control who accesses what, when, and how with structured IAM frameworks."
        // buttonText="Learn More"
        link="/digital-product-engineering/security/identity-and-access-management"
        whatWeDo={[
          "Centralize identity and access rules",
          "Enable MFA and adaptive controls",
          "Link IAM with audits and logging",
        ]}
        businessImpact={[
          "Stop unauthorized access attempts",
          "Smoother logins build user trust",
          "Easier audits and compliance wins",
        ]}
        imageSrc={Info2}
        imageAlt="Image"
        imageLeft={true}
        isDivider={true}
        secId="iam"
      />
    </>
  );
};

export const DevSec = () => {
  return (
    <>
      <InfraSection
        title="DevSecOps - Embed security into DevOps"
        description="Integrate security controls early and
                continuously across the development lifecycle."
        // buttonText="Learn More"
        link="/digital-product-engineering/security/dev-sec-ops"
        whatWeDo={[
          "Scan code and pipelines for threats",
          "Train teams on secure coding habits",
          "Enable continuous security fixes",
        ]}
        businessImpact={[
          "Find risks early in development",
          "Launch features without delays",
          "Align dev and security from start",
        ]}
        imageSrc={Info3}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={false}
        secId="devsecops"
      />
    </>
  );
};
export const ZeroSec = () => {
  return (
    <>
      <InfraSection
        title="Zero Trust architecture enablement"
        description="Continuously verify access and minimize trust assumptions across your digital ecosystem."
        // buttonText="Learn More"
        link="/digital-product-engineering/security/zero-trust-architecture-enablement"
        whatWeDo={[
          "Apply least-privilege and micro-zoning",
          "Verify devices, users, and behaviors",
          "Adapt access based on risk signals",
        ]}
        businessImpact={[
          "Stop threat spread inside networks",
          "Strong defense from insider risks",
          "Live insights across the ecosystem",
        ]}
        imageSrc={Info4}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={true}
        secId="zero-trust"
      />
    </>
  );
};
export const ServiceSec = () => {
  return (
    <>
      <InfraSection
        title="Service continuity and backup automation"
        description="Protect data, systems, and services with resilient backup and recovery strategies."
        // buttonText="Learn More"
        link="/digital-product-engineering/security/service-continuity-and-backup-automation"
        whatWeDo={[
          "Schedule secure, routine backups",
          "Automate recovery after failures",
          "Align plans with compliance norm",
        ]}
        businessImpact={[
          "Quicker recovery after a breach",
          "Less risk of lost critical data",
          "Recovery plans meet audit needs",
        ]}
        imageSrc={Info5}
        imageAlt="Infrastructure globe"
        imageLeft={true}
        isDivider={true}
        secId="continuity"
      />
    </>
  );
};
export const SreSec = () => {
  return (
    <>
      <InfraSection
        title="SRE (Site Reliability Engineering)"
        description="Balance development velocity with system stability through proactive operations management."
        // buttonText="Learn More"
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
        imageSrc={Info6}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={false}
      />
    </>
  );
};
