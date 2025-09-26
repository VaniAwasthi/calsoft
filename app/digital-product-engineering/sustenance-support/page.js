"use client";

import {
  MultiSec,
  ReleaseSec,
  StreamlineSec,
  SustenanceChallenge,
  SustenanceTab,
  Technical,
  UptimeSec,
} from "../../component/sustenanceSupport/Sustenance.jsx";
import { showHubSpotForm } from "../../component/utilities/showHubSpotForm"; // import utility
import {
  BannerSection,
  ContactSecData,
} from "../../component/utilities/InfraSectorSec.jsx";
import React from "react";
import BannerwithButtonBg from "../../assets/DigitalEngineering/Sustaine/Knowmore.svg";

export default function Page() {
  return (
    <>
      <SustenanceTab />
      <SustenanceChallenge />
      <ReleaseSec />
      <StreamlineSec />

      <BannerSection
        backgroundImage={BannerwithButtonBg}
        title="Reduce downtime by 45% with proactive support."
        buttonText="Book a Meeting"
        buttonLink="#"
        onButtonClick={() => showHubSpotForm("book-a-meeting")}
      />
      <MultiSec />
      <UptimeSec />
      <ContactSecData
        lightContent="Extend platform life, maintain stability, and deliver continuous user satisfaction"
      />
    </>
  );
}
