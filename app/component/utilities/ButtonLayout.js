"use client";
import Image from "next/image";
export default function ButtonLayout({
  text,
  onClick,
  buttonImage,
  hoverImage,
  className = "",
  bgColor = "#BA0007",
  textColor = "#FFFFFF",
  hoverBgColor = "#FFFFFF",
  // hoverTextColor = "##BA0007",
  hoverTextColor = "#BA0007",
  border = ` 2px solid ${bgColor}`,
  //   filter = "brightness(0) invert(1)",
}) {
  return (
    <button
      onClick={onClick}
      className={`relative group w-[150px] h-[40px] md:w-[220px] md:h-[48px] rounded-full flex items-center justify-center gap-2 transition-all duration-500 ease-out overflow-hidden transform hover:scale-105 ${className}`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        border: border,
        "--hoverTextColor": hoverTextColor, // Define CSS variable for hover color
      }}
    >
      {/* Hover Background Effect */}
      <span
        className="absolute inset-0 transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"
        style={{ backgroundColor: hoverBgColor }}
      ></span>

      {/* Button Text - Fixes hover text color */}
      <span className="relative z-10 font-redhat text-sm transition-colors duration-300 ease-in-out group-hover:text-[var(--hoverTextColor)]">
        {text}
      </span>

      {/* Button Images (Default & Hover State) */}
      <div className="relative w-[22px] h-[22px]">
        <Image
          src={hoverImage}
          alt="Button Icon"
          className="absolute inset-0 transition-opacity duration-300 ease-in-out group-hover:opacity-0"
        />
        <Image
          src={hoverImage}
          alt="Button Icon Hover"
          className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
        />
      </div>
    </button>
  );
}
