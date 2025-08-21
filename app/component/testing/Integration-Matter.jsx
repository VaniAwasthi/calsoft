import React from "react";

export default function IntegrationMatter() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-full max-w-2xl aspect-square">
        {/* Top diamond --> Missed */}
        <div className="absolute top-[5.5rem] left-[67%] transform -translate-x-1/2">
          <div
            className="rotate-45 w-40 h-40 md:w-44 md:h-44 rounded-xl p-1 flex items-center justify-center"
            style={{
              background:
                "linear-gradient(0deg, rgba(46, 48, 146, 1) 0%, rgba(186, 0, 7, 1) 100%)",
            }}
          >
            <div className="w-full h-full bg-[#2e3092] rounded-xl flex items-center justify-center">
              <div className="transform -rotate-45 text-white text-center px-4">
                <div className="text-xl font-medium leading-tight">
                  Security
                  <br />
                  performance
                  <br />
                  or UX validations
                  <br />
                  left for
                  <br />
                  staging
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Left diamond */}
        <div className="absolute top-[55%] left-[27%] transform -translate-y-1/2">
          <div
            className="rotate-45 w-40 h-40 md:w-44 md:h-44 p-1 rounded-xl flex items-center justify-center"
            style={{
              background:
                "linear-gradient(0deg, rgba(46, 48, 146, 1) 0%, rgba(186, 0, 7, 1) 100%)",
            }}
          >
            <div className="w-full h-full bg-[#2e3092] rounded-xl flex items-center justify-center">
              <div className="transform -rotate-45 text-white text-center px-4">
                <div className="text-xl font-medium leading-tight">
                  Unversioned
                  <br />
                  or environment-
                  <br />
                  dependent test
                  <br />
                  scripts
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right diamond */}
        <div className="absolute top-[55%] -right-[7%] transform -translate-y-1/2">
          <div
            className="rotate-45 w-40 h-40 md:w-44 md:h-44 rounded-xl p-1 flex items-center justify-center"
            style={{
              background:
                "linear-gradient(0deg, rgba(46, 48, 146, 1) 0%, rgba(186, 0, 7, 1) 100%)",
            }}
          >
            <div className="w-full h-full bg-[#2e3092] rounded-xl flex items-center justify-center">
              <div className="transform -rotate-45 text-white text-center px-4">
                <div className="text-xl font-medium leading-tight">
                  Lack of
                  <br />
                  real-time
                  <br />
                  feedback loops 
                  <br />
                  for failed
                  <br />
                  builds
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom left diamond */}
        <div className="absolute bottom-[2rem] left-[18.5%] transform -translate-x-1/2">
          <div
            className="rotate-45 w-40 h-40 md:w-44 md:h-44 rounded-xl p-1 flex items-center justify-center"
            style={{
              background:
                "linear-gradient(0deg, rgba(46, 48, 146, 1) 0%, rgba(186, 0, 7, 1) 100%)",
            }}
          >
            <div className="w-full h-full bg-[#2e3092] rounded-xl flex items-center justify-center">
              <div className="transform -rotate-45 text-white text-center px-4">
                <div className="text-xl font-medium leading-tight">
                  Flaky tests
                  <br />
                  delaying
                  <br />
                  deployments
                  {/* <br />
                  prioritization */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom right diamond */}
        <div className="absolute bottom-[10.2rem] -left-[37%] transform translate-x-1/2">
          <div
            className="rotate-45 w-40 h-40 md:w-44 md:h-44 rounded-xl p-1 flex items-center justify-center"
            style={{
              background:
                "linear-gradient(0deg, rgba(46, 48, 146, 1) 0%, rgba(186, 0, 7, 1) 100%)",
            }}
          >
            <div className="w-full h-full bg-[#2e3092] rounded-xl flex items-center justify-center">
              <div className="transform -rotate-45 text-white text-center px-4">
                <div className="text-xl font-medium leading-tight">
                  Manual QA 
                  <br />
                  cycles outside 
                  <br />
                  CI/CD pipelines
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
