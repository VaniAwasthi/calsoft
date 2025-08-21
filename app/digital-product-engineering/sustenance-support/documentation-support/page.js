import React from "react";
import Image from "next/image";
import documentation from "@/app/assets/sustenance/Documentation Support.webp";

export default function page() {
  return <Image src={documentation} alt="multi-tier" />;
}
