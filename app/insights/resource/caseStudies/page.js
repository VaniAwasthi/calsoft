"use client";
import { ContactSec } from "@/app/component/industries/hitech/BlogSection";
import {
  BannerInfo,
  TabsInfo,
} from "@/app/component/infographic/BannerTabsFilter";
import React from "react";

const Page = () => {
  return (
    <>
      <BannerInfo heading="We can do it to divide myself knowledge" />
      <TabsInfo defaultTab="case-studies" />
      <ContactSec
        lightContent="Want to create a connected, intelligent, & resilient manufacturing ecosystem? "
        link="#"
      />
    </>
  );
};

export default Page;
