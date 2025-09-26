"use client";
import { WebinarList } from "../../component/webinar/WebinarList.jsx";
import { ContactSec } from "../../component/industries/hitech/BlogSection.jsx";
import { BannerInfo } from "../../component/infographic/BannerTabsFilter.jsx";
import React from "react";
import Banner from "../../assets/insights/whitepaper.webp"

const Page = () => {
  return (
    <>
      <BannerInfo heading="Interactive sessions with experts on industry trends and solutions." BannerBg={Banner}/>
      <WebinarList />
      <ContactSec
        lightContent="Join Calsoft webinars to explore technology in action."
      />
    </>
  );
};

export default Page;
