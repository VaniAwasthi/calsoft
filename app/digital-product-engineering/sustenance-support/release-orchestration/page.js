import React from "react";
import Image from "next/image";
import release from "@/app/assets/sustenance/Release Orchestration.webp";

function page() {
  return <Image src={release} alt="release orchestration" />;
}

export default page;
