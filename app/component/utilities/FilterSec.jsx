"use client";

import { IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import SearchIcon from "../../assets/blog/filterSeach.svg";
import FilterIcon from "../../assets/blog/cleanIcon.svg";

export const FilterSec = ({
  filters,
  activeFilters,
  setActiveFilters,
  openDropdown,
  toggleDropdown,
  selectFilter,
  setOpenDropdown, // <-- make sure parent passes this
  mainClass,
}) => {
  const handleSelect = (filterName, option) => {
    selectFilter(filterName, option);
    setOpenDropdown(null); // close dropdown after selecting
  };

  return (
    <section className="w-full bg-white mb-6">
      <div className={`container mx-auto px-4 sm:px-6 lg:px-1 ${mainClass}`}>
        <div className="grid grid-cols-12 gap-4 items-start">
          {/* Dropdown filters */}
          <div className="col-span-12 md:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Object.keys(filters).map((filterType) => {
              const isTopicFilter = filterType.toLowerCase() === "topics";
              const selectedTopicsCount = isTopicFilter
                ? Array.isArray(activeFilters[filterType])
                  ? activeFilters[filterType].length
                  : activeFilters[filterType] !== "All"
                  ? 1
                  : 0
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
                      {filterType} (
                      {Array.isArray(activeFilters[filterType])
                        ? activeFilters[filterType].join(", ")
                        : activeFilters[filterType]}
                      )
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
                        className="absolute mt-1 w-full bg-white border shadow-lg rounded z-50"
                      >
                        {filters[filterType].map((option) => {
                          const isDisabled =
                            isTopicFilter &&
                            selectedTopicsCount >= 3 &&
                            !activeFilters[filterType]?.includes(option);

                          return (
                            <div
                              key={option}
                              onClick={() =>
                                !isDisabled && handleSelect(filterType, option)
                              }
                              className={`px-4 py-2 text-sm cursor-pointer ${
                                isDisabled
                                  ? "opacity-40 cursor-not-allowed"
                                  : "hover:bg-gray-100"
                              }`}
                            >
                              {option}
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
              <Image src={SearchIcon} alt="search" width={20} height={20} />
              <span className="text-[10px] text-[#2E3092] ">Search</span>
            </button>
            <button
              className="w-14 h-14 p-2 rounded-lg bg-[#EFEFEF] hover:bg-[#ddd] border border-[#2E3092] flex flex-col justify-center items-center"
              onClick={() =>
                setActiveFilters({
                  Industry: "All",
                  Topics: "All",
                  Author: "All",
                })
              }
            >
              <Image src={FilterIcon} alt="reset" width={25} height={25} />
              <span className="text-[10px] text-[#2E3092] ">Clear</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
