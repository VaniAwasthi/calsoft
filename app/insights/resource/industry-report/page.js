"use client";
import { ContactSec } from "../../../component/industries/hitech/BlogSection.jsx";
import {
  BannerInfo,
  TabsInfo,
} from "../../../../component/infographic/BannerTabsFilter.jsx";
import React from "react";

const Page = () => {
  return (
    <>
      <BannerInfo heading="We can do it to divide myself knowledge" />
      <TabsInfo defaultTab="industry-reports" />
      <ContactSec
        lightContent="Want to create a connected, intelligent, & resilient manufacturing ecosystem? "
        link="#"
      />
    </>
  );
};

export default Page;
