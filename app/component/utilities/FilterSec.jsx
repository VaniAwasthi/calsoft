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
        <div className="grid grid-cols-12 gap-4 items-start md:items-center">
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
                  className="w-14 h-14 p-2 rounded-lg bg-[#EFEFEF] hover:bg-[#ddd] border border-[#2E3092] flex flex-col justify-between items-center"
                >
                  <svg
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.014 0.214386C5.18125 0.214386 0.452148 4.96901 0.452148 10.8312C0.452148 16.6934 5.18125 21.4472 11.014 21.4472C16.8469 21.4472 21.5767 16.6934 21.5767 10.8312C21.5767 4.96901 16.8469 0.214386 11.014 0.214386ZM11.014 2.86821C15.3823 2.86821 18.9357 6.44052 18.9357 10.8312C18.9357 15.2214 15.3823 18.7927 11.014 18.7927C6.64576 18.7927 3.09244 15.2214 3.09244 10.8312C3.09244 6.44052 6.64576 2.86821 11.014 2.86821ZM11.014 4.63768C7.61729 4.63768 4.85288 7.41599 4.85288 10.8312H6.61332C6.61332 8.39199 8.58779 6.40791 11.014 6.40791V4.63768ZM21.382 17.498C20.4192 19.0037 19.1458 20.2846 17.6483 21.2523L24.1106 27.747C25.1419 28.7836 26.815 28.7836 27.8443 27.747C28.8756 26.7125 28.8756 25.0318 27.8443 23.9942L21.382 17.498Z"
                      fill="#2E3092"
                    />
                  </svg>
                  <span className="text-xs text-[#2E3092]">Search</span>
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
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.014 0.214386C5.18125 0.214386 0.452148 4.96901 0.452148 10.8312C0.452148 16.6934 5.18125 21.4472 11.014 21.4472C16.8469 21.4472 21.5767 16.6934 21.5767 10.8312C21.5767 4.96901 16.8469 0.214386 11.014 0.214386ZM11.014 2.86821C15.3823 2.86821 18.9357 6.44052 18.9357 10.8312C18.9357 15.2214 15.3823 18.7927 11.014 18.7927C6.64576 18.7927 3.09244 15.2214 3.09244 10.8312C3.09244 6.44052 6.64576 2.86821 11.014 2.86821ZM11.014 4.63768C7.61729 4.63768 4.85288 7.41599 4.85288 10.8312H6.61332C6.61332 8.39199 8.58779 6.40791 11.014 6.40791V4.63768ZM21.382 17.498C20.4192 19.0037 19.1458 20.2846 17.6483 21.2523L24.1106 27.747C25.1419 28.7836 26.815 28.7836 27.8443 27.747C28.8756 26.7125 28.8756 25.0318 27.8443 23.9942L21.382 17.498Z"
                      fill="#2E3092"
                    />
                  </svg>
                </div>
              )}
            </motion.div>

            <button
              className="w-14 h-14 p-2 rounded-lg bg-[#EFEFEF] hover:bg-[#ddd] border border-[#2E3092] flex flex-col justify-between items-center"
              onClick={handleReset}
            >
              <svg
                width="27"
                height="30"
                viewBox="0 0 27 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.4707 9.47656C5.93218 9.47657 6.32715 9.8639 6.32715 10.3672C6.32692 10.8702 5.93204 11.2568 5.4707 11.2568C5.00935 11.2568 4.61449 10.8703 4.61426 10.3672C4.61426 9.86389 5.00921 9.47656 5.4707 9.47656Z"
                  fill="#2E3092"
                  stroke="#2E3092"
                />
                <path
                  d="M1.77783 13.749C2.2392 13.749 2.63404 14.1357 2.63428 14.6387C2.63428 15.142 2.2393 15.5293 1.77783 15.5293C1.31637 15.5293 0.921387 15.142 0.921387 14.6387C0.921619 14.1357 1.31647 13.749 1.77783 13.749Z"
                  fill="#2E3092"
                  stroke="#2E3092"
                />
                <path
                  d="M21.4648 2.84668C22.1368 1.51713 23.722 1.00898 25.0039 1.68945C26.295 2.37494 26.8082 4.01565 26.1289 5.35254L22.5098 12.4756L22.3809 12.7275L22.5312 12.9668C23.2788 14.1621 23.4989 15.6728 23.0078 17.1045C22.3663 18.9747 21.6996 20.8367 20.9277 22.6396C19.8893 25.0653 18.6786 27.0621 17.9893 28.1201C17.5559 28.7853 16.7621 29.0711 16.0264 28.8164C14.7973 28.3909 12.5012 27.4685 9.93945 25.7988C6.21061 23.3682 4.19611 21.4508 3.17871 20.3018C2.84606 19.9259 2.82665 19.4388 3.00488 19.0527C3.1766 18.6811 3.52984 18.3953 3.95996 18.3271C5.05369 18.1538 6.77839 17.6715 8.84668 16.3564C10.3263 15.4158 12.0169 13.6079 13.3574 12C14.3996 10.7501 15.9394 10.0513 17.4795 10.1055L17.8447 10.1191L17.9678 9.77441C17.9741 9.75682 17.9818 9.73843 17.9912 9.71973L21.4648 2.84668ZM12.002 14.8467C11.1087 15.7576 10.1752 16.5857 9.29785 17.1436C7.30282 18.412 5.59306 18.9551 4.39941 19.1826L3.50488 19.3525L4.12891 20.0156C4.7952 20.7241 5.81401 21.6847 7.32422 22.8477L7.5498 23.0215L7.81543 22.916C8.00643 22.8394 8.37674 22.6573 8.88184 22.248L9.10645 22.0586C9.2942 21.8935 9.57812 21.9129 9.74023 22.0967C9.90179 22.28 9.88536 22.5618 9.69824 22.7266C9.4507 22.9441 9.22153 23.1207 9.01562 23.2627L8.42188 23.6719L9.01367 24.084C9.44541 24.3849 9.90661 24.696 10.3984 25.0166C11.009 25.4147 11.6044 25.7692 12.1719 26.083L12.4824 26.2549L12.7471 26.0176C13.5326 25.314 14.1603 24.4247 14.6631 23.5469C14.7919 23.3221 15.065 23.2546 15.2676 23.3711C15.4715 23.4888 15.5524 23.763 15.4229 23.9893C14.8378 25.0106 14.228 25.7521 13.8115 26.2021L13.3457 26.7061L13.9688 26.9951C14.927 27.4395 15.7322 27.7472 16.2988 27.9434C16.6639 28.0697 17.0541 27.9306 17.2695 27.6006V27.5996C17.9413 26.5683 19.1228 24.6217 20.1328 22.2627C20.4541 21.5119 20.783 20.6756 21.1025 19.8242L21.2568 19.415L20.8721 19.208L12.6113 14.7646L12.5996 14.7578L12.2666 14.5762L12.002 14.8467ZM19.0938 11.457C17.3847 10.5691 15.2779 11.0889 14.0127 12.6064C13.7928 12.8701 13.561 13.1428 13.3193 13.4189L12.9062 13.8916L13.459 14.1885L21.0576 18.2754L21.5713 18.5518L21.7656 18.002C21.9119 17.5884 22.0536 17.1824 22.1875 16.792C22.8104 14.9759 22.004 12.9695 20.2998 12.084L19.0938 11.457ZM24.6113 2.51074C23.7408 2.04869 22.6772 2.40223 22.2344 3.27832L18.9355 9.80762L18.6963 10.2803L19.1816 10.4912C19.2815 10.5346 19.3811 10.5817 19.4795 10.6328L20.6855 11.2598C20.9004 11.3714 21.1036 11.4981 21.2949 11.6377L21.7695 11.9834L22.0361 11.46L25.3594 4.91895C25.7739 4.10332 25.5134 3.10342 24.7666 2.60352L24.6113 2.51074Z"
                  fill="#2E3092"
                  stroke="#2E3092"
                />
              </svg>
              <span className="text-xs text-[#2E3092]">Clear</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
