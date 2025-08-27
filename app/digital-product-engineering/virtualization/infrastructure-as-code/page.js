import React from "react";
import demoImage from "@/app/assets/virtualization/infrastructure as a code.webp";
import Image from "next/image";

export default function Page() {
  return (
    <div className="relative w-full h-auto">
      <Image
        src={demoImage}
        alt="infrastructure as a code"
        width={1200}
        height={600}
        className="w-full h-auto object-contain"
        priority
      />
    </div>
  );
}
