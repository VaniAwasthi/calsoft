"use client";

import { useState, useEffect } from "react";

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

  return (
    <div
      className="relative h-96 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Aspect_ratio_-_16x9.svg/320px-Aspect_ratio_-_16x9.svg.png?20071120015352')`,
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
