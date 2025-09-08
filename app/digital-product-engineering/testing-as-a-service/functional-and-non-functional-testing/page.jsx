"use client";

import React, { useState } from "react";
import HeroSection from "../../../component/testing/HeroSection";
import IntelligentPlanning from "../../../component/testing/IntelligentPlanning";
import UseCases from "../../../component/testing/UseCases";
import WhyCalsoft from "../../../component/infra/WhyCalsoft";
import FirstStep from "../../../component/infra/FirstStep";
import Guesswork from "../../../component/testing/Guesswork";
import Agility from "../../../component/infra/Agility";
import WhyItMatters from "../../../component/testing/Functional-Testing/WhyItMatters";
import { ContactSecDataAi } from "../../../component/utilities/ChallengeSolutionDataAi";
import Img from "@/app/assets/DigitalEngineering/testing/Testing_Banner_1.webp"

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
        title="Ensure Every Release Works — Functionally and Resiliently."
        description="Practical validation for software quality and operational readiness."
        buttonText="Download Datasheet"
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        navItems={navItems}
        heroImage={Img}
      />
      <WhyItMatters
        title="Persistent Gaps in Agile Testing"
        desc="Even with agile and DevOps practices in place, many enterprises struggle to validate releases across environments, devices, and user journeys. Common gaps include:"
        desc2="Calsoft bridges these gaps by combining business-aligned test scenarios with automated, scalable validation frameworks."
      />
      <IntelligentPlanning
        heading="Design Tests that Mirror Reality"
        description="We help you craft complete testing strategies that validate how your software performs — not just what it does. Our capabilities include:"
        data={[
          {
            title: "Workload Rationalization",
            subTitle:
              "using 6R framework (Rehost, Refactor, Replatform, Repurchase, Retire, Retain)",
          },
          {
            title: "Dependency Mapping",
            subTitle: "via automated tools",
          },
          {
            title: "Business Impact Heatmaps",
            subTitle: "to prioritize based on risk and value",
          },
          {
            title: "TCO Estimation",
            subTitle: "across cloud providers",
          },
          {
            title: "Security & Compliance Mapping",
            subTitle: "to ensure regulated workload migration",
          },
        ]}
        bottomContent={{
          text: "All tests are tied back to business flows, SLAs, and compliance mandates.",
          btnText: "Request Test Coverage Blueprint",
        }}
      />
      <Agility
        data={{
          leftSideContent: {
            title: "Test Early. Fix Fast. Ship Confidently.",
            subTitle: "Cloud migration done right delivers real impact:",
            description:
              "Robust functional and non-functional testing delivers quantifiable business outcomes:",
          },
          rightSideContent: [
            {
              title: "Up to 70%",
              subTitle: "reduction in escaped defects",
            },
            {
              title: "40–60%",
              subTitle: "faster regression cycles with automation",
            },
            {
              title: "50%",
              subTitle: "fewer performance incidents in production",
            },
            {
              title: "Early detection of logic flaws",
              subTitle: "in critical workflows",
            },
          ],
        }}
        bookMeetingData={{
          title:
            "Book a 30-minute call to stop 80% of your cloud spend from going to waste.",
          buttonText: "Book a Meeting",
        }}
        buttonText="Download ROI Sheet"
      />
      <UseCases
        description="We’ve enabled outcomes for:"
        data={[
          {
            title: "FinTech firms",
            subTitle:
              "ensuring fail-safe core banking transactions",
          },
          {
            title: "SaaS platforms",
            subTitle: "validating microservices-based product features across builds",
          },
          {
            title: "Retail companies",
            subTitle: "testing high-traffic flash sale performance",
          },
          {
            title: "Healthcare ISVs",
            subTitle: "verifying HIPAA-compliant workflows under load",
          },
          {
            title: "ISVs",
            subTitle: "automating 80–90% of regression cases across multi-tenant apps",
          },
        ]}
      />
      <WhyCalsoft
        sectionDescription="Most vendors test what they see. Calsoft tests what matters. We combine engineering depth with contextual understanding."
        buttonText="Download One Pager"
        data={{
          tableHeadings: ["Capability", "Calsoft QA Framework", "Traditional QA Vendors"],
          tableContent: [
            {
              name: "Functional + Non-Functional Tie-in",
              calsoft: "Unified Test Strategy",
              vendor: "Siloed Teams",
            },
            {
              name: "Business-Process-Aligned Scenarios",
              calsoft: "Contextual Coverage",
              vendor: "Generic Use Cases",
            },
            {
              name: "Automated Test Data Management",
              calsoft: "Yes",
              vendor: "Manual Dependencies",
            },
            {
              name: "Full CI/CD Pipeline Integration",
              calsoft: "GitHub Actions, Jenkins",
              vendor: "Ad Hoc Scripts",
            },
            {
              name: "SLA-Aligned Performance Testing",
              calsoft: "Configurable Models",
              vendor: "Template-Based Only",
            },
          ],
        }}
      />
      <FirstStep
        headerContent={{
          title1: "Start with Test Confidence,",
          title2: "Not Test Chaos",
          description:
            "We help you implement a structured QA model, tailored to your SDLC and release velocity.",
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
