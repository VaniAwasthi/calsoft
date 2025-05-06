"use client";

export default function TransparentButtonLayout({
  text,
  onClick,
  className = "",
}) {
  return (
    <button
      onClick={onClick}
      className={`border border-white text-white bg-transparent rounded-full px-6 py-2 transition-all duration-300 hover:bg-white hover:text-black text-sm md:text-base ${className}`}
    >
      {text}
    </button>
  );
}
