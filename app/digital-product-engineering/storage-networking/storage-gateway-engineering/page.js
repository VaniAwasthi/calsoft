import React from "react";
import DemoImage from "@/app/assets/storage-networking/Storage gateway engineering.webp";
import Image from "next/image";

export default function Page() {
  return (
    <div className="relative w-full h-auto">
      <Image
        src={DemoImage}
        alt="Storage gateway engineering"
        width={1200}
        height={600}
        className="w-full h-auto object-contain"
        priority
      />
    </div>
  );
}
