import {
  AiBanner,
  AiChallengeSec,
  CalPsrSec,
  CalTiaSec,
  CalsoftSec,
  ECalsoftSec,
} from "../../component/aIPoweredAcceleratorsServices/AIPoweredAccelerators.jsx";
import { BannerSection } from "../../component/utilities/InfraSectorSec";
import React from "react";
import BannerwithButtonBg from "../../assets/DigitalEngineering/Product/BannerwithButton.webp";
import { ContactSecDataAi } from "../../component/utilities/ChallengeSolutionDataAi";

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
        buttonText="Know More"
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
