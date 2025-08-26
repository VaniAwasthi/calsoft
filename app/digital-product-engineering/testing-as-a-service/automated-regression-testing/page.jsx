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
import RegressionTestingMatter from "../../../component/testing/Regression-Testing-Matter";
import { ContactSecDataAi } from "../../../component/utilities/ChallengeSolutionDataAi";

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
        title="Never Re-Test Everything. Always Test What Matters"
        description="Accelerate release cycles and improve test coverage with Calsoft’s Automated Regression Testing — engineered for speed, stability, and scalability."
        buttonText="Request Free Assessment"
        navItems={navItems}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
      <WhyItMatters
        title="Outdated Regression = Delayed Releases."
        desc="Manual or partially automated regression testing often fails to keep pace with agile sprints and CI/CD pipelines, leading to:"
        desc2="Calsoft helps QA teams shift from script-heavy testing to impact-driven, maintainable regression automation aligned with release velocity."
        buttonText="Download Case Study"
        Component={RegressionTestingMatter}
      />
      <IntelligentPlanning
        heading="Regression that Evolves with Your Codebase"
        description="Calsoft designs modular, reusable, and scalable regression test suites that fit your current and future SDLC needs."
        buttonText="Request POC"
      />
      <Agility
        data={{
          leftSideContent: {
            title: "Faster Cycles. Fewer Bugs. Smarter QA.",
            subTitle:
              "Automated regression testing delivers measurable technical and business impact:",
            description:
              "Calsoft ensures regression is no longer a bottleneck — but a competitive advantage.",
          },
          rightSideContent: [
            {
              title: "50-70%",
              subTitle: "faster validation across sprints and releases",
            },
            {
              title: "80-90%",
              subTitle: "defect detection coverage on reused and edge flows",
            },
            {
              title: "Up to 40%",
              subTitle: "reduction in rework and rollback effort",
            },
            {
              title: "2X",
              subTitle: "faster developer feedback on code commits",
            },
          ],
        }}
        bookMeetingData={{
          title:
            "Let’s talk about cutting your regression time by up to 60% — book a discovery call today.",
          buttonText: "Book a Meeting",
        }}
        buttonText="Download ROI Sheet"
      />
      <UseCases
        data={[
          {
            title: "SaaS platforms",
            subTitle: "with multi-tenant, frequent feature releases",
          },
          {
            title: "ISVs",
            subTitle:
              "re-architecting monoliths into services needing regression reuse",
          },
          {
            title: "FinTech apps",
            subTitle: "with regulatory compliance and high test repeatability",
          },
          {
            title: "Retail and eCommerce",
            subTitle: "workflows across devices and browsers",
          },
          {
            title: "Enterprises adopting CI/CD",
            subTitle: "and requiring quality gates pre-deploy",
          },
        ]}
      />
      <WhyCalsoft
        sectionDescription="Most automation stops at scripts. Calsoft enables scalable regression intelligence that keeps pace with your releases."
        data={{
          tableHeadings: ["Capability", "Calsoft", "Standard Providers"],
          tableContent: [
            {
              name: "Test Impact + Change Awareness",
              calsoft: "Yes",
              vendor: "Absent",
            },
            {
              name: "Multi-layer Regression (API, UI, Logic)",
              calsoft: "Full Stack",
              vendor: "UI-Centric Only",
            },
            {
              name: "CI/CD Integration + Scheduling",
              calsoft: "Jenkins, GitHub, Azure",
              vendor: "Manual Triggering",
            },
            {
              name: "Dynamic Test Data & Mocking",
              calsoft: "Built-in",
              vendor: "Hardcoded Inputs",
            },
            {
              name: "Custom Dashboards & Traceability",
              calsoft: "Story-Level Mapping",
              vendor: "Generic Reports",
            },
          ],
        }}
      />
      <FirstStep
        headerContent={{
          title1:
            "Modernize Your Regression Strategy Without Disrupting Delivery",
          title2: null,
          description:
            "Calsoft offers a plug-and-scale approach to regression automation — built to reduce risk and optimize effort.",
        }}
        Component={Guesswork}
        guessworkData={[
          {
            title: "Current Suite Assessment",
            description:
              "Review existing regression scripts, coverage, test execution data, and tool usage.",
            output:
              "Output: Regression Gap Report + Optimization Opportunities",
            alignment: "left",
          },
          {
            title: "Test Impact & Coverage Mapping",
            description:
              "Analyze changes vs test coverage using Git-based insights and static analysis.",
            output: "Test Selection Matrix + Prioritized Regression Scope",
            alignment: "right",
          },
          {
            title: "Framework Setup & Optimization",
            description:
              "Implement CI/CD hooks, create modular test templates, enable parallel and cross-browser runs.",
            output: "Output: Regression Test Framework + Environment Setup",
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
            title: "Enterprise Rollout & Maintenance Playbook",
            description:
              "Enable governance, dashboarding, change alerts, and modular suite extension.",
            output: "Output: Test Suite Catalog + Maintenance SOP",
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
