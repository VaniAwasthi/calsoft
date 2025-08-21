import React from "react";
import demoImage from "@/app/assets/virtualization/intellegent migration.webp";
import Image from "next/image";

export default function page() {
  return (
    <div className="relative w-full h-auto">
      <Image
        src={demoImage}
        alt="intellegent migration"
        width={1200}
        height={600}
        className="w-full h-auto object-contain"
        priority
      />
    </div>
  );
}
