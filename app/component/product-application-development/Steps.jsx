import React from "react";
import line2 from "../../assets/DigitalEngineering/maturity/line2.svg";
import line3 from "../../assets/DigitalEngineering/maturity/line3.svg";

import mobile2 from "../../assets/DigitalEngineering/maturity/mobile2.svg";
import mobile3 from "../../assets/DigitalEngineering/maturity/mobile3.svg";
import { SprintTimeline } from "../utilities/DoCases";
import buttonImage from "../../assets/home/buttonImg.webp";

export default function Steps() {
  const buttonText = "Start Today";
  const link = "#";
  const steps = [
    {
      day: "Day 0",
      title: "Kickoff & Alignment",
      points: [
        "Define objectives, stakeholders, and scope",
        "Confirm tech readiness, legacy constraints (if any)",
        "Lock calendar & tools for collaborative sessions",
      ],
      output: "Sprint Plan & Alignment Document",
      arrowDesktop: line2,
      arrowMobile: mobile2,
    },
    {
      day: "Day 1-3",
      title: "Discovery & Business Mapping",
      points: [
        "Understand business goals, use cases, user personas",
        "Gather existing artifacts (BRDs, user flows, infra snapshots)",
        "Identify critical success factors and risks",
      ],
      output: "Functional Decomposition + High-level Use Case Map",
      arrowDesktop: line3,
      arrowMobile: mobile3,
    },
    {
      day: "Day 4-6",
      title: "Solution Architecture Design",
      points: [
        "Define system architecture (cloud-native, hybrid, etc.)",
        "Create logical & physical diagrams",
        "Define API strategy, microservices, integration points",
      ],
      output: "Architecture Blueprint + Tech Stack Recommendation",
      arrowDesktop: line2,
      arrowMobile: mobile2,
    },
    {
      day: "Day 7-8",
      title: "MVP Definition & Infra Planning",
      points: [
        "Prioritize features into MVP vs Future Phase",
        "Estimate infra needs, deployment models, scalability paths",
        "Align on security, compliance, and data flows",
      ],
      output: "MVP Scope + Infra & Deployment Plan",
      arrowDesktop: line3,
      arrowMobile: mobile3,
    },
    {
      day: "Day 9-10",
      title: "Validation & Roadmap",
      points: [
        "Final architecture review with key stakeholders",
        "Gap identification and change recommendations",
        "Delivery of complete sprint package",
      ],
      output: "Final Sprint Pack (PPT + PDF + Editable Artifacts)",
      arrowDesktop: null,
      arrowMobile: null,
    },
  ];

  return (
    <>
      <SprintTimeline
        steps={steps}
        heading="Sprint Breakdown (10 Working Days)"
        buttonText={buttonText}
        link={link}
        ButtonImage={buttonImage}
      />
    </>
  );
}
