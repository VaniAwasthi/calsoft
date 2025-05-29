"use client";
import {
  Herosection,
  TopClients,
} from "@/app/component/industries/hitech/Herosection";
import React, { useState } from "react";
import SoftwareImg from "../../assets/industries/hitech/hitechinfo1.webp";
import CloudImage from "../../assets/industries/hitech/hitechinfo2.webp";
import AIImage from "../../assets/industries/hitech/hitechinfo3.webp";
import InfoImageSection from "@/app/component/utilities/InfoSection";
import IndustryIntelligence from "@/app/component/industries/hitech/IndustryIntellegence";
import BackgroundImage from "../../assets/industries/hitech/hitechBannner.webp";
import HitechIcon1 from "../../assets/industries/hitech/HitechIcon1.svg";
import HitechIcon2 from "../../assets/industries/hitech/HitechIcon2.svg";
import HitechIcon3 from "../../assets/industries/hitech/HitechIcon3.svg";
import HitechIcon4 from "../../assets/industries/hitech/HitechIcon4.svg";
import HitechIcon5 from "../../assets/industries/hitech/HitechIcon5.svg";
import Intellegence from "../../assets/industries/hitech/intelegentImg.webp";
import {
  BlogSection,
  ContactSec,
  ServicesSec,
  TopPartners,
} from "@/app/component/industries/hitech/BlogSection";

const Page = () => {
  const slide = {
    title: "Hi-Tech | Software & Product",
    title2: "Innovation in quick time",
    description: ` Innovation is the highway for success in hi-tech. Create better
        software, improve processes, and gain competitive edge with your tech –
        here’s how.
        <br />
        <br />
        Calsoft helps you build your ‘ideal’ products/ software from planning to
        deployment at lower costs, higher quality, and faster go-to-market.`,
    buttonText: "What we do",
    image: BackgroundImage,
  };
  const Gradientheading = " All our intelligence";
  const BlackHeading = "AI-refined for ready-to-go perfection";
  const [activeTab, setActiveTab] = useState("Journey");

  const navItems = [
    "Journey",
    "Customers",
    "Industries",
    "What's New",
    "Partners",
    "Services",
    "Case Studies",
  ];
  const icons = [
    {
      icon: HitechIcon1,

      title: "Build high-performance applications",
      desc: "Cloud-first, API-driven architectures",
      positionClass:
        "md:translate-x-[-6px] md:translate-y-[-39px] xl:translate-y-[-7px]",
      translateprop: "translate-x-[33px] translate-y-[10px]",
      position: "left",
      transformProps: "translate-x-[-55px] translate-y-[22px]",
    },
    {
      icon: HitechIcon2,

      title: "Modernize products",
      desc: "Upgrade legacy applications for agility & security",
      positionClass:
        "translate-x-[-10px] xl:translate-y-[-18px] md:translate-y-[-39px]",
      translateprop: "translate-x-[-70px] translate-y-[10px]",
      position: "right",
      transformProps: "translate-x-[52px] translate-y-[22px]",
    },
    {
      icon: HitechIcon3,

      title: "Enhance automation & intelligence",
      desc: "Smarter decision making with AI and analytics",
      positionClass:
        "translate-x-[-10px] xl:translate-y-[-5px] md:translate-y-[-39px]",
      translateprop: "translate-x-[70px] translate-y-[10px]",
      position: "left",
      transformProps: "translate-x-[-55px] translate-y-[22px]",
    },
    {
      icon: HitechIcon4,

      title: "Enable seamless integrations",
      desc: "Unified platform connectivity with full interoperability",
      positionClass:
        "translate-x-[-21px] xl:translate-y-[-6px] md:translate-y-[-39px]",
      translateprop: "translate-x-[-80px] translate-y-[-5px]",
      position: "right",
      transformProps: "translate-x-[52px] translate-y-[22px]",
    },
    {
      icon: HitechIcon5,

      title: "Optimize software lifecycles",
      desc: "Streamlined development, testing, & deployment",
      positionClass:
        "translate-x-[-32px] xl:translate-y-[-5px] md:translate-y-[-39px]",
      translateprop: "translate-x-[48px] translate-y-[-3px]",
      position: "left",
      transformProps: "translate-x-[-55px] translate-y-[22px]",
    },
  ];
  const softwareEngineeringSection = {
    title: "Software & product engineering",
    description:
      "Create market-leading and high-performance products, built within agile frameworks and secure environments, with go-to-market and at scale.",
    pointsTitle: "What we do:",
    points: [
      "Build cloud-native applications for agility and speed",
      "Implement modular architectures for better scalability",
      "Ensure seamless API integrations for system interoperability",
    ],

    impactTitle: "Business Impact:",
    impactPoints: [
      "Accelerate go-to-market with structured engineering at lower costs",
      "Improve system performance with optimized workflows",
      "Enhance security and reliability with DevOps best practices",
    ],
    buttonText: "Learn More",
    link: "#",
    image: SoftwareImg,
    imagePosition: "right",
    bgColor: "bg-[#FBFBF2]",
    isgradientheading: false,
  };
  const CloudEngineeringSec = {
    title: "Cloud & platform engineering",
    description:
      "Enabling cloud-first agility is key for high-tech businesses. We design, implement, and maintain cloud ecosystems - delivering resilient performance and cost efficiency.",
    pointsTitle: "What we do:",
    points: [
      "Optimize workloads for better cost efficiency and security",
      "Automate cloud operations for real-time performance monitoring",
      "Easily and seamlessly migrate legacy systems to cloud ",
    ],
    impactTitle: "Business Impact:",
    impactPoints: [
      "Increase platform stability with real-time insights",
      "Reduce operational overhead with automated cloud workflows",
      "Ensure seamless scaling with optimized infrastructure",
    ],
    buttonText: "Learn More",
    link: "#",
    image: CloudImage,
    imagePosition: "left",
    bgColor: "bg-[#F8F9FA]",
    isgradientheading: true,
  };
  const AIPoweredSection = {
    title: "AI-powered modernization",
    description:
      "Gain AI-powered automation, predictive analytics, and intelligent architecture to enhance software functionality, efficiency, and adaptability.",
    pointsTitle: "What we do:",
    points: [
      "Re-architect legacy products with AI-driven automation",
      "Improve efficiency with predictive analytics and smart  workflows",
      "Integrate machine learning for data-driven enhancements",
    ],
    impactTitle: "Business Impact:",
    impactPoints: [
      "Improve system efficiency with automated optimization",
      "Enhance user experience with intelligent process flows",
      "Ensure long-term product adaptability with modular architectures",
    ],
    buttonText: "Learn More",
    link: "#",
    image: AIImage,
    imagePosition: "right",
    bgColor: "bg-[#FBFBF2]",
    isgradientheading: false,
  };

  return (
    <>
      <Herosection
        slide={slide}
        navItems={navItems}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        isCaseStudyButton={true}
      />
      <IndustryIntelligence
        Gradientheading={Gradientheading}
        BlackHeading={BlackHeading}
        icons={icons}
        MobileImg={Intellegence}
        headingClass="mb-4 break-words md:h-10 lg:h-12 xl:h-14 line-clamp-4 "
        contentClass=" md:h-40 lg:h-64 "
      />
      <TopClients />
      <InfoImageSection {...softwareEngineeringSection} />
      <InfoImageSection {...CloudEngineeringSec} />
      <InfoImageSection {...AIPoweredSection} />
      <BlogSection />
      <TopPartners />
      <ServicesSec />
      <ContactSec
        lightContent="Get the edge in Hi-tech with Calsoft "
        link="#"
      />
    </>
  );
};

export default Page;
