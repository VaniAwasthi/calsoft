"use client";

import React from "react";
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

const Page = () => {
  return (
    <>
      <HeroSection
        title="Know Before You Grow — Benchmark with Intent"
        description="Establish performance, scalability, and quality baselines before your next release, migration, or modernization effort — with Calsoft’s Benchmarking Readiness service."
        buttonText="Request Free Assessment"
      />
      <WhyItMatters
        title="Measure What Matters — Before You Deploy."
        desc="Most teams measure application performance reactively — post-deployment or after customer feedback. This leads to:"
        desc2="Calsoft enables structured, scenario-driven benchmarking that aligns with your architecture, release roadmap, and business KPIs."
        buttonText="Download Case Study"
        Component={BenchmarkingMatter}
      />
      <IntelligentPlanning
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
        ]}
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
          ],
        }}
        bookMeetingData={{
          title:
            "Get a customized readiness scorecard aligned to your architecture and KPIs",
          buttonText: "Book a Meeting",
        }}
        buttonText="Download ROI Sheet"
      />
      <UseCases
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
          tableHeadings: ["Capability", "Calsoft", "Standard Providers"],
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
          title1: "Migrate with Method,",
          title2: "Not Momentum",
          description:
            "We take you from readiness to run-state through a risk-mitigated, ROI-led framework. Here's how:",
        }}
        Component={Guesswork}
      />
      <ContactSecDataAi
        lightContent={
          "Want to create a connected, intelligent, & resilient manufacturing ecosystem?"
        }
        link={"#"}
      />
    </>
  );
};
export default Page;
