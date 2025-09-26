import Image from "next/image";
import { FaGreaterThan, FaLessThan, FaShareAlt } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Info1 from "../../assets/Infographic/whitepaper1.webp";
import { useDispatch, useSelector } from "react-redux";
import img01 from "../../assets/home/news/Corporate.webp";
import img02 from "../../assets/home/news/Customer.webp";
import img03 from "../../assets/home/news/Innovation.webp";
import img04 from "../../assets/home/news/Partnerships.webp";
import img05 from "../../assets/home/news/Thoughts.webp";
import img06 from "../../assets/home/news/People.webp";
import {
  fetchBlogFilterList,
  fetchFilteredBlogs,
} from "../../store/actions/blogAction";
import ButtonLayout from "../utilities/ButtonLayout";
import ButtonImage from "../../assets/home/buttonImg.webp";
import { FilterSec } from "../utilities/FilterSec";

export const PressReleaseCard = () => {
  const dispatch = useDispatch();
  const [openDropdown, setOpenDropdown] = useState("");
  const [topicLimitWarning, setTopicLimitWarning] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    Industry: null,
    Topics: [],
  });
  const [currentPage, setCurrentPage] = useState(0);
  const [visibleCount, setVisibleCount] = useState(6);
  const [copiedId, setCopiedId] = useState(null);
  const loadMoreRef = useRef(null);

  useEffect(() => {
    dispatch(fetchBlogFilterList());
  }, [dispatch]);

  const FilterIndustry = useSelector(
    (state) => state.blogs.filterIndustry || []
  );
  const FilterTopic = useSelector((state) => state.blogs.filterTopic || []);

  const filters = {
    Industry: ["All", ...FilterIndustry],
    Topics: ["All", ...FilterTopic],
  };

  const resources = [
    {
      id: 1,
      image: img01,
      date: "12/03/2025",
      title: "Calsoft Partners with IBM WatsonX to deliver AI-driven Solutions",
      description:
        "Maximize enterprise AI investments with IBM WatsonX & Calsoft",
      link: "https://www.calsoftinc.com/calsoft-partners-with-ibm-watsonx",
      imageTitle: "Corporate & Leadership Updates",
    },
    {
      id: 2,
      image: img04,
      date: "12/03/2025",
      title:
        "Calsoft & StreamNative Partner to Cut Streaming Costs, Boost Performance",
      description:
        "Discover how enterprises can reduce Kafka costs by up to 50% without compromising on real-time performance",
      link: "https://www.einpresswire.com/press-releases/report/5147172",
      imageTitle: " Partnerships & Ecosystem ",
    },
    {
      id: 3,
      image: img03,
      date: "12/03/2025",
      title: "Calsoft x Segmind: AI-Powered Visuals for Smarter E-Commerce",
      description:
        "Transforming product imagery with speed, scale, and creativity.",
      link: "https://www.einpresswire.com/press-releases/report/u0YVj93WNWxZB3Mm?n=2",
      imageTitle: "Innovation, Products & Platforms",
    },
    {
      id: 4,
      image: img02,
      date: "12/03/2025",
      title: "Calsoft x SmartHub.ai: Advancing AI at the Edge",
      description:
        "Delivering intelligent automation and security for next-gen connected infrastructure",
      link: "https://www.calsoftinc.com/news/calsoft-partners-with-smarthub-ai-to-advance-ai-ml-based-edge-automation-security-solutions/",
      imageTitle: "Customer Impact & Case Studies",
    },
    {
      id: 5,
      date: "12/03/2025",
      image: img05,
      title: "Accelerate high-quality software products.",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "https://www.calsoftinc.com/news/calsoft-partners-with-smarthub-ai-to-advance-ai-ml-based-edge-automation-security-solutions/",
      imageTitle: "Lorem Ipsum is simply dummy text of the printing ",
      imageTitle: "Thought Leadership & Industry Insights",
    },
    {
      id: 6,
      date: "12/03/2025",
      image: img06,
      title: "Enhance Your Development Process",
      description:
        "Discover innovative solutions for modern software development.",
      link: "https://www.calsoftinc.com/news/calsoft-partners-with-smarthub-ai-to-advance-ai-ml-based-edge-automation-security-solutions/",
      imageTitle: "People, Culture & Responsibility",
    },
  ];

  const handleCopy = (link, id) => {
    navigator.clipboard.writeText(link);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClick = (item) => {
    window.open(item.link, "_blank"); // ✅ open link in new tab
  };
  const [filteredResources, setFilteredResources] = useState(resources);

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
      fetchFilteredBlogs({ ...activeFilters, Author: "All" })
      // fetchFilteredBlogs({
      //   industry: updatedFilters.Industry?._id || null,
      //   topics: updatedFilters.Topics.map((t) => t._id),
      // })
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => {
            const next = prev + 6;
            return Math.min(next, filteredResources.length);
          });
        }
      },
      { threshold: 1.0 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [filteredResources]);

  // const itemsPerPage = 6;
  // const totalPages = Math.ceil(filteredResources.length / itemsPerPage);
  // const currentPageData = filteredResources.slice(
  //   currentPage * itemsPerPage,
  //   (currentPage + 1) * itemsPerPage
  // );

  // const goToPage = (index) => {
  //   if (index < 0 || index >= totalPages) return;
  //   setCurrentPage(index);
  // };

  function search(value) {
    if (value === "") setFilteredResources(resources);
    else
      setFilteredResources(
        resources.filter((blog) =>
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

        {topicLimitWarning && (
          <p className="text-red-500 text-sm mb-2">
            You can select a maximum of 3 topics.
          </p>
        )}

        <p className="mb-4 text-sm">{filteredResources.length} Results</p>

        {/* Grid Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredResources.slice(0, visibleCount).map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="relative flex flex-col h-[350px] md:h-[350px] border border-[#2E3092] rounded-xl overflow-hidden shadow hover:shadow-lg hover:scale-3d transition duration-300 group cursor-pointer"
              >
                <div className="w-full h-[55%] relative">
                  <Image
                    src={item.image || Info1}
                    alt={item.title || "Press Release"}
                    className="w-full h-full object-cover"
                    width={400}
                    height={400}
                  />
                </div>
                {/*content */}
                <div className="w-full px-4 py-3 flex flex-col justify-between  duration-300">
                  <span className="text-[10px]  font-medium text-[#2E3092] h-1/4">
                    {" "}
                    {item.date}
                  </span>
                  <h3 className="text-sm md:text-[15px] font-semibold w-10/12 break-words h-2/4">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between my-2 h-1/4">
                    <ButtonLayout
                      text="Read More"
                      hoverImage={ButtonImage}
                      className="!h-[40px] !w-[200px]"
                      onClick={() => handleClick(item)}
                    />

                    <div className="flex flex-col ">
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); // ✅ prevent grid click
                          handleCopy(item.link, item.index);
                        }}
                        className="text-[#2E3092] hover:text-black"
                        title="Copy link"
                      >
                        <FaShareAlt className="w-6 h-6" />
                      </button>
                      {copiedId === item.index && (
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

        {/* Load More Trigger */}
        <div ref={loadMoreRef} className="h-1"></div>
      </div>
    </section>
  );
};
