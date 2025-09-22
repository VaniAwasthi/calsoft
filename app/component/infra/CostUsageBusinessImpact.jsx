import React from "react";
import { BusinessValue } from "../utilities/DoCases";
import imginter from "../../assets/DigitalEngineering/smart/imginter.webp";
import BusinessImpact from "@/app/assets/infra/businessImpact.webp"
import ButtonImage from "../../assets/home/buttonImg.webp";
import businessimg from "../../assets/DigitalEngineering/maturity/business.webp";

export const CostUsageBusinessImpact = (
  {
    id = "business-impact",
    businessValueData={
    heading: "Business Value",
    subheading: "Efficient, transparent, and predictable cloud usage",
    description:
      null,
    buttonText: "Request Use Cases",
    backgroundImage: BusinessImpact,
    valueItems: [
      {
        title: "20–40%",
        subtitle: "reduction in cloud bills within 3 months",
      },
      {
        title: "<30-day",
        subtitle: "ROI payback for optimization deployments",
      },
      {
        title: "Improved resource",
        subtitle: "utilization (up to 70–80% CPU/memory efficiency)",
      },
      {
        title: "Cost allocation",
        subtitle: "granularity down to team, app, or environment",
      },
      {
        title: "Streamlined budget",
        subtitle: "vs. usage reporting for FinOps visibility",
      },
      {
        title: "Better RI/Savings",
        subtitle: "Plan utilization with >90% commitment usage",
      },
    ],
  }}) => {
    
  return (
    <>
    <div id = {id}>
      <BusinessValue
        {...businessValueData}
        ButtonImage={ButtonImage}
        secId="business-value"
        onButtonClick={()=>showHubSpotForm("request-a-custom-roi-projection")}
      />
      </div>
    </>
  );
}