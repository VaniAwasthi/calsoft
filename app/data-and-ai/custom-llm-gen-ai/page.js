import {
  AnalyticsSec,
  CustomBanner,
  EnterpriseSec,
  LlmSec,
  SystemSec,
} from "../../component/customLlmGenAi/CustomLlmGgenAi.jsx";
import { BannerSection } from "../../component/utilities/InfraSectorSec";
import React from "react";
import BannerwithButtonBg from "../../assets/DigitalEngineering/Product/BannerwithButton.webp";
import { ContactSecDataAi } from "../../component/utilities/ChallengeSolutionDataAi";

function page() {
  return (
    <>
      <CustomBanner />
      <AnalyticsSec />
      <LlmSec />
      <BannerSection
        backgroundImage={BannerwithButtonBg}
        title={
          <>
            Customize, ground, and scale
            <br className="hidden md:block" />
            enterprise-ready language models
          </>
        }
        buttonText="Know More"
        buttonLink="#"
      />
      <EnterpriseSec />
      <SystemSec />
      <ContactSecDataAi
        BoldContent="Let’s talk!"
        lightContent="Want to create a connected, intelligent, & resilient manufacturing ecosystem? "
        link="#"
      />
    </>
  );
}

export default page;
