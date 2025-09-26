"use client";
import React from "react";

const data = [
  { outcome: "Reduced Task Abandonment", impact: "↓ by up to 45%" },
  { outcome: "Decision-Making Acceleration", impact: "↑ by 2.7x in approval-based systems" },
  { outcome: "Time-to-Train for New Users", impact: "↓ by 50–70%" },
  { outcome: "Cost of Redesign / Rework", impact: "↓ by 30–40% post AI-driven prototyping" },
  { outcome: "Feature Adoption Consistency", impact: "↑ by 80% with flow-based nudges" },
];

export default function BusinessOutcomes() {
  return (
    <section className="w-full max-w-7xl mx-auto px-15 py-10">
      {/* Title */}
      <h2 className="text-2xl md:text-4xl font-semibold bg-[linear-gradient(to_right,#2E3092_10%,#ED1C24_28%)] bg-clip-text text-transparent">
        Business Outcomes— Beyond UI Metrics
      </h2>
      <p className="text-gray-600 mt-1">
        When your interface thinks like your user, you win on:
      </p>

      {/* Table */}
      <div className="mt-8 overflow-x-auto">
        <table className="w-full border-collapse rounded-lg shadow-md">
          <thead>
            <tr className="bg-[#2c2f7f] text-white text-left">
              <th className="py-4 px-6 font-medium">Outcome</th>
              <th className="py-4 px-6 font-medium">Quantified Impact</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr
                key={idx}
                className={`${idx % 2 === 1 ? "bg-[#f6f8fb]" : "bg-white"} border-b`}
              >
                <td className="py-4 px-6">{row.outcome}</td>
                <td className="py-4 px-6 flex items-center gap-2">
                  {/* White tick in blue circle */}
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#2c2f7f]">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {row.impact}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
