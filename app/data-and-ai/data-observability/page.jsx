import {
  ComplianceSec,
  DataJounery,
  DataSolutionSec,
  ProactiveSec,
  Real2Sec,
  RealSec,
} from "@/app/component/dataObservability/DataObservability";
import { BannerSection } from "../../../app/component/utilities/InfraSectorSec";
import React from "react";
import BannerwithButtonBg from "../../assets/DigitalEngineering/Product/BannerwithButton.webp";
import { ContactSecDataAi } from "../../../app/component/utilities/ChallengeSolutionDataAi";

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
          <>
            Protect your data integrity
            <br className="hidden md:block" />
            and build operational resilience
          </>
        }
        buttonText="Know More"
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
