import React from "react";
import Image from "next/image";
import Award_1 from "../../assets/career/award_1.webp";
import Award_2 from "../../assets/career/award_2.webp";
import Award_3 from "../../assets/career/award_3.webp";
import Award_4 from "../../assets/career/award_4.webp";

export default function Awards() {
  const awards = [Award_1, Award_2, Award_3, Award_4];
  return (
    <div className="w-full h-56 bg-[#2E3092] flex items-center justify-between gap-16 px-16 py-12 overflow-x-auto">
      {awards.map((award, idx) => (
        <Image key={idx} src={award} alt={`award_${idx}`} className="h-24" />
      ))}
    </div>
  );
}
