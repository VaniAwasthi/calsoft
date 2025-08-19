"use client";

import Image from "next/image";
import { FaGreaterThan, FaLessThan, FaShareAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Industry1 from "../../assets/Infographic/Industry1.webp";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogFilterList } from "@/app/store/actions/blogAction";
import FilterPanel from "../utilities/FilterPannel";

export const IndustryReportCard = () => {
  const dispatch = useDispatch();

  const [copiedId, setCopiedId] = useState(null);
  const [openDropdown, setOpenDropdown] = useState("");

  useEffect(() => {
    dispatch(fetchBlogFilterList());
  }, [dispatch]);

  const FilterIndustry = useSelector(
    (state) => state.blogs.filterIndustry || []
  );
  const FilterTopic = useSelector((state) => state.blogs?.filterTopic || []);
  const [activeFilters, setActiveFilters] = useState({
    Industry: "All",
    Topics: [],
  });

  const filters = {
    Industry: ["All", ...FilterIndustry],
    Topics: ["All", ...FilterTopic],
  };

  const [currentPage, setCurrentPage] = useState(0);

  const images = [Industry1];

  const cardData = new Array(18).fill(0).map((_, i) => ({
    id: i + 1,
    title: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Example ${
      i + 1
    }`,
    image: images[i % images.length],
    link: `https://yourdomain.com/card/${i + 1}`,
    author: i % 2 === 0 ? "Anton Frank" : "John Doe",
    tags: ["AI", "Security"],
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
    const industryMatch =
      activeFilters.Industry === "All" ||
      item.industry === activeFilters.Industry;

    const tagMatch =
      activeFilters.Topics.length === 0 ||
      activeFilters.Topics.some((topic) => item.tags.includes(topic));

    return industryMatch && tagMatch;
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
        <FilterPanel
          filters={filters}
          activeFilters={activeFilters}
          openDropdown={openDropdown}
          toggleDropdown={toggleDropdown}
          selectFilter={selectFilter}
          setActiveFilters={setActiveFilters}
        />

        <p className="mb-4 text-sm">{filteredResources.length} Results</p>

        {/* Grid Display with animation */}
        <div className="grid grid-cols-1 gap-8">
          <AnimatePresence>
            {currentPageData.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="flex flex-col md:flex-row h-[450px] md:h-[250px] border border-[#2E3092] rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                {/* Image */}
                <div className="md:w-2/4 w-full h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    width={300}
                    height={200}
                  />
                </div>

                {/* Content */}
                <div className="w-full h-full p-4 flex flex-col justify-between">
                  <div className="flex flex-col justify-between items-start md:px-7">
                    <h3 className="text-sm md:text-[18px] font-semibold break-words whitespace-normal text-[#28272D]">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 my-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-[#FF9F56] text-black text-xs px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between w-full items-center py-5 mt-2">
                      <Link
                        href="#"
                        className="px-9 py-3 rounded-4xl border border-[#2E3092]"
                      >
                        Read More
                      </Link>
                      <button
                        onClick={() => handleCopy(item.link, item.id)}
                        className="text-gray-500 hover:text-black"
                        title="Copy link"
                      >
                        <FaShareAlt color="#2E3092" className="w-6 h-6" />
                      </button>
                    </div>
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

        {/* Pagination */}
        <div className="flex justify-center items-center">
          <div className="mt-8 gap-[2px] rounded-2xl border border-gray-300 overflow-hidden select-none">
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
