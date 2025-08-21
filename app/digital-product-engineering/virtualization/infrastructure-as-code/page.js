import React from "react";
import demoImage from "@/app/assets/virtualization/infrastructure as a code.webp";
import Image from "next/image";

export default function page() {
  return <Image src={demoImage} alt="infrastructure as a code" />;
}
