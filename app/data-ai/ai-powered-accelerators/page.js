import {
  AiBanner,
  AiChallengeSec,
  CalPsrSec,
  CalTiaSec,
  CalsoftSec,
  ECalsoftSec,
} from "../../component/aIPoweredAcceleratorsServices/AIPoweredAccelerators.jsx";
import { BannerSection } from "../../component/utilities/InfraSectorSec.jsx";
import React from "react";
import BannerwithButtonBg from "../../assets/Data-Ai/ai-accelerate/KnowMore.webp";
import { ContactSecDataAi } from "../../component/utilities/ChallengeSolutionDataAi.jsx";

function page() {
  return (
    <>
      <AiBanner />
      <AiChallengeSec />
      <CalTiaSec />
      <CalPsrSec />
      <BannerSection
        backgroundImage={BannerwithButtonBg}
        title={
          <>
            Pre-built intelligence (accelerators)
            <br className="hidden md:block" />
            to fast-track impact
          </>
        }
        buttonText="Book a Meeting"
        buttonLink="#"
      />
      <ECalsoftSec />
      <CalsoftSec />
      <ContactSecDataAi
        BoldContent="Let’s talk!"
        lightContent="Want to create a connected, intelligent, & resilient manufacturing ecosystem? "
        link="#"
      />
    </>
  );
}

export default page;
