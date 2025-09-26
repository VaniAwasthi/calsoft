"use client";

import React from "react";
import {
  AgenticBanner,
  AgenticChallengeSec,
  AiOopsSec,
  LifecycleSec,
  MonitorSec,
  UseSec,
} from "../../component/AgenticAIPlanning/AgenticAIPlanning.jsx";
import { BannerSection } from "../../component/utilities/InfraSectorSec.jsx";
import BannerwithButtonBg from "../../assets/Data-Ai/agenetic/knowMore.webp";
import { ContactSecDataAi } from "../../component/utilities/ChallengeSolutionDataAi.jsx";
import { showHubSpotForm } from "../../component/utilities/showHubSpotForm"; // import utility

export default function Page() {
  return (
    <>
      <AgenticBanner />
      <AgenticChallengeSec 
      data={[
          {
            tag: "AIOps Design",
            challenge:
              "How to architect intelligent agents for IT operations and autonomy?",
            solution:
              "Collaborate to scope, model, and test agent roles aligned with specific enterprise goals",
          },
          {
            tag: "Purpose built Agents",
            challenge:
              "Finding it difficult to define agent boundaries and business outcomes?",
            solution:
              "Modular, purpose-driven AI agents with embedded learning and monitoring logic",
          },
          {
            tag: "Oversight and Safety",
            challenge:
              "Concerned about lack of visibility into autonomous agent behavior?",
            solution:
              "Supervision layers for real-time observation, intervention, and behaviour correction",
          },
          {
            tag: "Lifecycle Management",
            challenge:
              "Struggling to maintain, evolve, or retire AI agents effectively and consistently?",
            solution:
              "Frameworks for continuous learning, feedback integration, and version governance",
          },
        ]}
      />
      <AiOopsSec />
      <UseSec />
      <BannerSection
        backgroundImage={BannerwithButtonBg}
        title={
          <>
            Accelerate AI use-case delivery by 3x speed.
            <br className="hidden md:block" />
          </>
        }
        buttonText="Book a Meeting"
        buttonLink="#"
        onButtonClick={() => showHubSpotForm("book-a-meeting")}
      />
      <MonitorSec />
      <LifecycleSec />
      <ContactSecDataAi
        lightContent="Architect autonomy with accountability. Build smarter systems with Calsoft"
        link="#"
      />
    </>
  );
}
