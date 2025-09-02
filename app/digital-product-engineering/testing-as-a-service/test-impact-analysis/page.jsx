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
import ImpactAnalysisMatter from "../../../component/testing/ImpactAnalysisMatter";
import { ContactSecDataAi } from "../../../component/utilities/ChallengeSolutionDataAi";
import Img from "@/app/assets/DigitalEngineering/testing/Testing_Banner_4.webp"

const Page = () => {
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
        title="Test Smarter, Not Slower — With Impact-Driven Validation"
        description="Accelerate quality cycles by identifying and executing only the tests that matter — powered by Calsoft’s Test Impact Analysis services."
        buttonText="Try Free Load Test"
        navItems={navItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        heroImage={Img}
        
      />
      <WhyItMatters
        title="The Missing Link in DevOps? Continuous Quality."
        desc="Modern software development generates thousands of tests. But not all changes impact every function. Without intelligent impact analysis, you face: "
        desc2="Calsoft bridges these gaps by combining business-aligned test scenarios with automated, scalable validation frameworks."
        buttonText="Download Case Study"
        Component={ImpactAnalysisMatter}
      />
      <IntelligentPlanning
        heading="Targeted Testing. Faster Feedback. Fewer Misses."
        description="We enable real-time test impact analysis across your code base and pipelines — ensuring smart regression without sacrificing coverage."
        buttonText="Request POC"
        data={[
          {
            title: "Change mapping at file/function level",
            subTitle: "using version control diffs",
          },
          {
            title: "Dependency-based test impact mapping",
            subTitle: null,
          },
          {
            title: "Dynamic test selection",
            subTitle: "based on history, flakiness, and risk",
          },
          {
            title: "Static + runtime data correlation",
            subTitle: "(test hit maps, code coverage)",
          },
          {
            title: "CI/CD integration",
            subTitle: "with GitHub Actions, Jenkins, Azure DevOps",
          },
        ]}
      />
      <Agility
        data={{
          leftSideContent: {
            title: "More Confidence. Less Rework. Same Coverage.",
            subTitle:
              "Test Impact Analysis offers measurable engineering and business gains:",
            description:
              "Calsoft’s approach eliminates noise and focuses testing where it protects releases the most.",
          },
          rightSideContent: [
            {
              title: "60-80%",
              subTitle: "fewer tests per commit with no loss of coverage",
            },
            {
              title: "2X Faster",
              subTitle: "feedback loops in DevOps pipelines",
            },
            {
              title: "40% Lower",
              subTitle: "test execution costs on cloud/on-prem infra",
            },
            {
              title: "Improved",
              subTitle: "developer productivity via faster merge approvals",
            },
          ],
        }}
        bookMeetingData={{
          title:
            "Want faster, leaner QA cycles? Let’s walk you through how our Test Impact Analysis",
          buttonText: "Book a Meeting",
        }}
        buttonText="Download ROI Sheet"
      />
      <UseCases
        data={[
          {
            title: "Microservices architectures",
            subTitle: "with modular dependencies",
          },
          {
            title: "Large monoliths",
            subTitle: "with extensive regression packs",
          },
          {
            title: "Agile teams",
            subTitle: "deploying daily via CI/CD",
          },
          {
            title: "SaaS platforms",
            subTitle: "with multi-tenant test variations",
          },
          {
            title: "Enterprises with growing",
            subTitle: "test debt and slow pipelines",
          },
        ]}
      />
      <WhyCalsoft
        sectionDescription="Unlike basic test filtering plugins, Calsoft’s Test Impact Analysis service is engineered for scale, accuracy, and adaptability"
        data={{
          tableHeadings: ["Capability", "Calsoft", "Standard Providers"],
          tableContent: [
            {
              name: "Multi-level Change Mapping",
              calsoft: "File + Function Level",
              vendor: "File Level Only",
            },
            {
              name: "Runtime + Static Coverage Correlation",
              calsoft: "Combined Analysis",
              vendor: "Static Only",
            },
            {
              name: "Test History & Flakiness Scoring",
              calsoft: "Included",
              vendor: "Manual",
            },
            {
              name: "CI/CD Toolchain Integration",
              calsoft: "Jenkins, GitHub, Azure",
              vendor: " Limited",
            },
            {
              name: "Customizable Risk Rules",
              calsoft: "SLA-Aligned",
              vendor: "Fixed Heuristics",
            },
          ],
        }}
      />
      <FirstStep
        headerContent={{
          title1: "Validate the Right",
          title2: "Tests — From Day One",
          description:
            "We implement test impact intelligence without disrupting your workflows. Here's the step-by-step path:",
        }}
        Component={Guesswork}
        guessworkData={[
          {
            title: "Test Inventory & Change Audit",
            description:
              "Assess current test suite, execution time, version control usage, and code change patterns.",
            output: "Output: TIA Readiness Report + Test Coverage Insights",
            alignment: "left",
          },
          {
            title: "TIA Model Design",
            description:
              "Configure test selection rules, change-to-test mapping strategy, and baseline coverage.",
            output: "Output: Test Impact Mapping Rules + Confidence Thresholds",
            alignment: "right",
          },
          {
            title: "Validation & Rollout",
            description:
              "Compare full vs partial runs, validate missed detections, and tune the selection engine.",
            output: "Output: Finalized TIA Workflow + Quality Gate Thresholds",
            alignment: "left",
          },
          {
            title: "Pilot Run & Benchmarking",
            description:
              "Run selected regression packs, monitor feedback, track flakiness, execution time, and false negatives.",
            output: "Regression Pilot Report + Execution Time Savings",
            alignment: "right",
          },
          {
            title: "Enterprise Scale Deployment",
            description:
              "Roll out to all test environments with dashboards, training, and alerts for test coverage anomalies.",
            output: "Output: Impact Dashboard + Optimization Toolkit",
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
};
export default Page;
