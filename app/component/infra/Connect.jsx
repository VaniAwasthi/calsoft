import React from "react";
import Image from "next/image";
import img from "../../assets/infra/connect.webp";
import ButtonLayout from "../utilities/ButtonLayout";
import buttonImage from "../../assets/home/buttonImg.webp";

export default function Connect() {
  return (
    <div className="w-full h-80 relative overflow-hidden mt-10">
      <Image src={img} alt="connect" className="w-full object-cover" />
      <div className="absolute top-0 w-full h-full bg-[#2e309293] bg-[linear-gradient(90deg,rgba(46,48,146,0.7)_0%,rgba(46,48,146,0.5)_60%,rgba(255,255,255,0)_100%)] text-white">
        <div className="w-full h-full grid grid-cols-2 p-10">
          <div />
          <div className="space-y-10 flex flex-col justify-center">
            <p className="text-4xl font-light">
              Want to create a connected, intelligent, & resilient manufacturing
              ecosystem?
            </p>
            <ButtonLayout
              text={"Start Today"}
              image={buttonImage}
              hoverImage={buttonImage}
              className={"w-fit"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
