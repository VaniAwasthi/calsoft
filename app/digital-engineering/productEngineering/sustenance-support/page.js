import {
  MultiSec,
  ReleaseSec,
  StreamlineSec,
  SustenanceChallenge,
  SustenanceTab,
  Technical,
  UptimeSec,
} from "../../../app/component/sustenanceSupport/Sustenance";
import {
  BannerSection,
  ContactSecData,
} from "../../../app/component/utilities/InfraSectorSec";
import React from "react";
import BannerwithButtonBg from "../../../assets/DigitalEngineering/Product/BannerwithButton.webp";
function page() {
  return (
    <>
      <SustenanceTab />
      <SustenanceChallenge />
      <ReleaseSec />
      <StreamlineSec />
      <Technical />
      <BannerSection
        backgroundImage={BannerwithButtonBg}
        title={
          <>
            Manage releases, updates, and platform
            <br className="hidden md:block" />
            enhancements without service disruption
          </>
        }
        buttonText="Know More"
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
