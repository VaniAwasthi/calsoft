"use client";
import React, { useState } from "react";
import Submenu from "../utilities/Submenu";
import BackgroundImage from "@/app/assets/DigitalEngineering/mordernization/Modernization & Ecosystem 3.webp";
import BannerWithRightSec from "../utilities/BannerWithRightsec";
import ButtonImage from "../../assets/home/buttonImg.webp";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import WhyItMatters from "../utilities/WhyItMatters";
import bgshape1 from "../../assets/DigitalEngineering/maturity/shape1.svg";
import bgshape2 from "../../assets/DigitalEngineering/shape2.svg";
import bgshape3 from "../../assets/DigitalEngineering/shape3.svg";
import {
  BusinessValue,
  Cases,
  Do,
  SprintTimeline,
  StartSection,
} from "../utilities/DoCases";
import icon1 from "../../assets/DigitalEngineering/connected/icon1.svg";
import icon2 from "../../assets/DigitalEngineering/connected/icon2.svg";
import icon3 from "../../assets/DigitalEngineering/connected/icon3.svg";
import icon4 from "../../assets/DigitalEngineering/connected/icon4.svg";
import icon5 from "../../assets/DigitalEngineering/connected/icon5.svg";
import icon6 from "../../assets/DigitalEngineering/connected/icon6.svg";
import icon7 from "../../assets/DigitalEngineering/maturity/icon7.svg";
import icon8 from "../../assets/DigitalEngineering/maturity/icon8.svg";
import useimg from "../../assets/DigitalEngineering/connected/use.webp";
import businessimg from "../../assets/DigitalEngineering/connected/business.webp";
import start from "../../assets/DigitalEngineering/connected/start.webp";
import line2 from "../../assets/DigitalEngineering/maturity/line2.svg";
import line3 from "../../assets/DigitalEngineering/maturity/line3.svg";

import mobile2 from "../../assets/DigitalEngineering/maturity/mobile2.svg";
import mobile3 from "../../assets/DigitalEngineering/maturity/mobile3.svg";
import { showHubSpotForm } from "../utilities/showHubSpotForm";

export const Future = () => {
  const [activeTab, setActiveTab] = useState("benefits");
  const slide = {
    title: "An Ecosystem That Speaks the Same Language",

    description: `Calsoft helps enterprises break silos, enable real-time interoperability, and drive business efficiency through a tightly integrated digital ecosystem—across apps, infra, data, cloud, and third-party tools.`,
    buttonText: "Sample Modernization Roadmap",
    image: BackgroundImage,
  };
  const navItems = [
    "Why it Matters",
    "What We Do",
    "Use Cases",
    "Business Value",
    "How to Start",
  ];
  return (
    <>
      <div className="big_btn custom_banner">
        <BannerWithRightSec
          heroBg={BackgroundImage}
          title={slide.title}
          description={slide.description}
          rightImage={slide.rightImage}
          buttonText={slide.buttonText}
          buttonImage={ButtonImage}
          hoverImage={ButtonImage}
          buttonWidth="w-fit whitespace-nowrap"
          rightSec={false}
          onButtonClick={() =>
            showHubSpotForm(
              "maturity-assessment-and-planning-modernization-roadmap"
            )
          }
        />
      </div>
      <Submenu
        navItems={navItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </>
  );
};

export const Why = () => {
  const whyItMattersData = {
    heading: "Why It Matters",
    title: "Disconnected Systems Are a Hidden Cost",

    description:
      "When systems don’t talk, data doesn’t flow, teams waste time, and decisions lag. Over 60% of digital transformation delays are due to siloed apps, legacy connectors, and poor API governance. Calsoft builds connected ecosystems that ensure continuous workflows, real-time intelligence, and modular scale.",

    buttonText: "Get in Touch",

    cards: [
      {
        percent: "$1.5M+",
        text: "wasted annually by large enterprises due to siloed system",
        className: "shape1",
        bgshape: bgshape1,
      },
      {
        percent: "70%",
        text: "of data latency issues trace back to poor integration",
        className: "shape2",
        bgshape: bgshape2,
      },
      {
        percent: "",
        text: "Clasoft customers report 50% reduction in ops delays post integration",
        className: "shape3",
        bgshape: bgshape3,
      },
    ],
  };
  return (
    <>
      <WhyItMatters
        {...whyItMattersData}
        ButtonImage={ButtonImage}
        secId="why-it-matters"
        buttonClicked={() => showHubSpotForm("get-in-touch")}
      />
    </>
  );
};

export const What = () => {
  const heading = "What We Offer";
  const subtitle = "Integrate. Automate. Scale. Repeat.";
  const desc =
    "We architect digital ecosystems that are connected by design—not patched on demand. From legacy integration to API-first platforms, Calsoft drives data-driven harmony across your enterprise. Our Capabilities:";

  const offeringsData = {
    buttonText: "Talk to Expert",
    offerings: [
      {
        icon: icon1,
        title: "Enterprise-wide system integration",
      },
      {
        icon: icon2,
        title: "API-led platform design & orchestration",
      },
      {
        icon: icon3,
        title: "Real-time data sync (batch, streaming, event-driven)",
      },
      {
        icon: icon4,
        title: "Unified dashboards & control layers",
      },
      {
        icon: icon5,
        title: "Cloud-native middleware & microservice wrappers",
      },
      {
        icon: icon6,
        title: "Identity & access federation the across ecosystem",
      },
      {
        icon: icon7,
        title: "Low-code/no-code integration support",
      },
    ],

    highlights: [
      {
        icon: icon7,
        text: "Reduction in manual data reconciliation: up to 80%",
      },
      {
        icon: icon8,
        text: "Decrease in integration downtime: up to 60%",
      },
      {
        icon: icon8,
        text: "3x increase in data usability across business functions",
      },
    ],
  };

  return (
    <>
      <Do
        offeringsData
        {...offeringsData}
        heading={heading}
        subtitle={subtitle}
        desc={desc}
        ButtonImage={ButtonImage}
        secId="what-we-do"
        onButtonClick={() => showHubSpotForm("Talk-to-Expert")}
      />
    </>
  );
};

export const Use = () => {
  const useCasesData = {
    image: useimg,
    heading: "Use Cases",
    subheading: "Built for Complexity. Aligned for Growth.",
    description:
      "Calsoft connects platforms, clouds, and tools—regardless of industry or existing tech stack.",
    buttonText: "Download One Pager",
    cards: [
      {
        title: "Multi-Cloud App Ecosystem Integration",
        description:
          "AWS, Azure, and private cloud services orchestrated for a single enterprise view",
      },
      {
        title: "B2B Marketplace Enablement",
        description:
          "Connect ERP, payment gateway, customer support, and analytics via APIs",
      },
      {
        title: "IoT-Edge Synchronization",
        description:
          "Real-time data flow between field devices and cloud AI/ML systems",
      },
    ],
  };
  return (
    <>
      <Cases
        {...useCasesData}
        ButtonImage={ButtonImage}
        secId="use-cases"
        onButtonClick={() =>
          showHubSpotForm("connected-ecosystem-download-one-pager")
        }
      />
    </>
  );
};

export const Business = () => {
  const businessValueData = {
    heading: "Business Value",
    subheading: "From Sprawl to Synchrony",
    description: "Here’s what a connected ecosystem delivers:",
    buttonText: "Request a custom ROI Projection",
    link: "#",
    backgroundImage: businessimg,
    valueItems: [
      {
        title: "30-50%",
        subtitle: "faster business processes through seamless data exchange",
      },
      {
        title: "90%+",
        subtitle:
          "data availability for analytics, dashboards, and decision engines",
      },
      {
        title: "$250K+",
        subtitle:
          "annual savings from reducing redundant apps & manual handovers",
      },
      {
        title: "Unified",
        subtitle:
          "governance across systems, ensuring compliance and traceability",
      },
    ],
  };
  return (
    <>
      <BusinessValue
        {...businessValueData}
        ButtonImage={ButtonImage}
        secId="business-value"
        onButtonClick={() => showHubSpotForm("request-a-custom-roi-projection")}
      />
    </>
  );
};

export const How = () => {
  const startSectionData = {
    title: "How to Start",
    highlight: "Start",
    heading: "Ecosystem Sprint:",
    subheading: "Connect in 10 Working Days.",
    description:
      "Calsoft’s structured sprint benchmarks your current integration state, identifies disconnects, & delivers a plug-&-scale architecture.",
    image: start,
    alt: "Maturity Sprint Image",
  };
  return (
    <>
      <StartSection data={startSectionData} secId="how-to-start" />
    </>
  );
};

export const Step = () => {
  const buttonText = "Start Today";
  const steps = [
    {
      day: "Day 0",
      title: "Kickoff",
      points: [
        "Define ecosystem scope (apps, APIs, platforms, data pipes)",
        "Stakeholder & system mapping",
      ],
      output: "Sprint Charter",
      arrowDesktop: line2,
      arrowMobile: mobile2,
    },
    {
      day: "Day 1-3",
      title: "Current State Audit",
      points: [
        "Review integration points, data flow, and handoffs",
        "Identify tool, infra, or governance gaps",
      ],
      output: "Integration Gap Map",
      arrowDesktop: line3,
      arrowMobile: mobile3,
    },
    {
      day: "Day 4-6",
      title: "Architecture Design",
      points: [
        "Propose API/Middleware strategy",
        "Recommend toolkits (ESB, iPaaS, event buses, GraphQL, etc.)",
      ],
      output: "Connected Architecture Blueprint",
      arrowDesktop: line2,
      arrowMobile: mobile2,
    },
    {
      day: "Day 7-9",
      title: "Prototype & Roadmap",
      points: [
        "Build POC integration or sync workflow",
        "Define modular rollout roadmap (6–12 months)",
      ],
      output: "Working POC + Roadmap Deck",
      arrowDesktop: line3,
      arrowMobile: mobile3,
    },
    {
      day: "Day 10",
      title: "Walkthrough & Action Plan",
      points: [
        "Present full report",
        "Recommend governance model & observability plan",
      ],
      output: "Final Sprint Report + Cost Impact Shee",
      arrowDesktop: null,
      arrowMobile: null,
    },
  ];

  return (
    <>
      <SprintTimeline
        steps={steps}
        heading="10-Day Connected Ecosystem Sprint: Step-by-Step"
        buttonText={buttonText}
        ButtonImage={ButtonImage}
      />
    </>
  );
};
