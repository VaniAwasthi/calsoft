"use client";

import Image from "next/image";
import { FaGreaterThan, FaLessThan, FaShareAlt } from "react-icons/fa";
import { useEffect, useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { fetchWhitepaperList } from "../../store/actions/whitepaperAction";
import { useRouter } from "next/navigation";
import { setSelectedWhitepaperId } from "../../store/reducers/whitepaperReducer";
import { slugify } from "../utilities/helper/SlugGenerator";
import { fetchBlogFilterList } from "@/app/store/actions/blogAction";
import { baseUrl } from "@/config";
import { FilterSec } from "../utilities/FilterSec";

export const WhitepaperCards = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const listData = useSelector((state) => state.whitepaper.list);
  const FilterIndustry = useSelector(
    (state) => state.blogs.filterIndustry || []
  );
  const FilterTopic = useSelector((state) => state.blogs?.filterTopic || []);

  const [activeFilters, setActiveFilters] = useState({
    Industry: "All",
    Topics: [],
  });
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedId, setCopiedId] = useState(null);
  const [openDropdown, setOpenDropdown] = useState("");

  const filters = {
    Industry: ["All", ...FilterIndustry],
    Topics: ["All", ...FilterTopic],
  };

  // Filter + search + mapping
  const filteredResources = useMemo(() => {
    return listData
      .filter((item) => {
        const industryMatch =
          activeFilters.Industry === "All" ||
          item.industry === activeFilters.Industry;

        const tagMatch =
          activeFilters.Topics.length === 0 ||
          activeFilters.Topics.some((topic) =>
            item.tags?.split(",").includes(topic)
          );

        const searchMatch =
          searchTerm === "" ||
          item.hero_title1?.toLowerCase().includes(searchTerm.toLowerCase());

        return industryMatch && tagMatch && searchMatch;
      })
      .map((item) => ({
        id: item._id,
        title: item.hero_title1 || "Untitled",
        image: `${baseUrl}${item.featured_image}`,
        slug: slugify(item.hero_title1 || "untitled", { lower: true }),
        link: `/insights/whitepaper/${item._id}`,
        author: item.author || "Unknown",
        tags: item.tags?.split(",") || ["General"],
        industry: item.industry || "Tech",
      }));
  }, [listData, activeFilters, searchTerm]);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredResources.length / itemsPerPage);
  const currentPageData = filteredResources.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handleClick = (item) => {
    dispatch(setSelectedWhitepaperId(item.id));
    localStorage.setItem("selectedWhitepaperId", item.id);
    router.push(`/insights/whitepaper/${item.slug}`);
  };

  const toggleDropdown = (filter) =>
    setOpenDropdown(openDropdown === filter ? "" : filter);
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

  const search = (value) => {
    setSearchTerm(value);
    setCurrentPage(0);
  };

  const goToPage = (index) => {
    if (index < 0 || index >= totalPages) return;
    setCurrentPage(index);
  };

  useEffect(() => {
    dispatch(fetchBlogFilterList());
    dispatch(
      fetchWhitepaperList({
        Industry: "All",
        Topics: [],
      })
    );
  }, [dispatch]);

  const performSearch = useCallback(() => {
    dispatch(fetchWhitepaperList(activeFilters));
  }, [dispatch, activeFilters]);

  useEffect(() => {
    performSearch();
  }, [performSearch]);

  useEffect(() => {
    if (currentPage >= totalPages) setCurrentPage(0);
  }, [currentPage, totalPages]);

  return (
    <section className="text-black px-4 py-10 bg-white min-h-screen overflow-x-hidden">
      <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8">
        <FilterSec
          filters={filters}
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
          toggleDropdown={toggleDropdown}
          selectFilter={selectFilter}
          searchDebouncing={search}
          mainClass={"p-0 mx-0"}
        />

        <p className="mb-4 text-sm">{filteredResources.length} Results</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-[2rem]">
          <AnimatePresence>
            {currentPageData.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="flex flex-col h-[400px] md:h-[450px] overflow-hidden"
                onClick={() => handleClick(item)}
              >
                <div className="w-full h-3/5 border-2 border-[#2E3092] rounded-2xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-2xl"
                    width={400}
                    height={400}
                  />
                </div>

                <div className="w-full px-4 py-3 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <h3 className="text-sm md:text-[16px] font-semibold w-9/12 break-words text-[#28272D]">
                      {item.title}
                    </h3>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopy(item.link, item.id);
                      }}
                      className="text-gray-500 hover:text-black"
                      title="Copy link"
                    >
                      <FaShareAlt color="#2E3092" className="w-6 h-6" />
                    </button>
                  </div>

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

        <div className="flex justify-center items-center">
          <div className="mt-8 gap-[2px] rounded-2xl border border-gray-300 overflow-hidden select-none">
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
