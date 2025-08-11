import React from "react";
import Image from "next/image";
import img from "../../assets/infra/agility.webp";
import ButtonLayout from "../utilities/ButtonLayout";
import buttonImage from "../../assets/home/buttonImg.webp";

export default function Agility() {
  return (
    <div className="container ">
      <div className="w-full h-full relative rounded-xl overflow-hidden">
        <Image src={img} className="w-full object-cover" />
        <div className="absolute top-0 w-full h-full bg-[#2e309200] bg-[linear-gradient(90deg,rgba(46,48,146,0.9)_0%,rgba(46,48,146,0.9)_60%,rgba(255,255,255,0.4)_100%)]">
          <div className="h-full flex justify-between items-center">
            <div className="w-[65%] h-full text-white">
              <div className="h-full flex gap-8 items-center justify-between">
                {/* Left content */}
                <div className="p-10 h-full flex flex-col gap-6 justify-center">
                  <p className="text-3xl font-bold">
                    Beyond Tech- Real Business Outcomes.
                  </p>
                  <p className="text-xl font-semibold">
                    Enterprises with a documented infrastructure roadmap have:
                  </p>
                  <p className="text-lg">
                    Calsoft quantifies ROI for each roadmap milestone —from VM
                    consolidation to cloud-native transitions —and ensures you
                    get board-level buy-in with real data.
                  </p>
                  <ButtonLayout
                    text={"Try Now"}
                    image={buttonImage}
                    hoverImage={buttonImage}
                    className={"w-fit mt-3"}
                  />
                </div>
                <div className="bg-white w-px h-[80%]" />
                {/* Right Content */}
                <div className="flex gap-4 flex-col">
                  <div>
                    <p className="text-4xl">35%</p>
                    <p className="text-xl font-light">
                      faster cloud migration cycles
                    </p>
                  </div>
                  <div>
                    <p className="text-4xl">35%</p>
                    <p className="text-xl font-light">
                      faster cloud migration cycles
                    </p>
                  </div>
                  <div>
                    <p className="text-4xl">35%</p>
                    <p className="text-xl font-light">
                      faster cloud migration cycles
                    </p>
                  </div>
                  <div>
                    <p className="text-4xl">35%</p>
                    <p className="text-xl font-light">
                      faster cloud migration cycles
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[35%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
