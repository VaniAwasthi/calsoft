"use client";

import { IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";

export const FilterSec = ({
  filters,
  activeFilters,
  setActiveFilters,
  openDropdown,
  toggleDropdown,
  selectFilter,
  setOpenDropdown,
  mainClass,
}) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown("");
      }
    };

    if (openDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown, setOpenDropdown]);

  const handleSelect = (filterName, option) => {
    const isMultiSelect = Array.isArray(activeFilters[filterName]);

    if (isMultiSelect) {
      // Handle multi-select logic (for Topics)
      const currentSelections = activeFilters[filterName] || [];

      if (option === "All") {
        // If "All" is selected, clear all selections
        setActiveFilters((prev) => ({ ...prev, [filterName]: [] }));
      } else {
        // Toggle the option in the array
        const isSelected = currentSelections.includes(option);
        let newSelections;

        if (isSelected) {
          // Remove the option
          newSelections = currentSelections.filter((item) => item !== option);
        } else {
          newSelections = [...currentSelections, option];
        }

        setActiveFilters((prev) => ({ ...prev, [filterName]: newSelections }));
      }
    } else {
      // Handle single-select logic (for Industry)
      selectFilter(filterName, option);
      setOpenDropdown("");
    }
  };

  const getDisplayText = (filterType) => {
    const value = activeFilters[filterType];

    if (Array.isArray(value)) {
      if (value.length === 0) {
        return "All";
      } else if (value.length <= 2) {
        return value.join(", ");
      } else {
        return `${value.slice(0, 2).join(", ")} +${value.length - 2}`;
      }
    }

    return value || "All";
  };

  const handleReset = () => {
    const resetFilters = {};
    Object.keys(filters).forEach((filterType) => {
      resetFilters[filterType] = Array.isArray(activeFilters[filterType])
        ? []
        : "All";
    });
    setActiveFilters(resetFilters);
  };

  return (
    <section className="w-full bg-white mb-6">
      <div className={`container mx-auto px-4 sm:px-6 lg:px-1 ${mainClass}`}>
        <div className="grid grid-cols-12 gap-4 items-start">
          {/* Dropdown filters */}
          <div
            ref={dropdownRef}
            className="col-span-12 md:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          >
            {Object.keys(filters).map((filterType) => {
              const isMultiSelect = Array.isArray(activeFilters[filterType]);
              const selectedCount = isMultiSelect
                ? activeFilters[filterType]?.length || 0
                : 0;

              return (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  key={filterType}
                  className="relative"
                >
                  <button
                    onClick={() => toggleDropdown(filterType)}
                    className="w-full h-12 bg-[#2b2eae] text-white px-4 py-2 rounded flex items-center justify-between"
                  >
                    <span className="truncate">
                      {filterType} ({getDisplayText(filterType)})
                    </span>
                    <IoIosArrowDown
                      className={`transition-transform duration-300 ${
                        openDropdown === filterType ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openDropdown === filterType && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                        className="absolute mt-1 w-full bg-white border shadow-lg rounded z-50 max-h-60 overflow-y-auto"
                      >
                        {filters[filterType].map((option) => {
                          const isSelected = isMultiSelect
                            ? activeFilters[filterType]?.includes(option)
                            : activeFilters[filterType] === option;

                          return (
                            <div
                              key={option}
                              onClick={() => handleSelect(filterType, option)}
                              className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 flex items-center justify-between ${
                                isSelected
                                  ? "bg-blue-50 text-blue-700 font-medium"
                                  : ""
                              }`}
                            >
                              <span>{option}</span>
                              {isMultiSelect &&
                                isSelected &&
                                option !== "All" && (
                                  <span className="text-blue-600">✓</span>
                                )}
                            </div>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Search and Reset buttons */}
          <div className="col-span-12 md:col-span-3 flex gap-2">
            <button className="w-14 h-14 p-2 rounded-lg bg-[#EFEFEF] hover:bg-[#ddd] border border-[#2E3092] flex flex-col justify-center items-center">
              <svg
                className="w-5 h-5 text-[#2E3092]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span className="text-[10px] text-[#2E3092] ">Search</span>
            </button>
            <button
              className="w-14 h-14 p-2 rounded-lg bg-[#EFEFEF] hover:bg-[#ddd] border border-[#2E3092] flex flex-col justify-center items-center"
              onClick={handleReset}
            >
              <svg
                className="w-6 h-6 text-[#2E3092]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              <span className="text-[10px] text-[#2E3092] ">Clear</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
