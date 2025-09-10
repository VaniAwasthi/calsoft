"use client";

import Image from "next/image";
import { FaGreaterThan, FaLessThan, FaShareAlt } from "react-icons/fa";
import { useEffect, useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Info1 from "../../assets/Infographic/whitepaper1.webp";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogFilterList, fetchFilteredBlogs } from "../../store/actions/blogAction";
import { fetchWebinarsList } from "../../store/actions/webinarAction";
import { setSelectedDatasheetsId } from "../../store/reducers/datasheetReducer";
import { useRouter } from "next/navigation";
import ButtonImage from "../../assets/home/buttonImg.webp";
import ButtonLayout from "../utilities/ButtonLayout";
import { FilterSec } from "../utilities/FilterSec";
import { baseUrl } from "../../../config";

export const WebinarList = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [copiedId, setCopiedId] = useState(null);
  const [openDropdown, setOpenDropdown] = useState("");
  const [topicLimitWarning, setTopicLimitWarning] = useState(false);
  const [activeFilters, setActiveFilters] = useState({ Industry: null, Topics: [] });
  const [currentPage, setCurrentPage] = useState(0);

  const WebinarsData = useSelector((state) => state.webinars?.list || []);
  const FilterIndustry = useSelector((state) => state.blogs.filterIndustry || []);
  const FilterTopic = useSelector((state) => state.blogs.filterTopic || []);

  const [loading, setLoading] = useState(true);

  // Memoized filters
  const filters = useMemo(
    () => ({
      Industry: ["All", ...FilterIndustry],
      Topics: ["All", ...FilterTopic],
    }),
    [FilterIndustry, FilterTopic]
  );

  // Memoized resources
  const resources = useMemo(
    () =>
      WebinarsData.map((item) => ({
        id: item._id,
        title: item.hero_title1 || "Untitled",
        image: item.featured_image ? `${baseUrl}${item.featured_image}` : Info1,
        tags: ["AI"],
        slug: item.hero_title1
          ? item.hero_title1.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
          : "untitled",
        link: `/insights/webinars/${item.hero_title1}`,
      })),
    [WebinarsData]
  );

  const [filteredResources, setFilteredResources] = useState([]);

  // Update filteredResources when resources change
  useEffect(() => {
    setFilteredResources(resources);
    setCurrentPage(0);
    setLoading(false);
  }, [resources]);

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await dispatch(fetchWebinarsList());
      await dispatch(fetchBlogFilterList());
      setLoading(false);
    };
    fetchData();
  }, [dispatch]);

  const handleClick = useCallback(
    (item) => {
      router.push(`/insights/webinars/${item.slug}`);
      dispatch(setSelectedDatasheetsId(item.id));
    },
    [router, dispatch]
  );

  const handleCopy = useCallback((link, id, e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(`${window.location.origin}${link}`);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  }, []);

  const toggleDropdown = useCallback((filter) => {
    setOpenDropdown((prev) => (prev === filter ? "" : filter));
  }, []);

  const selectFilter = useCallback(
    (type, selected) => {
      const updatedFilters = { ...activeFilters };

      if (type === "Topics") {
        const exists = updatedFilters.Topics.find((t) => t._id === selected._id);
        if (exists) {
          updatedFilters.Topics = updatedFilters.Topics.filter((t) => t._id !== selected._id);
          setTopicLimitWarning(false);
        } else {
          if (updatedFilters.Topics.length >= 3) {
            setTopicLimitWarning(true);
            setTimeout(() => setTopicLimitWarning(false), 3000);
            return;
          }
          updatedFilters.Topics.push(selected);
        }
      } else {
        updatedFilters[type] = selected;
      }

      setActiveFilters(updatedFilters);
      setOpenDropdown("");

      dispatch(
        fetchFilteredBlogs({
          industry: updatedFilters.Industry?._id || null,
          topics: updatedFilters.Topics.map((t) => t._id),
        })
      );
    },
    [activeFilters, dispatch]
  );

  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredResources.length / itemsPerPage);
  const currentPageData = filteredResources.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const goToPage = useCallback(
    (index) => {
      if (index < 0 || index >= totalPages) return;
      setCurrentPage(index);
    },
    [totalPages]
  );

  const search = useCallback(
    (value) => {
      if (!value) setFilteredResources(resources);
      else setFilteredResources(resources.filter((r) => r.title.toLowerCase().includes(value.toLowerCase())));
      setCurrentPage(0);
    },
    [resources]
  );

  if (loading) {
    return <p className="text-center py-20 text-gray-500">Loading webinars...</p>;
  }

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
          mainClass="p-0 mx-0 px-0 sm:px-0 lg:px-0 -px-1 -ml-4"
        />

        {topicLimitWarning && (
          <p className="text-red-500 text-sm mb-2">You can select a maximum of 3 topics.</p>
        )}

        <p className="mb-4 text-sm">{filteredResources.length} Results</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <AnimatePresence>
            {currentPageData.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col h-[350px] md:h-[400px] border border-[#2E3092] rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300 cursor-pointer"
                onClick={() => handleClick(item)}
              >
                <div className="w-full h-[55%] relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col flex-grow p-4">
                  <h3 className="text-sm md:text-[16px] font-semibold mb-2 text-[#28272D]">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag) => (
                      <span key={tag} className="bg-[#FF9F56] text-black text-xs px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <ButtonLayout
                      text="Read More"
                      onClick={() => handleClick(item)}
                      hoverImage={ButtonImage}
                      className="!h-[40px] !w-[150px]"
                    />
                    <div className="flex flex-col items-center">
                      <button
                        onClick={(e) => handleCopy(item.link, item.id, e)}
                        className="text-[#2E3092] hover:text-black"
                        title="Copy link"
                      >
                        <FaShareAlt className="w-6 h-6" />
                      </button>
                      {copiedId === item.id && (
                        <span className="text-green-500 text-xs mt-1">Link copied!</span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-8">
          <div className="gap-[2px] rounded-2xl border border-gray-300 overflow-hidden select-none flex">
            <motion.button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 0}
              className={`px-4 py-3 bg-white border-r border-gray-300 ${
                currentPage === 0 ? "text-gray-400 cursor-not-allowed" : "text-[#2E3092]"
              }`}
            >
              <FaLessThan className="w-3 h-3" />
            </motion.button>

            {Array.from({ length: totalPages }, (_, i) => (
              <motion.button
                key={i}
                onClick={() => goToPage(i)}
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
