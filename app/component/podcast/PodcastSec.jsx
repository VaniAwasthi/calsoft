"use client";

import Image from "next/image";
import { FaGreaterThan, FaLessThan, FaPlay, FaShareAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Info1 from "../../assets/Infographic/Info1.webp";
import Info2 from "../../assets/Infographic/Info2.webp";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogFilterList } from "@/app/store/actions/blogAction";
import ButtonLayout from "../utilities/ButtonLayout";
import ButtonImage from "../../assets/home/buttonImg.webp";
import { FilterSec } from "../utilities/FilterSec";

export const PostcastSec = () => {
  const dispatch = useDispatch();
  const [copiedId, setCopiedId] = useState(null);
  const [openDropdown, setOpenDropdown] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);

  // --- NEW STATES for modal playback ---
  const [playing, setPlaying] = useState(true);
  const [pausedAt30, setPausedAt30] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [resumeTime, setResumeTime] = useState(0);

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

  const images = [Info1, Info2];

  const cardData = new Array(18).fill(0).map((_, i) => ({
    id: i + 1,
    title: `Lorem Ipsum is simply dummy text of the printing and typesetting industry number ${
      i + 1
    }`,
    image: images[i % images.length],
    link: `https://yourdomain.com/card/${i + 1}`,
    author: i % 2 === 0 ? "Anton Frank" : "John Doe",
    industry: i % 2 === 0 ? "Tech" : "Healthcare",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  }));

  const [resources, setResources] = useState([...cardData]);

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

    return industryMatch; // (Topics logic can be added later)
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

  function search(value) {
    if (value === "") setResources([...cardData]);
    else
      setResources(
        cardData.filter((blog) =>
          blog.title.toLowerCase().includes(value.toLowerCase())
        )
      );
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
          mainClass={"p-0 mx-0 px-0 sm:px-0 lg:px-0 -px-1 -ml-4"}
        />
        <p className="mb-4 text-sm">{filteredResources.length} Results</p>

        {/* Grid */}
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
                {/* Image with Play Button Overlay */}
                <div className="relative w-full h-3/5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    width={400}
                    height={400}
                  />
                  <button
                    onClick={() => {
                      setSelectedVideo(item.videoUrl);
                      setPlaying(true);
                      setPausedAt30(false);
                      setShowForm(false);
                      setResumeTime(0);
                    }}
                    className="absolute inset-0 flex items-center justify-center bg-black opacity-50 hover:bg-opacity-50 transition"
                  >
                    <FaPlay className="text-white text-4xl" />
                  </button>
                </div>

                {/* Content */}
                <div className="w-full h-2/5 p-4 flex flex-col justify-between">
                  <h3 className="text-sm md:text-[16px] font-semibold w-9/12 break-words whitespace-normal text-[#28272D]">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between my-2 h-1/4">
                    <ButtonLayout
                      text="Read More"
                      hoverImage={ButtonImage}
                      className="!h-[40px] !w-[150px]"
                    />
                    <div className="flex flex-col">
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
                        <span className="text-green-500 text-xs mt-2">
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

        {/* Modal */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md bg-black/60"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="bg-white rounded-lg overflow-hidden w-11/12 max-w-3xl relative shadow-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => {
                    setSelectedVideo(null);
                    setPlaying(true);
                    setPausedAt30(false);
                    setShowForm(false);
                    setResumeTime(0);
                  }}
                  className="absolute top-2 right-2 text-gray-600 hover:text-black text-3xl z-10"
                >
                  &times;
                </button>

                {/* Video or Form */}
                <div className="relative pt-[56.25%]">
                  {!showForm ? (
                    <ReactPlayer
                      url={selectedVideo}
                      playing={playing}
                      controls
                      width="100%"
                      height="100%"
                      className="absolute top-0 left-0"
                      onProgress={(state) => {
                        if (state.playedSeconds >= 30 && !pausedAt30) {
                          setPlaying(false);
                          setPausedAt30(true);
                          setResumeTime(state.playedSeconds);
                        }
                      }}
                      config={{
                        youtube: { playerVars: { start: resumeTime } },
                      }}
                    />
                  ) : (
                    <div className="absolute top-0 left-0 w-full h-full bg-white flex flex-col justify-center items-center p-6">
                      <h2 className="text-lg font-semibold mb-4">
                        Please Fill the Form
                      </h2>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          setShowForm(false);
                          setPlaying(true);
                        }}
                        className="flex flex-col gap-3 w-3/4"
                      >
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="border p-2 rounded"
                          required
                        />
                        <input
                          type="email"
                          placeholder="Your Email"
                          className="border p-2 rounded"
                          required
                        />
                        <ButtonLayout
                          text="Submit & Continue"
                          hoverImage={ButtonImage}
                          className="!h-[40px] !w-[200px] self-center"
                        />
                      </form>
                    </div>
                  )}
                </div>

                {/* Tap to Continue button */}
                {pausedAt30 && !showForm && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => setShowForm(true)}
                      className="bg-[#2E3092] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#1e2170] transition"
                    >
                      Tap to Continue
                    </button>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pagination */}
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
