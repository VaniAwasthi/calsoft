"use client";

import React, { useState } from "react";
import HeroSection from "../../../component/testing/HeroSection";
import WhyItMatters from "../../../component/testing/Functional-Testing/WhyItMatters";
import IntelligentPlanning from "../../../component/testing/IntelligentPlanning";
import UseCases from "../../../component/testing/UseCases";
import WhyCalsoft from "../../../component/infra/WhyCalsoft";
import FirstStep from "../../../component/infra/FirstStep";
import Guesswork from "../../../component/testing/Guesswork";
import Agility from "../../../component/infra/Agility";
import BenchmarkingMatter from "../../../component/testing/BenchmarkingMatter";
import { ContactSecDataAi } from "../../../component/utilities/ChallengeSolutionDataAi";
import Img from "@/app/assets/DigitalEngineering/testing/Testing_Banner_6.webp"
import { showHubSpotForm } from "@/app/component/utilities/showHubSpotForm";

const Page = () => {
  const [activeTab, setActiveTab] = useState("why-it-matters");

  const navItems = [
    "Why This Matters",
    "Intelligent Planning",
    "Business Value",
    "Use Cases",
    "Why Calsoft",
    "How to Start",
  ];
  return (
    <>
      <HeroSection
        title="Know Before You Grow — Benchmark with Intent"
        description="Establish performance, scalability, and quality baselines before your next release, migration, or modernization effort — with Calsoft’s Benchmarking Readiness service."
        buttonText="Request Free Assessment" activeTab={activeTab}
        setActiveTab={setActiveTab} navItems={navItems}
        heroImage={Img}
        onButtonClicked={()=>showHubSpotForm("request-free-assessment")}
        buttonText2=""
      />
      <WhyItMatters
        title="Measure What Matters — Before You Deploy."
        desc="Most teams measure application performance reactively — post-deployment or after customer feedback. This leads to:"
        desc2="Calsoft enables structured, scenario-driven benchmarking that aligns with your architecture, release roadmap, and business KPIs."
        buttonText="Get in touch"
        Component={BenchmarkingMatter}
      />
      <IntelligentPlanning
        heading="Measure What Matters — Precisely."
        description="We help enterprises define what to benchmark, how to measure it, and what to expect, based on application type, usage model, and business goals."
        buttonText="Request POC"
        data={[
          {
            title: "Define KPIs",
            subTitle: "across performance, stability, cost, and scalability",
          },
          {
            title: "Identify workloads,",
            subTitle: "endpoints, and APIs to be benchmarked",
          },
          {
            title: "Run synthetic workloads",
            subTitle: "that simulate real usage scenarios",
          },
          {
            title: "Benchmark across infra layers",
            subTitle: "(app, DB, network, edge)",
          },
          {
            title: "Use A/B or pre-post",
            subTitle: "models to compare tech stacks or deployments",
          },
          {
            title: "Map against SLAs,",
            subTitle: "industry standards, or competitor data if available",
          },
        ]}
        bottomContent={null}
        arrow={true}
        image={false}
      />
      <Agility
        data={{
          leftSideContent: {
            title: "Turn Unknowns Into Predictable Outcomes.",
            subTitle:
              "Benchmarking before critical changes reduces risk and enhances decision-making:",
            // description:
            //   "Calsoft focuses on business-first outcomes — not just technical transition.",
          },
          rightSideContent: [
            {
              title: "30-40%",
              subTitle:
                "better architectural decisions through data-backed comparisons",
            },
            {
              title: "Up to 40%",
              subTitle:
                "cost savings by avoiding over-engineering or under-provisioning",
            },
            {
              title: "Faster stakeholder",
              subTitle: "alignment with objective performance visibility",
            },
            {
              title: "Improved vendor",
              subTitle: "selection for infra, platforms, or cloud",
            },
            {
              title: "Confidence in modernization outcomes",
              subTitle: "through pre-post validation",
            },
          ],
        }}
        bookMeetingData={{
          title:
            "Achieve 100% release readiness through benchmarks.",
          buttonText: "Book a Meeting",
          onButtonClicked:()=>showHubSpotForm("book-a-meeting")
        }}
        buttonText="Download One Pager"
        onPagerButton={()=>showHubSpotForm("benchmarking-readiness-one-pg")}
      />
      <UseCases
      description="Calsoft’s Benchmarking Readiness service has been successfully applied across:"
        data={[
          {
            title: "Cloud migration",
            subTitle: "planning for legacy workloads",
          },
          {
            title: "Platform modernization",
            subTitle: "from monolith to microservices",
          },
          {
            title: "Comparative benchmarking",
            subTitle: "of in-house vs SaaS tools",
          },
          {
            title: "DevOps efficiency",
            subTitle: "measurement before pipeline changes",
          },
          {
            title: "OEM & hardware stack evaluation",
            subTitle: "(e.g., storage, network, edge devices)",
          },
        ]}
      />
      <WhyCalsoft
        sectionDescription="Unlike tool-based testing, Calsoft’s Benchmarking Readiness service is consultative, contextual, and business-aligned."
        data={{
          tableHeadings: ["Capability", "Calsoft Benchmarking Readiness", "Ad-Hoc Performance Tests"],
          tableContent: [
            {
              name: "Business-KPI-Driven Benchmark Design",
              calsoft: "Yes",
              vendor: "Feature-Driven Only",
            },
            {
              name: "Synthetic & Real Load Modeling",
              calsoft: "Combined",
              vendor: "One-Dimensional",
            },
            {
              name: "Multi-layer Benchmarking (App + Infra)",
              calsoft: "Yes",
              vendor: "App-Focused Only",
            },
            {
              name: "Decision-Grade Reports",
              calsoft: "Board-Ready",
              vendor: "Technical Only",
            },
            {
              name: "Comparative & SLA Validation",
              calsoft: "Reference Benchmarks",
              vendor: "No Industry Mapping",
            },
          ],
        }}
      />
      <FirstStep
        headerContent={{
          title1: "Benchmark Today. Transform",
          title2: "Smarter Tomorrow",
          description:
            "Here’s how we bring benchmarking into your transformation process — without slowing it down.",
        }}
        Component={Guesswork}
        guessworkData={[
          {
            title: "Readiness Evaluation",
            description:
              "Assess your application landscape, KPIs, infra stack, and modernization plans.",
            output: "Output: Benchmark Readiness Report + Scope Definition",
            alignment: "left",
          },
          {
            title: "Scenario Definition & KPI Mapping",
            description:
              "Identify use cases to benchmark — tech stack, user flow, performance attributes, and business impact areas.",
            output: "Output: Benchmark KPI Matrix + Test Scenarios",
            alignment: "right",
          },
          {
            title: "Toolchain Setup & Simulation Design",
            description:
              "Set up synthetic loads, monitoring tools, telemetry collection, and comparison baselines.",
            output: "Output: Test Harness Blueprint + Execution Plan",
            alignment: "left",
          },
          {
            title: "Execution & Observability",
            description:
              "Run benchmarks with real-time dashboards, alerting, and test comparisons.",
            output: "Output: Benchmark Execution Summary + Gap Insights",
            alignment: "right",
          },
          {
            title: "Recommendations & Decision Pack",
            description:
              "Deliver actionable reports, infra right-sizing, SLA alignment, and architectural improvement areas.",
            output:
              "Output: Executive Benchmarking Deck + Optimization Roadmap",
            alignment: "left",
          },
        ]}
      />
      <ContactSecDataAi
        lightContent={
          "Benchmark readiness to meet market and customer demands."
        }
      />
    </>
  );
};
export default Page;
