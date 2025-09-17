"use client";
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

import { showHubSpotForm } from "../../component/utilities/showHubSpotForm.js"; // import utility

export default function Page() {
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
            Improve data quality by 60% through governance.
            <br className="hidden md:block px-2" />
           
            <br className="hidden md:block " />
            <b></b>
          </p>
        }
        buttonText="Book a Meeting"
        buttonLink="#"
        onButtonClick={() => showHubSpotForm("book-a-meeting")}
      />
      <PolicySec />
      <CollaborationSec />
      <ContactSecDataAi
        BoldContent=""
        lightContent="Establish lasting data trust – ensure governance with Calsoft"
        link="#"
      />
    </>
  );
}
