"use client";
import React, { useState } from "react";
import Submenu from "../utilities/Submenu";
import BackgroundImage from "@/app/assets/DigitalEngineering/mordernization/Modernization & Ecosystem 4.webp";
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
import icon1 from "../../assets/DigitalEngineering/plugin/icon1.svg";
import icon2 from "../../assets/DigitalEngineering/plugin/icon2.svg";
import icon3 from "../../assets/DigitalEngineering/plugin/icon3.svg";
import icon4 from "../../assets/DigitalEngineering/plugin/icon4.svg";
import icon5 from "../../assets/DigitalEngineering/plugin/icon5.svg";
import icon6 from "../../assets/DigitalEngineering/plugin/icon6.svg";
import icon7 from "../../assets/DigitalEngineering/maturity/icon7.svg";
import icon8 from "../../assets/DigitalEngineering/maturity/icon8.svg";
import useimg from "../../assets/DigitalEngineering/plugin/use.webp";
import businessimg from "../../assets/DigitalEngineering/plugin/business.webp";
import start from "../../assets/DigitalEngineering/plugin/start.webp";
import line2 from "../../assets/DigitalEngineering/maturity/line2.svg";
import line3 from "../../assets/DigitalEngineering/maturity/line3.svg";

import mobile2 from "../../assets/DigitalEngineering/maturity/mobile2.svg";
import mobile3 from "../../assets/DigitalEngineering/maturity/mobile3.svg";
import { showHubSpotForm } from "../utilities/showHubSpotForm";

export const Plugin = () => {
  const [activeTab, setActiveTab] = useState("benefits");
  const slide = {
    title: "Extend What You’ve Built. Expand What You Can Do.",

    description: `Build robust, enterprise-grade plugins and integrations that drive product adoption, reduce development cycles, and unlock new business models.`,
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
          rightSec={false}
          buttonWidth="!w-[300px]"
          onButtonClick={()=>showHubSpotForm("maturity-assessment-and-planning-modernization-roadmap")}
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
    title: "Build Once. Deploy Across Ecosystems.",

    description:
      "With partner ecosystems growing and customers demanding seamless workflows, plugins are no longer optional—they’re a product strategy. But poorly built plugins can cause security risks, UX issues, or slow adoption. Calsoft helps you develop high-performance plugins that drive integration, automation, and business stickiness.",

    buttonText: "Get in Touch",

    cards: [
      {
        percent: "50%",
        text: "of enterprise buyers expect native plugin support",
        className: "shape1",
        bgshape: bgshape1,
      },
      {
        percent: "70%",
        text: "of SaaS tools with plugin marketplaces grow 2x faster",
        className: "shape2",
        bgshape: bgshape2,
      },
      {
        percent: "",
        text: "Calsoft clients cut time-to-market by 40% with our plugin frameworks",
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
        buttonClicked={()=>showHubSpotForm("get-in-touch")}
      />
    </>
  );
};

export const What = () => {
  const heading = "What We Offer";
  const subtitle = "Custom. Compliant. Compatible.";
  const desc =
    "We specialize in custom plugin development across leading platforms, enabling rapid feature extension and frictionless user experiences.";

  const offeringsData = {
    buttonText: "Talk to Expert",
    offerings: [
      {
        icon: icon1,
        title: "Custom plugin & widget development",
      },
      {
        icon: icon2,
        title: "Integration plugins (CRM, ERP, ticketing, payments)",
      },
      {
        icon: icon3,
        title: "UI extensions, dashboards, and modals",
      },
      {
        icon: icon4,
        title: "Embeddable analytics modules",
      },
      {
        icon: icon5,
        title: "Auth, tokenized access & permissioning",
      },
      {
        icon: icon6,
        title: "Plugin store packaging & publishing",
      },
    ],

    highlights: [
      {
        icon: icon7,
        text: "SOC2 / GDPR / OAuth 2.0 ready architectures",
      },
      {
        icon: icon8,
        text: "Plugins delivered in 3–6 weeks on average",
      },
      {
        icon: icon8,
        text: "Reusable plugin frameworks across platforms",
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

export const Use = () => {
  const useCasesData = {
    image: useimg,
    heading: "Use Cases",
    subheading: "From Feature Extension to Revenue Generation.",
    description:
      "Our plugin development services are built to support diverse product strategie —from internal extensibility to monetizable marketplace components.",
    buttonText: "Download One Pager",
    cards: [
      {
        title: "Salesforce Plugin for Case Automation",
        description:
          "Streamlines multi-channel ticket routing + dashboard views",
      },
      {
        title: "Jira Reporting Plugin for Engineering Heads",
        description: "Adds custom SLA & backlog trend visualizations",
      },
      {
        title: "Shopify Payment Gateway Plugin",
        description:
          "Integrates 3rd-party payments with inventory sync & webhooks",
      },
    ],
  };
  return (
    <>
      <Cases {...useCasesData} ButtonImage={ButtonImage} secId="use-cases" onButtonClick={()=>showHubSpotForm("plugin-development-download-one-pager")}/>
    </>
  );
};

export const Business = () => {
  const businessValueData = {
    heading: "Business Value",
    subheading: "More Adoption. Less Development Waste.",
    description:
      "Our clients build once, scale everywhere. Here’s what plugin-driven extensibility delivers:",
    buttonText: "Request a custom ROI Projection",
    backgroundImage: businessimg,
    valueItems: [
      {
        title: "3X",
        subtitle: "partner ecosystem growth with embeddable solutions",
      },
      {
        title: "30-40%",
        subtitle: "savings over full-fledged custom modules",
      },
      {
        title: "80%",
        subtitle: "reusability across plugin projects via our base framework",
      },
      {
        title: "<2 weeks",
        subtitle: "integration time for customers using our plugin SDKs",
      },
    ],
  };
  return (
    <>
      <BusinessValue
        {...businessValueData}
        ButtonImage={ButtonImage}
        secId="business-value"
        onButtonClick={()=>showHubSpotForm("request-a-custom-roi-projection")}
      />
    </>
  );
};

export const How = () => {
  const startSectionData = {
    title: "How to Start",
    highlight: "Start",
    heading: "Plugin Sprint:",
    subheading: "From Idea to Prototype in 10 Days.",
    description:
      "Calsoft’s Plugin Sprint helps you validate functionality, map dependencies, and deliver a working prototype within 2 weeks.",
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
      title: "Sprint Kickoff",
      points: [
        "Define platform, use case, user journey",
        "Scope key plugin functionality",
      ],
      output: "Plugin Brief + Sprint Charter",
      arrowDesktop: line2,
      arrowMobile: mobile2,
    },
    {
      day: "Day 1-3",
      title: "Architecture & Integration Map",
      points: [
        "Review APIs, data sources, UI/UX hooks",
        "Identify auth, permissioning, lifecycle events",
      ],
      output: "Plugin Architecture Diagram",
      arrowDesktop: line3,
      arrowMobile: mobile3,
    },
    {
      day: "Day 4-6",
      title: "Plugin Build Phase 1",
      points: [
        "Develop core logic + UI frame",
        "Connect backend services or webhooks",
      ],
      output: "Alpha Plugin (Static + Functional Layer)",
      arrowDesktop: line2,
      arrowMobile: mobile2,
    },
    {
      day: "Day 7-9",
      title: "Final Build + Security Hooks",
      points: [
        "Add token handling, error flows, UI polish",
        "QA on supported platforms",
      ],
      output: "Working Plugin + Installation Docs",
      arrowDesktop: line3,
      arrowMobile: mobile3,
    },
    {
      day: "Day 10",
      title: "Demo & Next Steps",
      points: [
        "Live walkthrough",
        "Publish or package for review/store submission",
      ],
      output: "Final Build + Submission-ready Package",
      arrowDesktop: null,
      arrowMobile: null,
    },
  ];

  return (
    <>
      <SprintTimeline
        steps={steps}
        heading="10-Day Plugin Sprint: Step-by-Step"
        buttonText={buttonText}
        link={link}
        ButtonImage={ButtonImage}
      />
    </>
  );
};
