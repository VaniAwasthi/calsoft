import {
  MultiSec,
  ReleaseSec,
  StreamlineSec,
  SustenanceChallenge,
  SustenanceTab,
  Technical,
  UptimeSec,
} from "../../component/sustenanceSupport/Sustenance.jsx";
import {
  BannerSection,
  ContactSecData,
} from "../../component/utilities/InfraSectorSec.jsx";
import React from "react";
import BannerwithButtonBg from "../../assets/DigitalEngineering/Sustaine/Knowmore.svg";

function page() {
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
      />
      <MultiSec />
      <UptimeSec />
      <ContactSecData
        BoldContent="Extend platform life, maintain stability, and deliver continuous user satisfaction"
        link="#"
      />
    </>
  );
}

export default page;
