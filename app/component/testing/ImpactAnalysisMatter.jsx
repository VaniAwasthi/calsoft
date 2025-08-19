import Image from "next/image";
import React from "react";
import bg_svg from "../../assets/testing/Group 1171278045.svg";
import bg_img from "../../assets/testing/Group 1171278045.png";
import bg_img_1 from "../../assets/testing/Group 1171278045 (1).png";

export default function ImpactAnalysisMatter() {
  return (
    <div className="flex justify-center items-center w-full h-full text-white text-center">
      <div className="relative">
        <div className="absolute top-4 left-0 w-32  ">
          <p className="text-lg font-semibold">Running bloated test</p>
          <p className="font-light">suites for every small change</p>
        </div>
        <div className="absolute top-[1.3rem] left-[13.4rem] w-[8rem]">
          <p className="text-[17px] font-semibold">Delayed feedback cycle</p>
          <p className="font-light w-[80%]">in CI/CD pipelines</p>
        </div>
        <div className="absolute top-[1.3rem] left-[25.7rem] w-32">
          <p className="text-[17px] font-semibold">Redundant executions</p>
          <p className="font-light">with negligible coverage gain</p>
        </div>
        <div className="absolute top-[11.4rem] left-[7rem] w-32">
          <p className="text-[17px] leading-5 font-semibold">
            Increased infrastructure costs
          </p>
          <p className="text-[15px] font-light leading-5">
            due to full-suite regression runs
          </p>
        </div>
        <div className="absolute top-[11.4rem] left-[19.5rem] w-32">
          <p className="text-[17px] font-semibold">Missed regressions</p>
          <p className="font-light">due to skipped critical paths</p>
        </div>
        <Image src={bg_img_1} alt="bg_img" height={10000} className="h-full" />
      </div>
    </div>
  );
}
