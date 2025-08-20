"use client";

import React from "react";
import HeroSec from "../../../component/infra/HeroSec";
// import WhyItMatters from "../../../component/infra/Multi-Cloud-Provisioning/WhyItMatters";
import IntelligentPlanning from "../../../component/infra/Multi-Cloud-Provisioning/IntelligentPlanning";
import UseCases from "../../../component/infra/UseCases";
import FirstStep from "../../../component/infra/FirstStep";
import WhyCalsoft from "../../../component/infra/WhyCalsoft";
import WhyItMatters from "../../../component/product-application-development/WhyItMatters";
import MultiCloudMatters from "../../../component/infra/MultiCloudMatters";
import Agility from "../../../component/infra/Agility";

const Page = () => {
  return (
    <>
      <HeroSec />
      <WhyItMatters
        title="Multi-Cloud Without Governance = Risk"
        desc="Most enterprises today operate in multi-cloud by accident, not
                  by design. Teams spin up resources on AWS, Azure, or GCP to
                  meet speed needs — but without centralized visibility or
                  governance. The result:"
        desc2="Calsoft’s approach ensures intentional, governed multi-cloud
                  provisioning — without slowing down innovation."
        MainComponenent={MultiCloudMatters}
      />
      <IntelligentPlanning />

      <Agility
        data={{
          leftSideContent: {
            title: "Provision Smarter, Not Just Faster.",
            subTitle:
              "Effective multi-cloud provisioning drives measurable outcomes:",
            description:
              "Calsoft quantifies ROI for each roadmap milestone —from VM consolidation to cloud-native transitions —and ensures you get board-level buy-in with real data.",
          },
          rightSideContent: [
            {
              title: "Up to 30%",
              subTitle:
                "reduction in cloud costs with quota policies & lifecycle hooks",
            },
            {
              title: "50-70%",
              subTitle: "faster environment provisioning using IaC templates",
            },
            {
              title: "Improved compliance",
              subTitle:
                "posture via consistent tagging and encryption standards",
            },
            {
              title: "Enhanced developer",
              subTitle: "autonomy with sandboxed self-service",
            },
          ],
        }}
        bookMeetingData={{
          title: "Provision cloud across vendors 3x faster.",
          buttonText: "Book a Meeting",
        }}
        buttonText="Try Now"
      />
      <UseCases />
      <WhyCalsoft />
      <FirstStep 
      headerContent={{
          title1: "Start Standardizing Your",
          title2: "Cloud Footprint Today",
          description:
            "We make it easy to bring control to your cloud provisioning — without disrupting what works. Here’s how:",
        }}

      guessworkData={[
          {
            id: 1,
            title: "Provisioning Health Check",
            description:
              "Understand your current provisioning patterns, tools, cloud usage inconsistencies.",
            items: null,
            output: "Provisioning Maturity Score + Gap Report",
            side: "left",
          },
          {
            id: 2,
            title: "IaC & Policy Assessment",
            description:
              "We evaluate existing scripts (Terraform, ARM, etc.), policies, and security baselines.",
            items: null,
            output: "IaC Audit Report + Policy Drift Map",
            side: "right",
          },
          {
            id: 3,
            title: "Blueprint Design & Governance Model",
            description:
              "Design modular, reusable provisioning blueprints mapped to teams, roles, and environments.",
            items: null,
            output: "Cloud Provisioning Framework + Sample Blueprints",
            side: "left",
          },
          {
            id: 4,
            title: "Pilot Rollout & Feedback",
            description:
              "Rollout to one team/project with real-time feedback loops.",
            items: null,
            output: "Performance Benchmark Report + Change Logs",
            side: "right",
          },
          {
            id: 5,
            title: "Scale Across Org",
            description:
              "Roll out across business units with ongoing refinement and training.",
            items: null,
            output:
              " Governance Dashboard + Developer Enablement Kit",
            side: "left",
          },
        ]}
         />
    </>
  );
};
export default Page;
