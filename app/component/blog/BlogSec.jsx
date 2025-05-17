"use client";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiShare2 } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

import sampleImage1 from "../../assets/blog/blogImage.webp";
import sampleImage2 from "../../assets/blog/blog-2.webp";
import sampleImage3 from "../../assets/blog/blog-3.webp";
import FilterIcon from "../../assets/blog/cleanIcon.svg";
import SearchIcon from "../../assets/blog/filterSeach.svg";
import ArrowIcon from "../../assets/blog/rightArrow.svg";
import Loadmore from "../../assets/blog/loadmoreicon.svg";

const data = [
  {
    tag: "Webinar",
    title: "Deep Dive on Unmasking Security Gaps",
    author: "Anton Frank",
    date: "20 APR 2025",
    img: sampleImage1,
  },
  {
    tag: "Analyst Report",
    title: "Radicati Group Secure Email Market Quadrant, 2025",
    author: "Anton Frank",
    date: "20 APR 2025",
    img: sampleImage2,
  },
  {
    tag: "Research Report",
    title: "A Deep Dive into the Leaked Black Basta Chat Logs",
    author: "Anton Frank",
    date: "20 APR 2025",
    img: sampleImage3,
  },
  // Duplicate to simulate 12 items
  {
    tag: "Webinar",
    title: "The Future of AI-Driven Security",
    author: "John Doe",
    date: "21 APR 2025",
    img: sampleImage1,
  },
  {
    tag: "Analyst Report",
    title: "Cloud Security Trends 2025",
    author: "John Doe",
    date: "22 APR 2025",
    img: sampleImage2,
  },
  {
    tag: "Research Report",
    title: "Insider Threat Detection in Hybrid Work Environments",
    author: "John Doe",
    date: "23 APR 2025",
    img: sampleImage3,
  },
  {
    tag: "Webinar",
    title: "Next-Gen Endpoint Protection",
    author: "Anton Frank",
    date: "24 APR 2025",
    img: sampleImage1,
  },
  {
    tag: "Analyst Report",
    title: "Cybersecurity for Healthcare 2025",
    author: "John Doe",
    date: "25 APR 2025",
    img: sampleImage2,
  },
  {
    tag: "Research Report",
    title: "Threat Intelligence Integration Best Practices",
    author: "Anton Frank",
    date: "26 APR 2025",
    img: sampleImage3,
  },
  {
    tag: "Webinar",
    title: "Building Resilience in Cyber Infrastructure",
    author: "Anton Frank",
    date: "27 APR 2025",
    img: sampleImage1,
  },
  {
    tag: "Analyst Report",
    title: "State of Email Security: Market Insights",
    author: "John Doe",
    date: "28 APR 2025",
    img: sampleImage2,
  },
  {
    tag: "Research Report",
    title: "Advanced Malware Campaigns in 2025",
    author: "Anton Frank",
    date: "29 APR 2025",
    img: sampleImage3,
  },
];

const filters = {
  Industry: ["All", "Tech", "Healthcare"],
  Topics: ["All", "Security", "AI"],
  Author: ["All", "Anton Frank", "John Doe"],
};

export default function ResourceGrid() {
  const [resources] = useState([...data]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [activeFilters, setActiveFilters] = useState({
    Industry: "All",
    Topics: "All",
    Author: "All",
  });
  const [openDropdown, setOpenDropdown] = useState("");

  const toggleDropdown = (filter) => {
    setOpenDropdown(openDropdown === filter ? "" : filter);
  };

  const selectFilter = (type, value) => {
    setActiveFilters({ ...activeFilters, [type]: value });
    setOpenDropdown("");
    setVisibleCount(6);
  };

  const handleShare = async (item) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: item.title,
          text: `Check this out: ${item.title}`,
          url: window.location.href,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      alert("Sharing not supported in this browser.");
    }
  };

  const filteredResources = resources.filter((item) => {
    const authorMatch =
      activeFilters.Author === "All" || item.author === activeFilters.Author;
    const tagMatch =
      activeFilters.Topics === "All" || item.tag === activeFilters.Topics;
    const industryMatch = activeFilters.Industry === "All"; // Adjust logic if needed
    return authorMatch && tagMatch && industryMatch;
  });

  return (
    <motion.section
      className="text-black px-4 py-10 bg-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        className="container mx-auto px-4 md:px-20 w-full"
      >
        {/* Filters */}
        <div className="manrope grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 relative z-10">
          {Object.keys(filters).map((filterType) => (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              key={filterType}
              className="relative"
            >
              <button
                onClick={() => toggleDropdown(filterType)}
                className="w-full h-12 bg-[#2b2eae] text-white px-4 py-2 rounded flex items-center justify-between"
              >
                <span>
                  {filterType} ({activeFilters[filterType]})
                </span>
                <IoIosArrowDown
                  className={`transition-transform duration-300 ${
                    openDropdown === filterType ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown */}
              <AnimatePresence>
                {openDropdown === filterType && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute mt-1 w-full bg-white border shadow-lg rounded z-20"
                  >
                    {filters[filterType].map((option) => (
                      <div
                        key={option}
                        onClick={() => selectFilter(filterType, option)}
                        className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                      >
                        {option}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

          {/* Search and Reset */}
          <div className="flex items-center gap-2 justify-end">
            <button className="w-12 h-11 p-2 rounded bg-[#EFEFEF] hover:bg-[#ddd] border-[#2E3092] border-1">
              <Image src={SearchIcon} alt="search" className="w-full h-full" />
            </button>
            <button
              className="w-12 h-11 p-2 rounded bg-[#EFEFEF] hover:bg-[#ddd] border-[#2E3092] border-1"
              onClick={() =>
                setActiveFilters({
                  Industry: "All",
                  Topics: "All",
                  Author: "All",
                })
              }
            >
              <Image
                src={FilterIcon}
                alt="reset"
                className="w-full h-full translate-x-[3px] translate-y-[-17px]"
              />
            </button>
          </div>
        </div>

        {/* Results Count */}
        <p className="manrope mb-4 text-sm">
          {filteredResources.length} Results
        </p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredResources.slice(0, visibleCount).map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              className="bg-[#F8F9FA] border border-[#181C8E] text-black rounded-lg shadow-xl overflow-hidden relative"
            >
              <button
                className="absolute top-2 right-2 text-xl text-[#181C8E] z-10"
                onClick={() => handleShare(item)}
              >
                <FiShare2 />
              </button>

              <div className="p-4">
                <p className="Inter text-[12px] font-light text-black uppercase">
                  {item.tag}
                </p>
                <h3 className="manrope font-semibold mt-4 mb-6  pb-[1rem] text-[22px] h-[40px] text-[#B10C2A]">
                  {item.title}
                </h3>
                <div className="my-2 flex justify-between ">
                  <span className="text-[#E36C0A] text-[13px] font-semibold">
                    {item.author}
                  </span>
                  <span className="text-[#939393] text-[13px] font-semibold">
                    {item.date}
                  </span>
                </div>
              </div>

              <div className="relative w-full h-48 overflow-hidden rounded-b-lg">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2 right-4">
                  <Image src={ArrowIcon} alt="arrow" width={24} height={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More / Show Less */}
        {filteredResources.length > 6 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() =>
                setVisibleCount((prev) =>
                  prev >= filteredResources.length
                    ? 6
                    : filteredResources.length
                )
              }
              className="flex flex-col items-center gap-2 text-[#2b2eae] text-sm hover:underline"
            >
              {visibleCount >= filteredResources.length ? null : (
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={Loadmore}
                    alt="load more"
                    width={24}
                    height={24}
                  />
                </motion.div>
              )}
              {visibleCount >= filteredResources.length
                ? "Show Less"
                : "Load More"}
            </button>
          </div>
        )}
      </motion.div>
    </motion.section>
  );
}
