"use client";
import {
  ContactSec,
  ServicesSec,
  TopPartners,
} from "@/app/component/industries/hitech/BlogSection";
import InfoImageSection from "@/app/component/utilities/InfoSection";
import React, { useState } from "react";
import Banner from "../../assets/industries/manufacturing/manufactureBanner.webp";
import StrengthenImg from "../../assets/industries/manufacturing/manufacInfo2.webp";
import EnhanceImage from "../../assets/industries/manufacturing/manufacInfo3.webp";
import ScaleImage from "../../assets/industries/manufacturing/manufacInfo1.webp";
import { Herosection } from "@/app/component/industries/hitech/Herosection";
import IndustryIntelligence from "@/app/component/industries/hitech/IndustryIntellegence";
import Incon5 from "../../assets/industries/manufacturing/manufacturIcon1.svg";
import Incon4 from "../../assets/industries/manufacturing/manufacturIcon2.svg";
import Incon3 from "../../assets/industries/manufacturing/manufacturIcon3.svg";
import Incon2 from "../../assets/industries/manufacturing/manufacturIcon4.svg";
import Incon1 from "../../assets/industries/manufacturing/manufacturIcon5.svg";
import Intellegence from "../../assets/industries/manufacturing/ManufacturingMobile.webp";

const Page = () => {
  const slide = {
    title: "Manufacturing | AI-driven",
    title2: "future proofing",
    description: ` Are you looking for smart automation with real-time data and AI-driven decision-making? Want to increase production efficiency, reduce downtime, and optimize inventory and supply chains to stay competitive?
              <br />
              <br />
              <span className="!text-2xl">Look no further! Calsoft has the answer.</span>`,
    buttonText: "Case Study",
    image: Banner,
  };
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
  const Gradientheading = "";
  const BlackHeading =
    "Helping build & automate your modern, connected factory";
  const icons = [
    {
      icon: Incon1,
      title: "Plan and implement",
      desc: "Develop and implement a structured roadmap with a scalable system architecture ideal forsmart supply chains.",
      positionClass:
        "md:translate-x-[-13px] md:translate-y-[-39px] xl:translate-y-[-12px]",
      translateprop: "translate-x-[33px] translate-y-[10px]",
      position: "left",
      transformProps: "translate-x-[-55px] translate-y-[22px]",
    },
    {
      icon: Incon2,
      title: "Automate",
      desc: "Deploy AI-driven automation to optimize workflows, minimize errors, and enhance production speed.",
      positionClass:
        "translate-x-[-10px] xl:translate-y-[-18px] md:translate-y-[-39px]",
      translateprop: "translate-x-[-70px] translate-y-[10px]",
      position: "right",
      transformProps: "translate-x-[52px] translate-y-[22px]",
    },
    {
      icon: Incon3,
      title: "Secure",
      desc: "Implement zero-trust security with real-time threat detection and compliance-driven safeguards.",
      positionClass:
        "translate-x-[-10px] xl:translate-y-[-5px] md:translate-y-[-39px]",
      translateprop: "translate-x-[70px] translate-y-[10px]",
      position: "left",
      transformProps: "translate-x-[-55px] translate-y-[22px]",
    },
    {
      icon: Incon4,
      title: "Monitor",
      desc: "Leverage IoT-powered real-time analytics for predictive insights and proactive issue resolution.",
      positionClass:
        "translate-x-[-13px] xl:translate-y-[-6px] md:translate-y-[-39px]",
      translateprop: "translate-x-[-80px] translate-y-[-5px]",
      position: "right",
      transformProps: "translate-x-[52px] translate-y-[22px]",
    },
    {
      icon: Incon5,
      title: "Scale",
      desc: "Enable cloud-native, scalable production with AI-driven monitoring and adaptive resource management.",
      positionClass:
        "translate-x-[-25px] xl:translate-y-[-12px] md:translate-y-[-39px]",
      translateprop: "translate-x-[48px] translate-y-[-3px]",
      position: "left",
      transformProps: "translate-x-[-55px] translate-y-[22px]",
    },
  ];
  const ScaleSection = {
    title: "Scale with real-time monitoring and automation",
    description:
      "Factories rely on real-time data to minimize errors and enhance efficiency.We help manufacturers deploy IoT sensors, integrate AI-driven automation, and build centralized analytics platforms to create intelligent, connected manufacturing environments.",
    pointsTitle: "What we do:",
    points: [
      "Deploy industrial IoT solutions for real-time machine  performance tracking",
      "Implement AI-powered automation to streamline production workflows",
      "Build live dashboards for predictive analytics & process optimization",
    ],
    impactTitle: "Business Impact:",
    impactPoints: [
      "Reduce production delays with automated process monitoring",
      "Minimize operational costs through AI-driven process  improvements",
      "Increase equipment efficiency by identifying & resolving bottlenecks",
    ],
    buttonText: "Learn More",
    buttonLink: "#",
    image: ScaleImage,
    imagePosition: "right",
    bgColor: "bg-[#FBFBF2]",
  };
  const StrengthenSec = {
    title: "Strengthen predictive maintenance strategies.",
    description:
      "Equipment failures cause costly disruptions. AI-driven predictive maintenance prevents breakdowns before they happen, improving uptime and efficiency.",
    pointsTitle: "What we do:",
    points: [
      "Develop AI/ML models for predicting machinery failures",
      "Integrate sensor-based monitoring to analyse equipment health",
      "Provide data-driven insights to optimize maintenance schedules",
    ],
    impactTitle: "Business Impact:",
    impactPoints: [
      "Lower unplanned downtime with early fault detection",
      "Reduce maintenance costs by optimizing service schedules",
      "Improve operational efficiency with proactive materials management",
    ],
    buttonText: "Learn More",
    buttonLink: "#",
    image: StrengthenImg,
    imagePosition: "left",
    bgColor: "bg-[#F8F9FA]",
  };
  const EnhanceSection = {
    title: "Enhance visibility, agility, and demand forecasting",
    description:
      "Manufacturing needs resilient, responsive supply chains. Data-driven insights help reduce excess inventory, improve logistics efficiency, and ensure demand-driven production.Calsoft ensures total inventory visualization with actionable insights at the fingertips.",
    pointsTitle: "What we do:",
    points: [
      "Implement AI-driven demand forecasting to align inventory with market  needs",
      "Automate warehouse and logistics management for real-time tracking",
      "Enhance supply chain visibility with IoT-enabled tracking systems",
    ],
    impactTitle: "Business Impact:",
    impactPoints: [
      "Reduce excess inventory by aligning stock levels with demand patterns",
      "Improve delivery speed with AI-powered logistics planning",
      "Enhance supplier collaboration with integrated data systems",
    ],
    buttonText: "Learn More",
    buttonLink: "#",
    image: EnhanceImage,
    imagePosition: "right",
    bgColor: "bg-[#FBFBF2]",
  };

  return (
    <>
      <Herosection
        slide={slide}
        navItems={navItems}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        isCaseStudyButton={false}
      />
      <IndustryIntelligence
        Gradientheading={Gradientheading}
        BlackHeading={BlackHeading}
        icons={icons}
        MobileImg={Intellegence}
        headingClass="mb-4 break-words md:h-10 lg:h-12 xl:h-10 line-clamp-4"
        contentClass=" md:h-60 lg:h-64 "
      />
      <InfoImageSection
        {...ScaleSection}
        ImageClass="h-[300px] md:h-full  xl:h-[620px]"
      />
      <InfoImageSection
        {...StrengthenSec}
        ImageClass="h-[300px] md:h-full  xl:h-[600px]"
      />
      <InfoImageSection
        {...EnhanceSection}
        ImageClass="h-[300px] md:h-full  xl:h-[640px]"
      />
      <TopPartners />
      <ServicesSec />
      <ContactSec
        lightContent="Want to create a connected, intelligent, & resilient manufacturing ecosystem?"
        link="#"
      />
    </>
  );
};

export default Page;
