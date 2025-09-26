"use client";
import React, { useState } from "react";
import BackgroundImage from "../assets/industries/IndustryBanner.webp";
import { CaseStudies, Herosection } from "../component/industries/Herosection";
import RightSecImage from "../assets/industries/IndustryRightSec.webp";
import { TopClients } from "../component/industries/hitech/Herosection";
import {
  ContactSec,
  TopPartners,
} from "../component/industries/hitech/BlogSection";
import InfoSec1 from "../assets/home/hitech.webp";
import InfoSec2 from "../assets/home/Industryimg.webp";
import InfoSec3 from "../assets/home/Retail.webp";
import InfoSec4 from "../assets/home/Manufacturing.webp";
import InfoSection from "../component/industries/InfoSection";
import AnimatedSection from "../component/industries/IndusSecondSec";
import { showHubSpotForm } from "../component/utilities/showHubSpotForm";
const Page = () => {
  const [activeTab, setActiveTab] = useState("Journey");
  const slide = {
    title: "We got you covered with ",
    title2: "industry-boosting tech!",
    description: `Industry-focused AI solutions engineered for impact. Get the right expertise at the right time, with the right technology.`,
    buttonText: "Talk To Our Experts",
    BackgroundImage: BackgroundImage,
    rightImage: RightSecImage,
  };

  const navItems = [
    "Services",
    "Case Studies",
    "Hi Tech",
    "Telecom",
    "Retail",
    "Manufacturing",
    "Partners",
  ];
  const SectionOne = {
    heading: "Hi-Tech ",
    title: " | Engineering digital evolution",
    description:
      "The demand for intelligent software solutions is growing. We help technology companies build, modernize, and optimize their products for speed, scale, and efficiency.",
    points: [
      {
        pointsTitle: "Optimized SaaS development",
        pointsdescription:
          "Engineering cloud-native platforms for seamless scalability.",
      },
      {
        pointsTitle: "AI-powered modernization",
        pointsdescription:
          "Revamping legacy applications with data-driven intelligence.",
      },
      {
        pointsTitle: "Intelligent infrastructure",
        pointsdescription:
          "Implementing DevOps and automation for operational efficiency.",
      },
    ],
    buttonText: "Learn More",
    link: "#",
    image: InfoSec1,
    imagePosition: "right",
    bgColor: "bg-[#FBFBF2]",
    isgradientheading: false,
  };
  const SectionTwo = {
    heading: "Telecom",
    title: " | Enabling the future of connectivity",
    description:
      "From 5G adoption to AI-driven network automation, we enable telecom providers to enhance connectivity, reduce costs, and improve service delivery.",
    points: [
      {
        pointsTitle: "Multi-cloud orchestration",
        pointsdescription:
          "Simplifying complex network operations with automation.",
      },
      {
        pointsTitle: "AI-led network security",
        pointsdescription:
          "Strengthening cybersecurity with intelligent threat detection.",
      },
      {
        pointsTitle: "Edge and IoT integration",
        pointsdescription:
          "Powering real-time analytics for next-gen telecom infrastructure.",
      },
    ],
    buttonText: "Learn More",
    link: "#",
    image: InfoSec2,
    imagePosition: "left",
    bgColor: "bg-[#FBFBF2]",
    isgradientheading: false,
  };
  const SectionThree = {
    heading: "Retail",
    title: " |  Intelligent commerce and supply chain optimization",
    description:
      "Consumer expectations are evolving. We bring AI-driven insights to enhance personalization, streamline logistics, and optimize digital retail experiences.",
    points: [
      {
        pointsTitle: "Smart customer insights",
        pointsdescription:
          "Enhancing engagement with AI-powered recommendations",
      },
      {
        pointsTitle: "AI-driven inventory management",
        pointsdescription:
          "Preventing stock shortages with predictive analytics",
      },
      {
        pointsTitle: "Omnichannel retail solutions",
        pointsdescription:
          "Unifying online and offline commerce for seamless  shopping",
      },
    ],
    buttonText: "Learn More",
    link: "#",
    image: InfoSec3,
    imagePosition: "right",
    bgColor: "bg-[#FBFBF2]",
    isgradientheading: false,
  };
  const SectionFour = {
    heading: "Manufacturing ",
    title: " | Smarter operations with AI and automation",
    description:
      "Industrial transformation requires automation and real-time monitoring. We help manufacturers enhance productivity, reduce downtime, and optimize production workflows.",
    points: [
      {
        pointsTitle: "Predictive maintenance",
        pointsdescription:
          "Preventing equipment failures with AI-powered monitoring",
      },
      {
        pointsTitle: "Factory automation",
        pointsdescription:
          "Leveraging robotics and IoT for intelligent production lines",
      },
      {
        pointsTitle: "Supply chain resilience",
        pointsdescription:
          "Streamlining logistics with AI-driven demand  forecasting",
      },
    ],
    buttonText: "Learn More",
    link: "#",
    image: InfoSec4,
    imagePosition: "left",
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
      />
      <AnimatedSection secId={"services"} />
      {/* <TopClients /> */}
      <CaseStudies  secId="case-studies"/>
      <InfoSection
      secId="hi-tech"
        {...SectionOne}
        rounded="rounded-l-[30px]"
        bgColor="grid grid-cols-1 md:grid-cols-[55%_45%] xl:grid-cols-[60%_40%] bg-[#FBFBF2]"
        link="/industries/hitech"
      />
      <InfoSection
      secId={"telecom"}
        {...SectionTwo}
        rounded="rounded-r-[30px]"
        bgColor="grid grid-cols-1 md:grid-cols-[45%_55%] xl:grid-cols-[40%_60%]  bg-[#F8F9FA]"
        link="/industries/telecom"
      />
      <InfoSection
      secId={"retail"}
        {...SectionThree}
        rounded="rounded-l-[30px]"
        bgColor="grid grid-cols-1 md:grid-cols-[55%_45%] xl:grid-cols-[60%_40%] bg-[#FBFBF2]"
        link="/industries/retail"
      />
      <InfoSection
      secId="manufacturing"
        {...SectionFour}
        rounded="rounded-r-[30px]"
        bgColor="grid grid-cols-1 md:grid-cols-[45%_55%] xl:grid-cols-[40%_60%]  bg-[#F8F9FA]"
        link="/industries/manufacturing"
      />
      <TopPartners secId="partners"/>
      <ContactSec
      buttonClicked={()=>showHubSpotForm("contact-us-popup")}
        lightContent="We are industry-hardened engineers with future-ready solutions"
        // link="#"
      />
    </>
  );
};

export default Page;
