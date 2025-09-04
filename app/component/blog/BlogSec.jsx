"use client";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiShare2 } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import FilterIcon from "../../assets/blog/cleanIcon.svg";
import SearchIcon from "../../assets/blog/filterSeach.svg";
import ArrowIcon from "../../assets/blog/rightArrow.svg";
import Loadmore from "../../assets/blog/loadmoreicon.svg";
import { blogData } from "../utilities/data/BlogData";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBlogFilterList,
  fetchBlogList,
  fetchFilteredBlogs,
} from "../../store/actions/blogAction.js";
import { setSelectedBlogId } from "../../store/reducers/blogReducer.js";
import blogexpanImage from "../../assets/blog/blog-2.webp";
import { FilterSec } from "../utilities/FilterSec";

export default function ResourceGrid() {
  const baseUrl = "http://35.162.115.74/admin/assets/dist";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogList());
    dispatch(fetchBlogFilterList());
  }, []);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const BlogsList = useSelector((state) => state.blogs.list);
  const FilterAuthr = useSelector((state) => state.blogs.filterAuthor || []);
  const FilterIndustry = useSelector(
    (state) => state.blogs.filterIndustry || []
  );
  const FilterTopic = useSelector((state) => state.blogs.filterTopic || []);

  const filters = {
    Industry: [...FilterIndustry],
    Topics: [...FilterTopic],
    Author: [...FilterAuthr],
  };

  const [visibleCount, setVisibleCount] = useState(6);
  const [topicLimitWarning, setTopicLimitWarning] = useState(false);

  const [activeFilters, setActiveFilters] = useState({
    Author: "All",
    Industry: "All",
    Topics: [], // Array of topic objects or IDs
  });
  const [openDropdown, setOpenDropdown] = useState("");
  const loadMoreRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    setFilteredBlogs(BlogsList);
  }, [BlogsList]);

  const slugify = (text) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const handleBlogClick = (item) => {
    const slug = slugify(item.title, { lower: true });
    dispatch(setSelectedBlogId(item._id));
    router.push(`/insights/blogs/${slug}`);
  };

  const toggleDropdown = (filter) => {
    setOpenDropdown(openDropdown === filter ? "" : filter);
  };

  const selectFilter = (type, selected) => {
    let updatedFilters = { ...activeFilters };

    if (type === "Topics") {
      const exists = updatedFilters.Topics.find((t) => t._id === selected._id);

      if (exists) {
        updatedFilters.Topics = updatedFilters.Topics.filter(
          (t) => t._id !== selected._id
        );
        setTopicLimitWarning(false);
      } else {
        if (updatedFilters.Topics.length >= 3) {
          setTopicLimitWarning(true);

          // Auto-hide warning after 3 seconds
          setTimeout(() => setTopicLimitWarning(false), 3000);
          return;
        }
        updatedFilters.Topics = [...updatedFilters.Topics, selected];
      }
    } else {
      updatedFilters[type] = selected;
    }

    setActiveFilters(updatedFilters);
    setOpenDropdown(null);

    // dispatch(
    //   fetchFilteredBlogs({
    //     industry: updatedFilters.Industry?._id || null,
    //     topics: updatedFilters.Topics.map((t) => t._id),
    //   })
    // );
  };

  const handleShare = async (item) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: item.title,
          text: `Check this out: ${item.title}`,
          url: window.location.href,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      alert("Sharing not supported in this browser.");
    }
  };

  function search(value) {
    if (value === "") setFilteredBlogs(BlogsList);
    else
      setFilteredBlogs(
        BlogsList.filter((blog) =>
          blog.title.toLowerCase().includes(value.toLowerCase())
        )
      );
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => {
            const next = prev + 6;
            return Math.min(next, BlogsList.length);
          });
        }
      },
      { threshold: 1.0 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="text-black px-4 py-10 bg-white min-h-screen overflow-x-hidden">
      <div className="container mx-auto  px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <FilterSec
          filters={filters}
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
          toggleDropdown={toggleDropdown}
          selectFilter={selectFilter}
          mainClass={"p-0 mx-0 px-0 sm:px-0 lg:px-0 -px-1 -ml-4"}
          searchDebouncing={search}
        />
        {topicLimitWarning && (
          <div className="text-red-600 text-sm mb-4">
            You can only select up to 3 topics.
          </div>
        )}
        {/* Results Count */}
        <p className="mb-4 text-sm">{BlogsList.length} Results</p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.slice(0, visibleCount).map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              onClick={() => handleBlogClick(item)}
              className="bg-[#F8F9FA] border border-[#BABABA] rounded-lg hover:shadow-2xl overflow-hidden relative cursor-pointer h-[400px] "
            >
              <div className="p-4 h-[50%]">
                <div className="">
                  <div className="flex">
                    <p className="text-[12px] font-medium text-[#2E3092]  px-1">
                      {item?.categoryData.name}
                    </p>
                    <span className="text-[12px] font-medium text-[#939393] uppercase px-1">
                      |
                    </span>
                    {item.authorData ? (
                      <>
                        <span className="text-[12px] font-medium text-[#939393]  px-1">
                          {new Date(item.authorData.createdAt).toLocaleString(
                            "en-IN",
                            {
                              timeZone: "Asia/Kolkata",
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            }
                          )}
                        </span>
                      </>
                    ) : null}
                  </div>
                  <button
                    className="absolute top-2 right-2 text-xl text-[#181C8E] z-10"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleShare(item);
                    }}
                  >
                    <FiShare2 />
                  </button>
                </div>
                <h3 className="font-semibold mt-4 mb-4 text-[18px] text-[#000000]  overflow-hidden">
                  {item.title.length > 50
                    ? item.title.slice(0, 45) + "..."
                    : item.title}
                </h3>

                <div className="flex flex-wrap gap-1 my-2">
                  {Array.isArray(item?.tagData) &&
                    item.tagData.map((tag, index) => (
                      <span
                        key={index}
                        className="text-[#2E3092] font-semibold text-[12px]  rounded flex items-center"
                      >
                        {tag.name}
                        {index !== item.tagData.length - 1 && (
                          <span className="mx-1 text-[#2E3092]">|</span>
                        )}
                      </span>
                    ))}
                </div>

                <div className="flex justify-between text-[14px] font-semibold">
                  {item.authorData ? (
                    <>
                      <span className="text-[#BA0007]">
                        {item.authorData.name}
                      </span>
                    </>
                  ) : (
                    <span className="text-gray-400">Unknown Author</span>
                  )}
                </div>
              </div>

              <div className="relative w-full  overflow-hidden rounded-b-lg h-[50%]">
                <Image
                  src={item.image ? `${baseUrl}/${item.image}` : blogexpanImage}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2 right-4">
                  <Image src={ArrowIcon} alt="arrow" width={24} height={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        {BlogsList.length > 6 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() =>
                setVisibleCount((prev) =>
                  prev >= BlogsList.length ? 6 : BlogsList.length
                )
              }
              className="flex flex-col items-center gap-2 text-[#2b2eae] text-sm hover:underline"
            >
              {visibleCount >= BlogsList.length ? null : (
                <motion.div
                  ref={loadMoreRef}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={Loadmore}
                    alt="load more"
                    width={24}
                    height={24}
                  />
                </motion.div>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

const BlogsList = [
  {
    _id: "686f94a1fae153339b2f1c6d",
    title: "Robotic Process Automation in Digital Transformation",
  },
  {
    _id: "686f4cccfae153339b2f1c52",
    title: "Top Generative AI Use Cases in Customer Service Across Industries",
  },
  {
    _id: "686f515efae153339b2f1c55",
    title: "Top Generative AI Trends Shaping 2025",
  },
  {
    _id: "686f532dfae153339b2f1c57",
    title: "Calsoft Joins IBM in Delivering AI-driven Enterprise Solutions",
  },
];
