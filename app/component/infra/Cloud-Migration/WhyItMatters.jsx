import React from "react";
import ButtonLayout from "../../utilities/ButtonLayout";
import buttonImage from "../../../assets/home/buttonImg.webp";

export default function WhyItMatters() {
  return (
    <>
      <div className="p-8 lg:p-12 py-8 pb-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-10">
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

            <div className="w-full max-w-lg mx-auto p-4 pt-0">
              <div className="grid grid-cols-2 gap-3">
                {/* Top Left - Lift-and-shift pitfalls */}
                <div className="relative w-full aspect-square">
                  {/* Red background shape */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "#ba0007",
                      borderRadius: "50% 50% 0% 50%",
                    }}
                  />
                  {/* Blue circular content */}
                  <div
                    className="absolute top-0 left-0 right-4 bottom-4 rounded-full flex flex-col items-center justify-center text-center p-6"
                    style={{
                      background: "#2e3092",
                      color: "#ffffff",
                    }}
                  >
                    <h3 className="text-xl font-bold mb-1 leading-tight">
                      Lift-and-shift pitfalls
                    </h3>
                    <p className="opacity-90 leading-relaxed">
                      with bloated costs and poor performance
                    </p>
                  </div>
                  {/* Quarter circle at sharp corner */}
                  <div
                    className="absolute bottom-0 right-0 w-8 h-8"
                    style={{
                      background: "#2e3092",
                      borderRadius: "100% 0 0 0",
                    }}
                  />
                </div>

                {/* Top Right - Downtime Risk */}
                <div className="relative w-full aspect-square">
                  {/* Red background shape */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "#ba0007",
                      borderRadius: "50% 50% 50% 0%",
                    }}
                  />
                  {/* Blue circular content */}
                  <div
                    className="absolute top-0 left-4 right-0 bottom-4 rounded-full flex flex-col items-center justify-center text-center p-6"
                    style={{
                      background: "#2e3092",
                      color: "#ffffff",
                    }}
                  >
                    <h3 className="text-xl font-bold mb-1 leading-tight">
                      Downtime Risk
                    </h3>
                    <p className="opacity-90 leading-relaxed">
                      due to unplanned cutovers or rollback loops
                    </p>
                  </div>
                  {/* Quarter circle at sharp corner */}
                  <div
                    className="absolute bottom-0 left-0 w-8 h-8"
                    style={{
                      background: "#2e3092",
                      borderRadius: "0 100% 0 0",
                    }}
                  />
                </div>

                {/* Bottom Left - Inconsistent security */}
                <div className="relative w-full aspect-square">
                  {/* Red background shape */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "#ba0007",
                      borderRadius: "50% 0% 50% 50%",
                    }}
                  />
                  {/* Blue circular content */}
                  <div
                    className="absolute top-4 left-0 right-4 bottom-0 rounded-full flex flex-col items-center justify-center text-center p-6"
                    style={{
                      background: "#2e3092",
                      color: "#ffffff",
                    }}
                  >
                    <h3 className="text-xl font-bold mb-1 leading-tight">
                      Inconsistent security
                    </h3>
                    <p className="opacity-90 leading-relaxed">
                      models across migrated workloads
                    </p>
                  </div>
                  {/* Quarter circle at sharp corner */}
                  <div
                    className="absolute top-0 right-0 w-8 h-8"
                    style={{
                      background: "#2e3092",
                      borderRadius: "0 0 0 100%",
                    }}
                  />
                </div>

                {/* Bottom Right - Inadequate workload */}
                <div className="relative w-full aspect-square">
                  {/* Red background shape */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "#ba0007",
                      borderRadius: "0% 50% 50% 50%",
                    }}
                  />
                  {/* Blue circular content */}
                  <div
                    className="absolute top-4 left-4 right-0 bottom-0 rounded-full flex flex-col items-center justify-center text-center p-6"
                    style={{
                      background: "#2e3092",
                      color: "#ffffff",
                    }}
                  >
                    <h3 className="text-xl font-bold mb-1 leading-tight">
                      Inadequate workload
                    </h3>
                    <p className="opacity-90 leading-relaxed">
                      classification leading to misalignment of cloud-native
                      benefits
                    </p>
                  </div>
                  {/* Quarter circle at sharp corner */}
                  <div
                    className="absolute top-0 left-0 w-8 h-8"
                    style={{
                      background: "#2e3092",
                      borderRadius: "0 0 100% 0",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
