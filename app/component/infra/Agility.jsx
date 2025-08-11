import React from "react";
import Image from "next/image";
import img from "../../assets/infra/agility.webp";
import predict from "../../assets/infra/predictibility.webp";
import ButtonLayout from "../utilities/ButtonLayout";
import buttonImage from "../../assets/home/buttonImg.webp";

export default function Agility() {
  return (
    <div className="container">
      <div className="h-4 lg:h-6" />
      <div className="w-full h-full relative rounded-xl overflow-hidden">
        <Image src={img} className="w-full object-cover" />
        <div className="absolute top-0 w-full h-full bg-[#2e30927e] bg-[linear-gradient(90deg,rgba(46,48,146,0.7)_0%,rgba(46,48,146,0.5)_60%,rgba(255,255,255,0)_100%)] flex justify-between items-center">
          <div className="w-[65%] h-full text-white">
            <div className="h-full flex gap-8 items-center justify-between">
              {/* Left content */}
              <div className="flex-1 p-10 h-full flex flex-col gap-6 justify-center">
                <p className="text-3xl font-bold">
                  Beyond Tech- Real Business Outcomes.
                </p>
                <p className="text-xl font-semibold">
                  Enterprises with a documented infrastructure roadmap have:
                </p>
                <p className="text-lg">
                  Calsoft quantifies ROI for each roadmap milestone —from VM
                  consolidation to cloud-native transitions —and ensures you get
                  board-level buy-in with real data.
                </p>
                <ButtonLayout
                  text={"Try Now"}
                  image={buttonImage}
                  hoverImage={buttonImage}
                  className={"w-fit mt-3"}
                />
              </div>
              <div className="bg-white w-px h-[70%]" />
              {/* Right Content */}
              <div className="flex-1 flex gap-4 flex-col">
                <div>
                  <p className="text-4xl">35%</p>
                  <p className="text-xl font-light">
                    faster cloud migration cycles
                  </p>
                </div>
                <div>
                  <p className="text-4xl">18-25%</p>
                  <p className="text-xl font-light">
                    reduction in OpEx via optimized resource usage
                  </p>
                </div>
                <div>
                  <p className="text-4xl">2X</p>
                  <p className="text-xl font-light">
                    better incident response through standardized observability
                    stack
                  </p>
                </div>
                <div>
                  <p className="text-4xl">Faster</p>
                  <p className="text-xl font-light">
                    innovation cycles with modular, decoupled infra
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[35%]"></div>
          </div>
        </div>
      </div>
      <div className="w-full h-40 relative rounded-xl overflow-hidden mt-10">
        <Image src={predict} className="w-full object-cover" />
        <div className="absolute top-0 w-full h-full bg-[#2e309293] bg-[linear-gradient(90deg,rgba(46,48,146,0.7)_0%,rgba(46,48,146,0.5)_60%,rgba(255,255,255,0)_100%)] text-white">
          <div className="w-full h-full flex justify-between items-center gap-5 p-5">
            <p className="text-4xl font-medium">
              Build scalable infra plans with 40% cost predictability.
            </p>
            <button className="text-xl  font-medium px-6 py-2.5 bg-[#BA0007] rounded-lg">
              Book a Meeting
            </button>
          </div>
        </div>
      </div>
      <div className="h-4 lg:h-6" />
    </div>
  );
}
