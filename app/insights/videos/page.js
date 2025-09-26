"use client";
import { ContactSec } from "../../component/industries/hitech/BlogSection.jsx";
import {
  BannerInfo,
  TabsInfo,
} from "../../component/infographic/BannerTabsFilter.jsx";
import React from "react";
import Banner from "../../assets/insights/whitepaper.webp"

const Page = () => {
  return (
    <>
      <BannerInfo heading="Expert Talks & Demos" BannerBg={Banner} />
      <TabsInfo defaultTab="videos" />
      <ContactSec
        lightContent="See how ideas turn into action with our videos."
      />
    </>
  );
};

export default Page;
