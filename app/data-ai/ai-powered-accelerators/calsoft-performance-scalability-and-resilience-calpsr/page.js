import Image from "next/image";
import React from "react";
import DemoImage from "../../../assets/Data-Ai/dummyPage/CALPSR.webp";

const Page = () => {
  return (
    <div className="relative w-full h-auto">
      <Image
        src={DemoImage}
        alt="Containerization and orchestration"
        width={1200}   
        height={600}   
        className="w-full h-auto object-contain" 
        priority
      />
    </div>
  );
};

export default Page;
