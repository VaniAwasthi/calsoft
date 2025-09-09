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
        title="Migrate with Certainty. Modernize without Disruption."
        description="Accelerate cloud adoption through risk-aware, business-aligned migration strategies — backed by automation, security, and predictable ROI."
        buttonText="Access Readiness"
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        navItems={navItems}
        heroImage={Img}
        buttonText2=""
        buttonClicked={()=>showHubSpotForm("access-readiness")}
      />
      <WhyItMatters />
      <IntelligentPlanning
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
      />
      <Agility
        data={{
          leftSideContent: {
            title: "Faster, Safer, Smarter Cloud Transitions",
            subTitle: "Cloud migration done right delivers real impact:",
            description:
              "Calsoft focuses on business-first outcomes — not just technical transition.",
          },
          rightSideContent: [
            {
              title: "Up to 40%",
              subTitle: "reduction in infra costs via right-sized provisioning",
            },
            {
              title: "Zero-downtime",
              subTitle: "cutovers for production-critical systems",
            },
            {
              title: "50–70%",
              subTitle: "faster migration through automation",
            },
            {
              title: "90%",
              subTitle: "improvement in post-migration application performance",
            },
          ],
        }}
        bookMeetingData={{
          title:
            "Book a 30-minute call to stop 80% of your cloud spend from going to waste.",
          buttonText: "Book a Meeting",
          onButtonClicked:()=>showHubSpotForm("book-a-meeting")
        }}
        buttonText="Download One Pager"
        onPagerButton={()=>showHubSpotForm("regression-testing-caltia-one-pg")}
      />
      <UseCases />
      <WhyCalsoft
        sectionDescription="Cloud migration is not a copy-paste operation — it’s a strategic transformation. Calsoft is uniquely positioned to deliver:"
        buttonText="Download One Pager"
        data={{
          tableHeadings: ["Capability", "Calsoft", "Standard Providers"],
          tableContent: [
            {
              name: "Engineering-Led Migration Design",
              calsoft: "Deep Technical Depth",
              vendor: "Generic Templates",
            },
            {
              name: "Multi-Cloud Strategy Alignment",
              calsoft: "Azure, AWS, GCP",
              vendor: "Vendor Bias",
            },
            {
              name: "Automated Dependency Discovery",
              calsoft: "Yes",
              vendor: "Manual Analysis",
            },
            {
              name: "Security-First Cutover Planning",
              calsoft: "Integrated Controls",
              vendor: "Post-hoc Remediation",
            },
            {
              name: "Post-Migration Optimization",
              calsoft: "Built-In",
              vendor: "Not Included",
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
          "Validate functionality with robust manual and automated testing."
        }
      />
    </>
  );
};
export default Page;
