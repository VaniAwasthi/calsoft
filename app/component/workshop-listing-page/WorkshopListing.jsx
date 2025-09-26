"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ButtonLayout from "../utilities/ButtonLayout";
import buttonImage from "@/app/assets/home/buttonImg.webp";
import WebImg from "@/app/assets/workshop/workshop_img.webp";
// import img1 from "@/app/assets/workshop/img1.webp";
// import img2 from "@/app/assets/workshop/img2.webp";
import { FilterSec } from "../utilities/FilterSec";
import { useSelector, useDispatch } from "react-redux";
import { fetchBlogFilterList } from "@/app/store/actions/blogAction";
import { motion } from "framer-motion";
import rohit from "@/app/assets/workshop/Rohit-Sarkar.webp";
import somenath from "@/app/assets/workshop/Somenath-1.webp";

export function HeroSection({ title, subTitle, buttonText }) {
  return (
    <div className="relative w-full h-[800px]">
      {" "}
      {/* Adjust height as needed */}
      {/* Background Image */}
      <Image
        src={WebImg}
        alt="Coding screen"
        fill
        priority
        className="object-cover object-center transform scale-x-[-1]"
      />
      {/* Overlay with Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: false, amount: 0.3 }}
        className="absolute inset-0 bg-[#00000077] flex flex-col justify-center items-center gap-5 px-4"
      >
        <div className="text-white text-center space-y-5 lg:w-1/2">
          <p className="text-[40px] md:text-[55px] font-bold">{title}</p>
          <p className="text-lg md:text-xl">{subTitle}</p>
        </div>
        <ButtonLayout
          text={buttonText}
          image={buttonImage}
          hoverImage={buttonImage}
          className="w-fit shadow-2xl"
          onClick={() => {}}
        />
      </motion.div>
    </div>
  );
}

export function Card({
  breadcrumb,
  title,
  date,
  duration,
  speakers,
  onLearnMore,
  topColor = "bg-[#edeeff]",
  textColor = "text-[#2e3092]",
}) {
  return (
    <div className="w-fit bg-white rounded-3xl overflow-hidden shadow-lg">
      {/* Upper section with light blue background */}
      <div className={`p-10 pb-8 space-y-3 ${topColor}`}>
        {/* Breadcrumb */}
        <div className={`text-lg font-medium ${textColor}`}>{breadcrumb}</div>

        {/* Main Title */}
        <h1
          className={`text-3xl font-semibold leading-tight text-balance ${textColor}`}
        >
          {title}
        </h1>
      </div>

      {/* Lower section with white background */}
      <div className="bg-white p-10 pt-8 space-y-5">
        <div className="flex items-center gap-16">
          <div className="flex items-center gap-4">
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.0625 2.5H13.4375V1.1875C13.4375 1.07147 13.3914 0.960188 13.3094 0.878141C13.2273 0.796094 13.116 0.75 13 0.75C12.884 0.75 12.7727 0.796094 12.6906 0.878141C12.6086 0.960188 12.5625 1.07147 12.5625 1.1875V2.5H6.4375V1.1875C6.4375 1.07147 6.39141 0.960188 6.30936 0.878141C6.22731 0.796094 6.11603 0.75 6 0.75C5.88397 0.75 5.77269 0.796094 5.69064 0.878141C5.60859 0.960188 5.5625 1.07147 5.5625 1.1875V2.5H2.9375C2.35755 2.50069 1.80156 2.73139 1.39147 3.14147C0.981386 3.55156 0.750695 4.10755 0.75 4.6875V16.0625C0.750695 16.6424 0.981386 17.1984 1.39147 17.6085C1.80156 18.0186 2.35755 18.2493 2.9375 18.25H16.0625C16.6427 18.25 17.1991 18.0195 17.6093 17.6093C18.0195 17.1991 18.25 16.6427 18.25 16.0625V4.6875C18.25 4.10734 18.0195 3.55094 17.6093 3.1407C17.1991 2.73047 16.6427 2.5 16.0625 2.5ZM17.375 16.0625C17.375 16.4106 17.2367 16.7444 16.9906 16.9906C16.7444 17.2367 16.4106 17.375 16.0625 17.375H2.9375C2.5894 17.375 2.25556 17.2367 2.00942 16.9906C1.76328 16.7444 1.625 16.4106 1.625 16.0625V8.625H17.375V16.0625ZM17.375 7.75H1.625V4.6875C1.625 3.963 2.21125 3.375 2.9375 3.375H5.5625V4.6875C5.5625 4.80353 5.60859 4.91481 5.69064 4.99686C5.77269 5.07891 5.88397 5.125 6 5.125C6.11603 5.125 6.22731 5.07891 6.30936 4.99686C6.39141 4.91481 6.4375 4.80353 6.4375 4.6875V3.375H12.5625V4.6875C12.5625 4.80353 12.6086 4.91481 12.6906 4.99686C12.7727 5.07891 12.884 5.125 13 5.125C13.116 5.125 13.2273 5.07891 13.3094 4.99686C13.3914 4.91481 13.4375 4.80353 13.4375 4.6875V3.375H16.0625C16.4106 3.375 16.7444 3.51328 16.9906 3.75942C17.2367 4.00556 17.375 4.3394 17.375 4.6875V7.75Z"
                fill="#2E3092"
              />
            </svg>

            <span className="text-[#000000] text-xs">{date}</span>
          </div>
          <div className="flex items-center gap-4">
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.385 1.5V0.5H10.615V1.5H5.385ZM7.5 12.616H8.5V7.385H7.5V12.616ZM8 20C6.89467 20 5.857 19.7913 4.887 19.374C3.917 18.9567 3.06867 18.3847 2.342 17.658C1.61533 16.9313 1.04333 16.0827 0.626 15.112C0.208667 14.1413 0 13.104 0 12C0 10.896 0.208667 9.85833 0.626 8.887C1.04333 7.91567 1.61533 7.06733 2.342 6.342C3.06867 5.61667 3.91733 5.04467 4.888 4.626C5.85867 4.20733 6.896 3.99867 8 4C8.96933 4 9.90667 4.17333 10.812 4.52C11.7173 4.86667 12.548 5.35633 13.304 5.989L14.396 4.896L15.104 5.604L14.012 6.696C14.6453 7.45267 15.135 8.28367 15.481 9.189C15.827 10.0943 16 11.0313 16 12C16 13.1053 15.7913 14.143 15.374 15.113C14.9567 16.083 14.3847 16.9313 13.658 17.658C12.9313 18.3847 12.0827 18.9567 11.112 19.374C10.1413 19.7913 9.104 20 8 20ZM8 19C9.93333 19 11.5833 18.3167 12.95 16.95C14.3167 15.5833 15 13.9333 15 12C15 10.0667 14.3167 8.41667 12.95 7.05C11.5833 5.68333 9.93333 5 8 5C6.06667 5 4.41667 5.68333 3.05 7.05C1.68333 8.41667 1 10.0667 1 12C1 13.9333 1.68333 15.5833 3.05 16.95C4.41667 18.3167 6.06667 19 8 19Z"
                fill="#2E3092"
              />
            </svg>

            <span className="text-[#000000] text-xs">Duration {duration}</span>
          </div>
        </div>

        {/* Speakers */}
        <div className="flex items-center justify-between">
          {speakers.map((speaker, index) => (
            <div key={index} className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full overflow-hidden">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold">{speaker.name}</h3>
                <p className="text-sm">{speaker.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <div className="flex justify-start">
          <button
            onClick={onLearnMore}
            className="flex items-center gap-3 text-[#2e3092] text-sm font-bold hover:opacity-80 transition-opacity"
          >
            Learn More
            <svg
              width="15"
              height="13"
              viewBox="0 0 15 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-0.00374985 6H12.2463L6.99625 0.75L7.65625 0L14.1562 6.5L7.65625 13L6.99625 12.25L12.2463 7H-0.00374985V6Z"
                fill="#2E3092"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export function CardSection({
  data = [
    {
      breadcrumb: "AI | Security | Gaps",
      title:
        "AI for OT Resilience: Smarter Detection, Stronger Compliance, Proven ROI",
      date: "Sept 12, 2025",
      duration: "120 min",
      speakers: [
        {
          name: "Rohit Sarkar",
          title: "Co-Founder",
          image: rohit,
        },
        {
          name: "Somenath Nag",
          title: "Sr. Vice President",
          image: somenath,
        },
      ],
    },
    {
      breadcrumb: "AI | Security | Gaps",
      title:
        "AI for OT Resilience: Smarter Detection, Stronger Compliance, Proven ROI",
      date: "Sept 12, 2025",
      duration: "120 min",
      speakers: [
        {
          name: "Rohit Sarkar",
          title: "Co-Founder",
          image: rohit,
        },
        {
          name: "Somenath Nag",
          title: "Sr. Vice President",
          image: somenath,
        },
      ],
    },
  ],
}) {
  return (
    <div className="bg-[#edeeff] lg:h-96 xl:h-80 py-10">
      <div className="container flex flex-col lg:flex-row justify-between items-center gap-14 p-20 relative lg:bottom-[14rem] xl:bottom-[16.5rem]">
        {data.map((ele, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 * idx }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Card
              key={idx}
              breadcrumb={ele.breadcrumb}
              title={ele.title}
              date={ele.date}
              duration={ele.duration}
              speakers={ele.speakers}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function CardList({
  data = [
    {
      breadcrumb: "AI | Security | Gaps",
      title:
        "AI for OT Resilience: Smarter Detection, Stronger Compliance, Proven ROI",
      date: "Sept 12, 2025",
      duration: "120 min",
      speakers: [
        {
          name: "Rohit Sarkar",
          title: "Co-Founder",
          image: rohit,
        },
        {
          name: "Somenath Nag",
          title: "Sr. Vice President",
          image: somenath,
        },
      ],
    },
  ],
}) {
  const [filteredCards, setFilteredCards] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;
  const dispatch = useDispatch();
  const FilterAuthr = useSelector((state) => state.blogs?.filterAuthor || []);
  const FilterIndustry = useSelector(
    (state) => state.blogs?.filterIndustry || []
  );
  const FilterTopic = useSelector((state) => state.blogs?.filterTopic || []);

  const filters = {
    Industry: [...FilterIndustry],
    Topics: [...FilterTopic],
    Author: [...FilterAuthr],
  };
  const [activeFilters, setActiveFilters] = useState({
    Author: "All",
    Industry: "All",
    Topics: [], // Array of topic objects or IDs
  });
  const [openDropdown, setOpenDropdown] = useState("");

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
  };

  function search(value) {
    if (value === "") setFilteredCards(data);
    else
      setFilteredCards(
        data.filter((blog) =>
          blog.title.toLowerCase().includes(value.toLowerCase())
        )
      );
  }

  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);
  console.log(totalPages);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = filteredCards.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredCards]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(fetchBlogFilterList());
  }, []);

  return (
    <div className="bg-white container">
      <div className="space-y-8 py-14">
        <FilterSec
          bgColor="bg-[#EFEFEF] text-[#2E3092]"
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
        <p>{filteredCards.length} Results</p>
        <div className="grid lg:grid-cols-2 gap-8 ">
          {currentCards.map((ele, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * idx }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Card
                key={idx}
                breadcrumb={ele.breadcrumb}
                title={ele.title}
                date={ele.date}
                duration={ele.duration}
                speakers={ele.speakers}
                topColor="bg-[#2e3092]"
                textColor="text-white"
              />
            </motion.div>
          ))}
        </div>
        <div className="relative flex items-center justify-center mt-12">
          <div className="flex items-center space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageClick(index + 1)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  currentPage === index + 1
                    ? "bg-[#2e3092]"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNextPage}
            disabled={currentPage >= totalPages}
            className={`absolute right-0 flex items-center space-x-2 px-4 py-2 text-sm font-medium transition-colors duration-200 ${
              currentPage >= totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "text-[#2e3092] hover:text-[#1e2082]"
            }`}
            aria-label="Go to next page"
          >
            <span>Next</span>
            <svg
              width="15"
              height="13"
              viewBox="0 0 15 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-0.00374985 6H12.2463L6.99625 0.75L7.65625 0L14.1562 6.5L7.65625 13L6.99625 12.25L12.2463 7H-0.00374985V6Z"
                fill="#2E3092"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
