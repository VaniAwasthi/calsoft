"use client";

import Image from "next/image";
import { FaGreaterThan, FaLessThan, FaShareAlt } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Info1 from "../../assets/Infographic/Info1.webp";
import Info2 from "../../assets/Infographic/Info2.webp";
import { FilterSec } from "../utilities/FilterSec";

export const InfographicCard = () => {
  const [copiedId, setCopiedId] = useState(null);
  const [openDropdown, setOpenDropdown] = useState("");
  const [activeFilters, setActiveFilters] = useState({
    Industry: "All",
    Topics: "All",
    Author: "All",
  });
  const [currentPage, setCurrentPage] = useState(0);

  const filters = {
    Industry: ["All", "Tech", "Healthcare"],
    Topics: ["All", "Security", "AI"],
    Author: ["All", "Anton Frank", "John Doe"],
  };

  const images = [Info1, Info2];

  const cardData = new Array(30).fill(0).map((_, i) => ({
    id: i + 1,
    title: `Lorem Ipsum is simply dummy text of the printing and typesetting industry number ${
      i + 1
    }`,
    image: images[i % images.length],
    link: `https://yourdomain.com/card/${i + 1}`,
    author: i % 2 === 0 ? "Anton Frank" : "John Doe",
    tag: i % 2 === 0 ? "AI" : "Security",
    industry: i % 2 === 0 ? "Tech" : "Healthcare",
  }));

  const [resources] = useState([...cardData]);

  const toggleDropdown = (filter) => {
    setOpenDropdown(openDropdown === filter ? "" : filter);
  };

  const selectFilter = (type, value) => {
    setActiveFilters({ ...activeFilters, [type]: value });
    setOpenDropdown("");
    setCurrentPage(0);
  };

  const handleCopy = async (link, id) => {
    try {
      await navigator.clipboard.writeText(link);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1500);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  const filteredResources = resources.filter((item) => {
    const authorMatch =
      activeFilters.Author === "All" || item.author === activeFilters.Author;
    const tagMatch =
      activeFilters.Topics === "All" || item.tag === activeFilters.Topics;
    const industryMatch =
      activeFilters.Industry === "All" ||
      item.industry === activeFilters.Industry;
    return authorMatch && tagMatch && industryMatch;
  });

  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredResources.length / itemsPerPage);
  const currentPageData = filteredResources.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const goToPage = (index) => {
    if (index < 0 || index >= totalPages) return;
    setCurrentPage(index);
  };

  return (
    <section className="text-black px-4 py-10 bg-white min-h-screen overflow-x-hidden">
      <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8">
        <FilterSec
          filters={filters}
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
          openDropdown={openDropdown}
          toggleDropdown={toggleDropdown}
          selectFilter={selectFilter}
        />

        <p className="mb-4 text-sm">{filteredResources.length} Results</p>

        {/* Grid Display with animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <AnimatePresence>
            {currentPageData.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="flex flex-col h-[400px] md:h-[450px] border border-[#2E3092] rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                {/* Image */}
                <div className="w-full h-3/4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    width={400}
                    height={200}
                  />
                </div>

                {/* Content */}
                <div className="w-full h-1/4 p-4 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <h3 className="text-sm md:text-[16px] font-semibold w-9/12 break-words whitespace-normal text-[#28272D]">
                      {item.title}
                    </h3>
                    <button
                      onClick={() => handleCopy(item.link, item.id)}
                      className="text-gray-500 hover:text-black"
                      title="Copy link"
                    >
                      <FaShareAlt color="#2E3092" className="w-6 h-6" />
                    </button>
                  </div>

                  {copiedId === item.id && (
                    <span className="text-green-500 text-xs mt-2">
                      Link copied!
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Custom Pagination with animation */}
        <div className="mt-8 flex justify-center items-center gap-2 select-none">
          <motion.button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 0}
            whileHover={{ scale: currentPage === 0 ? 1 : 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`px-3 py-1 border border-[#2E3092] rounded ${
              currentPage === 0
                ? "text-gray-400 border-[#2E3092] cursor-not-allowed"
                : "hover:bg-gray-200"
            }`}
          >
            <FaLessThan color="#2E3092" className="w-5 h-5" />
          </motion.button>

          {Array.from({ length: totalPages }, (_, i) => (
            <motion.button
              key={i}
              onClick={() => goToPage(i)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 py-1 border border-[#2E3092] rounded ${
                currentPage === i
                  ? "bg-[#2E3092] text-white"
                  : "hover:bg-gray-100 text-[#2E3092]"
              }`}
            >
              {i + 1}
            </motion.button>
          ))}

          <motion.button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages - 1}
            whileHover={{ scale: currentPage === totalPages - 1 ? 1 : 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`px-3 py-1 border border-[#2E3092] rounded ${
              currentPage === totalPages - 1
                ? "text-gray-400 border-[#2E3092] cursor-not-allowed"
                : "hover:bg-gray-200"
            }`}
          >
            <FaGreaterThan color="#2E3092" className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};
