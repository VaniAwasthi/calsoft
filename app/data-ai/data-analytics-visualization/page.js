"use client";
import {
  AnalyticsBanner,
  AnalyticsSec,
  BusinessSec,
  CustomSec,
  DashboardSec,
  RealSec,
} from "../../component/DataAnalyticsReporting/DataAnalyticsReporting.jsx";
import React from "react";
import BannerwithButtonBg from "../../assets/Data-Ai/analytics/KnowMore.webp";
import { BannerSection } from "../../component/utilities/InfraSectorSec.jsx";
import { ContactSecDataAi } from "../../component/utilities/ChallengeSolutionDataAi.jsx";

import { showHubSpotForm } from "../../component/utilities/showHubSpotForm"; // import utility

function page() {
  return (
    <>
      <AnalyticsBanner />
      <AnalyticsSec />
      <DashboardSec />
      <BusinessSec />
      <BannerSection
        backgroundImage={BannerwithButtonBg}
        title={
          <>
            Transform data into decisive {""}
            <br className="hidden md:block" />
            action – with us
          </>
        }
        buttonText="Book a Meeting"
        buttonLink="#"
        onButtonClick={() => showHubSpotForm("book-a-meeting")}
      />
      <CustomSec />
      <RealSec />
      <ContactSecDataAi
        BoldContent="Let’s talk!"
        lightContent="Want to create a connected, intelligent, & resilient manufacturing ecosystem? "
        link="#"
      />
    </>
  );
}

export default page;
