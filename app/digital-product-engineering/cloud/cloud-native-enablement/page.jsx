"use client";

import React from "react";
import HeroSec from "../../../component/infra/HeroSec";
import IntelligentPlanning from "../../../component/infra/Multi-Cloud-Provisioning/IntelligentPlanning";
import UseCases from "../../../component/infra/UseCases";
import FirstStep from "../../../component/infra/FirstStep";
import WhyCalsoft from "../../../component/infra/WhyCalsoft";
import Agility from "../../../component/infra/Agility";
import { ContactSecDataAi } from "../../../component/utilities/ChallengeSolutionDataAi";
import WhyItMatters from "../../../component/product-application-development/WhyItMatters";
import CloudNative from "../../../component/infra/CloudNativeMatters";

const Page = () => {
  return (
    <>
      <HeroSec />
      {/* <WhyItMatters /> */}
      <WhyItMatters
        title="Debunking Cloud-Native Myths"
        desc="For most enterprises, “cloud-native” remains aspirational —
                often misunderstood as just container adoption. In reality,
                incomplete strategies lead to:"
        desc2="CCalsoft ensures true cloud-native enablement by aligning
                architecture, engineering practices, security, and operations —
                at scale."
        buttonText="Download Case Study"
        MainComponenent={CloudNative}
        contentClass="w-[80%]"
      />
      <IntelligentPlanning />
      <Agility
        data={{
          leftSideContent: {
            title: "From Agile Code to Agile Enterprise",
            subTitle:
              "True cloud-native adoption delivers tangible business benefits:",
            description:
              "Calsoft delivers engineering-led outcomes, not just infrastructure uplift.",
          },
          rightSideContent: [
            {
              title: "30-40%",
              subTitle: "faster release cycles via automated pipelines",
            },
            {
              title: "70%",
              subTitle: "improvement in deployment consistency with GitOps",
            },
            {
              title: "20-35%",
              subTitle: "reduced infra cost through right-sized workloads",
            },
            {
              title: "Build-in",
              subTitle: "compliance with runtime security and policy-as-code",
            },
          ],
        }}
        bookMeetingData={{
          title: "Achieve 80% app modernization with native tech.",
          buttonText: "Book a Meeting",
        }}
        buttonText="Try Now"
      />
      <UseCases />
      <WhyCalsoft />
      <FirstStep
      headerContent={{
          title1: "Accelerate Your Cloud-Native",
          title2: "Journey, Step-by-Step",
          description:
            "You don’t need to refactor everything at once. Start lean, build fast, and scale securely. Here's how:",
        }}

      guessworkData={[
          {
            id: 1,
            title: "Cloud-Native Readiness Assessment",
            description:
              "Evaluate current infra, architecture, CI/CD maturity, and team readiness.",
            items: null,
            output: "Cloud-Native Scorecard + Gaps",
            side: "left",
          },
          {
            id: 2,
            title: "Application & Platform Strategy",
            description:
              "Identify which workloads to refactor, replatform, or retire. Align on platform tech stack.",
            items: null,
            output: "Microservices Map + Platform Plan",
            side: "right",
          },
          {
            id: 3,
            title: "DevSecOps & GitOps Implementation",
            description:
              "Build secure CI/CD with policy-as-code and Git-based automation.",
            items: null,
            output: "Reference Pipelines + Policy Engine Setup",
            side: "left",
          },
          {
            id: 4,
            title: "Pilot Containerization & Observability",
            description:
              "Deploy pilot apps on Kubernetes, test runtime, logging, tracing, and scaling.",
            items: null,
            output: "Pilot Launch Report + Toolchain Blueprint",
            side: "right",
          },
          {
            id: 5,
            title: "Enterprise Rollout & Governance Model",
            description:
              "Scale across BU teams with standard templates, audit hooks, and developer onboarding.",
            items: null,
            output:
              "IDP Guide + Governance Framework + TCO Model",
            side: "left",
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
