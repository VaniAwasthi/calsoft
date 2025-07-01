import {
  GovernJounery,
  GovernSolutionSec,
  ProfilingSec,
  CleansingSec,
  PolicySec,
  CollaborationSec,
} from "../../component/DataGovernanceQuality/Datagovernance.jsx";
import { BannerSection } from "../../component/utilities/InfraSectorSec.jsx";
import React from "react";
import BannerwithButtonBg from "../../assets/DigitalEngineering/Product/BannerwithButton.webp";
import { ContactSecDataAi } from "../../component/utilities/ChallengeSolutionDataAi.jsx";

function page() {
  return (
    <>
      <GovernJounery />
      <GovernSolutionSec />
      <ProfilingSec />
      <CleansingSec />
      <BannerSection
        backgroundImage={BannerwithButtonBg}
        title={
          <>
            Turn compliance into a
            <br className="hidden md:block" />
            competitive advantage
            <br className="hidden md:block" />
            <b>let’s talk</b>
          </>
        }
        buttonText="Know More"
        buttonLink="#"
      />
      <PolicySec />
      <CollaborationSec />
      <ContactSecDataAi
        BoldContent="Let’s talk!"
        lightContent="Want to create a connected, intelligent, & resilient manufacturing ecosystem? "
        link="#"
      />
    </>
  );
}

export default page;
