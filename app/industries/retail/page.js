"use client";
import {
  ContactSec,
  ServicesSec,
  TopPartners,
} from "@/app/component/industries/hitech/BlogSection";
import InfoImageSection from "@/app/component/utilities/InfoSection";
import React, { useState } from "react";
import Banner from "../../assets/industries/retail/RetailBannner.webp";
import Retailinfo1 from "../../assets/industries/retail/retailinfo1.webp";
import Retailinfo2 from "../../assets/industries/retail/retailinfo2.webp";
import Retailinfo3 from "../../assets/industries/retail/retailinfo3.webp";
import {
  Herosection,
  TopClients,
} from "@/app/component/industries/hitech/Herosection";
import IndustryIntelligence from "@/app/component/industries/hitech/IndustryIntellegence";
import Incon1 from "../../assets/industries/retail/retailIcon1.svg";
import Incon2 from "../../assets/industries/retail/retailIcon2.svg";
import Incon3 from "../../assets/industries/retail/retailIcon3.svg";
import Incon4 from "../../assets/industries/retail/retailIcon4.svg";
import Incon5 from "../../assets/industries/retail/retailIcon5.svg";
import Intellegence from "../../assets/industries/retail/RetailMobile.webp";

const Page = () => {
  const slide = {
    title: "Grow in retail with",
    title2: "AI-driven experiences at lower costs",
    description: ` Ensure the best customer experiences and higher margins by leveraging industry-specific AI, smart automation, cloud-driven intelligence, and optimized supply chains – across online and stationary stores.`,
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
  const BlackHeading = "Acquire and retain customers while increasing margins";
  const icons = [
    {
      icon: Incon1,

      title: "Optimize inventory and supply chains",
      desc: "Predict demand and reduce operational inefficiencies.",
      positionClass:
        "md:translate-x-[-5px] md:translate-y-[-39px] xl:translate-y-[-3px]",
      translateprop: "translate-x-[33px] translate-y-[10px]",
      position: "left",
      transformProps: "translate-x-[-55px] translate-y-[22px]",
    },
    {
      icon: Incon2,

      title: "Seamless omnichannel experiences",
      desc: "Unify online and in-store shopping journeys.",
      positionClass:
        "md:translate-x-[-13px] md:translate-y-[-39px] xl:translate-y-[-9px]",
      translateprop: "translate-x-[-70px] translate-y-[10px]",
      position: "right",
      transformProps: "translate-x-[52px] translate-y-[22px]",
    },
    {
      icon: Incon3,

      title: "Create customer personalization",
      desc: "Use AI-driven insights for hyper-personalization.",
      positionClass:
        "md:translate-x-[-15px] md:translate-y-[-39px] xl:translate-y-[-3px]",
      translateprop: "translate-x-[70px] translate-y-[10px]",
      position: "left",
      transformProps: "translate-x-[-55px] translate-y-[22px]",
    },
    {
      icon: Incon4,

      title: "Increase automation and efficiency",
      desc: "Deploy AI-driven tools for better decision-making.",
      positionClass:
        "md:translate-x-[-20px] md:translate-y-[-39px] xl:translate-y-[-3px]",
      translateprop: "translate-x-[-80px] translate-y-[-5px]",
      position: "right",
      transformProps: "translate-x-[52px] translate-y-[22px]",
    },
    {
      icon: Incon5,

      title: "Prevent fraud and security risks",
      desc: "Strengthen transaction security with smart detection system.",
      positionClass:
        "md:translate-x-[-30px] md:translate-y-[-39px] xl:translate-y-[4px]",
      translateprop: "translate-x-[48px] translate-y-[-3px]",
      position: "left",
      transformProps: "translate-x-[-55px] translate-y-[22px]",
    },
  ];
  const SectionOne = {
    title: "Understand, predict, and enhance shopping experiences with AI",
    description: `Are you facing higher cart abandons or in-store sales drops? This must be a call to improve shopper experiences and relevance across catalogs, design, layout, and more.
    <br/> Our industry-learned AI can help you anticipate customer needs, offer tailored recommendations, and create more intuitive (personal) experiences.`,
    pointsTitle: "What we do:",
    points: [
      "Implement AI-driven customer insights for better engagement",
      "Develop real-time recommendation engines to personalize shopping  experiences",
      "Optimize marketing strategies with behavioural analytics and predictive models",
    ],
    impactTitle: "Business Impact:",
    impactPoints: [
      "Improve conversion time, lower cart abandon rate, and even increase cart value",
      "Increase customer retention through hyper-personalized experiences",
      "Enhance decision-making with deep customer analytics",
    ],
    buttonText: "Learn More",
    buttonLink: "#",
    image: Retailinfo1,
    imagePosition: "right",
    bgColor: "bg-[#FBFBF2]",
  };
  const SectionTwo = {
    title: "Improve efficiency, reduce waste, and ensure product availability",
    description:
      "Retailers need real-time visibility into their inventory to avoid overstocking, stockouts, and logistical inefficiencies.Our data-driven supply chain automation helps ensure the right products are available at the right time – so you don’t worry.",
    pointsTitle: "What we do:",
    points: [
      "Develop AI-powered demand forecasting models to predict sales trends",
      "Automate warehouse and logistics management for operational efficiency",
      "Integrate IoT-enabled tracking for real-time asset monitoring",
    ],
    impactTitle: "Business Impact:",
    impactPoints: [
      "Reduce inventory waste with precise stock-level predictions",
      "Optimize supply chain flow to minimize delivery delays",
      "Enhance operational efficiency with automated inventory control",
    ],
    buttonText: "Learn More",
    buttonLink: "#",
    image: Retailinfo2,
    imagePosition: "left",
    bgColor: "bg-[#F8F9FA]",
  };
  const SectionThree = {
    title: "Protect customers, prevent fraud, and secure transactions",
    description: `As retail transactions shift online, security concerns grow. One must have real-time fraud detection and secure digital payments to protect customer trust.
<br/>We have this covered with intelligent security solutions to prevent all such fraud and mitigate risks.`,
    pointsTitle: "What we do:",
    points: [
      "Implement AI-powered fraud detection to identify suspicious activities",
      "Strengthen payment security systems with real-time monitoring",
      "Enable biometric and multi-factor authentication for safer transactions",
    ],
    impactTitle: "Business Impact:",
    impactPoints: [
      "Reduce fraud-related losses by proactively identifying threats",
      "Improve transaction security for both online and in-store purchases",
      "Enhance customer confidence with seamless and safe digital payments",
    ],
    buttonText: "Learn More",
    buttonLink: "#",
    image: Retailinfo3,
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
        titleTwoClass="lg:w-2/4"
      />
      <IndustryIntelligence
        Gradientheading={Gradientheading}
        BlackHeading={BlackHeading}
        icons={icons}
        MobileImg={Intellegence}
        headingClass="mb-4 break-words md:h-10 lg:h-12 xl:h-10 line-clamp-4"
        contentClass=" md:h-64 lg:h-64 "
      />
      <TopClients />
      <InfoImageSection
        {...SectionOne}
        ImageClass="h-[300px] md:h-full  xl:h-[700px]"
        rounded="rounded-l-[30px]"
        bgColor="grid grid-cols-1  lg:grid-cols-[60%_40%] bg-[#FBFBF2]"
      />
      <InfoImageSection
        {...SectionTwo}
        ImageClass="h-[300px] md:h-full  xl:h-[680px]"
        rounded="rounded-r-[30px]"
        bgColor="grid grid-cols-1  lg:grid-cols-[40%_60%] bg-[#F8F9FA] "
      />
      <InfoImageSection
        {...SectionThree}
        ImageClass="h-[300px] md:h-full  xl:h-[680px]"
        rounded="rounded-l-[30px]"
        bgColor="grid grid-cols-1  lg:grid-cols-[60%_40%] bg-[#FBFBF2] "
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
