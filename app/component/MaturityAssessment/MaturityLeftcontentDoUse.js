"use client";
import React, { useState } from "react";
import Submenu from '../utilities/Submenu';
import BackgroundImage from "../../assets/DigitalEngineering/mordernization/Banner.webp";
import BannerWithRightSec from "../utilities/BannerWithRightsec";
import ButtonImage from "../../assets/home/buttonImg.webp";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import WhyItMatters from "../utilities/WhyItMatters";
import bgshape1 from "../../assets/DigitalEngineering/maturity/shape1.svg"
import bgshape2 from "../../assets/DigitalEngineering/maturity/shape2.svg"
import bgshape3 from "../../assets/DigitalEngineering/maturity/shape3.svg"
import { BusinessValue, Cases, Do, SprintTimeline, StartSection } from "../utilities/DoCases";
import icon1 from "../../assets/DigitalEngineering/maturity/icon1.svg"
import icon2 from "../../assets/DigitalEngineering/maturity/icon2.svg"
import icon3 from "../../assets/DigitalEngineering/maturity/icon3.svg"
import icon4 from "../../assets/DigitalEngineering/maturity/icon4.svg"
import icon5 from "../../assets/DigitalEngineering/maturity/icon5.svg"
import icon6 from "../../assets/DigitalEngineering/maturity/icon6.svg"
import icon7 from "../../assets/DigitalEngineering/maturity/icon7.svg"
import icon8 from "../../assets/DigitalEngineering/maturity/icon8.svg"
import useimg from "../../assets/DigitalEngineering/maturity/useimg.webp"
import businessimg from "../../assets/DigitalEngineering/maturity/business.webp"
import start from "../../assets/DigitalEngineering/maturity/start.webp"
import line2 from "../../assets/DigitalEngineering/maturity/line2.svg"
import line3 from "../../assets/DigitalEngineering/maturity/line3.svg"

import mobile2 from "../../assets/DigitalEngineering/maturity/mobile2.svg"
import mobile3 from "../../assets/DigitalEngineering/maturity/mobile3.svg"









export const Maturity = () => {

  const [activeTab, setActiveTab] = useState("benefits");
  const slide = {
    title: "Know Where You Stand. Invest Where It Matters.",

    description: `Get a crystal-clear view of where you stand—and where to go next—with
    Calsoft’s Maturity Assessment & Planning. Tailored insights.
    Prioritized roadmap. Tangible ROI.`,
    buttonText: "Sample Modernization Roadmap",
    image: BackgroundImage,
  };
  const navItems = [
    "Benefits",
    "Assessment",
    "Modernization",
    "Ecosystem",
    "Plugin",
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
        />
      </div>
      <Submenu
        navItems={navItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

    </>
  )
}



export const Matters = () => {

  const whyItMattersData = {
    heading: "Why It Matters",
    title: "Modernization Without Context Is a Blind Bet",

    description:
      "Only 28% of enterprises have a documented modernization roadmap. The rest? They're reacting—replat forming without readiness, adding tools without integration, and creating tech debt faster than value. <br><br>Calsoft’s Maturity Assessment fixes that.",
    highlight:
      "We benchmark your current state across Infrastructure, App Stack, Data, Automation, and UX—then give you a clear path forward with quantified priorities, dependencies, and cost projections.",
    buttonText: "Download Best Practices",
    link: "#",

    cards: [
      {
        percent: "55%",
        text: "of CIOs admit they don’t have visibility into legacy dependencies",
        className: "shape1",
        bgshape: bgshape1,
      },
      {
        percent: "47%",
        text: "of modernization efforts overshoot budgets by 30%",
        className: "shape2",
        bgshape: bgshape2,

      },
      {
        percent: "36%",
        text: "result in no measurable ROI due to poor roadmap planning",
        className: "shape3",
        bgshape: bgshape3,
      },
    ],
  };
  return (
    <>
      <WhyItMatters {...whyItMattersData} ButtonImage={ButtonImage} />
    </>
  )
}

export const DoUs = () => {
  const heading = "What We Do"
  const subtitle = "Assess Smart. Plan Right. Modernize with Confidence."
  const desc = "Calsoft’s 360° Maturity Assessment is diagnostic, data-driven, and actionable—covering not just tech, but processes, people, and dependencies. Our Offerings:"

  const offeringsData = {
    buttonText: "Download Best Practices",
    link: "#",
    offerings: [

      {
        icon: icon1,
        title: "Technology & Architecture Maturity Scan",
      },
      {
        icon: icon2,
        title: "Application Stack Rationalization",
      },
      {
        icon: icon3,
        title: "Infra Readiness & Cloud Fitment",
      },
      {
        icon: icon4,
        title: "Process & Team Capability Mapping",
      },
      {
        icon: icon5,
        title: "Risk Register + Opportunity Heatmap",
      },
      {
        icon: icon6,
        title: "Custom Modernization Roadmap (3–12 month horizon)",
      },

    ],
    timeline: "3–4 weeks from kickoff to board-ready plan",

    highlights: [
      {
        icon: icon7,
        text: "Avg. savings from early identification of blockers: 18–22% project cost",
      },
      {
        icon: icon8,
        text: "60% acceleration in roadmap clarity for clients using Calsoft’s scorecard",
      },

    ],
  };

  return (
    <>
      <Do offeringsData {...offeringsData} heading={heading} subtitle={subtitle} desc={desc} ButtonImage={ButtonImage} />
    </>
  )
}



export const Use = () => {
  const useCasesData = {
    image: useimg,
    heading: "Use Cases",
    subheading: "Where It Fits—and Works",
    description: "Calsoft’s Assessment framework adapts to your business context—whether you’re cloud-first, hybrid, or legacy-heavy.",
    buttonText: "Download One Pager",
    link: "#",
    cards: [
      {
        title: "Cloud Migration Readiness",
        description: "Map workloads to migration paths (lift & shift, refactor, rebuild)",

      },
      {
        title: "Application Portfolio Modernization",
        description: "Prioritize apps using business-value-to-complexity ratio",

      },
      {
        title: "Tech Stack Consolidation",
        description: "Evaluate redundancy across platforms, infra, licenses",

      }
    ]
  };
  return (
    <> <Cases {...useCasesData} ButtonImage={ButtonImage} /></>
  )
}



export const Business = () => {
  const businessValueData = {
    heading: "Business Value",
    subheading: "From Tech Stack Clarity to Boardroom Confidence.",
    description:
      "A maturity assessment isn’t just a technical deep dive—it’s a strategic enabler. Here’s the value our clients have seen:",
    buttonText: "Request a custom ROI Projection",
    link: "#",
    backgroundImage: businessimg,
    valueItems: [
      {
        title: "Up to 40%",
        subtitle: "reduction in transformation risk",
      },
      {
        title: "2X",
        subtitle: "acceleration in cloud adoption with phased prioritization",
      },
      {
        title: "30–50%",
        subtitle: "improvement in platform utilization via consolidation",
      },
      {
        title: "Faster",
        subtitle: "buy-in from leadership with quantified projections",
      },
    ],
  };
  return (
    <>
      <BusinessValue  {...businessValueData} ButtonImage={ButtonImage} />
    </>
  )
}



export const Leftcontent = ({
  title,
  description,
  highlight,
  buttonText,
  imageSrc,
}) => {
  return (
    <>
      <section className="gap-10 lg:gap-20 container mx-auto px-4 md:px-16">
        <div className="py-16 ">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 w-full">
              <h2 className="text-xl md:text-[30px] font-semibold text-black mb-5">
                {title}
              </h2>
              <p className="text-gray-700 mb-4">{description}</p>
              <p className="text-[#2E3092] font-medium mb-6">{highlight}</p>

              <button className="flex items-center gap-2 px-6 py-3 bg-red-700 text-white rounded-full hover:bg-red-800 transition">
                {buttonText}
                <FaArrowRight />
              </button>
            </div>

            <div className="lg:w-1/2 w-full">
              <Image
                src={imageSrc}
                alt="Modernization"
                width={600}
                height={400}
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}




export const Howstart = () => {
  const startSectionData = {
    title: "How to Start",
    highlight: "Start",
    heading: "Your Maturity Sprint:",
    subheading: "Clarity in 7 Working Days",
    description:
      "One week is all it takes to gain a full-spectrum view of your enterprise readiness—and a phased plan to act on.",
    image: start,
    alt: "Maturity Sprint Image",
  };
  return (
    <>
      <StartSection data={startSectionData} />
    </>
  )
}




export const Sprint = () => {
  const buttonText = "Start Today"
  const link = "#"
  const steps = [
    {
      day: "Day 0",
      title: "Kickoff & Access Setup",
      points: [
        "Define scope (App, Infra, Process, People)",
        "Stakeholder alignment & tool access",
      ],
      output: "Sprint Charter",
      arrowDesktop: line2,
      arrowMobile: mobile2,

    },
    {
      day: "Day 1–2",
      title: "Discovery & Interviews",
      points: [
        "Collect architecture diagrams, portfolio inventory",
        "Conduct stakeholder interviews",
      ],
      output: "Baseline Input Deck",
      arrowDesktop: line3,
      arrowMobile: mobile3,

    },
    {
      day: "Day 3–4",
      title: "Maturity Scoring & Heatmap",
      points: [
        "Apply Calsoft’s Maturity Index",
        "Identify tech debt, dependencies, blockers",
      ],
      output: "Scorecard + Opportunity Map",
      arrowDesktop: line2,
      arrowMobile: mobile2,

    },
    {
      day: "Day 5–6",
      title: "Roadmap & Recommendations",
      points: [
        "Modernization journey (phases, investments, ROI)",
        "Identify “quick wins” and high-impact areas",
      ],
      output: "Custom Modernization Plan",
      arrowDesktop: line3,
      arrowMobile: mobile3,

    },
    {
      day: "Day 7",
      title: "Walkthrough & Handoff",
      points: [
        "Present report to stakeholders",
        "Align on next steps and ownership",
      ],
      output: "Final Sprint Pack (PPT, PDF, Dashboard Access)",
      arrowDesktop: null,
      arrowMobile: null,
    },
  ];

  return (
    <>
      <SprintTimeline steps={steps} heading="7-Day Maturity Sprint: Step-by-Step"
        buttonText={buttonText} link={link} ButtonImage={ButtonImage}
      />

    </>
  )
}


