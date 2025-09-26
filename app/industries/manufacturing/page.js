"use client";
import {
  ContactSec,
  ServicesSec,
  TopPartners,
} from "../../../app/component/industries/hitech/BlogSection.jsx";
import InfoImageSection from "../../../app/component/utilities/InfoSection.jsx";
import React, { useState } from "react";
import Banner from "../../assets/industries/manufacturing/manufactureBanner.webp";
import StrengthenImg from "../../assets/industries/manufacturing/manufacInfo2.webp";
import EnhanceImage from "../../assets/industries/manufacturing/manufacInfo3.webp";
import ScaleImage from "../../assets/industries/manufacturing/manufacInfo1.webp";
import { Herosection } from "../../../app/component/industries/hitech/Herosection.jsx";
import IndustryIntelligence from "../../../app/component/industries/hitech/IndustryIntellegence.jsx";
import Incon5 from "../../assets/industries/manufacturing/manufacturIcon1.svg";
import Incon4 from "../../assets/industries/manufacturing/manufacturIcon2.svg";
import Incon3 from "../../assets/industries/manufacturing/manufacturIcon3.svg";
import Incon2 from "../../assets/industries/manufacturing/manufacturIcon4.svg";
import Incon1 from "../../assets/industries/manufacturing/manufacturIcon5.svg";
import Intellegence from "../../assets/industries/manufacturing/ManufacturingMobile.webp";
import Info4 from "../../assets/DigitalEngineering/mordernization/Info-4.svg";
import { showHubSpotForm } from "@/app/component/utilities/showHubSpotForm.js";

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
    "Monitoring ",
    "Predictive",
    "Forecasting",
    "Partners",
    "Services",
  ];
  const Gradientheading = "";
  const BlackHeading =
    "Helping build & automate your modern, connected factory";
  const icons = [
    {
      icon: Incon1,
      iconSize: "",
      title: "Plan and implement",
      desc: "Develop and implement a structured roadmap with a scalable system architecture ideal for smart supply chains.",
      positionClass:
        "translate-x-[2px] xl:translate-y-[4px] md:translate-y-[-39px]",
      translateprop: "translate-x-[33px] translate-y-[10px]",
      position: "left",
      transformProps: "translate-x-[-55px] translate-y-[22px]",
    },
    {
      icon: Incon2,
      title: "Automate",
      desc: "Deploy AI-driven automation to optimize workflows, minimize errors, and enhance production speed.",
      positionClass:
        "translate-x-[-10px] xl:translate-y-[4px] md:translate-y-[-39px]",
      translateprop: "translate-x-[-70px] translate-y-[10px]",
      position: "right",
      transformProps: "translate-x-[52px] translate-y-[22px]",
    },
    {
      icon: Incon3,
      title: "Secure",
      desc: "Implement zero-trust security with real-time threat detection and compliance-driven safeguards.",
      positionClass:
        "translate-x-[-15px] xl:translate-y-[4px] md:translate-y-[-39px]",
      translateprop: "translate-x-[70px] translate-y-[10px]",
      position: "left",
      transformProps: "translate-x-[-55px] translate-y-[22px]",
    },
    {
      icon: Incon4,
      title: "Monitor",
      desc: "Leverage IoT-powered real-time analytics for predictive insights and proactive issue resolution.",
      positionClass:
        "translate-x-[-20px] xl:translate-y-[4px] md:translate-y-[-39px]",
      translateprop: "translate-x-[-80px] translate-y-[-5px]",
      position: "right",
      transformProps: "translate-x-[52px] translate-y-[22px]",
    },
    {
      icon: Incon5,
      title: "Scale",
      desc: "Enable cloud-native, scalable production with AI-driven monitoring and adaptive resource management.",
      positionClass:
        "translate-x-[-8px] xl:translate-y-[4px] md:translate-y-[-39px]",
      translateprop: "translate-x-[48px] translate-y-[-3px]",
      position: "left",
      transformProps: "translate-x-[-55px] translate-y-[22px]",
    },
  ];
  const ScaleSection = {
    title: "Scale with real-time monitoring and automation",
    description:
      "Factories rely on real-time data to minimize errors and enhance efficiency.We help manufacturers deploy IoT sensors, integrate AI-driven automation, and build centralized analytics platforms to create intelligent, connected manufacturing environments.",
    pointsTitle: "What We Do:",
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
    buttonText: "Case Study",
    buttonLink: "#",
    image: ScaleImage,
    imagePosition: "right",
    bgColor: "bg-[#FBFBF2]",
  };
  const StrengthenSec = {
    title: "Strengthen predictive maintenance strategies",
    description:
      "Equipment failures cause costly disruptions. AI-driven predictive maintenance prevents breakdowns before they happen, improving uptime and efficiency.",
    pointsTitle: "What We Do:",
    points: [
      "Develop AI/ML models for predicting machinery failures",
      "Integrate sensor-based monitoring to analyze equipment health",
      "Provide data-driven insights to optimize maintenance schedules",
    ],
    impactTitle: "Business Impact:",
    impactPoints: [
      "Lower unplanned downtime with early fault detection",
      "Reduce maintenance costs by optimizing service schedules",
      "Improve operational efficiency with proactive materials management",
    ],
    buttonText: "Case Study",
    buttonLink: "#",
    image: StrengthenImg,
    imagePosition: "left",
    bgColor: "bg-[#F8F9FA]",
  };
  const EnhanceSection = {
    title: "Enhance visibility, agility, and demand forecasting",
    description:
      "Manufacturing needs resilient, responsive supply chains. Data-driven insights help reduce excess inventory, improve logistics efficiency, and ensure demand-driven production. Calsoft ensures total inventory visualization with actionable insights at the fingertips.",
    pointsTitle: "What We Do:",
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
    buttonText: "Case Study",
    buttonLink: "#",
    image: EnhanceImage,
    imagePosition: "right",
    bgColor: "bg-[#FBFBF2]",
  };
  const IotEnSection = {
    title: "IoT Engineering",
    description:
      "Build intelligent, scalable IoT solutions for real-time data analytics and op-led automation.",
    pointsTitle: "What We Do:",
    points: [
      "Use sensors for faster insights",
      "Transmit data with full security",
      "Link IoT to data and analytics",
    ],
    impactTitle: "Business Impact:",
    impactPoints: [
      "Real-time ops visibility improves",
      "IoT scaling is simple and safe",
      "Better data, better decisions",
    ],
    buttonText: "Case Study",
    buttonLink: "#",
    image: Info4,
    imagePosition: "left",
    bgColor: "bg-[#F8F9FA]",
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
        contentClass=" md:h-62 lg:h-72 "
        id="journey"
      />
      <InfoImageSection
        {...ScaleSection}
        rounded="rounded-l-[30px]"
        bgColor="grid grid-cols-1 md:grid-cols-[55%_45%] xl:grid-cols-[60%_40%] bg-[#FBFBF2]"
        id="monitoring"
      />
      <InfoImageSection
        {...StrengthenSec}
        rounded="rounded-r-[30px]"
        bgColor="grid grid-cols-1 md:grid-cols-[45%_55%] xl:grid-cols-[40%_60%] bg-[#F8F9FA] "
        id="predictive"
      />
      <InfoImageSection
        {...EnhanceSection}
        rounded="rounded-l-[30px]"
        bgColor="grid grid-cols-1 md:grid-cols-[55%_45%] xl:grid-cols-[60%_40%] bg-[#FBFBF2] "
        id="forecasting"
      />
      <InfoImageSection
        {...IotEnSection}
        rounded="rounded-r-[30px]"
        bgColor="grid grid-cols-1 md:grid-cols-[45%_55%] xl:grid-cols-[40%_60%] bg-[#F8F9FA] "
      />
      <TopPartners />
      <ServicesSec/>
      <ContactSec
        lightContent="Want to create a connected, intelligent, & resilient manufacturing ecosystem?"
        buttonClicked={()=>showHubSpotForm("contact-us-popup")}
      />
    </>
  );
};

export default Page;
