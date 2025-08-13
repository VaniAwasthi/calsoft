import React from "react";
import Image from "next/image";
import img from "../../assets/infra/agility.webp";
import predict from "../../assets/infra/predictibility.webp";
import ButtonLayout from "../utilities/ButtonLayout";
import buttonImage from "../../assets/home/buttonImg.webp";

export default function Agility({
  data = {
    leftSideContent: {
      title: "Beyond Tech- Real Business Outcomes.",
      subTitle: "Enterprises with a documented infrastructure roadmap have:",
      description:
        "Calsoft quantifies ROI for each roadmap milestone —from VM consolidation to cloud-native transitions —and ensures you get board-level buy-in with real data.",
    },
    rightSideContent: [
      {
        title: "35%",
        subTitle: "faster cloud migration cycles",
      },
      {
        title: "18-25%",
        subTitle: "reduction in OpEx via optimized resource usage",
      },
      {
        title: "2X",
        subTitle:
          "better incident response through standardized observability stack",
      },
      {
        title: "Faster",
        subTitle: "innovation cycles with modular, decoupled infra",
      },
    ],
  },
  bookMeetingData = {
    title: "Build scalable infra plans with 40% cost predictability.",
    buttonText: "Book a Meeting",
  },
  buttonText = "Try Now",
}) {
  return (
    <div className="container">
      <div className="h-4 lg:h-6" />
      <div className="w-full h-full relative rounded-xl overflow-hidden">
        <Image src={img} className="w-full object-cover" />
        <div className="absolute top-0 w-full h-full bg-[linear-gradient(90deg,rgba(46,48,146,0.95)_0%,rgba(46,48,146,0.9)_35%,rgba(255,255,255,0.0)_100%)] flex justify-between items-center">
          <div className="w-[65%] h-full text-white">
            <div className="h-full flex gap-8 items-center justify-between">
              {/* Left content */}
              <div className="flex-1 p-10 h-full flex flex-col gap-6 justify-center">
                <p className="text-3xl font-bold">
                  {data.leftSideContent.title}
                </p>
                <p className="text-xl font-semibold">
                  {data.leftSideContent.subTitle}
                </p>
                <p className="text-lg">{data.leftSideContent.description}</p>
                <ButtonLayout
                  text={buttonText}
                  image={buttonImage}
                  hoverImage={buttonImage}
                  className={"w-fit mt-3"}
                />
              </div>
              <div className="bg-white w-px h-[70%]" />
              {/* Right Content */}
              <div className="flex-1 flex gap-4 flex-col">
                {data.rightSideContent.map((ele) => (
                  <div>
                    <p className="text-4xl">{ele.title}</p>
                    <p className="text-xl font-light">{ele.subTitle}</p>
                  </div>
                ))}
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
            <p className="text-4xl font-medium">{bookMeetingData.title}</p>
            <button className="text-xl  font-medium px-6 py-2.5 bg-[#BA0007] rounded-lg">
              {bookMeetingData.buttonText}
            </button>
          </div>
        </div>
      </div>
      <div className="h-4 lg:h-6" />
    </div>
  );
}
