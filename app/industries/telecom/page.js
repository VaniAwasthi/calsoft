"use client";

import {
  BlogSection,
  ContactSec,
  ServicesSec,
  TopPartners,
} from "../../../app/component/industries/hitech/BlogSection.jsx";
import InfoImageSection from "../../../app/component/utilities/InfoSection.jsx";
import React, { useState } from "react";
import Banner from "../../assets/industries/telecom/TelecomBanner.webp";
import TelecomInfo1 from "../../assets/industries/telecom/TelecomInfo1.webp";
import TelecomInfo2 from "../../assets/industries/telecom/TelecomInfo2.webp";
import TelecomInfo3 from "../../assets/industries/telecom/TelecomInfo3.webp";
import { Herosection } from "../../../app/component/industries/hitech/Herosection.jsx";
import IndustryIntelligence from "../../../app/component/industries/hitech/IndustryIntellegence.jsx";
import Incon1 from "../../assets/industries/telecom/TelecomIcon1.svg";
import Incon2 from "../../assets/industries/telecom/TelecomIcon2.svg";
import Incon3 from "../../assets/industries/telecom/TelecomIcon3.svg";
import Incon4 from "../../assets/industries/telecom/TelecomIcon4.svg";
import Incon5 from "../../assets/industries/telecom/TelecomIcon5.svg";
import Intellegence from "../../assets/industries/telecom/telecomMobile.webp";
import { showHubSpotForm } from "@/app/component/utilities/showHubSpotForm.js";

const Page = () => {
  const slide = {
    title: "Boost Telecom networks",
    title2: "with intelligent automation",
    description: ` Network modernization and optimization are the bedrock of our innovative future. Telecom companies are at the center of it.
We help telecoms with streamlining operations, automating networks, and enhancing service assurance with advanced cloud-native, AI-driven, and software-defined solutions.`,
    buttonText: "Download Industry Report",
    image: Banner,
  };
  const [activeTab, setActiveTab] = useState("Journey");
  const navItems = [
    "Journey",
    "Orchestration",
    "Networks",
    "Security",
    "Case Studies",
    "Services",
  ];
  const Gradientheading = "";
  const BlackHeading = "Achieving next-gen success";
  const icons = [
    {
      icon: Incon1,
      title: "Optimized network operations",
      desc: "Deploy SDN/NFV solutions for intelligent automation.",
      positionClass:
        "translate-x-[-7px] xl:translate-y-[4px] md:translate-y-[-39px]",
      translateprop: "translate-x-[33px] translate-y-[10px]",
      position: "left",
      transformProps: "translate-x-[-55px] translate-y-[22px]",
    },
    {
      icon: Incon2,
      title: "Ensuring seamless cloud transformation",
      desc: "Leverage cloud-native architectures for flexibility.",
      positionClass:
        "translate-x-[-14px] xl:translate-y-[-10px] md:translate-y-[-39px]",
      translateprop: "translate-x-[-70px] translate-y-[10px]",
      position: "right",
      transformProps: "translate-x-[52px] translate-y-[22px]",
    },
    {
      icon: Incon3,
      title: "Enhanced service assurance & security",
      desc: "Strengthen monitoring and threat detection.",
      positionClass:
        "translate-x-[-17px] xl:translate-y-[4px] md:translate-y-[-39px]",
      translateprop: "translate-x-[70px] translate-y-[10px]",
      position: "left",
      transformProps: "translate-x-[-55px] translate-y-[22px]",
    },
    {
      icon: Incon4,
      title: "Scaled 5G & edge computing capabilities",
      desc: "Enable real-time data processing at the edge.",
      positionClass:
        "translate-x-[-23px] xl:translate-y-[7px] md:translate-y-[-39px]",
      translateprop: "translate-x-[-80px] translate-y-[-5px]",
      position: "right",
      transformProps: "translate-x-[52px] translate-y-[22px]",
    },
    {
      icon: Incon5,
      title: "Reduced OPEX & CAPEX with AI-insights",
      desc: "Improve efficiency with predictive analytics.",
      positionClass:
        "translate-x-[-32px] xl:translate-y-[7px] md:translate-y-[-39px]",
      translateprop: "translate-x-[48px] translate-y-[-3px]",
      position: "left",
      transformProps: "translate-x-[-55px] translate-y-[22px]",
    },
  ];
  const SectionOne = {
    id: "orchestration",
    title: "Automate network operations and orchestration",
    description: `Legacy networks may struggle with agility and cost-efficiency.
<br/><br/>
Here, companies must deploy SDN, NFV, and AI-driven automation to simplify network provisioning, monitoring, and performance management.`,
    pointsTitle: "What We Do:",
    points: [
      "Implement software-defined networking (SDN) for dynamic traffic management",
      "Deploy network function virtualization (NFV) for scalable network services",
      "Enable AI-powered network orchestration to improve efficiency",
    ],
    impactTitle: "Business Impact:",
    impactPoints: [
      "Reduce manual intervention with intelligent network automation",
      "Accelerate service delivery through self-configuring networks",
      "Lower operational costs with predictive fault management",
    ],
    buttonText: "Case Study",
    buttonLink: "#",
    image: TelecomInfo1,
    imagePosition: "right",
    bgColor: "bg-[#FBFBF2]",
    buttonClicked: () =>
      showHubSpotForm("automate-network-operations-case-study"),
  };
  const SectionTwo = {
    id: "networks",
    title: "Build agile, scalable, and low-latency telecom networks",
    description: `Thinking 5G? 5G requires real-time processing and low-latency infrastructure.
<br/><br/>
Companies must integrate multi-access edge computing (MEC), AI-driven insights, and private 5G networks for superior network performance.`,
    pointsTitle: "What We Do:",
    points: [
      "Develop 5G network function virtualization (NFV) solutions for carrier-grade reliability",
      "Optimize edge computing infrastructure for real-time processing",
      "Implement AI-powered network slicing for dynamic service allocation",
    ],
    impactTitle: "Business Impact:",
    impactPoints: [
      "Improve network responsiveness with real-time edge intelligence",
      "Reduce bandwidth costs by processing data closer to users",
      "Enhance customer experience with ultra-low latency applications",
    ],
    buttonText: "Case Study",
    buttonLink: "#",
    image: TelecomInfo2,
    imagePosition: "left",
    bgColor: "bg-[#F8F9FA]",
    buttonClicked: () => showHubSpotForm("build-agile-scalable-case-study"),
  };
  const SectionThree = {
    id: "security",
    title: "Enhance service assurance and cybersecurity",
    description: `With growing cyber threats, telecom networks need enhanced security and real-time monitoring.<br/><br/>
We help you get ahead of such threats with real-time risk mitigation, powered by AI-driven automation.`,
    pointsTitle: "What We Do:",
    points: [
      "Deploy automated threat detection for proactive network security",
      "Enable real-time network monitoring for improved service assurance",
      "Implement zero-trust security architectures for telecom environments",
    ],
    impactTitle: "Business Impact:",
    impactPoints: [
      "Minimize network downtime with proactive risk mitigation",
      "Prevent security breaches through AI-powered anomaly detection",
      "Improve regulatory compliance with telecom security frameworks",
    ],
    buttonText: "Case Study",
    buttonLink: "#",
    image: TelecomInfo3,
    imagePosition: "right",
    bgColor: "bg-[#FBFBF2]",
    buttonClicked: () =>
      showHubSpotForm("enhance-service-assurance-case-study"),
  };

  return (
    <>
      <Herosection
        slide={slide}
        navItems={navItems}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        isCaseStudyButton={false}
        titleTwoClass="lg:w-2/4"
      />
      <IndustryIntelligence
        Gradientheading={Gradientheading}
        BlackHeading={BlackHeading}
        icons={icons}
        MobileImg={Intellegence}
        headingClass="mb-4 break-words md:h-10 lg:h-12 xl:h-14 line-clamp-4"
        contentClass=" md:h-60 lg:h-64 "
      />
      {/* <TopClients /> */}
      <InfoImageSection
        {...SectionOne}
        rounded="rounded-l-[30px]"
        bgColor="grid grid-cols-1 md:grid-cols-[55%_45%] xl:grid-cols-[60%_40%] bg-[#FBFBF2]"
      />
      <InfoImageSection
        {...SectionTwo}
        rounded="rounded-r-[30px]"
        bgColor="grid grid-cols-1 md:grid-cols-[45%_55%] xl:grid-cols-[40%_60%] bg-[#F8F9FA] "
      />
      <InfoImageSection
        {...SectionThree}
        rounded="rounded-l-[30px]"
        bgColor="grid grid-cols-1 md:grid-cols-[55%_45%] xl:grid-cols-[60%_40%] bg-[#FBFBF2] "
      />
      <BlogSection />
      <TopPartners />
      <ServicesSec />
      <ContactSec
        lightContent="Want to create a connected, intelligent, & resilient manufacturing ecosystem?"
        buttonClicked={() => showHubSpotForm("contact-us-popup")}
      />
    </>
  );
};

export default Page;
