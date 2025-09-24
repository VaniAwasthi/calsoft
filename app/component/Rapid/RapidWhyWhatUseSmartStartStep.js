"use client";
import React, { useState } from "react";
import BannerWithRightSec from "../utilities/BannerWithRightsec";
import Submenu from "../utilities/Submenu";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import BackgroundImage from "@/app/assets/DigitalEngineering/CX/CX Engineering 4.webp";
import ButtonImage from "../../assets/home/buttonImg.webp";
import WhyItMatters from "../utilities/WhyItMatters";
import bgshape1 from "../../assets/DigitalEngineering/CX/circle1.svg";
import bgshape2 from "../../assets/DigitalEngineering/CX/circle2.svg";
import bgshape3 from "../../assets/DigitalEngineering/CX/circle3.svg";
import bgshape from "../../assets/DigitalEngineering/CX/triangle.svg";

import {
  Cases,
  Do,
  InterfaceCard,
  SprintTimeline,
  StartSection,
} from "../utilities/DoCases";
import icon1 from "../../assets/DigitalEngineering/CX/icon1.svg";
import icon2 from "../../assets/DigitalEngineering/CX/icon2.svg";
import icon3 from "../../assets/DigitalEngineering/CX/icon3.svg";
import icon4 from "../../assets/DigitalEngineering/CX/icon4.svg";
import icon5 from "../../assets/DigitalEngineering/CX/icon5.svg";
import icon6 from "../../assets/DigitalEngineering/CX/icon6.svg";
import icon7 from "../../assets/DigitalEngineering/CX/icon7.svg";
import icon8 from "../../assets/DigitalEngineering/CX/icon8.svg";
import useimg from "../../assets/DigitalEngineering/CX/useimg.webp";
import start from "../../assets/DigitalEngineering/CX/start.webp";
import line2 from "../../assets/DigitalEngineering/maturity/line2.svg";
import line3 from "../../assets/DigitalEngineering/maturity/line3.svg";
import mobile2 from "../../assets/DigitalEngineering/maturity/mobile2.svg";
import mobile3 from "../../assets/DigitalEngineering/maturity/mobile3.svg";
import imginter from "../../assets/DigitalEngineering/smart/imginter.webp";
import { MatterCircle, MatterTriangle } from "../utilities/Shape";
import { showHubSpotForm } from "../utilities/showHubSpotForm";

export const Rapid = () => {
  const [activeTab, setActiveTab] = useState("why-it-matters");
  const slide = {
    title: "Prototype in Days Decide with Confidence",

    description: `Accelerate your product validation with interactive, stakeholder-ready
        prototypes built on real workflows and data logic.`,
    buttonText: "Request CX Audit",
    image: BackgroundImage,
  };
  const navItems = [
    "Why it Matters",
    "What We Offer",
    "Use Cases",
    "Business Value",
    "How to Start",
  ];

  return (
    <>
      <div className=" custom_banner">
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
          onButtonClick={() => showHubSpotForm("request-cx-audit-standard")}
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
    title: "Building Too Soon Is the Costliest Mistake.",

    description:
      "40% of digital product features are rarely used. Teams waste months building functions users don’t want—simply because they skip validation. Calsoft helps you prototype fast, test early, and reduce product risk by 50%—<b>before investing in full development.</b> ",

    buttonText: "Get in Touch",

    cards: [
      {
        percent: "",
        text: "Companies that validate early reduce rework by up to 70%",
        className: "shape1",
        bgshape: bgshape1,
      },
      {
        percent: "",
        text: "Calsoft clients confirm 80-90% stakeholder alignment within first prototype",
        className: "shape2",
        bgshape: bgshape2,
      },

      {
        percent: "4-6",
        text: "weeks per product iteration are saved on average",
        className: "shape3",
        bgshape: bgshape3,
      },
    ],
  };
  return (
    <>
      <MatterCircle
        {...whyItMattersData}
        ButtonImage={ButtonImage}
        secId="why-it-matters"
        buttonClick={() => showHubSpotForm("get-in-touch")}
      />
    </>
  );
};

export const What = () => {
  const heading = "What We Offer";
  const subtitle = "Prototypes That Aren’t Just Pretty—They Work";
  const desc =
    "We don’t build throwaway wireframes. We engineer functional, interactive prototypes mapped to real workflows, use cases, and design logic. Our Capabilities:";

  const offeringsData = {
    buttonText: "Talk to Expert",
    offerings: [
      {
        icon: icon1,
        title: "UX flow mapping & ideation",
      },
      {
        icon: icon2,
        title: "Low-fidelity to high-fidelity clickable prototypes",
      },
      {
        icon: icon3,
        title: "Web, mobile & dashboard interface designs",
      },
      {
        icon: icon4,
        title: "Data-linked UI elements (mock or live data feeds)",
      },
      {
        icon: icon5,
        title: "Scenario simulation & guided walkthroughs",
      },
      {
        icon: icon6,
        title: "Role-based interaction prototypes",
      },
      {
        icon: icon7,
        title: "Stakeholder review packs (with notes, feedback layers)",
      },
    ],

    highlights: [
      {
        icon: icon8,
        text: "Time to working prototype: 7–10 business days",
      },
      {
        icon: icon8,
        text: "Usability scoring included in every delivery",
      },
      {
        icon: icon8,
        text: "Built on tools like Figma, Adobe XD, and interactive dev-ready UI kits",
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
        onButtonClick={() => showHubSpotForm("Talk-to-Expert")}
        secId="what-we-do"
      />
    </>
  );
};

export const Use = () => {
  const useCasesData = {
    image: useimg,
    heading: "Use Cases",
    subheading: "Prototypes That Drive Business Decisions.",
    description:
      "Our rapid prototypes have helped startups get funding, enterprises get buy-in, and engineering teams accelerate build cycles.",
    buttonText: "Talk to Expert",
    cards: [
      {
        title: "MVP Flow Prototype for SaaS Platform",
        description:
          "Helped CEO & product team align on feature cuts & value delivery",
      },
      {
        title: "Mobile UX Simulation for Field App",
        description:
          "Enabled real-time usability testing with end users before launch",
      },
      {
        title: "CX Portal Redesign Walkthrough",
        description:
          "Used as live demo during board presentation—secured modernization budget",
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
        onButtonClick={() => showHubSpotForm("talk-to-expert")}
      />
    </>
  );
};

export const Smart = () => {
  const stats = [
    {
      highlight: "60-70%",
      label: "reduction in ambiguity during product scoping",
    },
    { highlight: "$150K+", label: "saved per product by avoiding bad builds" },
    { highlight: "2X", label: "faster go-to-market by de-risking early" },
    { highlight: "4X faster", label: "Stakeholder consensus reached " },
  ];
  return (
    <>
      <InterfaceCard
        title="Smarter Decisions. Shorter Timelines. Bigger Wins."
        description="Rapid prototyping improves alignment, reduces risk, and accelerates product clarity. Here’s what teams gained:"
        buttonText="Request a custom ROI Projection"
        // link="#"
        stats={stats}
        imageSrc={imginter}
        ButtonImage={ButtonImage}
        secId="business-value"
        onButtonClick={() => showHubSpotForm("request-a-custom-roi-projection")}
      />
    </>
  );
};

export const Start = () => {
  const startSectionData = {
    title: "How to Start",
    highlight: "Start",
    heading: "Prototype Sprint: Validate in Just 10 Days.",
    description:
      "Our 10-day sprint delivers a clickable, testable prototype based on real use cases and user journeys—ready for stakeholder and user review.",
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
      title: "Sprint Kickoff ",
      points: ["Define target use case, users, success criteria"],
      output: "Sprint Brief + Stakeholder Map",
      arrowDesktop: line2,
      arrowMobile: mobile2,
    },
    {
      day: "Day 1-3",
      title: "Flow Design & Sketching",
      points: [
        "User journey mapping",
        "Low-fidelity wireframes + journey variants",
      ],
      output: "UX Flow & Wireframes",
      arrowDesktop: line3,
      arrowMobile: mobile3,
    },
    {
      day: "Day 4-6",
      title: "Interactive UI Prototyping",
      points: [
        "High-fidelity interface design",
        "Clickable paths with feedback markers",
      ],
      output: " Interactive Prototype",
      arrowDesktop: line2,
      arrowMobile: mobile2,
    },
    {
      day: "Day 7-9",
      title: "Testing & Iteration",
      points: [
        "Walkthrough with stakeholders or users",
        "Capture input, refine interactions",
      ],
      output: " Final Prototype v2",
      arrowDesktop: line3,
      arrowMobile: mobile3,
    },
    {
      day: "Day 10",
      title: "Delivery & Handoff",
      points: [
        "Deliver annotated prototype",
        "Share usability score & roadmap",
      ],
      output: "Figma/XD Link + Feedback Summary Deck",
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
