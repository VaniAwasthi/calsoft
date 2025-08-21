import React from "react";
import DemoImage from "@/app/assets/storage-networking/Intelligent Network Control.webp";
import Image from "next/image";

export default function page() {
  return (
    <div className="relative w-full h-auto">
      <Image
        src={DemoImage}
        alt="Intelligent Network Control"
        width={1200}
        height={600}
        className="w-full h-auto object-contain"
        priority
      />
    </div>
  );
}
