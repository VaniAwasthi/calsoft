"use client";

import Image from "next/image";
import { FaGreaterThan, FaLessThan, FaShareAlt } from "react-icons/fa";
import { useEffect, useState, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Info1 from "../../assets/Infographic/whitepaper1.webp";
import { useDispatch, useSelector } from "react-redux";
import { fetchDatasheetList } from "../../store/actions/datasheetAction";
import { baseUrl } from "../../../config";
import { fetchBlogFilterList } from "../../store/actions/blogAction";
import { setSelectedDatasheetsId } from "../../store/reducers/datasheetReducer";
import { useRouter } from "next/navigation";
import { generateSlug } from "../utilities/helper/SlugGenerator";
import { FilterSec } from "../utilities/FilterSec";

export const DataSheetCards = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [copiedId, setCopiedId] = useState(null);
  const [openDropdown, setOpenDropdown] = useState("");
  const [topicLimitWarning, setTopicLimitWarning] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    Industry: "All",
    Topics: [],
  });
  const [currentPage, setCurrentPage] = useState(0);
  const loadMoreRef = useRef(null);

  // ✅ Fetch data on mount
  useEffect(() => {
    dispatch(fetchDatasheetList());
    dispatch(fetchBlogFilterList());
  }, [dispatch]);

  // ✅ Always read from Redux
  const datasheetData = useSelector((state) => state.datasheets?.list || []);
  const FilterIndustry = useSelector((state) => state.blogs.filterIndustry || []);
  const FilterTopic = useSelector((state) => state.blogs.filterTopic || []);

  // ✅ Memoize transformed resources
  const resources = useMemo(() => {
    return datasheetData.map((item) => ({
      ...item,
      id: item._id,
      title: item.hero_title1,
      image: item.featured_image ? `${baseUrl}${item.featured_image}` : Info1,
      tags: item.tags?.length ? item.tags : ["AI"], // fallback tag
      slug: item.hero_title1
        ? item.hero_title1.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
        : "untitled",
      link: `/${item._id}`,
    }));
  }, [datasheetData]);

  // ✅ Apply filters
  const filteredResources = useMemo(() => {
    return resources.filter((item) => {
      const industryMatch =
        activeFilters.Industry === "All" || item.industry === activeFilters.Industry;

      const topicMatch =
        activeFilters.Topics.length === 0 ||
        activeFilters.Topics.some((t) => item.tags.includes(t.name || t));

      return industryMatch && topicMatch;
    });
  }, [resources, activeFilters]);

  // ✅ Pagination
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredResources.length / itemsPerPage);
  const currentPageData = filteredResources.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // ✅ Reset page when filter changes
  useEffect(() => {
    setCurrentPage(0);
  }, [filteredResources.length]);

  // ✅ Handlers
  const handleClick = (item) => {
    dispatch(setSelectedDatasheetsId(item._id));
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedDateSheetId", item._id);
    }
    const slug = generateSlug(item.hero_title1, { lower: true });
    router.push(`/insights/datesheets/${slug}`);
  };

  const handleCopy = (link, id) => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(`${window.location.origin}${link}`);
    }
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const goToPage = (page) => {
    if (page >= 0 && page < totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="text-black px-4 py-10 bg-white min-h-screen overflow-x-hidden">
      <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8">
        <FilterSec
          filters={{ Industry: FilterIndustry, Topics: FilterTopic }}
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
          mainClass={"p-0 mx-0 px-0 sm:px-0 lg:px-0 -px-1 -ml-4"}
        />

        {topicLimitWarning && (
          <p className="text-red-500 text-sm mb-2">
            You can select a maximum of 3 topics.
          </p>
        )}

        <p className="mb-4 text-sm">{filteredResources.length} Results</p>

        {/* Grid Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <AnimatePresence>
            {currentPageData.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                onClick={() => handleClick(item)}
                className="relative flex flex-col h-[200px] md:h-[250px] border border-[#2E3092] rounded-xl overflow-hidden shadow hover:shadow-lg hover:bg-[#2E3092]/40 transition duration-300 group"
              >
                <div className="w-full h-[75%] relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    width={400}
                    height={400}
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#2E3092]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                  <div className="flex justify-between items-start px-4 w-full">
                    <h3 className="text-sm md:text-[16px] font-semibold w-9/12 break-words text-white">
                      {item.title}
                    </h3>
                    <div className="flex flex-col">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopy(item.link, item.id);
                        }}
                        className="text-white hover:text-black"
                        title="Copy link"
                      >
                        <FaShareAlt className="w-6 h-6" />
                      </button>
                      {copiedId === item.id && (
                        <span className="text-green-500 text-xs mt-2">
                          Link copied!
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="w-full px-4 py-3 flex flex-col justify-between group-hover:opacity-0 transition-opacity duration-300">
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center">
            <div className="mt-8 gap-[2px] rounded-2xl border border-gray-300 overflow-hidden select-none">
              {/* Previous */}
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

              {/* Pages */}
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

              {/* Next */}
              <motion.button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages - 1}
                whileHover={{
                  scale: currentPage === totalPages - 1 ? 1 : 1.05,
                }}
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
        )}

        {/* Load More Trigger */}
        <div ref={loadMoreRef} className="h-1"></div>
      </div>
    </section>
  );
};
