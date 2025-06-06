import Image from "next/image";
import { FaGreaterThan, FaLessThan, FaShareAlt } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Info1 from "../../assets/Infographic/whitepaper1.webp";
import Info2 from "../../assets/Infographic/whitepaper2.webp";
import { FilterSec } from "../utilities/FilterSec";

export const DataSheetCards = () => {
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

  const cardData = new Array(18).fill(0).map((_, i) => ({
    id: i + 1,
    title: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.  ${
      i + 1
    }`,
    image: images[i % images.length],
    link: `https://yourdomain.com/card/${i + 1}`,
    author: i % 2 === 0 ? "Anton Frank" : "John Doe",
    tags: ["AI", "Security", "Gaps"],
    industry: i % 2 === 0 ? "Tech" : "Healthcare",
  }));
  const heading =
    "Cloud Provider Accelerates VMware Migration with Calsoft’s CLI Tool";
  const description = `A leading computing and edge cloud provider needed a robust, self-service migration framework to help customers transition from VMware-based environments to its proprietary cloud. Calsoft developed a lightweight, CLI-based migration tool that automated discovery, conversion, and validation-enabling fast, error-free virtual machine (VM) migrations at scale....
<br><br>

A leading computing and edge cloud provider needed a robust, self-service migration framework to help customers transition from VMware-based environments to its proprietary cloud. Calsoft developed a lightweight, CLI-based migration tool that automated discovery, conversion, and validation-enabling fast, error-free virtual machine (VM) migrations at scale....`;
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
                className="
          relative flex flex-col h-[200px] md:h-[250px]
          border border-[#2E3092] rounded-xl overflow-hidden shadow
          hover:shadow-lg hover:bg-[#2E3092]/0.4 transition duration-300
          group
        "
              >
                {/* Image Container */}
                <div className="w-full h-[75%] relative">
                  {/* Image */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    width={400}
                    height={400}
                  />
                </div>

                {/* Overlay on Card Hover */}
                <div
                  className="
          absolute inset-0 bg-[#2E3092]/20 flex items-center justify-center
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          backdrop-blur-sm
        "
                >
                  <div className="flex justify-between items-start px-4 w-full">
                    <h3 className="text-sm md:text-[16px] font-semibold w-9/12 break-words whitespace-normal text-white">
                      {item.title}
                    </h3>
                    <div className="flex flex-col">
                      <button
                        onClick={() => handleCopy(item.link, item.id)}
                        className="text-white hover:text-black"
                        title="Copy link"
                      >
                        <FaShareAlt className="w-6 h-6" />
                      </button>
                      <div>
                        {copiedId === item.id && (
                          <span className="text-green-500 text-xs mt-2">
                            Link copied!
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className="
          w-full px-4 py-3 flex flex-col justify-between
          group-hover:opacity-0 transition-opacity duration-300
        "
                >
                  <div className="flex flex-wrap gap-2 mb-5 mt-3">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#FF9F56] text-black text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Custom Pagination with animation */}
        <div className="flex justify-center items-center">
          <div className="mt-8  gap-[2px] rounded-2xl border border-gray-300 overflow-hidden select-none">
            {/* Previous Button */}
            <motion.button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 0}
              whileHover={{ scale: currentPage === 0 ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-3 bg-white border-r border-gray-300 ${
                currentPage === 0
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-[#2E3092]"
              }`}
            >
              <FaLessThan className="w-3 h-3" />
            </motion.button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => (
              <motion.button
                key={i}
                onClick={() => goToPage(i)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 border-r border-gray-300 ${
                  currentPage === i
                    ? "text-[#2E3092] font-medium"
                    : "text-gray-500 hover:bg-gray-100"
                } bg-white`}
              >
                {i + 1}
              </motion.button>
            ))}

            {/* Next Button */}
            <motion.button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages - 1}
              whileHover={{ scale: currentPage === totalPages - 1 ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 bg-white ${
                currentPage === totalPages - 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-[#2E3092]"
              }`}
            >
              <FaGreaterThan className="w-3 h-3" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};
