import React from "react";
import DemoImage from "@/app/assets/storage-networking/Network function virtualization (NFV) services.webp";
import Image from "next/image";

export default function page() {
  return (
    <div className="relative w-full h-auto">
      <Image
        src={DemoImage}
        alt="Network function virtualization (NFV) services"
        width={1200}
        height={600}
        className="w-full h-auto object-contain"
        priority
      />
    </div>
  );
}
