"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { FiShare2 } from "react-icons/fi";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogFilterList, fetchBlogList } from "../../store/actions/blogAction.js";
import { setSelectedBlogId } from "../../store/reducers/blogReducer.js";
import { useRouter } from "next/navigation";
import { FilterSec } from "../utilities/FilterSec";
import blogexpanImage from "../../assets/blog/blog-2.webp";
import ArrowIcon from "../../assets/blog/rightArrow.svg";
import Loadmore from "../../assets/blog/loadmoreicon.svg";
import { baseUrl } from "@/config";

export default function ResourceGrid() {
  const dispatch = useDispatch();
  const router = useRouter();
  const loadMoreRef = useRef(null);

  // Redux state
  const BlogsList = useSelector((state) => state.blogs.list || []);
  const FilterAuthor = useSelector((state) => state.blogs.filterAuthor || []);
  const FilterIndustry = useSelector((state) => state.blogs.filterIndustry || []);
  const FilterTopic = useSelector((state) => state.blogs.filterTopic || []);

  // Local state
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [topicLimitWarning, setTopicLimitWarning] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    Author: "All",
    Industry: "All",
    Topics: [],
  });
  const [openDropdown, setOpenDropdown] = useState("");

  // Fetch data
  useEffect(() => {
    dispatch(fetchBlogList());
    dispatch(fetchBlogFilterList());
  }, [dispatch]);

  // Update filtered blogs when list changes
  useEffect(() => {
    setFilteredBlogs(BlogsList);
  }, [BlogsList]);

  // FilterSec data
  const filters = {
    Industry: FilterIndustry,
    Topics: FilterTopic,
    Author: FilterAuthor,
  };

  // Blog click
  const handleBlogClick = (item) => {
    const slug = item.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    dispatch(setSelectedBlogId(item._id));
    router.push(`/insights/blogs/${slug}`);
  };

  // Filter selection
  const selectFilter = (type, selected) => {
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
        updatedFilters.Topics = [...updatedFilters.Topics, selected];
      }
    } else {
      updatedFilters[type] = selected;
    }

    setActiveFilters(updatedFilters);
    setOpenDropdown(null);

    // Apply filter locally
    let filtered = BlogsList;
    if (updatedFilters.Industry !== "All") {
      filtered = filtered.filter((b) => b.industry === updatedFilters.Industry);
    }
    if (updatedFilters.Author !== "All") {
      filtered = filtered.filter((b) => b.authorData?.name === updatedFilters.Author);
    }
    if (updatedFilters.Topics.length > 0) {
      const topicIds = updatedFilters.Topics.map((t) => t._id);
      filtered = filtered.filter((b) =>
        b.topicData?.some((t) => topicIds.includes(t._id))
      );
    }
    setFilteredBlogs(filtered);
    setVisibleCount(6);
  };

  // Search
  const search = (value) => {
    if (!value) setFilteredBlogs(BlogsList);
    else
      setFilteredBlogs(
        BlogsList.filter((b) => b.title.toLowerCase().includes(value.toLowerCase()))
      );
    setVisibleCount(6);
  };

  // Load more on intersection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + 6, filteredBlogs.length));
        }
      },
      { threshold: 1 }
    );
    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [filteredBlogs]);

  // Share
  const handleShare = async (item) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: item.title,
          text: `Check this out: ${item.title}`,
          url: window.location.href,
        });
      } catch (err) {
        console.error(err);
      }
    } else alert("Sharing not supported.");
  };

  return (
    <section className="text-black px-4 py-10 bg-white min-h-screen overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <FilterSec
          filters={filters}
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
          toggleDropdown={(f) => setOpenDropdown(openDropdown === f ? "" : f)}
          selectFilter={selectFilter}
          searchDebouncing={search}
          mainClass={"p-0 mx-0 px-0 sm:px-0 lg:px-0 -px-1 -ml-4"}
        />

        {topicLimitWarning && (
          <div className="text-red-600 text-sm mb-4">
            You can only select up to 3 topics.
          </div>
        )}

        {/* Results count */}
        <p className="mb-4 text-sm">{filteredBlogs.length} Results</p>

        {/* Blog cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.slice(0, visibleCount).map((item, idx) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              onClick={() => handleBlogClick(item)}
              className="bg-[#F8F9FA] border border-[#BABABA] rounded-lg hover:shadow-2xl overflow-hidden relative cursor-pointer h-[400px]"
            >
              <div className="p-4 h-[50%]">
                <div className="flex justify-between items-start">
                  <div className="flex flex-wrap gap-1">
                    {item?.categoryData?.map((cat, i) => (
                      <p key={i} className="text-[12px] font-medium text-[#2E3092] px-1">
                        {cat.name}
                      </p>
                    ))}
                  </div>
                  <button
                    className="text-xl text-[#181C8E] z-10"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleShare(item);
                    }}
                  >
                    <FiShare2 />
                  </button>
                </div>
                <h3 className="font-semibold mt-4 mb-4 text-[18px] text-[#000000] overflow-hidden">
                  {item.title.length > 50 ? item.title.slice(0, 45) + "..." : item.title}
                </h3>
                <div className="flex flex-wrap gap-1 my-2">
                  {Array.isArray(item?.tagData) &&
                    item.tagData.map((tag, index) => (
                      <span
                        key={index}
                        className="text-[#2E3092] font-semibold text-[12px] flex items-center"
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
                    <span className="text-[#BA0007]">{item.authorData.name}</span>
                  ) : (
                    <span className="text-gray-400">Unknown Author</span>
                  )}
                </div>
              </div>

              <div className="relative w-full overflow-hidden rounded-b-lg h-[50%]">
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
        {visibleCount < filteredBlogs.length && (
          <div className="flex justify-center mt-10">
            <button
              ref={loadMoreRef}
              onClick={() =>
                setVisibleCount((prev) => Math.min(prev + 6, filteredBlogs.length))
              }
              className="flex flex-col items-center gap-2 text-[#2b2eae] text-sm hover:underline"
            >
              <motion.div whileHover={{ scale: 1.2, rotate: 10 }}>
                <Image src={Loadmore} alt="load more" width={24} height={24} />
              </motion.div>
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
