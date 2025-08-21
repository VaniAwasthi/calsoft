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

import LoadValidationMatter from "../../../component/testing/LoadValidationMatter";
import { ContactSecDataAi } from "../../../component/utilities/ChallengeSolutionDataAi";

const Page = () => {
  return (
    <>
      <HeroSection
        title="Validate Scale. Simulate Reality. Release with Confidence"
        description="Ensure your applications can handle real-world traffic and usage peaks with Calsoft’s engineered scale & load validation services."
        buttonText="Try Free Load Test"
      />
      <WhyItMatters
        title="Every Missed Test Case Is a Revenue Risk."
        desc="Even with agile and DevOps practices in place, many enterprises struggle to validate releases across environments, devices, and user journeys. Common gaps include:"
        desc2="Calsoft bridges these gaps by combining business-aligned test scenarios with automated, scalable validation frameworks."
        buttonText="Download Case Study"
        Component={LoadValidationMatter}
        contentWidth="w-[80%]"
      />
      <IntelligentPlanning 
      data={[
          {
            title: "Concurrent user load patterns",
            subTitle: "(spike, soak, stress, endurance)",
          },
          {
            title: "Geo-distributed traffic surges",
            subTitle: "(CDN & edge scenarios)",
          },
          {
            title: "Session concurrency, memory leaks,",
            subTitle: "DB query saturation",
          },
          {
            title: "Upstream & downstream",
            subTitle: "API latency under load",
          },
          {
            title: "Multi-layer monitoring",
            subTitle: "application, infra, network",
          },
        ]}
        />
      <Agility
        data={{
          leftSideContent: {
            title: "Prevent Downtime. Preserve Experience. Protect Revenue.",
            subTitle: "Validated scale unlocks measurable business and technical outcomes:",
            description:
              "Calsoft moves performance testing from optional to essential — with metrics that matter.",
          },
          rightSideContent: [
            {
              title: "95%",
              subTitle: "fewer production incidents under high concurrency",
            },
            {
              title: "3X Faster",
              subTitle: "incident root cause detection through pre-production instrumentation",
            },
            {
              title: "Up to 30%",
              subTitle: "cost savings via right-sized infra recommendations",
            },
            {
              title: "100% SLA",
              subTitle: "compliance during seasonal, campaign, or product launches",
            },
          ],
        }}
        bookMeetingData={{
          title: "On average, Calsoft clients detect 4x more performance bottlenecks before release.",
          buttonText: "Book a Meeting",
        }}
        buttonText="Download ROI Sheet"
      />
      <UseCases 
      data={[
          {
            title: "E-commerce platforms",
            subTitle:
              "validating flash-sale concurrency (50K+ users)",
          },
          {
            title: "SaaS ISVs",
            subTitle: "simulating multi-tenant login & usage patterns",
          },
          {
            title: "Banking portals",
            subTitle: "validating peak transaction throughput & failover",
          },
          {
            title: "Healthcare systems",
            subTitle: "testing 3rd-party APIs under mass usage",
          },
          {
            title: "Streaming/media firms",
            subTitle: "simulating bandwidth variability across geos",
          },
        ]}
      />
      <WhyCalsoft
        sectionDescription="Calsoft blends QA depth with infrastructure visibility — offering more than just a tool-based approach."
        data={{
          tableHeadings: ["Capability", "Calsoft", "Standard Providers"],
          tableContent: [
            {
              name: "SLA-Centric Load Planning",
              calsoft: "Yes",
              vendor: "Tool-Based Testing",
            },
            {
              name: "App + Infra + API Observability",
              calsoft: "Full-Stack Correlation",
              vendor: "App Layer Only",
            },
            {
              name: "Realistic Traffic Models",
              calsoft: "Geo + Concurrency Modeled",
              vendor: "Linear Load Only",
            },
            {
              name: "Dynamic Resource Bottleneck Detection",
              calsoft: "Yes",
              vendor: "Manual Debugging",
            },
            {
              name: "Optimization Feedback Loop",
              calsoft: "Post-Test Infra Tuning",
              vendor: "No Post-Analysis",
            },
          ],
        }}
      />
      <FirstStep
        headerContent={{
          title1: "Move from Hope to Proof —",
          title2: "Validate Before You Scale",
          description:
            "Calsoft makes performance validation predictable, repeatable, and value-focused.",
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
