"use client"
import React, { useState } from "react";
import HeroSection from "@/app/component/caltia/HeroSection";
import OnePlatform from "@/app/component/caltia/OnePlatform";
import TestCase from "@/app/component/caltia/TestCase";
import Integration from "@/app/component/caltia/Integration";
import BookDemoForm from "@/app/component/caltia/BookDemoForm";
import ClientCaseStudy from "@/app/component/caltia/CaseStudy";

export default function Page() {
  const [activeTab, setActiveTab] = useState("why-it-matters");
    const navItems = [
      "Why It Matters",
      "What We Do",
      "Use Cases",
      "Business Value",
      "How to Start",
    ];
  return (
    <>
      <HeroSection  link="/insights/case-studies"
        navItems={navItems}
        setActiveTab={setActiveTab}
        activeTab={activeTab}      
      />
      <OnePlatform />
      <TestCase />
      <Integration />
      <ClientCaseStudy />
      <BookDemoForm />
    </>
  );
}
