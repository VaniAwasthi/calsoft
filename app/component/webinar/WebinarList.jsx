"use client";

import Image from "next/image";
import { FaGreaterThan, FaLessThan, FaShareAlt } from "react-icons/fa";
import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { fetchWebinarsList } from "../../store/actions/webinarAction";
import {
  fetchBlogFilterList,
  fetchFilteredBlogs,
} from "../../store/actions/blogAction";
import { setSelectedDatasheetsId } from "../../store/reducers/datasheetReducer";
import { useRouter } from "next/navigation";
import Info1 from "../../assets/Infographic/whitepaper1.webp";
import ButtonImage from "../../assets/home/buttonImg.webp";
import ButtonLayout from "../utilities/ButtonLayout";
import { FilterSec } from "../utilities/FilterSec";
import { baseUrl } from "../../../config";
import { setSelectedWebinarsId } from "@/app/store/reducers/webinarsReducer";
import { slugify } from "../utilities/helper/SlugGenerator";

export const WebinarList = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const loadMoreRef = useRef(null);

  // Redux data
  const webinarsData = useSelector((state) => state.webinars?.list || []);
  const filterIndustry = useSelector(
    (state) => state.blogs?.filterIndustry || []
  );
  const filterTopic = useSelector((state) => state.blogs?.filterTopic || []);

  // Component state
  const [copiedId, setCopiedId] = useState(null);
  const [openDropdown, setOpenDropdown] = useState("");
  const [topicLimitWarning, setTopicLimitWarning] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    Industry: "All",
    Topics: [],
  });
  const [currentPage, setCurrentPage] = useState(0);
  const [visibleCount, setVisibleCount] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");

  const filters = {
    Industry: ["All", ...filterIndustry],
    Topics: ["All", ...filterTopic],
  };

  // Derived resources
  const resources = useMemo(
    () =>
      webinarsData.map((item) => {
        const slug = item.hero_title1
          ? item.hero_title1
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "")
          : "untitled";
        return {
          ...item,
          id: item._id,
          title: item.hero_title1 || "Untitled",
          image: item.featured_image
            ? `${baseUrl}${item.featured_image}`
            : Info1,
          tags: item.tags ? item.tags.split(",") : ["AI"],
          slug,
          link: `/insights/webinars/${slug}`,
        };
      }),
    [webinarsData]
  );

  // Filtered & searched resources
  const filteredResources = useMemo(() => {
    return resources.filter((item) => {
      const industryMatch =
        !activeFilters?.Industry ||
        activeFilters?.Industry === "All" ||
        item?.industry === activeFilters?.Industry;
      const topicsMatch =
        activeFilters?.Topics.length === 0 ||
        activeFilters?.Topics.some((t) =>
          item.tags.includes(t.title || t.name || t)
        );
      const searchMatch =
        !searchTerm ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase());
      return industryMatch && topicsMatch && searchMatch;
    });
  }, [resources, activeFilters, searchTerm]);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredResources.length / itemsPerPage);
  const currentPageData = filteredResources.slice(0, visibleCount);

  // Actions
  const handleClick = (item) => {
    dispatch(setSelectedWebinarsId(item?._id));
       const safeTitle = item.title || "untitled";
        const slug = slugify(safeTitle, { lower: true });
        localStorage.setItem("selectedWebinarId", item._id);
        router.push(`/insights/webinars/${slug}`);
  };

  const handleCopy = (link, id) => {
    navigator.clipboard.writeText(`${window.location.origin}${link}`);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleDropdown = (filter) => {
    setOpenDropdown(openDropdown === filter ? "" : filter);
  };

  const selectFilter = (type, selected) => {
    const updatedFilters = { ...activeFilters };

    if (type === "Topics") {
      const exists = updatedFilters.Topics.find((t) => t._id === selected._id);
      if (exists) {
        updatedFilters.Topics = updatedFilters.Topics.filter(
          (t) => t._id !== selected._id
        );
        setTopicLimitWarning(false);
      } else {
        if (updatedFilters?.Topics.length >= 3) {
          setTopicLimitWarning(true);
          setTimeout(() => setTopicLimitWarning(false), 3000);
          return;
        }
        updatedFilters.Topics = [...updatedFilters.Topics, selected];
      }
    } else {
      updatedFilters[type] = selected;
    }

    setActiveFilters(updatedFilters);
    setOpenDropdown("");

    dispatch(
      fetchFilteredBlogs({
        industry: updatedFilters?.Industry?._id || null,
        topics: updatedFilters?.Topics.map((t) => t._id),
      })
    );
  };

  const search = (value) => {
    setSearchTerm(value);
    setCurrentPage(0);
    setVisibleCount(itemsPerPage);
  };

  const goToPage = (index) => {
    if (index < 0 || index >= totalPages) return;
    setCurrentPage(index);
  };

  // Infinite scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) =>
            Math.min(prev + itemsPerPage, filteredResources.length)
          );
        }
      },
      { threshold: 1.0 }
    );

    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [filteredResources]);

  // Fetch data on mount
  useEffect(() => {
    dispatch(
      fetchWebinarsList({
        Industry: "All",
        Topics: [],
      })
    );
    dispatch(fetchBlogFilterList());
  }, [dispatch]);

  const performSearch = useCallback(() => {
    dispatch(fetchWebinarsList(activeFilters));
  }, [dispatch, activeFilters]);

  useEffect(() => {
    performSearch();
  }, [performSearch]);

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

        {topicLimitWarning && (
          <p className="text-red-500 text-sm mb-2">
            You can select a maximum of 3 topics.
          </p>
        )}

        <p className="mb-4 text-sm">{filteredResources.length} Results</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <AnimatePresence>
            {currentPageData.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="flex flex-col h-[350px] md:h-[400px] border border-[#2E3092] rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300"
              >
                <div className="w-full h-[55%] relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    width={400}
                    height={400}
                  />
                </div>

                <div className="flex flex-col flex-grow p-4">
                  <h3 className="text-sm md:text-[16px] font-semibold mb-2 text-[#28272D]">
                    {item.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#FF9F56] text-black text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <ButtonLayout
                      text="Read More"
                      onClick={() => handleClick(item)}
                      hoverImage={ButtonImage}
                      className="!h-[40px] !w-[200px]"
                    />
                    <div className="flex flex-col items-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopy(item.link, item.id);
                        }}
                        className="text-[#2E3092] hover:text-black"
                        title="Copy link"
                      >
                        <FaShareAlt className="w-6 h-6" />
                      </button>
                      {copiedId === item.id && (
                        <span className="text-green-500 text-xs mt-1">
                          Link copied!
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center mt-8 gap-[2px] rounded-2xl border border-gray-300 overflow-hidden select-none">
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

        <div ref={loadMoreRef} className="h-1"></div>
      </div>
    </section>
  );
};
