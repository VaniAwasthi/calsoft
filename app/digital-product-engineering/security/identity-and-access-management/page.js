import React from "react";
import DemoImage from "@/app/assets/security/identity and access management.webp";
import Image from "next/image";

export default function Page() {
  return (
    <div className="relative w-full h-auto">
      <Image
        src={DemoImage}
        alt="identity and access management"
        width={1200}
        height={600}
        className="w-full h-auto object-contain"
        priority
      />
    </div>
  );
}
