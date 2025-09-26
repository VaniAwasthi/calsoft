"use client";
import React from "react";
import BannerLayout from "../component/utilities/BannerLayout";
import { Core, Deep, Digital, Ecosystem, Stages, Testing } from "../component/digitalproductengineering/DigitalStagesCoreEcosystemTestingDeep";
import { ContactSecDataAi } from "../component/utilities/ChallengeSolutionDataAi";

const page = () => {
  return (
    <>
      {/* <BannerLayout /> */}
      <Digital />
      <Stages secId="benefits" />
      <Core />
      <Ecosystem />
      <Testing />
      <Deep />

      <ContactSecDataAi
        BoldContent="Our services speak for themselves, but we can talk too!”"
      />

    </>
  );
};

export default page;
