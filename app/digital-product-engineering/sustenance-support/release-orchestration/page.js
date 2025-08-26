"use client";

import React, { useState } from "react";
import HeroSection from "@/app/component/testing/HeroSection";
import WhyItMatters from "@/app/component/sustenance/WhyItMatter";
import IntelligentPlanning from "@/app/component/testing/IntelligentPlanning";
import UseCases from "@/app/component/sustenance/UseCases";
import WhyCalsoft from "@/app/component/infra/WhyCalsoft";
import FirstStep from "@/app/component/infra/FirstStep";
import Guesswork from "@/app/component/testing/Guesswork";
import img from "@/app/assets/sustenance/bookMeeting.webp";
import { ContactSecDataAi } from "@/app/component/utilities/ChallengeSolutionDataAi";
import RealWorldImpact from "@/app/component/sustenance/RealWorldImpact";
import BookMeeting from "@/app/component/utilities/BookMeeting";

export default function page() {
  const [activeTab, setActiveTab] = useState("why-it-matters");
  const navItems = [
    "Why it Matters",
    "Intelligent Planning",
    "Business Value",
    "Use Cases",
    "Why Calsoft",
    "How to Start",
  ];
  return (
    <>
      <HeroSection
        title="Know Before You Grow Benchmark with Intent"
        description="Establish performance, scalability, and quality baselines before your next release, migration, or modernization effort — with Calsoft’s Benchmarking Readiness service."
        buttonText="Access Readiness"
        navItems={navItems}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
      <WhyItMatters
        title="Measure What Matters — Before You Deploy."
        desc="Most teams measure application performance reactively — post-deployment or after customer feedback. This leads to:"
        buttonText="Download Case Study"
      />
      <IntelligentPlanning bottomContent={null} />
      <RealWorldImpact buttonText={null} />
      <div className="container">
        <BookMeeting
          title="Get a customized readiness scorecard aligned to your architecture and KPIs "
          img={img}
        />
      </div>
      <UseCases />
      <WhyCalsoft
        sectionDescription="Unlike tool-based testing, Calsoft’s Benchmarking Readiness service is consultative, contextual, and business-aligned."
        buttonText="Download One Pager"
        data={{
          tableHeadings: ["Capability", "Calsoft", "DIY or Ad-hoc Teams"],
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
          title1: "Benchmark Today.",
          title2: "Transform Smarter Tomorrow",
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
          "Want to create a connected, intelligent, & resilient manufacturing ecosystem?"
        }
        link={"#"}
      />
    </>
  );
}
