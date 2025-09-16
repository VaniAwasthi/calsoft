import { Check } from "lucide-react";
import { motion } from "framer-motion";

function RoundedArrow({ className = "", turn = "left" }) {
  if (turn == "right")
    return (
      <svg
        width="40"
        height="37"
        viewBox="0 0 40 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M37.4526 14.4343L6.16833 0.468415C4.52352 -0.273645 2.6541 0.0957636 1.39026 1.39049C1.27706 1.5143 1.16386 1.6381 1.07018 1.75942C0.0909643 3.02751 -0.0998722 4.71074 0.60665 6.18918L6.31762 18.0094C6.50968 18.4217 6.51987 18.8872 6.31356 19.2912L0.784296 30.4407C-0.0189023 32.0735 0.274854 33.9725 1.53555 35.2804C2.79626 36.5884 4.68044 36.952 6.33224 36.2033L37.4745 22.1783C39.0141 21.4838 39.9742 19.9897 39.9755 18.3013C39.9659 16.6041 39.0006 15.1193 37.4526 14.4343Z"
          fill="#2E3092"
        />
      </svg>
    );
  else
    return (
      <svg
        width="41"
        height="37"
        viewBox="0 0 41 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M3.23591 14.4343L34.5201 0.468417C36.165 -0.273645 38.0344 0.0957626 39.2982 1.3905C39.4114 1.5143 39.5246 1.63811 39.6183 1.75942C40.5975 3.02751 40.7883 4.71074 40.0818 6.18918L34.3709 18.0094C34.1788 18.4217 34.1686 18.8872 34.3749 19.2912L39.9042 30.4407C40.7074 32.0735 40.4136 33.9725 39.1529 35.2804C37.8922 36.5884 36.008 36.952 34.3562 36.2033L3.21398 22.1783C1.67437 21.4838 0.714286 19.9897 0.712981 18.3013C0.722585 16.6041 1.68784 15.1193 3.23591 14.4343Z"
          fill="#2E3092"
        />
      </svg>
    );
}

function CurvedConnector({ className = "", turn = "right" }) {
  if (turn == "left")
    return (
      <div className={`absolute ${className}`}>
        <svg
          width="214"
          height="319"
          viewBox="0 0 214 319"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.725765 0.000521332L0.725765 15.4845L90.5887 15.4845C92.4072 43.223 104.161 69.1034 124.032 88.9229C143.948 108.787 169.851 120.466 197.661 122.28L197.661 318.219L213.186 318.219L213.186 107.106L205.423 107.106C178.811 107.106 153.794 96.7534 134.988 77.9956C116.181 59.2379 105.802 34.2865 105.802 7.74252L105.802 0.000520079L0.681393 0.000521333L0.725765 0.000521332Z"
            fill="#E9E9E9"
          />
        </svg>
        <RoundedArrow
          className={`absolute -top-[12px] -right[10px]`}
          turn="left"
        />
      </div>
    );
  else
    return (
      <div className={`absolute ${className}`}>
        <svg
          width="214"
          height="319"
          viewBox="0 0 214 319"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transform scale-x-[-1] origin-center"
        >
          <path
            d="M0.725765 0.000521332L0.725765 15.4845L90.5887 15.4845C92.4072 43.223 104.161 69.1034 124.032 88.9229C143.948 108.787 169.851 120.466 197.661 122.28L197.661 318.219L213.186 318.219L213.186 107.106L205.423 107.106C178.811 107.106 153.794 96.7534 134.988 77.9956C116.181 59.2379 105.802 34.2865 105.802 7.74252L105.802 0.000520079L0.681393 0.000521333L0.725765 0.000521332Z"
            fill="#E9E9E9"
          />
        </svg>
        <RoundedArrow
          className={`absolute -top-[12px] -right-[0px]`}
          turn="right"
        />
        {/* <svg
          width="213"
          height="205"
          viewBox="0 0 213 205"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-1.64221e-05 107.4L-1.52588e-05 204.949L15.5242 204.949L15.5242 122.619C43.3347 120.805 69.2823 109.081 89.1533 89.2616C109.069 69.3979 120.778 43.5617 122.597 15.8233L212.371 15.8233L212.371 0.339279L107.383 0.33928L107.383 8.08127C107.383 34.6253 97.0041 59.5766 78.1976 78.3344C59.3912 97.0921 34.375 107.444 7.76208 107.444L-1.64215e-05 107.444L-1.64221e-05 107.4Z"
            fill="#E9E9E9"
          />
        </svg> */}
      </div>
    );
}
const CIRCLE_SPACING = 200; // Fixed spacing between circles in pixels

export default function Component({
  stepsData = [
    {
      id: 1,
      title: "Infra Readiness Review",
      description:
        "Kick off with a structured 60-minute discovery call.\nWe assess your current infra stack across:",
      items: [
        "Architecture maturity",
        "Workload distribution",
        "Tool & platform redundancy",
        "Performance & cost leaks",
      ],
      output: "Preliminary Infra Heatmap + Risk Flags",
      side: "left",
    },
    {
      id: 2,
      title: "Deep-Dive Assessment &\nBenchmarking",
      description:
        "We dive deeper into workload-specific evaluations, performance logs, usage patterns, and compliance requirements.",
      items: [
        "Workload Modernization Recommendations (Rehost/Replatform/Refactor)",
        "Cost Optimization Forecast",
        "Operational Bottleneck Report",
      ],
      output: null,
      side: "right",
    },
    {
      id: 3,
      title: "Roadmap Design & Prioritization",
      description:
        "We co-create a 12–18 month roadmap focused on:",
      items: [
        "Architecture maturity",
        "Workload distribution",
        "Tool & platform redundancy",
        "Performance & cost leaks",
      ],
      output: "Preliminary Infra Heatmap + Risk Flags",
      side: "left",
    },
    {
      id: 4,
      title: "Validation & Buy-in",
      description: "We help you build a business case internally.",
      items: [
        "TCO & ROI Models",
        "Compliance Alignment",
        "Presentation for CXOs / Boards",
      ],
      output: "Data-backed Infra Transformation Proposal",
      side: "right",
    },
    {
      id: 5,
      title: "Execution Blueprint & Handoff",
      description:
        "Once approved, we create a detailed migration and integration execution plan, aligned with your internal teams or implementation partners.",
      items: [
        "Architecture maturity",
        "Workload distribution",
        "Tool & platform redundancy",
        "Performance & cost leaks",
      ],
      output: "Preliminary Infra Heatmap + Risk Flags",
      side: "left",
    },
  ],
}) {
  return (
    <div className="bg-[#ffffff] min-h-screen">
      <div className="h-16"></div>
      <div className="max-w-6xl mx-auto px-8 relative">
        {/* Container with fixed height to accommodate all steps */}
        <div
          className="relative"
          style={{
            height: `${(stepsData.length - 1) * CIRCLE_SPACING + 400}px`,
          }}
        >
          {stepsData.map((step, index) => (
            <div
              key={step.id}
              className="absolute w-full"
              style={{ top: `${index * CIRCLE_SPACING}px` }}
            >
              <div className="relative flex items-start">
                {/* Left Content for odd steps */}
                {step.side === "left" && (
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="w-[45%] pr-16"
                  >
                    {/* <div className="flex items-start gap-3 mb-4"> */}
                    {/* <ChevronRight className="w-6 h-6 text-[#2e3092] mt-1 flex-shrink-0" /> */}
                    <h2 className="text-[28px] font-bold text-[#000000] leading-tight whitespace-pre-line">
                      {step.title}
                    </h2>
                    {/* </div> */}
                    <p className="text-[#000000] text-[16px] leading-relaxed mb-6 whitespace-pre-line">
                      {step.description}
                    </p>
                    {step.items && (
                      <div className="space-y-4 mb-8">
                        {step.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-center gap-3"
                          >
                            <div className="w-6 h-6 bg-[#2e3092] rounded-full flex items-center justify-center flex-shrink-0">
                              <Check className="w-4 h-4 text-[#ffffff]" />
                            </div>
                            <span className="text-[#000000] text-[16px]">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {step.output && (
                      <p className="text-[#000000] text-[16px] font-bold">
                        <span className="font-bold">Output:</span> {step.output}
                      </p>
                    )}
                  </motion.div>
                )}

                {/* Center Circle - positioned at the top of content block */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className="w-[96px] h-[96px] bg-[#2e3092] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-[48px] font-light text-[#ffffff]">
                      {step.id}
                    </span>
                  </div>
                </div>

                {/* Right Content for even steps */}
                {step.side === "right" && (
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="w-[45%] ml-auto pl-16"
                  >
                    {/* <div className="flex items-start gap-3 mb-4">
                      <RoundedArrow
                        className="mt-1 flex-shrink-0"
                        turn="left"
                      /> */}
                    <h2 className="text-[28px] font-bold text-[#000000] leading-tight whitespace-pre-line">
                      {step.title}
                    </h2>
                    {/* </div> */}
                    <p className="text-[#000000] text-[16px] leading-relaxed mb-6 whitespace-pre-line">
                      {step.description}
                    </p>

                    {step.items && (
                      <div className="space-y-4 mb-8">
                        {step.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-center gap-3"
                          >
                            <div className="w-6 h-6 bg-[#2e3092] rounded-full flex items-center justify-center flex-shrink-0">
                              <Check className="w-4 h-4 text-[#ffffff]" />
                            </div>
                            <span className="text-[#000000] text-[16px]">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                    {step.output && (
                      <p className="text-[#000000] text-[16px] font-bold">
                        <span className="font-bold">Output:</span> {step.output}
                      </p>
                    )}
                  </motion.div>
                )}

                {/* Curved Connector - positioned below the circle */}
                {index < stepsData.length && (
                  <CurvedConnector
                    className={`transform -translate-x-1/2  z-10 scale-50 opacity-60 -top-[26px] ${
                      step.side == "left"
                        ? "left-[45.2%]"
                        : " med:right-[25.2%] right-[24.5%]"
                    }`}
                    turn={step.side !== "left" ? "right" : "left"}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
