"use client";

import Image from "next/image";
import AboutUsDes from "../assets/AboutUs.webp";
import Mobile from "../assets/Mobileview.webp";

const Page = () => {
  return (
    <div className="relative">
      <Image
        src={AboutUsDes}
        alt="About Us"
        width={1500}
        height={1500}
        className="w-full h-full hidden md:block"
      />
      <Image
        src={Mobile}
        alt="About Us"
        width={1500}
        height={1500}
        className="w-full h-full block md:hidden"
      />
    </div>
  );
};

export default Page;
