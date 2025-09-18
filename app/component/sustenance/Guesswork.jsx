"use client";

import React from "react";

export default function Guesswork({
  stepsData = [
    {
      heading: "Assess",
      title: "Review current state:",
      desc: "tool sprawl, gaps, ownership",
    },
    {
      heading: "Classify",
      title: "Group docs by usage:",
      desc: "internal, customer, compliance",
    },
    {
      heading: "Normalize",
      title: "Define structure, format, tags, naming standards",
      desc: null,
    },
    {
      heading: "Create/Migrate",
      title: "Draft, import, link to pipelines, set review cadence",
      desc: null,
    },
    {
      heading: "Maintain",
      title: "Version control, review cycles, dashboard visibility",
      desc: null,
    },
  ],
  output = "Output: Docs Framework + Audit Map + Knowledge Access Model",
}) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6 my-10">
        {stepsData.map((ele, idx) => (
          <Card data={ele} key={idx} idx={idx} />
        ))}
      </div>
      <p className="text-2xl font-medium bg-[#ffffff] bg-[linear-gradient(270deg,rgba(255,255,255,1)_70%,rgba(0,0,0,0.3)_100%)] px-4 py-2.5">
        {output}
      </p>
    </>
  );
}

export function Card({ data, idx }) {
  return (
    <div className="bg-[#ffffff] bg-[linear-gradient(60deg,rgba(255,255,255,1)_70%,rgba(0,0,0,0.3)_100%)] h-72 border-2 border-gray-300 rounded-3xl py-4 px-3 flex flex-col gap-1.5 relative">
      {data.heading && <p className="text-2xl font-bold">{data.heading}</p>}
      <div>
        {data.title && <p className="text-lg font-medium">{data.title}</p>}
        {data.desc && <p className="text-lg font-light">{data.desc}</p>}
      </div>
      <div className="absolute bottom-0 right-0">
        <svg
          width="86"
          height="120"
          viewBox="0 0 86 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M85.7138 5.6473V104.34C85.7138 112.538 79.0548 119.188 70.8306 119.188H14.869C6.65904 119.188 0 112.538 0 104.34V48.4577C0 40.2593 6.65904 33.5955 14.869 33.5955H53.9838L75.4264 2.45038C78.5568 -2.11057 85.6996 0.120173 85.6996 5.6473H85.7138Z"
            fill="#2E3092"
          />
        </svg>
        <p className="text-white text-5xl absolute bottom-5 right-3.5 font-semibold">
          0{idx + 1}
        </p>
      </div>
    </div>
  );
}
