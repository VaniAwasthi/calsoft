import {
  Herosection,
  TopClients,
} from "@/app/component/industries/hitech/Herosection";
import React from "react";
import SoftwareImg from "../../assets/industries/hitech/hitechinfo1.webp";
import CloudImage from "../../assets/industries/hitech/hitechinfo2.webp";
import AIImage from "../../assets/industries/hitech/hitechinfo3.webp";
import InfoImageSection from "@/app/component/utilities/InfoSection";
import IndustryIntelligence from "@/app/component/industries/hitech/IndustryIntellegence";
import {
  BlogSection,
  ContactSec,
  ServicesSec,
  TopPartners,
} from "@/app/component/industries/hitech/BlogSection";

const page = () => {
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
    image: AIImage,
    imagePosition: "right",
    bgColor: "bg-[#FBFBF2]",
    isgradientheading: false,
  };
  return (
    <>
      <Herosection />
      <IndustryIntelligence />
      <TopClients />
      <InfoImageSection {...softwareEngineeringSection} />
      <InfoImageSection {...CloudEngineeringSec} />
      <InfoImageSection {...AIPoweredSection} />
      <BlogSection />
      <TopPartners />
      <ServicesSec />
      <ContactSec />
    </>
  );
};

export default page;
