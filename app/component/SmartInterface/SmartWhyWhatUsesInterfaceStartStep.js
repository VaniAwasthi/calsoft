"use client";
import React, { useState } from "react";
import BannerWithRightSec from "../utilities/BannerWithRightsec";
import Submenu from "../utilities/Submenu";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import BackgroundImage from "@/app/assets/DigitalEngineering/CX/CX Engineering 1.webp";
import ButtonImage from "../../assets/home/buttonImg.webp";
import WhyItMatters from "../utilities/WhyItMatters";
import bgshape1 from "../../assets/DigitalEngineering/CX/triangle1.svg";
import bgshape2 from "../../assets/DigitalEngineering/CX/triangle2.svg";
import bgshape3 from "../../assets/DigitalEngineering/CX/triangle3.svg";
import bgshape from "../../assets/DigitalEngineering/CX/triangle.svg";

import {
  Cases,
  Do,
  InterfaceCard,
  SprintTimeline,
  StartSection,
} from "../utilities/DoCases";
import icon1 from "../../assets/DigitalEngineering/smart/icon1.svg";
import icon2 from "../../assets/DigitalEngineering/smart/icon2.svg";
import icon3 from "../../assets/DigitalEngineering/smart/icon3.svg";
import icon4 from "../../assets/DigitalEngineering/smart/icon4.svg";
import icon5 from "../../assets/DigitalEngineering/smart/icon5.svg";
import icon6 from "../../assets/DigitalEngineering/smart/icon6.svg";
import icon7 from "../../assets/DigitalEngineering/maturity/icon7.svg";
import icon8 from "../../assets/DigitalEngineering/maturity/icon8.svg";
import useimg from "../../assets/DigitalEngineering/smart/useimg.webp";
import start from "../../assets/DigitalEngineering/smart/start.webp";
import line2 from "../../assets/DigitalEngineering/maturity/line2.svg";
import line3 from "../../assets/DigitalEngineering/maturity/line3.svg";
import mobile2 from "../../assets/DigitalEngineering/maturity/mobile2.svg";
import mobile3 from "../../assets/DigitalEngineering/maturity/mobile3.svg";
import imginter from "../../assets/DigitalEngineering/smart/imginter.webp";
import { MatterTriangle } from "../utilities/Shape";
import { showHubSpotForm } from "../utilities/showHubSpotForm";

export const Smart = () => {
  const [activeTab, setActiveTab] = useState("why-it-matters");
  const slide = {
    title: "Interfaces That Think, Learn, and Convert.",

    description: `Design isn’t just about beauty—it’s about outcomes. Calsoft creates intelligent, conversion-driven interfaces that enhance user engagement and reduce friction across devices.`,
    buttonText: "Request CX Audit",
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
          rightSec={false}
          buttonWidth="!w-[250px]"
          onButtonClick={()=>showHubSpotForm("request-cx-audit")}
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
    title: "Poor Interfaces Leak Business. We Fix That.",

    description:
      "Enterprise applications lose more than <b>30% user engagement</b> due to outdated, unintuitive interfaces. The cost? Slower adoption, longer onboarding, and missed conversions. Calsoft’s Smart Interface Design combines behavior analytics, task simplification, and AI-assisted interactions to drive clarity and speed across digital journeys. ",

    buttonText: "Download Case Study",
    // link: "#",

    cards: [
      {
        percent: "80%",
        text: "of users judge software credibility based on UI within 5 seconds",
        className: "shape1",
        bgshape: bgshape1,
      },
      {
        percent: "",
        text: "Well-designed interfaces increase task completion by up to 40%",
        className: "shape2",
        bgshape: bgshape2,
      },
      {
        bgshape: bgshape,
      },
      {
        percent: "",
        text: "Calsoft clients report 20-35% higher adoption within 6 weeks post redesign",
        className: "shape3",
        bgshape: bgshape3,
      },
    ],
  };
  return (
    <>
      <MatterTriangle {...whyItMattersData} ButtonImage={ButtonImage} secId="why-it-matters" onButtonClick={()=>showHubSpotForm("get-in-touch")}/>
    </>
  );
};

export const What = () => {
  const heading = "What We Offer";
  const subtitle = "Design That Learns, Reacts, and Performs.";
  const desc =
    "Our interface engineering is not static design work—it’s interaction strategy built for business scale, adaptability, and intelligence. Our Capabilities:";

  const offeringsData = {
    buttonText: "Talk to Expert",
    offerings: [
      {
        icon: icon1,
        title: "Task-Driven UI/UX Design",
      },
      {
        icon: icon2,
        title: "Responsive Dashboards for Multi-Device Use",
      },
      {
        icon: icon3,
        title: "AI-Augmented UX ( Chat/ Voice/ Recommendations )",
      },
      {
        icon: icon4,
        title: "Accessibility Compliant Interfaces (WCAG 2.1)",
      },
      {
        icon: icon5,
        title: "UX Performance Benchmarking",
      },
      {
        icon: icon6,
        title: "Microinteractions & Behavior Triggers",
      },
      {
        icon: icon7,
        title: "Adaptive Workflows Based on Role/User Context",
      },
    ],

    highlights: [
      {
        icon: icon7,
        text: "Time-on-task reduced by 30% for CX-critical journeys",
      },
      {
        icon: icon8,
        text: "50% drop in support calls after redesign",
      },
      {
        icon: icon8,
        text: "3x user satisfaction via simplified decision paths",
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
        onButtonClick={()=>showHubSpotForm("Talk-to-Expert")}
      />
    </>
  );
};

export const Uses = () => {
  const useCasesData = {
    image: useimg,
    heading: "Use Cases",
    subheading: "Real Products. Real Interfaces. Real Impact.",
    description:
      "We design interfaces for mission-critical platforms—where every click impacts revenue, trust, or retention.",
    buttonText: "Download One Pager",
    cards: [
      {
        title: "B2B SaaS Admin Dashboard",
        description:
          "KPI-focused UI with micro-permissions and predictive controls",
      },
      {
        title: "Healthcare Portal Interface",
        description:
          "HIPAA-compliant patient experience with contextual alerts",
      },
      {
        title: "E-commerce Back-Office UI",
        description:
          "Inventory + order workflows optimized for touch and mobility",
      },
    ],
  };
  return (
    <>
      {" "}
      <Cases
        {...useCasesData}
        ButtonImage={ButtonImage}
        direction="change_direction"
        secId="use-cases"
        onButtonClick={()=>showHubSpotForm("smart-interface-design-one-pg")}
      />
    </>
  );
};

export const Interface = () => {
  const stats = [
    { highlight: "35%", label: "reduction in process completion time" },
    {
      highlight: "Up to 50%",
      label: "increase in self-serve actions\nless strain on support",
    },
    {
      highlight: "4X",
      label: "faster onboarding via intuitive, guide-based UI",
    },
    { highlight: "30–40%", label: "improvement in task accuracy" },
  ];
  return (
    <>
      <InterfaceCard
        title="Interfaces That Deliver More Than Screens."
        description="Calsoft-designed interfaces don’t just look good—they deliver:"
        buttonText="Request a custom ROI Projection"
        stats={stats}
        imageSrc={imginter}
        ButtonImage={ButtonImage}
        secId="business-value"
        onButtonClick={()=>showHubSpotForm("request-a-custom-roi-projection")}
      />
    </>
  );
};

export const Start = () => {
  const startSectionData = {
    title: "How to Start",
    highlight: "Start",
    heading: "Interface Sprint:",
    subheading: "From Wireframe to Prototype in 10 Days.",
    description:
      "We begin with a focused sprint to audit UX gaps, define user flows, and prototype a smart interface tailored to your business goals.",
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
  const link = "#";
  const steps = [
    {
      day: "Day 0",
      title: "Kickoff ",
      points: ["Define goals, persona focus, primary journeys"],
      output: " Design Sprint Charter",
      arrowDesktop: line2,
      arrowMobile: mobile2,
    },
    {
      day: "Day 1-3",
      title: "UX Audit & Flow Mapping",
      points: [
        "Review existing interface + drop-off analysis",
        "Map tasks, pain points, and improvement areas",
      ],
      output: " CX Opportunity Map + Task Flow Diagrams",
      arrowDesktop: line3,
      arrowMobile: mobile3,
    },
    {
      day: "Day 4-6",
      title: "Wireframe & IA Design",
      points: [
        "Create role/task-specific wireframes",
        "Establish interaction models (click, hover, scroll, voice, etc.)",
      ],
      output: " Clickable Wireframes",
      arrowDesktop: line2,
      arrowMobile: mobile2,
    },
    {
      day: "Day 7-9",
      title: "Smart Prototyping",
      points: [
        "Add AI interactions, adaptive content blocks",
        "Run usability tests + iterate",
      ],
      output: "Smart Prototype",
      arrowDesktop: line3,
      arrowMobile: mobile3,
    },
    {
      day: "Day 10",
      title: "Demo + Planning",
      points: [
        "Stakeholder walkthrough",
        "Share asset library + scale roadmap",
      ],
      output: "Final Prototype + Next Steps Deck",
      arrowDesktop: null,
      arrowMobile: null,
    },
  ];

  return (
    <>
      <SprintTimeline
        steps={steps}
        heading="10-Day Smart Interface Sprint: Step-by-Step"
        buttonText={buttonText}
        link={link}
        ButtonImage={ButtonImage}
      />
    </>
  );
};
