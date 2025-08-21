import React from "react";
import Image from "next/image";
import uptime from "@/app/assets/sustenance/Uptime Continuity.webp";

export default function page() {
  return <Image src={uptime} alt="uptime png image" />;
}
