import React from "react";
import DemoImage from "@/app/assets/security/service continuity and backup.webp";
import Image from "next/image";

export default function Page() {
  return (
    <div className="relative w-full h-auto">
      <Image
        src={DemoImage}
        alt="service continuity and backup"
        width={1200}
        height={600}
        className="w-full h-auto object-contain"
        priority
      />
    </div>
  );
}
