import {
  ComplianceSec,
  DataJounery,
  DataSolutionSec,
  ProactiveSec,
  Real2Sec,
  RealSec,
} from "../../component/dataObservability/DataObservability.jsx";
import { BannerSection } from "../../component/utilities/InfraSectorSec.jsx";
import React from "react";
import BannerwithButtonBg from "../../assets/Data-Ai/data-observibility/KnowMoreBg.webp";
import { ContactSecDataAi } from "../../component/utilities/ChallengeSolutionDataAi.jsx";

function page() {
  return (
    <>
      <DataJounery />
      <DataSolutionSec />
      <RealSec />
      <ComplianceSec />
      <BannerSection
        backgroundImage={BannerwithButtonBg}
        title={
          <p className="px-1">
            Protect your data integrity <br className="hidden md:block px-2" />{" "}
            and build operational resilience
          </p>
        }
        buttonText="Book a Meeting"
        buttonLink="#"
      />
      <Real2Sec />
      <ProactiveSec />
      <ContactSecDataAi
        BoldContent="Let’s talk! "
        lightContent="Want to create a connected, intelligent, & resilient manufacturing ecosystem? "
        link="#"
      />
    </>
  );
}

export default page;
