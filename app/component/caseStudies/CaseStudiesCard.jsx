"use client";

import Image from "next/image";
import { FaArrowRight, FaGreaterThan, FaLessThan, FaShareAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Info1 from "../../assets/Infographic/Info1.webp";
import Casestudybg from "../../assets/home/Insights.webp";
import { fetchCaseStudiesList } from "../../store/actions/caseStudyActions.js";
import { setSelectedCaseStudyId } from "../../store/reducers/caseStudyReducer.js";
import { fetchBlogFilterList } from "@/app/store/actions/blogAction";
import { FilterSec } from "../utilities/FilterSec";
import { slugify } from "../utilities/helper/SlugGenerator";
import { baseUrl } from "@/config";

export const CaseStudiesCard = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const listData = useSelector((state) => state.caseStudy.list) || [];
  const FilterIndustry = useSelector((state) => state.blogs.filterIndustry) || [];
  const FilterTopic = useSelector((state) => state.blogs.filterTopic) || [];

  const [filteredListData, setFilteredListData] = useState([]);
  const [activeFilters, setActiveFilters] = useState({ Industry: "All", Topics: [] });
  const [openDropdown, setOpenDropdown] = useState("");
  const [copiedId, setCopiedId] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 6;

  // Load initial data
  useEffect(() => {
    dispatch(fetchBlogFilterList());
    dispatch(fetchCaseStudiesList());
  }, [dispatch]);

  useEffect(() => {
    setFilteredListData(listData);
    setCurrentPage(0);
  }, [listData]);

  // Resources mapped safely
  const resources = filteredListData.map((item) => ({
    ...item,
    id: item._id,
    title: item?.hero_title1 || "Untitled",
    image: item.featured_image ? `${baseUrl}${item.featured_image}` : Info1,
    slug: slugify(item?.hero_title1 || "Untitled", { lower: true }),
    link: `https://yourdomain.com/card/${item._id}`,
  }));

  // Filtered resources
  const filteredResources = resources.filter((item) => {
    const industryMatch = activeFilters.Industry === "All" || item.industry === activeFilters.Industry;
    const topicMatch =
      activeFilters.Topics.length === 0 ||
      (item.tags && activeFilters.Topics.some((topic) => item.tags.includes(topic)));
    return industryMatch && topicMatch;
  });

  const totalPages = Math.ceil(filteredResources.length / itemsPerPage);
  const currentPageData = filteredResources.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const goToPage = (index) => {
    if (index < 0 || index >= totalPages) return;
    setCurrentPage(index);
  };

  const handleClick = (item) => {
    dispatch(setSelectedCaseStudyId(item._id));
    localStorage.setItem("selectedCaseStudyId", item._id);
    router.push(`/insights/case-studies/${item.slug}`);
  };

  const handleCopy = async (link, id) => {
    try {
      await navigator.clipboard.writeText(link);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1500);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  const toggleDropdown = (filter) => setOpenDropdown(openDropdown === filter ? "" : filter);

  const selectFilter = (type, value) => {
    setActiveFilters({ ...activeFilters, [type]: value });
    setOpenDropdown("");
    setCurrentPage(0);
  };

  const search = (value) => {
    if (!value) setFilteredListData(listData);
    else
      setFilteredListData(
        listData.filter((item) =>
          (item.hero_title1 || "").toLowerCase().includes(value.toLowerCase())
        )
      );
    setCurrentPage(0);
  };

  const filters = { Industry: ["All", ...FilterIndustry], Topics: ["All", ...FilterTopic] };

  return (
    <section className="text-black px-4 py-10 bg-white min-h-screen overflow-x-hidden">
      <div className="container mx-auto w-full sm:px-6 lg:px-8">
        <FilterSec
          filters={filters}
          activeFilters={activeFilters}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
          toggleDropdown={toggleDropdown}
          selectFilter={selectFilter}
          setActiveFilters={setActiveFilters}
          searchDebouncing={search}
          mainClass={"p-0 mx-0 px-0 sm:px-0 lg:px-0 -px-1 -ml-4"}
        />

        <p className="mb-4 text-sm">{filteredResources.length} Results</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <AnimatePresence>
            {currentPageData.map((item) => (
              <motion.div
                key={item.id}
                onClick={() => handleClick(item)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4 }}
                className="cursor-pointer flex flex-col h-[400px] md:h-[450px] border border-[#2E3092] rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <div className="w-full h-[65%] overflow-hidden">
                  <Image src={item.image} alt={item.title} width={400} height={400} className="w-full h-full object-cover"/>
                </div>
                <div className="w-full h-[35%] p-4 flex flex-col justify-between">
                  <h3 className="text-sm md:text-[16px] font-semibold text-[#28272D]">{item.title}</h3>
                  <div className="flex justify-between items-center">
                    <FaArrowRight color="#2E3092" className="w-6 h-6"/>
                    <button onClick={() => handleCopy(item.link, item.id)} title="Copy link">
                      <FaShareAlt color="#2E3092" className="w-6 h-6"/>
                    </button>
                  </div>
                  {copiedId === item.id && <span className="text-green-500 text-xs mt-2">Link copied!</span>}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center">

        <div className=" mt-8 gap-[2px] rounded-2xl border border-gray-300 overflow-hidden select-none">
          <motion.button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 0}
            className={`px-4 py-3 bg-white border-r border-gray-300 ${currentPage === 0 ? "text-gray-400 cursor-not-allowed" : "text-[#2E3092]"}`}
          >
            <FaLessThan className="w-3 h-3"/>
          </motion.button>

          {Array.from({ length: totalPages }, (_, i) => (
            <motion.button
              key={i}
              onClick={() => goToPage(i)}
              className={`px-4 py-2 border-r border-gray-300 ${currentPage === i ? "text-[#2E3092] font-medium" : "text-gray-500 hover:bg-gray-100"} bg-white`}
            >
              {i + 1}
            </motion.button>
          ))}

          <motion.button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages - 1}
            className={`px-4 py-2 bg-white ${currentPage === totalPages - 1 ? "text-gray-400 cursor-not-allowed" : "text-[#2E3092]"}`}
          >
            <FaGreaterThan className="w-3 h-3"/>
          </motion.button>
        </div>
        </div>
      </div>
    </section>
  );
};
