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
} from "../../store/actions/blogAction.js";
import { setSelectedBlogId } from "../../store/reducers/blogReducer.js";
import blogexpanImage from "../../assets/blog/blog-2.webp";

export default function ResourceGrid() {
  const baseUrl = "http://35.162.115.74/admin/assets/dist";

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogList());
    dispatch(fetchBlogFilterList());
  }, []);
  const BlogsList = useSelector((state) => state.blogs.list);
  const FilterAuthr = useSelector((state) => state.blogs.filterAuthor);
  const FilterIndustry = useSelector((state) => state.blogs.filterIndustry);
  const FilterTopic = useSelector((state) => state.blogs.filterTopic);

  const filters = {
    Industry: ["All", ...FilterIndustry.map((i) => i.name)],
    Topics: ["All", ...FilterTopic.map((t) => t.name)],
    Author: ["All", ...FilterAuthr.map((a) => a.name)],
  };
  const resources = BlogsList;
  const slugify = (text) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-") // replace spaces & symbols
      .replace(/^-+|-+$/g, ""); // trim hyphens
  };
  const [visibleCount, setVisibleCount] = useState(6);
  const [activeFilters, setActiveFilters] = useState({
    Industry: "All",
    Topics: "All",
    Author: "All",
  });
  const [openDropdown, setOpenDropdown] = useState("");
  const loadMoreRef = useRef(null);
  const router = useRouter();
  const handleBlogClick = (item) => {
    const slug = item.slug ? item.slug : slugify(item.title); // fallback
    dispatch(setSelectedBlogId(item._id));
    console.log(item._id, "id");
    router.push(`/insights/blogs/${slug}`);
  };

  const toggleDropdown = (filter) => {
    setOpenDropdown(openDropdown === filter ? "" : filter);
  };

  const selectFilter = (type, value) => {
    setActiveFilters({ ...activeFilters, [type]: value });
    setOpenDropdown("");
    setVisibleCount(6); // Reset visible count on filter change
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

  const filteredResources = useMemo(() => {
    return resources.filter((item) => {
      const authorMatch =
        activeFilters.Author === "All" || item.author === activeFilters.Author;
      const tagMatch =
        activeFilters.Topics === "All" || item.tag === activeFilters.Topics;
      const industryMatch =
        activeFilters.Industry === "All" ||
        item.industry === activeFilters.Industry;
      return authorMatch && tagMatch && industryMatch;
    });
  }, [resources, activeFilters]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => {
            const next = prev + 6;
            return next <= filteredResources.length
              ? next
              : filteredResources.length;
          });
        }
      },
      { threshold: 1.0 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [filteredResources.length]);
  return (
    <section className="text-black px-4 py-10 bg-white min-h-screen overflow-x-hidden">
      <div className="container mx-auto  px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6 relative z-10">
          {Object.keys(filters).map((filterType) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              key={filterType}
              className="relative"
            >
              <button
                onClick={() => toggleDropdown(filterType)}
                className="w-full h-12 bg-[#2b2eae] text-white px-4 py-2 rounded flex items-center justify-between"
              >
                <span>
                  {filterType} ({activeFilters[filterType]})
                </span>
                <IoIosArrowDown
                  className={`transition-transform duration-300 ${
                    openDropdown === filterType ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openDropdown === filterType && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute mt-1 w-full bg-white border shadow-lg rounded z-50 max-h-60 overflow-y-auto"
                  >
                    {filters[filterType].map((option) => (
                      <div
                        key={option}
                        onClick={() => selectFilter(filterType, option)}
                        className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                      >
                        {option}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

          {/* Search & Reset */}
          <div className="flex gap-2">
            <button className="w-14 h-14 p-2 rounded-lg bg-[#EFEFEF] hover:bg-[#ddd] border border-[#2E3092] flex flex-col justify-center items-center">
              <Image src={SearchIcon} alt="search" width={20} height={20} />
              <span className="text-[10px] text-[#2E3092] ">Search</span>
            </button>
            <button
              className="w-14 h-14 p-2 rounded-lg bg-[#EFEFEF] hover:bg-[#ddd] border border-[#2E3092] flex flex-col justify-center items-center"
              onClick={() =>
                setActiveFilters({
                  Industry: "All",
                  Topics: "All",
                  Author: "All",
                })
              }
            >
              <Image src={FilterIcon} alt="reset" width={25} height={25} />
              <span className="text-[10px] text-[#2E3092] ">Clear</span>
            </button>
          </div>
        </div>

        {/* Results Count */}
        <p className="mb-4 text-sm">{filteredResources.length} Results</p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.slice(0, visibleCount).map((item, idx) => (
            <motion.div
              key={item._id}
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
                  {item?.tagData.map((tag, index) => (
                    <span
                      key={tag._id}
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
                  src={item.image ? `${baseUrl}/${item.image}` : blogexpanImage} // fallback optional
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
        {filteredResources.length > 6 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() =>
                setVisibleCount((prev) =>
                  prev >= filteredResources.length
                    ? 6
                    : filteredResources.length
                )
              }
              className="flex flex-col items-center gap-2 text-[#2b2eae] text-sm hover:underline"
            >
              {visibleCount >= filteredResources.length ? null : (
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
