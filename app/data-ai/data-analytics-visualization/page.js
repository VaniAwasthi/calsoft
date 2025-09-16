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

export default function Page() {
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
            Improve KPI visibility by 3x with live dashboards.
            <br className="hidden md:block" />
          </>
        }
        buttonText="Book a Meeting"
        buttonLink="#"
        onButtonClick={() => showHubSpotForm("book-a-meeting")}
      />
      <CustomSec />
      <RealSec />
      <ContactSecDataAi
        BoldContent=""
        lightContent= "It’s about a conversation – how to structure data analytics just the right way"
        link="#"
      />
    </>
  );
}
