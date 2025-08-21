import React from "react";
import Image from "next/image";
import DemoImage from "@/app/assets/sustenance/Documentation Support.webp";

export default function page() {
  return (
    <div className="relative w-full h-auto">
      <Image
        src={DemoImage}
        alt="Documentation Support"
        width={1200}
        height={600}
        className="w-full h-auto object-contain"
        priority
      />
          
    </div>
  );
}
