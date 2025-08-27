import React from "react";
import demoImage from "@/app/assets/virtualization/Lifecycle Governance.webp";
import Image from "next/image";

export default function Page() {
  return (
    <div className="relative w-full h-auto">
      <Image
        src={demoImage}
        alt="Lifecycle Governance"
        width={1200}
        height={600}
        className="w-full h-auto object-contain"
        priority
      />
    </div>
  );
}
