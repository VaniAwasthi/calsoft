import React from "react";
import Image from "next/image";
import { FaCaretDown } from "react-icons/fa";

export default function Card({ data }) {
  function truncateWords(text, wordLimit) {
    const words = text.trim().split(/\s+/);
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  }

  return (
    <div className=" flex flex-col gap-4 items-start group hover:shadow-xl rounded-lg">
      <div className="rounded-lg bg-[#E0E0E0] relative w-full group-hover:scale-105 transition-all">
        <div className="overflow-hidden">
          <Image src={data.image} alt={data.name} className="w-full -z-10" />
        </div>
        <div className="p-2 bg-[#2E3092] text-white rounded-b-lg flex flex-col gap-1 z-0">
          <p className="text-lg font-medium">{data.name}</p>
          <p className="text-sm h-10">{data.post}</p>
        </div>
      </div>
      <p className="text-sm h-36 sm:h-24 p-2">
        {truncateWords(data.description, 18)}
      </p>
      <button className="flex gap-1 justify-center items-center text-[#2E3092] font-medium p-2">
        Read More <FaCaretDown />
      </button>
    </div>
  );
}
