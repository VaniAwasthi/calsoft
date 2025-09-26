"use client";
import { ContactSec } from "../../component/industries/hitech/BlogSection.jsx";
import {
  BannerInfo,
  TabsInfo,
} from "../../component/infographic/BannerTabsFilter.jsx";
import React from "react";
import Banner from "../../assets/insights/caseStudy.webp"

const Page = () => {
  return (
    <>
      <BannerInfo heading="In-Depth Research & Insights" BannerBg={Banner} />
      <TabsInfo defaultTab="whitepapers" />
      <ContactSec
      lightContent="Dive deep into research-backed technology perspectives."      />
    </>
  );
};

export default Page;
