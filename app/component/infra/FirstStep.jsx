import Image from "next/image";
import React from "react";
import img from "../../assets/infra/FirstStep.webp";
import Guesswork from "./GuessWork";

export default function FirstStep({
  headerContent = {
    title1: "Take the First Step –",
    title2: "Without the Guesswork",
    description:
      "We don’t ask you to commit to a massive overhaul. Instead, we guide you step-by-step — from discovery to deployment — with zero ambiguity and measurable outcomes.",
  },
  Component = Guesswork,
}) {
  return (
    <div className="container">
      <div className="h-8" />
      <div className="grid grid-cols-2 gap-5">
        {/* <div className=""> */}
        <div className="space-y-8 flex-1">
          <div className="text-4xl font-bold bg-[linear-gradient(to_right,#2E3092_10%,#ED1C24_28%)] bg-clip-text text-transparent mb-8 leading-[2.5rem] flex flex-col">
            <span>{headerContent.title1}</span>
            <span>{headerContent.title2}</span>
          </div>
          <p className="text-lg">{headerContent.description}</p>
        </div>
        <Image
          src={img}
          alt="FirstStep"
          className="w-full h-72 flex-1 rounded-xl object-cover"
        />
      </div>
      <Component />
    </div>
  );
}
