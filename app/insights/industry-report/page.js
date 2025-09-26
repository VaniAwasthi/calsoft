"use client";
import { ContactSec } from "../../component/industries/hitech/BlogSection.jsx";
import {
  BannerInfo,
  TabsInfo,
} from "../../component/infographic/BannerTabsFilter.jsx";
import React from "react";
import Banner from "../../assets/insights/webinar.webp"

const Page = () => {
  return (
    <>
      <BannerInfo heading="Market Trends & Analysis" BannerBg={Banner} />
      <TabsInfo defaultTab="industry-reports" />
      <ContactSec
        lightContent="Uncover trends and forecasts that matter to your business."
      />
    </>
  );
};

export default Page;
