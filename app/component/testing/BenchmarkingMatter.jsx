import React from "react";
import top from "../../assets/testing/Group 1171278051.svg";
import left from "../../assets/testing/OBJECTS.svg";
import right from "../../assets/testing/OBJECTS (1).svg";
import Image from "next/image";

export default function BenchmarkingMatter() {
  return (
    <div className="grid grid-cols-2 grid-rows-3 gap-x-3">
      <div className="relative text-white text-center col-span-2 self-center justify-self-center">
        <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center px-20">
          <p className="text-lg font-semibold">Lack of baseline performance</p>
          <p className="font-light">data for comparison</p>
        </div>
        <Image src={top} alt="svg" className="w-auto shrink-0" />
      </div>
      <div className="row-start-2 relative text-white text-center">
        <div className="absolute top-0 w-full h-full flex flex-col justify-start mt-2.5 px-10">
          <p className="text-lg font-semibold">
            Blind modernization or migration
          </p>
          <p className="font-light">decisions without reference metrics</p>
        </div>
        <Image src={left} alt="svg" className="w-auto shrink-0" />
      </div>
      <div className="row-start-2 relative text-white text-center">
        <div className="absolute top-0 w-full h-full flex flex-col justify-start mt-4 px-10">
          <p className="text-lg font-semibold">Unrealistic SLAs</p>
          <p className="font-light">
            or unvalidated cost-performance tradeoffs
          </p>
        </div>
        <Image src={right} alt="svg" className="w-auto shrink-0" />
      </div>
      <div className="relative text-white text-center">
        <div className="absolute top-0 w-full h-full flex flex-col justify-start mt-5 px-5">
          <p className="font-light">Industry or peer standards</p>
          <p className="text-lg font-semibold">
            Difficulty benchmarking against
          </p>
        </div>
        <Image src={right} alt="svg" className="w-auto shrink-0" />
      </div>
      <div className="row-start-3 relative text-white text-center">
        <div className="absolute top-0 w-full h-full flex flex-col justify-start mt-7 px-8">
          <p className="text-lg font-semibold">
            Unclear product scalability limits
          </p>
        </div>
        <Image src={left} alt="svg" className="w-auto shrink-0" />
      </div>
    </div>
  );
}
