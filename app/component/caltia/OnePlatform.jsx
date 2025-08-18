import React from "react";

export default function OnePlatform() {
  const data = [
    {
      title: "Predictive Test Recommendation",
      points: [
        "Intelligently selects the most relevant tests based on code changes using predictive test analytics",
        "Intelligently selects the most relevant tests based on code changes using predictive test analytics",
        "Ensure efficient and optimized testing cycles",
        "Accelerates release cycles and lowers infrastructure costs with automated regression testing",
      ],
    },
    {
      title: "Intuitive Interface and Reporting",
      points: [
        "Intelligently selects the most relevant tests based on code changes using predictive test analytics",
        "Intelligently selects the most relevant tests based on code changes using predictive test analytics",
        "Ensure efficient and optimized testing cycles",
        "Accelerates release cycles and lowers infrastructure costs with automated regression testing",
      ],
    },
  ];
  return (
    <div className="container">
      <div className="h-8" />
      <p className="text-[38px] font-semibold bg-[linear-gradient(to_right,#2E3092_0%,#ED1C24_50%)] bg-clip-text text-transparent">
        One Platform. Multiple Features. Smarter Testing
      </p>
      <div className="h-8" />
    </div>
  );
}
