import React from "react";
import Image from "next/image";
import DemoImage from "@/app/assets/sustenance/Release Orchestration.webp";

function page() {
  return (
    <div className="relative w-full h-auto">
      <Image
        src={DemoImage}
        alt="Release Orchestration"
        width={1200}
        height={600}
        className="w-full h-auto object-contain"
        priority
      />
          
    </div>
  );
}

export default page;
