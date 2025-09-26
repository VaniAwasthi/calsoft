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
import IntegrationMatter from "../../../component/testing/Integration-Matter";
import { ContactSecDataAi } from "../../../component/utilities/ChallengeSolutionDataAi";
import Img from "@/app/assets/DigitalEngineering/testing/Testing_Banner_5.webp";
import { showHubSpotForm } from "@/app/component/utilities/showHubSpotForm";

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
        title="Integrate Quality into Every Commit, Build, and Deploy"
        description="Enable fast, secure, and reliable releases with Calsoft’s CI/CD-driven QAOps — bridging the gap between speed and stability in modern SDLCs."
        buttonText="Request Free Assessment"
        navItems={navItems}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        heroImage={Img}
        onButtonClicked={() => showHubSpotForm("request-free-assessment")}
        buttonText2=""
      />
      <WhyItMatters
        title="The Missing Link in DevOps? Continuous Quality."
        desc="Agile and DevOps have accelerated releases, but quality is often treated as an afterthought — leading to defects in production and broken pipelines."
        desc2="Calsoft helps enterprises embed quality deep inside DevOps workflows through true QAOps enablement."
        buttonText="Get in touch"
        Component={IntegrationMatter}
        contentWidth="w-[80%]"
      />
      <IntelligentPlanning
        heading="Shift-Left Meets Shift-Smart"
        description="We help you embed continuous testing across your CI/CD ecosystem, aligned with release velocity, risk profile, and coverage requirements."
        data={[
          {
            title: "Automated smoke,",
            subTitle: "regression, API, & functional test packs",
          },
          {
            title: "Hook integration with Jenkins,",
            subTitle: "GitHub Actions, GitLab CI, Azure DevOps",
          },
          {
            title: "Containerized test runners",
            subTitle: "for consistent environments",
          },
          {
            title: "GitOps integration",
            subTitle: "for test-as-code and rollback",
          },
          {
            title: "Quality gates",
            subTitle: "and test thresholds per stage",
          },
          {
            title: "Test parallelization,",
            subTitle: "reporting, and flakiness handling",
          },
        ]}
        bottomContent={null}
        arrow={true}
        image={false}
      />
      <Agility
        data={{
          leftSideContent: {
            title: "Fewer Rollbacks. Faster Releases. Higher Confidence.",
            subTitle: "QAOps enables fast and stable delivery cycles with:",
            // description:
            //   "Calsoft focuses on business-first outcomes — not just technical transition.",
          },
          rightSideContent: [
            {
              title: "50-70%",
              subTitle:
                "faster test execution via parallelization and orchestration",
            },
            {
              title: "90%",
              subTitle: "fewer production bugs through early-stage validations",
            },
            {
              title: "30-40%",
              subTitle: "reduction in cycle time from commit to deploy",
            },
            {
              title: "Zero ",
              subTitle:
                "build to release gaps via quality gates and rollback triggers",
            },
          ],
        }}
        bookMeetingData={{
          title: "Shift-left QA with 90% pipeline coverage.",
          buttonText: "Book a Meeting",
          onButtonClicked: () => showHubSpotForm("book-a-meeting"),
        }}
        buttonText="Download One Pager"
        onPagerButton={() => showHubSpotForm("qaops-one-pg")}
      />
      <UseCases
        data={[
          {
            title: "Product teams",
            subTitle: "deploying multiple microservices daily via GitOps",
          },
          {
            title: "SaaS platforms",
            subTitle: "with CI/CD pipelines across multi-tenant builds",
          },
          {
            title: "FinTech apps",
            subTitle: "requiring automated security and compliance gates",
          },
          {
            title: "ISVs",
            subTitle:
              "streamlining automated sanity and regression pre-release",
          },
          {
            title: "Cloud-native DevOps teams",
            subTitle: "embedding chaos and performance tests into release flow",
          },
        ]}
      />
      <WhyCalsoft
        sectionDescription="QAOps is more than plugging in test automation — it’s about orchestrating quality as a service across SDLC."
        data={{
          tableHeadings: ["Capability", "Calsoft", "Standard Providers"],
          tableContent: [
            {
              name: "CI/CD Integration with Major Tools",
              calsoft: "Jenkins, GitHub, Azure",
              vendor: "Manual Triggering",
            },
            {
              name: "Test as Code (Versioned & Reusable)",
              calsoft: "GitOps Ready",
              vendor: "Script Sprawl",
            },
            {
              name: "Auto Quality Gates & Rollbacks",
              calsoft: "Built-In Decision Hooks",
              vendor: "Post-Facto Validation",
            },
            {
              name: "End-to-End Pipeline Observability",
              calsoft: "Real-Time Metrics",
              vendor: "No Feedback Loop",
            },
            {
              name: "Cloud-Native + On-Prem Compatibility",
              calsoft: "Yes",
              vendor: "Toolchain Limitations",
            },
          ],
        }}
      />
      <FirstStep
        headerContent={{
          title1: "QA That Moves at the",
          title2: "Speed of DevOps",
          description:
            "Calsoft helps you define and embed QAOps — across every stage of your release lifecycle.",
        }}
        Component={Guesswork}
        guessworkData={[
          {
            title: "Pipeline Assessment",
            description:
              "Analyze your current DevOps pipelines, test automation maturity, and tool gaps.",
            output: "Output: QAOps Feasibility Report + Gaps Identified",
            alignment: "left",
          },
          {
            title: "Test Strategy Alignment",
            description:
              "Map tests to CI/CD stages — commit, build, pre-prod, deploy — and define quality gates.",
            output: "Output: Test Orchestration Plan + Metrics Baselines",
            alignment: "right",
          },
          {
            title: "Toolchain Integration",
            description:
              "Set up test runners, configure build hooks, parallelize executions, integrate reporting.",
            output: "Output: CI/CD Test Setup Dashboard + Alerts",
            alignment: "left",
          },
          {
            title: "Run Pilot Workflows",
            description:
              "Automate and run end-to-end CI/CD with integrated QA and rollback triggers.",
            output: "Output: Pilot Validation Report + KPIs",
            alignment: "right",
          },
          {
            title: "Scale Across Pipelines",
            description:
              "Enable governance, dashboarding, change alerts, and modular suite extension.",
            output: "Output: QAOps Playbook + Enterprise Rollout Tracker",
            alignment: "left",
          },
        ]}
      />
      <ContactSecDataAi
        lightContent={"Integrate QAOps seamlessly into CI/CD pipelines."}
      />
    </>
  );
};
export default Page;
