"use client";

import { useState, useEffect } from "react";
import img from "@/app/assets/infra/Hero_bg.webp";

export function HeroSection({ initialSearchQuery }) {
  const [displayedSearchQuery, setDisplayedSearchQuery] =
    useState(initialSearchQuery);

  useEffect(() => {
    const handleSearchUpdate = (event) => {
      setDisplayedSearchQuery(event.detail.searchQuery);
    };

    window.addEventListener("searchQueryUpdate", handleSearchUpdate);
    return () =>
      window.removeEventListener("searchQueryUpdate", handleSearchUpdate);
  }, []);

  // Keep the displayed query in sync when the prop changes (e.g., URL updates)
  useEffect(() => {
    setDisplayedSearchQuery(initialSearchQuery);
  }, [initialSearchQuery]);

  return (
    <div
      className="relative h-96 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${img.src}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl font-bold mb-4">Search results</h1>
        <p className="text-xl">
          {displayedSearchQuery || "Enter a search term to find results"}
        </p>
      </div>
    </div>
  );
}
