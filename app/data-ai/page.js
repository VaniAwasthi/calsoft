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
        },
        {
          title: "Data governance & quality",
          desc: "Profile, cleanse, and secure your data for trust and compliance.",
        },
        {
          title: "Data observability",
          desc: "Monitor pipeline health, trace lineage, and detect anomalies in real time.",
        },
        {
          title: "Analytics & reporting",
          desc: "Enable live dashboards, BI integration, and role-based reporting at scale.",
        },
      ],
    },
    {
      label: "AI engineering",
      items: [
        {
          title: "AI-driven prediction",
          desc: "Forecast outcomes and automate insights using models.",
        },
        {
          title: "Custom LLMs",
          desc: "Fine-tune LLMs on enterprise data for grounded answers.",
        },
        {
          title: "Agentic AI systems",
          desc: "Deploy autonomous agents with oversight.",
        },
        {
          title: "AI consulting",
          desc: "Strategize AI adoption and roadmap.",
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
      image: image1,
      title: "Product & application development",
      description:
        "Agile, full-cycle engineering with DevOps, quality, and architecture alignment.",
    },
    {
      image: image2,

      title: "CX engineering",
      description:
        "Design modern, responsive, and user-centric interfaces across web and mobile",
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
