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
import BannerwithButtonBg from "../../assets/Data-Ai/dataGovernance/KnowMore.webp";
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
          <p className="px-1">
            Turn compliance into a {""}
            <br className="hidden md:block px-2" />
            competitive advantage.
            <br className="hidden md:block " />
            <b> Let’s Talk!</b>
          </p>
        }
        buttonText="Book a Meeting"
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
