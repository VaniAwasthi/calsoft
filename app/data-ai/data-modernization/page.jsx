"use client"
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
import BackgroundImage from "../../assets/Data-Ai/data-observibility/oberservabilityBanner.svg";
import { showHubSpotForm } from "@/app/component/utilities/showHubSpotForm.js";

export default function Page() {
  return (
    <>
      <DataJounery
        slide={{
          title: "Data Modernization That Moves the Business Forward",

          description: `Turn legacy data into agile, cloud-first, AI-ready assets—securely and without disruption.`,
          buttonText: "Download Datasheet",
          image: BackgroundImage,
        }}
      />
      <DataSolutionSec 
      data={[
          {
            tag: "Legacy Platforms",
            challenge:
              "Aging data warehouses limit scale and flexibility",
            solution:
              "We replatform monoliths to modern, cloud-native data stacks for agility and cost savings.",
          },
          {
            tag: "Schema Chaos",
            challenge: "Lack of standardization slows innovation",
            solution:
              "We implement governed, interoperable data models across the enterprise.",
          },
          {
            tag: "Modernization Debt",
            challenge:
              "Complex tech debt blocks cloud and AI adoption",
            solution:
              "We decouple and refactor workloads for phased modernization—without disruption.",
          },
          {
            tag: "Access Gaps",
            challenge: "Business teams can’t access or trust the data",
            solution:
              "We democratize access through catalogs, quality checks, and self-serve analytics.",
          },
        ]}
      />
      <RealSec />
      <ComplianceSec />
      <BannerSection
        backgroundImage={BannerwithButtonBg}
        title={
          <p className="px-1">
            Cut data processing latency by 50% enterprise-wide. <br className="hidden md:block px-2" />
          </p>
        }
        buttonText="Book a Meeting"
        onButtonClick={()=>showHubSpotForm("book-a-meeting")}
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
