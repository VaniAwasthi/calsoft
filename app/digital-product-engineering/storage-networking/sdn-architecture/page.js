import React from "react";
import DemoImage from "@/app/assets/storage-networking/SDN Architecture.webp";
import Image from "next/image";

export default function page() {
  return (
    <div className="relative w-full h-auto">
      <Image
        src={DemoImage}
        alt="SDN Architecture"
        width={1200}
        height={600}
        className="w-full h-auto object-contain"
        priority
      />
    </div>
  );
}
