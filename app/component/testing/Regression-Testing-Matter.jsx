import React from "react";

export default function RegressionTestingMatter() {
  return (
    <div className="flex items-center justify-center mb-5">
      <div className="relative w-full h-[28.5rem] text-lg md:text-xl">
        {/* Top diamond */}
        <div className="absolute top-2 left-[24.5rem] transform -translate-x-1/2">
          <div
            className="rotate-45 w-40 h-40 md:w-44 md:h-44 rounded-tl-4xl p-1 flex items-center justify-center"
            style={{
              background:
                "linear-gradient(0deg, rgba(46, 48, 146, 1) 0%, rgba(186, 0, 7, 1) 100%)",
            }}
          >
            <div className="w-full h-full bg-[#2e3092] rounded-tl-4xl flex items-center justify-center">
              <div className="transform -rotate-45 text-white text-center px-4">
                <div className="font-medium leading-tight">
                  Missed
                  <br />
                  defects in
                  <br />
                  reused code
                  <br />
                  paths
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Left diamond */}
        <div className="absolute top-[14.5rem] left-[10.8rem] transform -translate-y-1/2">
          <div
            className="rotate-45 w-40 h-40 md:w-44 md:h-44 p-1 flex items-center justify-center"
            style={{
              background:
                "linear-gradient(0deg, rgba(46, 48, 146, 1) 0%, rgba(186, 0, 7, 1) 100%)",
            }}
          >
            <div className="w-full h-full bg-[#2e3092] flex items-center justify-center">
              <div className="transform -rotate-45 text-white text-center px-4">
                <div className="font-medium leading-tight">
                  Long
                  <br />
                  execution times,
                  <br />
                  delaying
                  <br />
                  deployments
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right diamond */}
        <div className="absolute top-[14.5rem] left-[27.2rem] transform -translate-y-1/2">
          <div
            className="rotate-45 w-40 h-40 md:w-44 md:h-44 rounded-tr-4xl p-1 flex items-center justify-center"
            style={{
              background:
                "linear-gradient(0deg, rgba(46, 48, 146, 1) 0%, rgba(186, 0, 7, 1) 100%)",
            }}
          >
            <div className="w-full h-full bg-[#2e3092] rounded-tr-4xl flex items-center justify-center">
              <div className="transform -rotate-45 text-white text-center px-4">
                <div className="font-medium leading-tight">
                  Lack of
                  <br />
                  traceability to
                  <br />
                  user stories or
                  <br />
                  features
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom left diamond */}
        <div className="absolute bottom-0 left-[8rem] transform -translate-x-1/2">
          <div
            className="rotate-45 w-40 h-40 md:w-44 md:h-44 rounded-br-4xl p-1 flex items-center justify-center"
            style={{
              background:
                "linear-gradient(0deg, rgba(46, 48, 146, 1) 0%, rgba(186, 0, 7, 1) 100%)",
            }}
          >
            <div className="w-full h-full bg-[#2e3092] rounded-br-4xl flex items-center justify-center">
              <div className="transform -rotate-45 text-white text-center px-4">
                <div className="font-medium leading-tight">
                  Test
                  <br />
                  suite bloat
                  <br />
                  without
                  <br />
                  prioritization
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom right diamond */}
        <div className="absolute bottom-0 left-[13.5rem] transform translate-x-1/2">
          <div
            className="rotate-45 w-40 h-40 md:w-44 md:h-44 rounded-br-4xl p-1 flex items-center justify-center"
            style={{
              background:
                "linear-gradient(0deg, rgba(46, 48, 146, 1) 0%, rgba(186, 0, 7, 1) 100%)",
            }}
          >
            <div className="w-full h-full bg-[#2e3092] rounded-br-4xl flex items-center justify-center">
              <div className="transform -rotate-45 text-white text-center px-4">
                <div className="font-medium leading-tight">
                  Ineffective
                  <br />
                  reuse of
                  <br />
                  automation
                  <br />
                  across builds
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
