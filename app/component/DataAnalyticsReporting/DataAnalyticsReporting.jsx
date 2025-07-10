"use client";
import React, { useState } from "react";
import BackgroundImage from "../../assets/DigitalEngineering/Product/CloudServiceBanner.webp";
import BannerWithRightSec from "../utilities/BannerWithRightsec";
import Submenu from "../utilities/Submenu";
import ButtonImage from "../../assets/home/buttonImg.webp";
import { ChallengeToSolution, InfraSection } from "../utilities/InfraSectorSec";
import cloudInfrIt from "../../assets/DigitalEngineering/Product/cloudInfrIt.webp";
import RiskImage from "../../assets/Data-Ai/Risk.webp";
import PlatformImage from "../../assets/Data-Ai/4sec.webp";
import CostImage from "../../assets/Data-Ai/5sec.webp";
import {
  ChallengeSolutionComp,
  DataInfoSection,
} from "../utilities/ChallengeSolutionDataAi";
export const AnalyticsBanner = () => {
  const [activeTab, setActiveTab] = useState("Journey");
  const slide = {
    title: "Data analytics and reporting",
    title2: "",
    description: `Enable smarter decisions with real-time
    analytics and intuitive visualizations.`,
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

export const AnalyticsSec = () => {
  const data = [
    {
      tag: "Unified dashboards",
      challenge:
        "Struggling to consolidate KPIs across disparate data systems?",
      solution:
        "Centralized, real-time dashboards connecting operational and analytical data sources",
    },
    {
      tag: "Real-time visibility",
      challenge:
        "Facing delays in identifying performance trends and anomalies?",
      solution:
        "Plan and deploy live analytics pipelines to surface insights at the speed of business",
    },
    {
      tag: "BI integration",
      challenge:
        "Finding it hard to align analytics tools with your evolving data architecture?",
      solution:
        "Modern BI platforms with hybrid and multi-cloud data environments seamlessly",
    },
    {
      tag: "Custom eporting",
      challenge:
        "Unable to tailor reports to business specific needs and roles?",
      solution:
        "Custom reporting frameworks that adapt to user roles, KPIs, and regulatory demands",
    },
  ];
  return (
    <>
      <ChallengeSolutionComp
        data={data}
        BlackHeading="Govern enterprise data flows"
        GradientHeading=" Challenge to solutions:"
      />
    </>
  );
};

export const DashboardSec = () => {
  return (
    <>
      <DataInfoSection
        title="Dashboard and KPI visualization"
        description="Deliver operational and strategic clarity through
        real-time visual insights."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Build dashboards with custom KPIs",
          "Feed real-time data to visual layers",
          "Add drilldowns for role-based views",
        ]}
        businessImpact={[
          "Faster insight for daily decisions",
          "Shared views improve transparency",
          "Teams use data more consistently",
        ]}
        imageSrc={cloudInfrIt}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={true}
      />
    </>
  );
};

export const BusinessSec = () => {
  return (
    <>
      <DataInfoSection
        title="Business Intelligence (BI) integration"
        description="Empower analytics through unified business intelligence ecosystems."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Connect BI to cloud data platforms",
          "Tune queries for speed and scale",
          "Standardize access with models",
        ]}
        businessImpact={[
          "BI use grows across all teams",
          "Data stays unified, not siloed",
          "On-hands, timely, and clear insights",
        ]}
        imageSrc={RiskImage}
        imageAlt="Image"
        imageLeft={true}
        isDivider={false}
      />
    </>
  );
};

export const CustomSec = () => {
  return (
    <>
      <DataInfoSection
        title="Custom
        reporting"
        description="On-hand and real-time insights aligned to dynamic business priorities."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Configure reports by role or KPI",
          "Schedule, trigger, or run on demand",
          "Add checks for data compliance",
        ]}
        businessImpact={[
          "Reports reflect real business need",
          "Faster response to new priorities",
          "Stay aligned with policy rules",
        ]}
        imageSrc={PlatformImage}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={false}
      />
    </>
  );
};
export const RealSec = () => {
  return (
    <>
      <DataInfoSection
        title="Real-time business insights streaming"
        description="Harness live data flows to drive instant operational intelligence."
        buttonText="Case Study"
        link="#"
        whatWeDo={[
          "Set up streams for live KPIs",
          "Link dashboards to active data",
          "Alert based on set thresholds",
        ]}
        businessImpact={[
          "Teams act on events instantly",
          "Smarter/faster moves give market edge",
          "Lower incident response times",
        ]}
        imageSrc={CostImage}
        imageAlt="Infrastructure globe"
        imageLeft={true}
        isDivider={false}
      />
    </>
  );
};
