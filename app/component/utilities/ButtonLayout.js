"use client";

import Image from "next/image";
import Link from "next/link";

export default function ButtonLayout({
  text,
  onClick,
  disabled = false,
  buttonImage,
  hoverImage,
  className = "",
  bgColor = "#BA0007",
  textColor = "#FFFFFF",
  hoverBgColor = "#FFFFFF",
  hoverTextColor = "#BA0007",
  border = `2px solid ${bgColor}`,
  link = "",
}) {
  const content = (
    <>
      <span
        className="absolute -inset-1 transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"
        style={{ backgroundColor: hoverBgColor }}
      ></span>

      <span className="relative z-10 font-redhat text-base transition-colors duration-300 ease-in-out group-hover:text-[var(--hoverTextColor)]">
        {text}
      </span>

      <div className="relative w-[22px] h-[22px]">
        <Image
          src={hoverImage}
          alt="Button Icon"
          className="absolute inset-0 transition-opacity duration-300 ease-in-out group-hover:opacity-0 shrink-0"
        />
        <Image
          src={hoverImage}
          alt="Button Icon Hover"
          className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 shrink-0"
        />
      </div>
    </>
  );

  if (link) {
    return (
      <Link
        href={link}
        onClick={onClick}
        className={`relative group h-[40px] md:h-[48px] rounded-full flex items-center justify-center gap-4 transition-all duration-500 ease-out overflow-hidden transform hover:scale-105 px-4 ${className}`}
        style={{
          backgroundColor: bgColor,
          color: textColor,
          border: border,
          "--hoverTextColor": hoverTextColor,
        }}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`relative group h-[40px] md:h-[48px] rounded-full flex items-center justify-center gap-4 transition-all duration-500 ease-out overflow-hidden transform hover:scale-105 px-4 ${className}`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        border: border,
        "--hoverTextColor": hoverTextColor,
      }}
    >
      {content}
    </button>
  );
}
