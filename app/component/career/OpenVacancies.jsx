"use client";

import React, { useState } from "react";
import { FilterSec } from "../utilities/FilterSec";
import JobBoard from "../career/JobBoard";

export default function OpenVacancies() {
  const filters = {
    Location: ["All", { _id: 2, name: "Tech" }, { _id: 3, name: "Healthcare" }],
    Role: ["All", { _id: 2, name: "Security" }, { _id: 3, name: "AI" }],
    Experience: [
      "All",
      { _id: 2, name: "Anton Frank" },
      { _id: 3, name: "John Doe" },
    ],
  };
  const [activeFilters, setActiveFilters] = useState({
    Location: "All",
    Role: "All",
    Experience: "All",
  });
  const [openDropdown, setOpenDropdown] = useState("");
  const toggleDropdown = (filter) => {
    setOpenDropdown(openDropdown === filter ? "" : filter);
  };
  const selectFilter = (type, value) => {
    setActiveFilters({ ...activeFilters, [type]: value });
    setOpenDropdown("");
    // setCurrentPage(0);
  };
  return (
    <div className="">
      {/* Open vacancies */}
      <div className="h-10" />
      <div className="container space-y-10">
        <p className="text-4xl sm:text-5xl font-semibold bg-[linear-gradient(to_right,#2E3092_25%,#ED1C24_88%)] bg-clip-text text-transparent ">
          Open Vacancies
        </p>
        <FilterSec
          filters={filters}
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
          openDropdown={openDropdown}
          toggleDropdown={toggleDropdown}
          selectFilter={selectFilter}
          mainClass={"p-0 mx-0 px-0 sm:px-0 lg:px-0 -px-1 -ml-4"}
        />
      </div>
      <div className="h-10" />
      <JobBoard />
    </div>
  );
}
