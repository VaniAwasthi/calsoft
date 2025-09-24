import React from "react";
import { BusinessValue } from "../utilities/DoCases";
import imginter from "../../assets/DigitalEngineering/smart/imginter.webp";
import ButtonImage from "../../assets/home/buttonImg.webp";
import businessimg from "../../assets/DigitalEngineering/maturity/business.webp";
import BusinessImpact from "@/app/assets/infra/businessImpact.webp";

export const SREBusinessImpact = ({
  id = "business-impact",
  businessValueData = {
    heading: "Business Value",
    subheading: "From firefighting to future-proofing",
    description: null,
    buttonText: "Download ROI Sheet",
    backgroundImage: BusinessImpact,
    valueItems: [
      {
        title: "Up to 60%",
        subtitle: "reduction in unplanned downtime",
      },
      {
        title: "Faster MTTR",
        subtitle: "with intelligent alert routing and automated remediation",
      },
      {
        title: "Consistent SLO",
        subtitle: "adherence across business-critical systems",
      },
      {
        title: "Lower ops overhead",
        subtitle: "via automation and runbook reuse",
      },
      {
        title: "Continuous improvement",
        subtitle: "loop via RCAs and feedback",
      },
      //   {
      //     title: "Better RI/Savings",
      //     subtitle: "Plan utilization with >90% commitment usage",
      //   },
    ],
  },
}) => {
  return (
    <>
      <div id={id}>
        <BusinessValue
          {...businessValueData}
          ButtonImage={ButtonImage}
          secId="business-value"
          onButtonClick={() =>
            showHubSpotForm("request-a-custom-roi-projection")
          }
        />
      </div>
    </>
  );
};
