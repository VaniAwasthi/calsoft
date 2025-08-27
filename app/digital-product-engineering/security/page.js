"use client";

import {
  DevSec,
  Endpoint,
  IdentitySec,
  SecurityChallenge,
  SecurityTab,
  ServiceSec,
  SreSec,
  ZeroSec,
} from "../../component/security-services/SecurityChllengeInfo.jsx";
import {
  BannerSection,
  ContactSecData,
} from "../../component/utilities/InfraSectorSec.jsx";
import React from "react";
import BannerwithButtonBg from "../../assets/DigitalEngineering/security/knowMore.svg";
import { showHubSpotForm } from "../../component/utilities/showHubSpotForm"; // import utility

export default function Page() {
  return (
    <>
      <SecurityTab />
      <SecurityChallenge />
      <Endpoint />
      <IdentitySec />
      <DevSec />
      <BannerSection
        backgroundImage={BannerwithButtonBg}
        title="Improve security posture by 70% with zero trust."
        buttonText="Book a Meeting"
        buttonLink="#"
        onButtonClick={() => showHubSpotForm("book-a-meeting")}
      />
      <ZeroSec />
      <ServiceSec />
      <SreSec />
      <ContactSecData
        BoldContent="Protect endpoints, identities, and networks with multi-layered security strategies"
        lightContent="Calsoft"
        link="#"
      />
    </>
  );
}
