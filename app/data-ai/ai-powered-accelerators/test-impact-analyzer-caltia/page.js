import React from "react";
import HeroSection from "@/app/component/caltia/HeroSection";
import OnePlatform from "@/app/component/caltia/OnePlatform";
import TestCase from "@/app/component/caltia/TestCase";
import Integration from "@/app/component/caltia/Integration";
import BookDemoForm from "@/app/component/caltia/BookDemoForm";
import ClientCaseStudy from "@/app/component/caltia/CaseStudy";

export default function Page() {
  return (
    <>
      <HeroSection  link="/insights/case-studies"/>
      <OnePlatform />
      <TestCase />
      <Integration />
      <ClientCaseStudy />
      <BookDemoForm />
    </>
  );
}
