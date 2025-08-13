import React from "react";
import ButtonLayout from "../utilities/ButtonLayout";
import buttonImage from "../../assets/home/buttonImg.webp";

export default function WhyCalsoft({
  sectionDescription = "Unlike generalist cloud consultants, Calsoft brings a tech-first, product-driven mindset. Here’s how we stand apart:",
  buttonText = "Download Case Study",
  data = {
    tableHeadings: ["Feature", "Calsoft", "Traditional Vendors"],
    tableContent: [
      {
        name: "Workload Suitability Mapping",
        calsoft: "Yes",
        vendor: "Generic Mapping",
      },
      {
        name: "DevOps-Aware Infra Planning",
        calsoft: "Integrated",
        vendor: "Afterthought",
      },
      {
        name: "IP-led Cost & Performance Tools",
        calsoft: "Available",
        vendor: "Manual Calculations",
      },
      {
        name: "AI-Driven Optimization Insights",
        calsoft: "Built-In",
        vendor: "Lacking",
      },
      {
        name: "OEM Co-Engineering Partnerships",
        calsoft: "Active",
        vendor: "Limited",
      },
    ],
  },
}) {
  const CheckIcon = () => (
    <div className="w-8 h-8 bg-[#2e3092] rounded-full flex items-center justify-center flex-shrink-0">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M13 4L6 11L3 8"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );

  const CrossIcon = () => (
    <div className="w-8 h-8 bg-[#ba0007] rounded-full flex items-center justify-center flex-shrink-0">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M12 4L4 12M4 4L12 12"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
  return (
    <div className="max-w-7xl mx-auto px-6 container">
      <div className="h-8" />
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-8 bg-[linear-gradient(to_right,#2E3092_5%,#ED1C24_18%)] bg-clip-text text-transparent">
          Why Calsoft
        </h1>

        <div className="flex justify-between items-center mb-12">
          <div className="max-w-2xl">
            <h2 className="text-[#000000] text-3xl font-bold mb-4">
              Competitive Edge
            </h2>
            <p className="text-[#000000] text-lg leading-relaxed">
              Cloud migration is not a copy-paste operation — it’s a strategic
              transformation. Calsoft is uniquely positioned to deliver:
            </p>
          </div>

          <ButtonLayout
            text={"Download Case Study"}
            image={buttonImage}
            hoverImage={buttonImage}
            className={"w-fit"}
          />
        </div>
      </div>

      {/* Comparison Table */}
      <div className="border border-[#e3e3e3]">
        {/* Table Header */}
        <div className="bg-[#2e3092] text-white grid grid-cols-3 py-6 px-8">
          {data.tableHeadings.map((heading, i) => (
            <div key={heading} className={`text-2xl font-bold`}>
              {heading}
            </div>
          ))}
        </div>

        {/* Table Rows */}
        {data.tableContent.map((feature, index) => (
          <div
            key={feature.name}
            className={`grid grid-cols-3 py-6 px-8 items-center ${
              index % 2 === 0 ? "bg-[#f2f0f5]" : "bg-white"
            }`}
          >
            {/* Feature Name */}
            <div className="text-[#000000] text-xl font-medium">
              {feature.name}
            </div>

            {/* Calsoft Column */}
            <div className="flex items-center justify-start gap-3">
              <CheckIcon />
              <span className="text-[#000000] text-xl font-medium">
                {feature.calsoft}
              </span>
            </div>

            {/* Vendor Column */}
            <div className="flex items-center justify-start gap-3">
              <CrossIcon />
              <span className="text-[#000000] text-xl font-medium">
                {feature.vendor}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="h-10" />
    </div>
  );
}
