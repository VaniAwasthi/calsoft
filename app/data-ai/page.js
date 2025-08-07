import React from "react";
import {
  DataAiBanner,
  DataServicesSection,
  MultiFeatureGrid,
} from "../component/data-ai/HeroSec";

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

  return (
    <>
      <DataAiBanner />
      {/* <MultiFeatureGrid
        sections={sections}
        heading="Core product engineering"
      /> */}
    </>
  );
};

export default Page;
