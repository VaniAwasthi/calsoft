import Image from "next/image";
import React from "react";
import img from "../../assets/infra/FirstStep.webp";
import Guesswork from "./GuessWork";

export default function FirstStep() {
  return (
    <>
      <div className="container grid grid-cols-2 gap-5">
        {/* <div className=""> */}
        <div className="space-y-8 flex-1">
          <div className="text-4xl font-bold bg-[linear-gradient(to_right,#2E3092_10%,#ED1C24_28%)] bg-clip-text text-transparent mb-8 leading-[2.5rem] flex flex-col">
            <span>Take the First Step –</span>
            <span>Without the Guesswork</span>
          </div>
          <p className="text-lg">
            We don’t ask you to commit to a massive overhaul. Instead, we guide
            you step-by-step — from discovery to deployment — with zero
            ambiguity and measurable outcomes.
          </p>
        </div>
        <Image
          src={img}
          className="w-full h-72 flex-1 rounded-xl object-cover"
        />
      </div>
      <Guesswork />
    </>
  );
}
