import React from "react";
import { DataAiBanner, MultiFeatureGrid } from "../component/data-ai/HeroSec";
import { Imagethree, StepsSection } from "../component/utilities/Shape";
import { ContactSecDataAi } from "../component/utilities/ChallengeSolutionDataAi";
import image1 from "../assets/Data-Ai/mainPage/acceImg1.webp";
import image2 from "../assets/Data-Ai/mainPage/acceImg2.webp";

const Page = () => {
  const sections = [
    {
      label: "Data services",
      items: [
        {
          title: "Data pipeline engineering",
          desc: "Design scalable, cloud-ready ingestion and integration workflows.",
          link:"/data-ai/enterprise-data-management"
        },
        {
          title: "Data governance & quality",
          desc: "Profile, cleanse, and secure your data for trust and compliance.",
          link:"/data-ai/data-ops-governance"
        },
        {
          title: "Data Modernization",
          desc: "Monitor pipeline health, trace lineage, and detect anomalies in real time.",
          link:"/data-ai/data-modernization"
        },
        {
          title: "Analytics & Visualization",
          desc: "Enable live dashboards, BI integration, and role-based reporting at scale.",
          link:"/data-ai/data-analytics-visualization"
        },
      ],
    },
    {
      label: "AI engineering",
      items: [
        {
          title: "AI-driven Predictive Orchestration",
          desc: "Forecast outcomes and automate insights using models.",
          link:"/data-ai/predictive-orchestration"
        },
        {
          title: "Custom LLMs",
          desc: "Fine-tune LLMs on enterprise data for grounded answers.",
          link:"/data-ai/custom-llm-for-gen-ai-rag"
        },
        {
          title: "Agentic AI systems",
          desc: "Deploy autonomous agents with oversight.",
          link:"/data-ai/agentic-ai-development"
        },
        {
          title: "AI-powered accelerators",
          desc: "Strategize AI adoption and roadmap.",
          link:"/data-ai/ai-powered-accelerators"
        },
      ],
    },
  ];
  const stepsData = [
    {
      title: "Ingest & integrate",
      description: "Unify data across sources, platforms, and environments.",
    },
    {
      title: "Govern & assure",
      description: "Enforce quality, lineage, and compliance from the start.",
    },
    {
      title: "Analyze & visualize",
      description:
        "Deliver real-time dashboards and business-aligned insights.",
    },
    {
      title: "Predict & decide",
      description: "Use AI to forecast, detect patterns, and guide action.",
    },
    {
      title: "Automate & scale",
      description: "Deploy GenAI, LLMs, and agents into enterprise workflows.",
    },
  ];
  const data = [
    {
      image: image2,
      buttontext:"Visit CalTIA",
buttonLink:"/data-ai/ai-powered-accelerators/test-impact-analyzer-caltia",
      title: "CalTIA",
      description:
        "AI-powered test intelligence to optimize QA and release cycles.",
    },
    {
      image: image1,
buttontext:"Visit CalPSR",
buttonLink:"/data-ai/ai-powered-accelerators/calsoft-performance-scalability-and-resilience-calpsr",
      title: "CalPSR",
      description:
        "AI-driven testing and simulation to validate performance, resilience, and scalability.",
    },
  ];
  return (
    <>
      <DataAiBanner />
      <StepsSection
        heading="Built for the full data and AI lifecycle"
        steps={stepsData}
      />
      <MultiFeatureGrid
        sections={sections}
        heading="Core product engineering"
      />
      <Imagethree
        heading="Accelerators"
        data={data}
        gridStyle="md:grid-cols-2"
        isButton={true}
        buttonText="Visit CalTIA"
      />
      <ContactSecDataAi
        lightContent="Our services speak "
        BoldContent="for themselves, but we can talk too!”"
        link="#"
      />
    </>
  );
};

export default Page;
