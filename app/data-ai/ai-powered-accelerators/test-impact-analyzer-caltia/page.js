"use client"
import React, { useState } from "react";
import HeroSection from "@/app/component/caltia/HeroSection";
import OnePlatform from "@/app/component/caltia/OnePlatform";
import TestCase from "@/app/component/caltia/TestCase";
import Integration from "@/app/component/caltia/Integration";
import BookDemoForm from "@/app/component/caltia/BookDemoForm";
import ClientCaseStudy from "@/app/component/caltia/CaseStudy";
import { ContactSecDataAi } from "@/app/component/utilities/ChallengeSolutionDataAi";

export default function Page() {
  const [activeTab, setActiveTab] = useState("benefits");
    const navItems = [
      "Benefits",
      "Test Cases",
      "Integration",
      "Case Study",
      "Book a Demo",
    ];
  return (
    <>
      <HeroSection  link="/insights/case-studies"
        navItems={navItems}
        setActiveTab={setActiveTab}
        activeTab={activeTab}      
      />
      <OnePlatform secId="benefits"/>
      <TestCase secId="test-cases"/>
      <Integration secId="integration" />
      <ClientCaseStudy secId="case-study" />
      <BookDemoForm secId="book-a-demo" />
      <ContactSecDataAi lightContent="Automate testing intelligently with CalTIA’s adaptive framework."/>
    </>
  );
}
