"use client";

import { IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const searchInputRef = useRef(null);
  const filterCount = Object.keys(filters).length;
  const getGridCols = () => {
    if (filterCount >= 3) return "md:grid-cols-3";
    if (filterCount === 2) return "md:grid-cols-2";
    return "md:grid-cols-1";
  };

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

  useEffect(() => {
    if (searchValue.trim() === "") return;

    const timeoutId = setTimeout(() => {
      console.log("[v0] Search executed with value:", searchValue);
      // Your search function will go here
    }, 800);

    return () => clearTimeout(timeoutId);
  }, [searchValue]);

  useEffect(() => {
    if (isSearchExpanded && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchExpanded]);

  const handleSelect = (filterName, option) => {
    const isMultiSelect = Array.isArray(activeFilters[filterName]);

    if (isMultiSelect) {
      // Handle multi-select logic (for Topics)
      const currentSelections = activeFilters[filterName] || [];

      if (option === "All") {
        // If "All" is selected, clear all selections
        setActiveFilters((prev) => ({ ...prev, [filterName]: [] }));
      } else {
        // Toggle the option in the array using ID
        const optionId = option._id;
        const isSelected = currentSelections.includes(optionId);
        let newSelections;

        if (isSelected) {
          // Remove the option ID
          newSelections = currentSelections.filter((item) => item !== optionId);
        } else {
          if (currentSelections.length >= 3) {
            return; // Don't add more if already at limit
          }
          newSelections = [...currentSelections, optionId];
        }

        setActiveFilters((prev) => ({ ...prev, [filterName]: newSelections }));
      }
    } else {
      // Handle single-select logic (for Industry) - store ID instead of name
      const valueToStore = option === "All" ? "All" : option._id;
      selectFilter(filterName, valueToStore);
      setOpenDropdown("");
    }
  };

  const getDisplayText = (filterType) => {
    const value = activeFilters[filterType];

    if (Array.isArray(value)) {
      if (value.length === 0) {
        return "All";
      } else {
        // Convert IDs back to names for display
        const names = value
          .map((id) => {
            const option = filters[filterType].find((opt) => opt._id === id);
            return option ? option.name : id;
          })
          .filter(Boolean);

        if (names.length <= 2) {
          return names.join(", ");
        } else {
          return `${names.slice(0, 2).join(", ")} +${names.length - 2}`;
        }
      }
    }

    // For single select, convert ID back to name for display
    if (value === "All") {
      return "All";
    } else {
      const option = filters[filterType].find((opt) => opt._id === value);
      return option ? option.name : value;
    }
  };

  const handleReset = () => {
    const resetFilters = {};
    Object.keys(filters).forEach((filterType) => {
      resetFilters[filterType] = Array.isArray(activeFilters[filterType])
        ? []
        : "All";
    });
    setActiveFilters(resetFilters);
    setSearchValue("");
    setIsSearchExpanded(false);
  };

  const handleSearchClick = () => {
    setIsSearchExpanded(true);
  };

  const handleSearchBlur = () => {
    if (searchValue.trim() === "") {
      setIsSearchExpanded(false);
    }
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <section className="w-full bg-white mb-6">
      <div className={`container mx-auto px-4 sm:px-6 lg:px-1 ${mainClass}`}>
        <div className="grid grid-cols-12 gap-4 items-start">
          {/* Dropdown filters */}
          <div
            ref={dropdownRef}
            className={`col-span-12 md:col-span-9 grid grid-cols-1 sm:grid-cols-2 ${getGridCols()} gap-4`}
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
                            ? activeFilters[filterType]?.includes(
                                option === "All" ? "All" : option._id
                              )
                            : activeFilters[filterType] ===
                              (option === "All" ? "All" : option._id);

                          const isDisabled =
                            isMultiSelect &&
                            !isSelected &&
                            option !== "All" &&
                            (activeFilters[filterType]?.length || 0) >= 3;

                          const displayName =
                            option === "All" ? "All" : option.name;

                          return (
                            <div
                              key={option === "All" ? "All" : option._id}
                              onClick={() =>
                                !isDisabled && handleSelect(filterType, option)
                              }
                              className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 flex items-center justify-between ${
                                isSelected
                                  ? "bg-blue-50 text-blue-700 font-medium"
                                  : ""
                              } ${
                                isDisabled
                                  ? "opacity-50 cursor-not-allowed hover:bg-white"
                                  : ""
                              }`}
                            >
                              <span>{displayName}</span>
                              {isMultiSelect &&
                                isSelected &&
                                option !== "All" && (
                                  <span className="text-blue-600">✓</span>
                                )}
                            </div>
                          );
                        })}

                        {isMultiSelect && selectedCount > 0 && (
                          <div className="px-4 py-2 text-xs text-gray-500 border-t bg-gray-50">
                            {selectedCount}/3 selected
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Search and Reset buttons */}
          <div className="col-span-12 md:col-span-3 flex gap-2">
            <motion.div
              initial={false}
              animate={{
                width: isSearchExpanded ? "200px" : "56px",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="relative"
            >
              {!isSearchExpanded ? (
                <button
                  onClick={handleSearchClick}
                  className="w-14 h-14 p-2 rounded-lg bg-[#EFEFEF] hover:bg-[#ddd] border border-[#2E3092] flex flex-col justify-center items-center"
                >
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
                  <span className="text-[10px] text-[#2E3092]">Search</span>
                </button>
              ) : (
                <div className="relative h-14 flex items-center">
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchValue}
                    onChange={handleSearchChange}
                    onBlur={handleSearchBlur}
                    placeholder="Search..."
                    className="w-full h-full pl-12 pr-4 rounded-lg bg-[#EFEFEF] border border-[#2E3092] text-[#2E3092] placeholder-[#2E3092]/60 focus:outline-none focus:ring-2 focus:ring-[#2E3092]/20"
                  />
                  <svg
                    className="absolute left-3 w-5 h-5 text-[#2E3092] pointer-events-none"
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
                </div>
              )}
            </motion.div>

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
              <span className="text-[10px] text-[#2E3092]">Clear</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
