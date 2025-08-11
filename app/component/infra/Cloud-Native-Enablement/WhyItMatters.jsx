import React from "react";
import ButtonLayout from "../../utilities/ButtonLayout";
import buttonImage from "../../../assets/home/buttonImg.webp";

export default function WhyItMatters() {
  return (
    <>
      <div className="p-8 lg:p-12 py-8 pb-0">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-16 items-start">
            {/* Left Content */}
            <div className="w-[45%] space-y-10">
              <p className="text-4xl font-bold bg-[linear-gradient(to_right,#2E3092_0%,#ED1C24_50%)] bg-clip-text text-transparent">
                Why It Matters
              </p>
              <div className="space-y-6">
                <p className="text-3xl font-semibold">
                  Debunking Cloud-Native Myths
                </p>
                <div className="space-y-6 text-black text-lg leading-relaxed">
                  <p>
                    For most enterprises, “cloud-native” remains aspirational —
                    often misunderstood as just container adoption. In reality,
                    incomplete strategies lead to:
                  </p>
                  <p className="font-medium">
                    Calsoft ensures true cloud-native enablement by aligning
                    architecture, engineering practices, security, and
                    operations — at scale.
                  </p>
                </div>
              </div>
              <div
                //   initial={{ x: -50, opacity: 0 }}
                //   whileInView={{ x: 0, opacity: 1 }}
                //   transition={{ duration: 0.5, delay: 0.8 }}
                //   viewport={{ once: false, amount: 0.3 }}
                className="mt-9"
              >
                <ButtonLayout
                  text={"Download Case Study"}
                  image={buttonImage}
                  hoverImage={buttonImage}
                  className={"w-fit shadow-2xl"}
                />
              </div>
            </div>

            <div className="w-[55%] flex justify-center py-8">
              <div className="relative w-[750px] h-[320px]">
                {/* Top row - Slow release */}
                <div className="absolute top-0 left-32 w-44 h-44 transform rotate-45 rounded-3xl border-4 border-[#ba0007] bg-[#2e3092] flex items-center justify-center">
                  <div className="transform -rotate-45 text-center px-4">
                    <h3 className="text-white text-xl font-bold mb-2 leading-tight">
                      Slow release
                    </h3>
                    <p className="text-white text-sm opacity-90 leading-tight">
                      cycles despite CI/CD pipelines
                    </p>
                  </div>
                </div>

                {/* Top row - Toolchain */}
                <div className="absolute top-0 right-32 w-44 h-44 transform rotate-45 rounded-3xl border-4 border-[#ba0007] bg-[#2e3092] flex items-center justify-center">
                  <div className="transform -rotate-45 text-center px-4">
                    <h3 className="text-white text-xl font-bold mb-2 leading-tight">
                      Toolchain
                    </h3>
                    <p className="text-white text-sm opacity-90 leading-tight">
                      sprawl without governance
                    </p>
                  </div>
                </div>

                {/* Bottom row - Tightly */}
                <div className="absolute bottom-0 left-0 w-44 h-44 transform rotate-45 rounded-3xl border-4 border-[#ba0007] bg-[#2e3092] flex items-center justify-center">
                  <div className="transform -rotate-45 text-center px-3">
                    <h3 className="text-white text-xl font-bold mb-2 leading-tight">
                      Tightly
                    </h3>
                    <p className="text-white text-sm opacity-90 leading-tight">
                      coupled legacy apps lifted into containers without
                      re-architecture
                    </p>
                  </div>
                </div>

                {/* Bottom row - Toolchain (center) */}
                <div className="absolute bottom-0 left-1/2 -ml-22 w-44 h-44 transform rotate-45 rounded-3xl border-4 border-[#ba0007] bg-[#2e3092] flex items-center justify-center">
                  <div className="transform -rotate-45 text-center px-4">
                    <h3 className="text-white text-xl font-bold mb-2 leading-tight">
                      Toolchain
                    </h3>
                    <p className="text-white text-sm opacity-90 leading-tight">
                      sprawl without governance
                    </p>
                  </div>
                </div>

                {/* Bottom row - Security */}
                <div className="absolute bottom-0 right-0 w-44 h-44 transform rotate-45 rounded-3xl border-4 border-[#ba0007] bg-[#2e3092] flex items-center justify-center">
                  <div className="transform -rotate-45 text-center px-3">
                    <h3 className="text-white text-xl font-bold mb-2 leading-tight">
                      Security
                    </h3>
                    <p className="text-white text-sm opacity-90 leading-tight">
                      blind spots across runtime environments
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
