import React from "react";
import {
  AgenticBanner,
  AgenticChallengeSec,
  AiOopsSec,
  LifecycleSec,
  MonitorSec,
  UseSec,
} from "../../component/AgenticAIPlanning/AgenticAIPlanning.jsx";
import { BannerSection } from "../../component/utilities/InfraSectorSec.jsx";
import BannerwithButtonBg from "../../assets/DigitalEngineering/Product/BannerwithButton.webp";
import { ContactSecDataAi } from "../../component/utilities/ChallengeSolutionDataAi.jsx";

function page() {
  return (
    <>
      <AgenticBanner />
      <AgenticChallengeSec />
      <AiOopsSec />
      <UseSec />
      <BannerSection
        backgroundImage={BannerwithButtonBg}
        title={
          <>
            Deploy AI agents with built-in oversight,
            <br className="hidden md:block" />
            we help you scale responsibly
          </>
        }
        buttonText="Know More"
        buttonLink="#"
      />
      <MonitorSec />
      <LifecycleSec />
      <ContactSecDataAi
        BoldContent="Let’s talk!"
        lightContent="Want to create a connected, intelligent, & resilient manufacturing ecosystem? "
        link="#"
      />
    </>
  );
}

export default page;
