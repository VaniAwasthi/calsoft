"use client";
import { WebinarList } from "../../component/webinar/WebinarList.jsx";
import { ContactSec } from "../../component/industries/hitech/BlogSection.jsx";
import { BannerInfo } from "../../component/infographic/BannerTabsFilter.jsx";
import React from "react";
import Banner from "../../assets/insights/whitepaper.webp"

const Page = () => {
  return (
    <>
      <BannerInfo heading="" BannerBg={Banner}/>
      <WebinarList />
      <ContactSec
        lightContent="Want to create a connected, intelligent, & resilient manufacturing ecosystem? "
        link="#"
      />
    </>
  );
};

export default Page;
