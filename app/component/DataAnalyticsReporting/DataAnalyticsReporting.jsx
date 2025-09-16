"use client";
import React, { useState } from "react";
import BackgroundImage from "../../assets/Data-Ai/analytics/Banner.webp";
import BannerWithRightSec from "../utilities/BannerWithRightsec";
import Submenu from "../utilities/Submenu";
import ButtonImage from "../../assets/home/buttonImg.webp";
import Info1 from "../../assets/Data-Ai/analytics/Info-1.svg";
import Info2 from "../../assets/Data-Ai/analytics/Info-2.svg";
import Info3 from "../../assets/Data-Ai/analytics/Info-3.svg";
import Info4 from "../../assets/Data-Ai/analytics/Info-4.svg";

import { showHubSpotForm } from "../utilities/showHubSpotForm"; // import utility
import {
  ChallengeSolutionComp,
  DataInfoSection,
} from "../utilities/ChallengeSolutionDataAi";
export const AnalyticsBanner = () => {
  const [activeTab, setActiveTab] = useState("benefits");
  const slide = {
    title: "Data analytics and reporting",
    description: `Enable smarter decisions with real-time
    analytics and intuitive visualizations.`,
    buttonText: "Get in Touch",
    image: BackgroundImage,
  };
  const navItems = [
    "Benefits",
    "Dashboard",
    "Intelligence",
    "Reporting",
    "Real-time",
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
        onButtonClick={() => showHubSpotForm("data-analytics-reporting-datasheet")}
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
      tag: "Custom reporting",
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
        BlackHeading="Govern enterprise dataflows"
        GradientHeading=" Challenge to solutions:"
        secId="benefits"
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
        // buttonText="Learn More"
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
        imageSrc={Info1}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={true}
        secid="dashboard"
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
        // buttonText="Learn More"
        link="#"
        whatWeDo={[
          "Connect BI to cloud data platforms",
          "Tune queries for speed and scale",
          "Standardize access with models",
        ]}
        businessImpact={[
          "BI use grows across all teams",
          "Data stays unified, not siloed",
          "Hands-on, timely, and clear insights",
        ]}
        imageSrc={Info2}
        imageAlt="Image"
        imageLeft={true}
        isDivider={false}
        secid="intelligence"
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
        // buttonText="Learn More"
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
        imageSrc={Info3}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={true}
        secid="reporting"
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
        // buttonText="Learn More"
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
        imageSrc={Info4}
        imageAlt="Infrastructure globe"
        imageLeft={true}
        isDivider={false}
        secid="real-time"
      />
    </>
  );
};
