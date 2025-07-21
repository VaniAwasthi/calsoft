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
