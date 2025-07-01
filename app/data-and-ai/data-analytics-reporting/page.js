import {
  AnalyticsBanner,
  AnalyticsSec,
  BusinessSec,
  CustomSec,
  DashboardSec,
  RealSec,
} from "../../component/DataAnalyticsReporting/DataAnalyticsReporting.jsx";
import React from "react";
import BannerwithButtonBg from "../../assets/DigitalEngineering/Product/BannerwithButton.webp";
import { BannerSection } from "../../component/utilities/InfraSectorSec";
import { ContactSecDataAi } from "../../component/utilities/ChallengeSolutionDataAi";

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
            Transform data into decisive
            <br className="hidden md:block" />
            action – with us
          </>
        }
        buttonText="Know More"
        buttonLink="#"
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
