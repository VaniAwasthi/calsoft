import React from "react";
import {
  CardList,
  CardSection,
  HeroSection,
} from "@/app/component/workshop-listing-page/WorkshopListing";
import Connect from "@/app/component/infra/Connect";
import bobby from "@/app/assets/insights/events/Bobby-Mathews.webp";
import mohsin from "@/app/assets/insights/events/Mohsin-Khazi.webp";
import { ContactSec } from "@/app/component/industries/hitech/BlogSection";
import { ContactSecDataAi } from "@/app/component/utilities/ChallengeSolutionDataAi";

export default function Page() {
  return (
    <>
      <HeroSection
        title={"Calsoft Events"}
        subTitle={
          "Events with Purpose, Connections with Impact"
        }
        buttonText={"Talk to Experts"}
      />
      <CardSection
        data={[
          {
            breadcrumb: "AI | Security | Gaps",
            title:
              "Showcasing enterprise-ready engineering expertise at Cisco Live 2025 — driving innovation in networking, AI, and cloud.",
            date: "Sept 12, 2025",
            duration: "120 min",
            speakers: [
              {
                name: "Bobby Mathews",
                title: "Senior Director",
                image: bobby,
              },
              {
                name: "Mohsin-Khazi",
                title: "Technical Director",
                image: mohsin,
              },
            ],
          },
          {
            breadcrumb: "AI | Security | Gaps",
            title:
              "Exploring AI-powered innovation and future-ready solutions at NVIDIA AI Summit India 2024.",
            date: "Sept 12, 2025",
            duration: "120 min",
            speakers: [
              {
                name: "Bobby Mathews",
                title: "Senior Director",
                image: bobby,
              },
              {
                name: "Mohsin-Khazi",
                title: "Technical Director",
                image: mohsin,
              },
            ],
          },
        ]}
      />
      <CardList
        data={[
          {
            breadcrumb: "AI | Security | Gaps",
            title:
              "Showcasing enterprise-ready engineering expertise at Cisco Live 2025 — driving innovation in networking, AI, and cloud.",
            date: "Sept 12, 2025",
            duration: "120 min",
            speakers: [
              {
                name: "Bobby Mathews",
                title: "Senior Director",
                image: bobby,
              },
              {
                name: "Mohsin-Khazi",
                title: "Technical Director",
                image: mohsin,
              },
            ],
          },
          {
            breadcrumb: "AI | Security | Gaps",
            title:
              "Exploring AI-powered innovation and future-ready solutions at NVIDIA AI Summit India 2024.",
            date: "Sept 12, 2025",
            duration: "120 min",
            speakers: [
              {
                name: "Bobby Mathews",
                title: "Senior Director",
                image: bobby,
              },
              {
                name: "Mohsin-Khazi",
                title: "Technical Director",
                image: mohsin,
              },
            ],
          },
          {
            breadcrumb: "AI | Security | Gaps",
            title:
              "Engaging with the global networking community at Cisco Live 2024 — driving value through modernization and engineering services.",
            date: "Sept 12, 2025",
            duration: "120 min",
            speakers: [
              {
                name: "Bobby Mathews",
                title: "Senior Director",
                image: bobby,
              },
              {
                name: "Mohsin-Khazi",
                title: "Technical Director",
                image: mohsin,
              },
            ],
          },

          {
            breadcrumb: "AI | Security | Gaps",
            title:
              "Presenting expertise in VMware, NSX, and multi-cloud modernization at VMware Explore Las Vegas 2024.",
            date: "Sept 12, 2025",
            duration: "120 min",
            speakers: [
              {
                name: "Bobby Mathews",
                title: "Senior Director",
                image: bobby,
              },
              {
                name: "Mohsin-Khazi",
                title: "Technical Director",
                image: mohsin,
              },
            ],
          },
        ]}
      />
    <ContactSecDataAi lightContent="Network with leaders and gain actionable insights."/>
    </>
  );
}
