"use client";
import React, { useState } from "react";
import BannerWithRightSec from "../utilities/BannerWithRightsec";
import Submenu from "../utilities/Submenu";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import BackgroundImage from "../../assets/DigitalEngineering/future/banner.webp";
import ButtonImage from "../../assets/home/buttonImg.webp";
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
import icon1 from "../../assets/DigitalEngineering/future/icon1.svg";
import icon2 from "../../assets/DigitalEngineering/future/icon2.svg";
import icon3 from "../../assets/DigitalEngineering/future/icon3.svg";
import icon4 from "../../assets/DigitalEngineering/future/icon4.svg";
import icon5 from "../../assets/DigitalEngineering/future/icon5.svg";
import icon6 from "../../assets/DigitalEngineering/future/icon6.svg";
import icon7 from "../../assets/DigitalEngineering/maturity/icon7.svg";
import icon8 from "../../assets/DigitalEngineering/maturity/icon8.svg";
import useimg from "../../assets/DigitalEngineering/future/use.webp";
import businessimg from "../../assets/DigitalEngineering/future/business.webp";
import start from "../../assets/DigitalEngineering/maturity/start.webp";
import line2 from "../../assets/DigitalEngineering/maturity/line2.svg";
import line3 from "../../assets/DigitalEngineering/maturity/line3.svg";
import mobile2 from "../../assets/DigitalEngineering/maturity/mobile2.svg";
import mobile3 from "../../assets/DigitalEngineering/maturity/mobile3.svg";

export const Future = () => {
  const [activeTab, setActiveTab] = useState("why-it-matters");
  const slide = {
    title: "Be Ready for Change Before It Hits You.",

    description: `Enterprise resilience depends on your tech ecosystem’s ability to evolve, scale, and self-optimize. Calsoft makes your digital backbone future-ready.`,
    buttonText: "Download Solution Report",
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
    title: "Today’s Tech Can’t Solve Tomorrow’s Problems",

    description:
      "Static architectures. Rigid processes. Expired platforms. Enterprises with outdated ecosystems find it harder to adopt AI, manage hybrid workforces, or meet new compliance demands. Calsoft helps you shift from “reactive modernization” to “predictive adaptation” <br> <b>so your systems grow with your business.</b> ",

    buttonText: "Download One Pager",
    link: "#",

    cards: [
      {
        percent: "68%",
        text: "of IT leaders feel their current stack won’t support next 3 years of growth",
        className: "shape1",
        bgshape: bgshape1,
      },
      {
        percent: "47%",
        text: "fail AI adoption due to poor infra flexibility",
        className: "shape2",
        bgshape: bgshape2,
      },
      {
        percent: "$1.2M",
        text: "per year avg. spent by enterprises just maintaining aging systems",
        className: "shape3",
        bgshape: bgshape3,
      },
    ],
  };
  return (
    <>
      <WhyItMatters {...whyItMattersData} ButtonImage={ButtonImage} />
    </>
  );
};

export const What = () => {
  const heading = "What We Do";
  const subtitle = "We Engineer Digital Resilience";
  const desc =
    "Future readiness isn’t about chasing trends—it’s about designing ecosystems that evolve. Calsoft blends architecture foresight, modularity, and automation to deliver tech that scales and adapts. Our Future-Readiness Offerings:";

  const offeringsData = {
    buttonText: "Talk to Expert",
    link: "#",
    offerings: [
      {
        icon: icon1,
        title: "Modular architecture advisory",
      },
      {
        icon: icon2,
        title: "Resilience scoring & benchmarking",
      },
      {
        icon: icon3,
        title: "Digital ecosystem mapping",
      },
      {
        icon: icon4,
        title: "Platform extensibility audit (cloud, edge, AI)",
      },
      {
        icon: icon5,
        title: "AI & data-readiness consulting",
      },
      {
        icon: icon6,
        title: "Integration readiness (APIs, external systems)",
      },
      {
        icon: icon1,
        title: "Modular architecture advisory",
      },
      {
        icon: icon2,
        title: "Resilience scoring & benchmarking",
      },
    ],

    highlights: [
      {
        icon: icon7,
        text: "Enterprises saved 20–30% on future upgrades by going modular",
      },
      {
        icon: icon8,
        text: "50% faster adoption of AI workloads on future-ready platforms",
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
      />
    </>
  );
};

export const Use = () => {
  const useCasesData = {
    image: useimg,
    heading: "Use Cases",
    subheading: "Designed for Change. Built for Scale.",
    description:
      "No matter your industry or transformation maturity, Calsoft enables future-readiness with real-world use cases.",
    buttonText: "Download One Pager",
    link: "#",
    cards: [
      {
        title: "Legacy to Composable Architecture",
        description:
          "Break monoliths into reusable services + automation hooks",
      },
      {
        title: "AI + Analytics Enablement",
        description:
          "Ready your platform for streaming data, LLMs, and real-time ops",
      },
      {
        title: "Compliance Driven Modernization",
        description:
          "Design infra and workflows that adapt to evolving data laws",
      },
    ],
  };
  return (
    <>
      {" "}
      <Cases {...useCasesData} ButtonImage={ButtonImage} />
    </>
  );
};

export const Business = () => {
  const businessValueData = {
    heading: "Business Value",
    subheading: "From Fragile to Future-Proof",
    description: "What our customers gained by preparing today for tomorrow:",
    buttonText: "Request a custom ROI Projection",
    link: "#",
    backgroundImage: businessimg,
    valueItems: [
      {
        title: "40%",
        subtitle: "fewer blockers during new tool integration",
      },
      {
        title: "$300K+",
        subtitle: "saved/year on long-term re-architecture",
      },
      {
        title: "3X",
        subtitle:
          "faster onboarding of new capabilities (e.g., analytics, automation)",
      },
      {
        title: "Stronger",
        subtitle: "compliance posture with auto-adjusting governance tools",
      },
    ],
  };
  return (
    <>
      <BusinessValue {...businessValueData} ButtonImage={ButtonImage} />
    </>
  );
};

export const How = () => {
  const startSectionData = {
    title: "How to Start",
    highlight: "Start",
    heading: "Future-Ready Sprint: Evaluate. Plan. Act.",
    description:
      "In just 10 working days, we help you benchmark your readiness, discover gaps, and design a modular, adaptive ecosystem roadmap.",
    image: start,
    alt: "Maturity Sprint Image",
  };
  return (
    <>
      <StartSection data={startSectionData} />
    </>
  );
};

export const Steps = () => {
  const buttonText = "Start Today";
  const link = "#";
  const steps = [
    {
      day: "Day 0",
      title: "Kickoff ",
      points: [
        "Define current challenges and future-state goals",
        "Identify transformation stakeholders",
      ],
      output: "Sprint Charter",
      arrowDesktop: line2,
      arrowMobile: mobile2,
    },
    {
      day: "Day 1-3",
      title: "Tech Stack & Ecosystem Audit",
      points: [
        "Analyze existing systems, integrations, & constraints",
        "Evaluate architecture flexibility & scale limits",
      ],
      output: "Ecosystem Map + Constraint Matrix",
      arrowDesktop: line3,
      arrowMobile: mobile3,
    },
    {
      day: "Day 4-6",
      title: "Readiness Benchmarking",
      points: [
        "Score against 5 future-readiness pillars (Infra, App, Data, Integration, Governance)",
      ],
      output: "Readiness Scorecard + Maturity Placement",
      arrowDesktop: line2,
      arrowMobile: mobile2,
    },
    {
      day: "Day 7-9",
      title: "Modularization Plan",
      points: [
        "Recommend pathways to decouple systems, enable extensibility",
        "Estimate effort, cost, and ROI",
      ],
      output: "Modularization Roadmap",
      arrowDesktop: line3,
      arrowMobile: mobile3,
    },
    {
      day: "Day 10",
      title: "Final Review",
      points: ["Walkthrough final report", "Align on implementation phases"],
      output: "Final Sprint Deck + ROI Calculator Link + Action Plan",
      arrowDesktop: null,
      arrowMobile: null,
    },
  ];

  return (
    <>
      <SprintTimeline
        steps={steps}
        heading="10-Day Future-Readiness Sprint: Step-by-Step"
        buttonText={buttonText}
        link={link}
        ButtonImage={ButtonImage}
      />
    </>
  );
};
