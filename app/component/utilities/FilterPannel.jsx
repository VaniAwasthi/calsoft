"use client";
import { IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import FilterIcon from "../../assets/blog/cleanIcon.svg";
import SearchIcon from "../../assets/blog/filterSeach.svg";
import { fetchBlogList } from "../../store/actions/blogAction";
import { useDispatch } from "react-redux";

export default function FilterPanel({
  filters,
  activeFilters,
  openDropdown,
  toggleDropdown,
  selectFilter,
  setActiveFilters,
}) {
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6 relative z-10">
      {Object.keys(filters).map((filterType) => (
        <motion.div
          key={filterType}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          <button
            onClick={() => toggleDropdown(filterType)}
            className="w-full h-12 bg-[#2b2eae] text-white px-4 py-2 rounded flex items-center justify-between"
          >
            <span>{filterType}</span>

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
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute mt-1 w-full bg-white border shadow-lg rounded z-50 max-h-60 overflow-y-auto"
              >
                {filters[filterType].map((option) => (
                  <div
                    key={option._id}
                    onClick={() => {
                      selectFilter(filterType, option);
                      toggleDropdown("");
                    }}
                    className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
                      filterType === "Topics"
                        ? activeFilters.Topics?.some(
                            (t) => t._id === option._id
                          )
                          ? "bg-[#2E3092] text-white hover:text-black"
                          : ""
                        : activeFilters[filterType]?._id === option._id
                        ? "bg-[#2E3092] text-white hover:text-black"
                        : ""
                    }`}
                  >
                    {option.name}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}

      {/* Search & Clear buttons */}
      <div className="flex gap-2">
        <button className="w-14 h-14 p-2 rounded-lg bg-[#EFEFEF] hover:bg-[#ddd] border border-[#2E3092] flex flex-col justify-center items-center">
          <Image src={SearchIcon} alt="search" width={20} height={20} />
          <span className="text-[10px] text-[#2E3092] ">Search</span>
        </button>
        <button
          className="w-14 h-14 p-2 rounded-lg bg-[#EFEFEF] hover:bg-[#ddd] border border-[#2E3092] flex flex-col justify-center items-center"
          onClick={() => {
            setActiveFilters({
              Author: "All",
              Industry: "All",
              Topics: [],
            });
            dispatch(fetchBlogList());
          }}
        >
          <Image src={FilterIcon} alt="reset" width={25} height={25} />
          <span className="text-[10px] text-[#2E3092] ">Clear</span>
        </button>
      </div>
    </div>
  );
}
