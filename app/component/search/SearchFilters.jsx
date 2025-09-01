"use client";

import React from "react";

import { useState, useCallback, useRef, useEffect } from "react";

export function SearchFilters({ initialSearchQuery, filterData }) {
  const [searchInput, setSearchInput] = useState(initialSearchQuery);
  const inputRef = useRef(null);

  const handleSearchInputChange = useCallback((e) => {
    const value = e.target.value;
    setSearchInput(value);

    window.dispatchEvent(
      new CustomEvent("searchQueryUpdate", {
        detail: { searchQuery: value },
      })
    );
  }, []);

  const FilterSection = useCallback(
    ({ title, items }) => (
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-gray-900">{title}</h3>
        <div className="max-h-48 overflow-y-auto custom-scrollbar">
          <div className="space-y-3 pr-2">
            {items.map((item, index) => (
              <label key={index} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                />
                <span className="ml-3 text-gray-700">{item}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    ),
    []
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      // Here you can add logic to filter results based on searchInput
      // This runs after 800ms of no typing
      if (inputRef.current && document.activeElement === inputRef.current) {
        inputRef.current.focus();
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [searchInput]);

  return (
    <>
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #f59e0b;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #d97706;
        }
      `}</style>

      <div className="w-80 flex-shrink-0">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Filters</h2>
          <div className="border-b-4 border-orange-500 w-16 mb-6"></div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Search</h3>
            <input
              ref={inputRef}
              type="text"
              value={searchInput}
              onChange={handleSearchInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              placeholder="Search..."
            />
          </div>

          <FilterSection title="Category" items={filterData.categories} />
          <FilterSection title="Services" items={filterData.services} />
          <FilterSection title="Technology" items={filterData.technology} />
          <FilterSection title="Industry" items={filterData.industry} />
        </div>
      </div>
    </>
  );
}
