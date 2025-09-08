"use client";
import React, { useState } from "react";
import HeroSection from "../../../component/testing/HeroSection";
import Steps from "../../../component/product-application-development/Steps";
import WhatWeOffer from "../../../component/product-application-development/WhatWeOffer";
import UseCases from "../../../component/product-application-development/UseCases";
import HowToStart from "../../../component/product-application-development/HowToStart";
import { ContactSecDataAi } from "../../../component/utilities/ChallengeSolutionDataAi";
import WhyItMatters from "../../../component/product-application-development/WhyItMatters";
import MobileDevelpmentMatters from "@/app/component/cx-engineering/MobileDevelpmentMatters";
import img from "@/app/assets/DigitalEngineering/CX/CX Engineering 5.webp";
import { showHubSpotForm } from "@/app/component/utilities/showHubSpotForm";

const Page = () => {
  const navItems = [
    "Why it Matters",
    "What We Offer",
    "Use Cases",
    "Business Value",
    "How to Start",
  ];
  const [activeTab, setActiveTab] = useState("why-it-matters");

  return (
    <>
      <HeroSection
        title="Turn Ideas into Intelligent Products."
        description="De-risk early decisions with the right architecture,
              built for scale, speed, and ROI."
        buttonText="Request CX Audit"
        navItems={navItems}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        heroImage={img}
        buttonClicked={()=>showHubSpotForm("")}
        buttonText2=""
      />
      <WhyItMatters
        title="Mobile Isn’t a Channel. It’s the Frontline."
        desc="Mobile is where business happens—whether it’s a field rep capturing leads, a consumer placing an order, or a manager approving workflows. Yet 60% of enterprise apps fail user expectations due to poor UX, offline issues, or clunky performance. Calsoft solves this by engineering apps that align business goals with intuitive, dependable experiences."
        buttonText="Get in Touch"
        MainComponenent={MobileDevelpmentMatters}
        // contentClass="h-[31.5rem]"
        gridClass="sm:h-[55rem] md:h-[53rem] xl:h-[31.5rem]"
        mainComponenentClass="justify-start"
        id="why-it-matters"
        buttonClicked={()=>showHubSpotForm("get-in-touch")}
      />
      <WhatWeOffer id="what-we-offer" buttonText="Talk to Expert"  buttonClicked={()=>showHubSpotForm("Talk-to-Expert")}/>
      <UseCases
        id="use-cases"
        BussinessId="business-value"
        useCaseData={[
          {
            title: "New Product Launch",
            desc: "Define MVP. Select stack. Design for scale.",
          },
          {
            title: "Legacy Modernization",
            desc: "Re-architect monoliths into microservices.",
          },
          {
            title: "Cloud-native Transformation",
            desc: "Design for AWS, Azure, or hybrid deployment.",
          },
        ]}
        data={{
          leftSideContent: {
            title: "Apps That Work Harder for Your Business.",
            subTitle:
              null,
            description:
              "Our mobile solutions deliver more than access—they deliver ROI.",
          },
          rightSideContent: [
            {
              title: "50%",
              subTitle: "faster task completion for field teams",
            },
            {
              title: "$200K+",
              subTitle: "saved annually via legacy-to-mobile migration",
            },
            {
              title: "2X",
              subTitle:
                "user engagement on well-optimized mobile flows",
            },
            {
              title: "100%",
              subTitle: "compliance with audit-ready mobile security policies",
            },
          ],
        }}
        bookMeetingData={{
          title: "Boost mobile adoption by 35% via native/hybrid apps.",
          buttontext: "Book a Meeting",
        }}
        buttonClick2={()=>showHubSpotForm("mobile-development-one-pager")}
      />
      <HowToStart
        id="how-to-start"
        headerContent={{
          title: "Start Smart, Scale Fast",
          description:
            "Every engagement starts with a focused 2-week Architecture Sprint designed to align stakeholders, define priorities, and deconstruct risks before any code is written.",
        }}
        
      />
      <Steps />
      <ContactSecDataAi
        BoldContent="Let’s talk!"
        lightContent="Build mobile solutions that drive engagement everywhere."
        // link="#"
      />
    </>
  );
};

export default Page;
