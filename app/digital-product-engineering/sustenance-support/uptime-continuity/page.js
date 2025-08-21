import React from "react";
import Image from "next/image";
import DemoImage from "@/app/assets/sustenance/Uptime Continuity.webp";

export default function page() {
  return (
    <div className="relative w-full h-auto">
      <Image
        src={DemoImage}
        alt="Uptime Continuity"
        width={1200}
        height={600}
        className="w-full h-auto object-contain"
        priority
      />
          
    </div>
  );
}
