"use client";
import { ContactSec } from "../../component/industries/hitech/BlogSection.jsx";
import Banner from "../../assets/insights/caseStudy.webp"
import {
  BannerInfo,
  TabsInfo,
} from "../../component/infographic/BannerTabsFilter.jsx";
import React from "react";

const Page = () => {
  return (
    <>
      <BannerInfo heading="Real-World Success Stories" BannerBg={Banner} />
      <TabsInfo defaultTab="case-study" />
      <ContactSec
        lightContent="Want to create a connected, intelligent, & resilient manufacturing ecosystem? "
        link="#"
      />
    </>
  );
};

export default Page;
