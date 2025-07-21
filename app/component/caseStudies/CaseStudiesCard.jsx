"use client";

import Image from "next/image";
import {
  FaArrowRight,
  FaGreaterThan,
  FaLessThan,
  FaShareAlt,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Info1 from "../../assets/Infographic/Info1.webp";
import Info2 from "../../assets/Infographic/Info2.webp";
import { FilterSec } from "../utilities/FilterSec";
import Casestudybg from "../../assets/home/casestudybg.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { fetchCaseStudiesList } from "../../store/actions/caseStudyActions.js";
import { setSelectedCaseStudyId } from "../../store/reducers/caseStudyReducer.js";
import { title } from "process";

export const CaseStudiesCard = () => {
  const baseUrl = "http://35.162.115.74/admin/assets/dist";
  const dispatch = useDispatch();
  const listData = useSelector((state) => state.caseStudy.list);

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
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchCaseStudiesList());
  }, [dispatch]);

  const handleClick = (id, slug) => {
    dispatch(setSelectedCaseStudyId(id));
    // this should be correct
    router.push(`/insights/case-studies/${slug}`);
  };

  const images = [Info1, Info2];

  const resources = listData.map((item) => ({
    ...item,
    id: item._id,
    title: item.hero_title1,
    image: item.featured_image ? `${baseUrl}${item.featured_image}` : Info1,
    slug: item.hero_title1
      ? item.hero_title1
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "")
      : "untitled",
    link: `https://yourdomain.com/card/${item._id}`,
  })); // fallback if not yet loaded
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
      activeFilters.Topics === "All" ||
      item.tags.includes(activeFilters.Topics);
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

  const caseStudyData = {
    title:
      "Accelerating Quality at Scale: How a Global Networking Giant Cut Test Time by 40% with CalTIA",
    description: [
      "A leading computing and edge cloud provider needed a robust, self-service migration framework to help customers transition from VMware-based environments to its proprietary cloud...",
    ],
    stats: [
      { count: "40%", text: "faster validation cycles" },
      { count: "30%", text: "lower infrastructure costs" },
      { count: "20%", text: "increase in test accuracy" },
    ],
  };
  return (
    <section className="text-black px-4 py-10 bg-white min-h-screen overflow-x-hidden">
      <div className="container mx-auto w-full  sm:px-6 lg:px-8">
        <FilterSec
          filters={filters}
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
          openDropdown={openDropdown}
          toggleDropdown={toggleDropdown}
          selectFilter={selectFilter}
        />

        <p className="mb-4 text-sm">{filteredResources.length} Results</p>
        {/* recent */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="pt-8 "
        >
          <motion.h2
            key={caseStudyData.title}
            className="text-xl md:text-[36px] font-semibold bg-[linear-gradient(to_right,#2E3092_18%,#ED1C24_33%)] bg-clip-text text-transparent"
          >
            Cloud Provider Accelerates VMware Migration
            <span className="text-black font-normal px-3">
              with Calsoft’s CLI Tool
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="mt-8 flex flex-col md:flex-row gap-8 md:gap-12 items-stretch"
          >
            <motion.div
              className=" text-white p-4 md:p-8 rounded-[20px]  md:w-2/3 flex flex-col justify-center bg-cover bg-center"
              initial={{ opacity: 0, x: -50 }}
              style={{
                backgroundImage: `url(${Casestudybg.src})`,
              }}
              transition={{ duration: 0.5 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="w-36 h-32 mb-6 bg-white rounded-2xl flex justify-center items-center p-2"></div>
              <h2 className="text-[15px] font-medium md:text-2xl md:font-semibold mt-[4rem]">
                {caseStudyData.title}
              </h2>
            </motion.div>

            <div className=" w-full flex flex-col justify-between">
              <div>
                {caseStudyData.description.map((desc, index) => (
                  <motion.p
                    key={index}
                    className="text-[#959595] text-sm md:text-[15px] font-light p-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.2 }}
                    dangerouslySetInnerHTML={{ __html: desc }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
          <div className="w-full md:w-full">
            {/* Swiper for mobile */}
            <div className="block md:hidden  mb-10">
              <Swiper
                modules={[Autoplay, Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={10}
                slidesPerView={2}
                loop
                autoplay={{ delay: 6000 }}
              >
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-10 ">
                  {caseStudyData.stats.map((stat, index) => (
                    <SwiperSlide key={index}>
                      <motion.div
                        className="p-4 bg-white rounded-xl shadow-lg flex items-center space-x-2 my-2"
                        initial={{ opacity: 0, x: 50 }}
                        whileHover={{ x: -30 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.2, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.3 }}
                        style={{ boxShadow: "0px 1px 9px 0px #D9DBF1" }}
                      >
                        <p className="text-lg font-semibold text-gray-700">
                          {stat.count}
                        </p>
                        <div className="text-sm text-gray-500 leading-tight px-2">
                          {stat.text}
                        </div>
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>
            </div>

            {/* Original flex layout for md+ */}
            <div className="hidden md:flex space-y-4 justify-evenly items-center">
              {caseStudyData.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-white rounded-xl shadow-lg flex items-center space-x-7 space-y-2 my-[2rem]"
                  initial={{ opacity: 0, x: 50 }}
                  whileHover={{ x: -30 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{ boxShadow: "0px 2px 9px #D9DBF1" }}
                >
                  <p className="text-2xl font-semibold text-gray-700">
                    {stat.count}
                  </p>
                  <div className="text-sm text-gray-500 leading-tight">
                    {stat.text}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        {/* end */}
        {/* Grid Display with animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <AnimatePresence>
            {currentPageData.map((item, idx) => (
              <div
                onClick={() => handleClick(item.id, item.slug)}
                key={idx}
                className="cursor-pointer"
              >
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex flex-col h-[400px] md:h-[450px] border border-[#2E3092] rounded-xl overflow-hidden shadow hover:shadow-lg transition"
                >
                  {/* Image */}
                  <div className="w-full h-3/5">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      width={400}
                      height={400}
                    />
                  </div>

                  {/* Content */}
                  <div className="w-full h-2/5 p-4 flex flex-col justify-between">
                    <h3 className="text-sm md:text-[16px] font-semibold w-9/12 break-words whitespace-normal text-[#28272D]">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 my-2">
                      {/* Container to hold tags */}

                      {/* {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-[#FF9F56] text-black text-xs px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))} */}
                    </div>
                    <div className="flex justify-between items-start">
                      <FaArrowRight color="#2E3092" className="w-6 h-6" />
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
              </div>
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
