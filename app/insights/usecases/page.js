"use client";
import { ContactSec } from "../../component/industries/hitech/BlogSection.jsx";
import {
  BannerInfo,
  TabsInfo,
} from "../../component/infographic/BannerTabsFilter.jsx";
import React from "react";
import Banner from "../../assets/insights/infographics.webp"

const Page = () => {
  return (
    <>
      <BannerInfo heading="Visual Insights at a Glance" BannerBg={Banner} />
      <TabsInfo defaultTab="usecases" />
      <ContactSec
        lightContent="See innovation in action through real-world use cases."
      />
    </>
  );
};

export default Page;
