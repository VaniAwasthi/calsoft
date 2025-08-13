import React from "react";
import ButtonLayout from "../utilities/ButtonLayout";
import buttonImage from "../../assets/home/buttonImg.webp";

export default function IntelligentPlanning() {
  const data = [
    {
      title: "Workload Rationalization",
      subTitle:
        "using 6R framework (Rehost, Refactor, Replatform, Repurchase, Retire, Retain)",
    },
    {
      title: "Dependency Mapping",
      subTitle: "via automated tools",
    },
    {
      title: "Business Impact Heatmaps",
      subTitle: "to prioritize based on risk and value",
    },
    {
      title: "TCO Estimation",
      subTitle: "across cloud providers",
    },
    {
      title: "Security & Compliance Mapping",
      subTitle: "to ensure regulated workload migration",
    },
  ];
  return (
    <div className="container">
      <div className="h-8" />
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-3 bg-[linear-gradient(to_right,#2E3092_5%,#ED1C24_18%)] bg-clip-text text-transparent leading-16">
          Intelligent Planning
        </h1>

        <div className="flex justify-between items-center mb-8">
          <div className="max-w-2xl">
            <h2 className="text-[#000000] text-3xl font-bold mb-4">
              Move What Matters, Not Just What Exists
            </h2>
            <p className="text-[#000000] text-lg leading-relaxed">
              We don’t just move workloads — we evaluate, prioritize, and
              engineer them for performance and ROI. Calsoft’s approach
              includes:
            </p>
          </div>

          <ButtonLayout
            text={"Get a Free 6R Analysis Report"}
            image={buttonImage}
            hoverImage={buttonImage}
            className={"w-fit"}
          />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-5">
        {data.map((ele, idx) => (
          <div
            className={`p-6 space-y-4 text-center ${
              idx == 0
                ? "shadow-[0_20px_25px_-5px_#ba0007,_0_10px_10px_-5px_#ba0007] bg-[#2E3092] text-white"
                : "shadow-xl bg-[#f9f9f9]"
            } rounded-lg`}
          >
            <p className="text-2xl font-bold">{ele.title}</p>
            <p className="text-lg">{ele.subTitle}</p>
          </div>
        ))}
      </div>
      <div className="h-10" />
    </div>
  );
}
