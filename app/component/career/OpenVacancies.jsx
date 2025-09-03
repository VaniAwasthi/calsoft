"use client";

import React, { useState } from "react";
import { FilterSec } from "../utilities/FilterSec";
import JobBoard from "../career/JobBoard";
import Atmosphere from "@/app/assets/career/Atmosphere.webp";
import Global from "@/app/assets/career/Global.webp";
import Growth from "@/app/assets/career/Growth.webp";
import Innovate from "@/app/assets/career/Innovate.webp";
import Learning from "@/app/assets/career/Learning.webp";
import Team from "@/app/assets/career/Team.webp";

const mainJobData = [
  {
    id: 1,
    position: "Associate Director/Director of Sales - AIML",
    location: "Pune (Maharashtra)",
    type: "Full Time or Part Time",
    companyDescription:
      "Calsoft is a leading technology-first partner providing digital and product engineering services with over 25 years of experience.",
    qualifications: [
      "Strong leadership, management, and collaboration skills",
      "Prior experience selling AI or ML services preferred",
      "Excellent communication and interpersonal skills",
      "Should have managed an inside sales team from India but should be hands on with experience as an IC",
    ],
    roleDescription:
      "This is a full-time on-site role for an Associate Director / Director in Business Development for Calsoft's new Gen AI Practice. This is a new practice and an opportunity to build and be part of a team from ground-up. They will be responsible for hiring and leading an inside sales team of 2-3 people.",
    responsibilities: [
      "Responsible for business development and sales of Calsoft's AI practice",
      "Be responsible for a revenue target at a personal and team level",
      "Be hands-on manager, drive the sales team, and ensure their productivity and efficiency in meeting the target",
      "Be responsible for hands-on calling, lead generation and closing of new accounts to meet the revenue goals",
    ],
    applyLink: "#",
    images: [
      { src: Team, title: "Team competitions" },
      { src: Learning, title: "Constant learning" },
      { src: Growth, title: "Focused growth" },
      {
        src: Innovate,
        title: "Innovate + engineer",
      },
      { src: Global, title: "Global exposure" },
      { src: Atmosphere, title: "Great atmosphere" },
    ],
  },
  {
    id: 2,
    position: "Cloud Sales Professional",
    location: "Pune (Maharashtra)",
    type: "Full Time or Part Time",
    companyDescription:
      "Join our dynamic cloud solutions team and help businesses transform their infrastructure with cutting-edge cloud technologies.",
    qualifications: [
      "3+ years of experience in cloud sales or technical sales",
      "Strong understanding of AWS, Azure, or Google Cloud platforms",
      "Excellent presentation and communication skills",
      "Proven track record of meeting sales targets",
    ],
    roleDescription:
      "We are looking for a motivated Cloud Sales Professional to drive our cloud services revenue. You will be responsible for identifying prospects, conducting demos, and closing deals with enterprise clients.",
    responsibilities: [
      "Generate leads and build pipeline for cloud services",
      "Conduct product demonstrations and technical presentations",
      "Collaborate with technical teams to design solutions",
      "Maintain relationships with existing clients and identify upsell opportunities",
    ],
    applyLink: "#",
    images: [
      { src: Team, title: "Team competitions" },
      { src: Learning, title: "Constant learning" },
      { src: Growth, title: "Focused growth" },
      {
        src: Innovate,
        title: "Innovate + engineer",
      },
      { src: Global, title: "Global exposure" },
      { src: Atmosphere, title: "Great atmosphere" },
    ],
  },
  {
    id: 3,
    position: "Inside Sales & Business Development",
    location: "Pune (Maharashtra)",
    type: "Full Time or Part Time",
    companyDescription:
      "Be part of our fast-growing business development team focused on expanding our market presence in the technology sector.",
    qualifications: [
      "2+ years of inside sales or business development experience",
      "Strong phone and email communication skills",
      "Experience with CRM tools and sales processes",
      "Bachelor's degree in Business or related field",
    ],
    roleDescription:
      "This role involves identifying new business opportunities, qualifying leads, and supporting the sales team in achieving revenue targets through strategic outreach and relationship building.",
    responsibilities: [
      "Conduct outbound calls and emails to potential clients",
      "Qualify leads and schedule meetings for senior sales team",
      "Maintain accurate records in CRM system",
      "Support marketing campaigns and lead generation activities",
    ],
    applyLink: "#",
    images: [
      { src: Team, title: "Team competitions" },
      { src: Learning, title: "Constant learning" },
      { src: Growth, title: "Focused growth" },
      {
        src: Innovate,
        title: "Innovate + engineer",
      },
      { src: Global, title: "Global exposure" },
      { src: Atmosphere, title: "Great atmosphere" },
    ],
  },
  {
    id: 4,
    position: "Business Development Manager",
    location: "Pune (Maharashtra)",
    type: "Full Time or Part Time",
    companyDescription:
      "Lead strategic business initiatives and drive growth for our expanding portfolio of technology solutions and services.",
    qualifications: [
      "5+ years of business development or sales management experience",
      "Strong analytical and strategic thinking skills",
      "Experience in technology or software industry",
      "MBA or equivalent business qualification preferred",
    ],
    roleDescription:
      "As a Business Development Manager, you will be responsible for identifying new market opportunities, developing strategic partnerships, and leading initiatives that drive sustainable business growth.",
    responsibilities: [
      "Develop and execute business development strategies",
      "Identify and pursue new market opportunities",
      "Build and maintain strategic partnerships",
      "Lead cross-functional teams on growth initiatives",
    ],
    applyLink: "#",
    images: [
      { src: Team, title: "Team competitions" },
      { src: Learning, title: "Constant learning" },
      { src: Growth, title: "Focused growth" },
      {
        src: Innovate,
        title: "Innovate + engineer",
      },
      { src: Global, title: "Global exposure" },
      { src: Atmosphere, title: "Great atmosphere" },
    ],
  },
  {
    id: 5,
    position:
      "Tech Lead/ Associate Architect/ Architect- Artificial Intelligence and Machine Learning",
    location: "Pune (Maharashtra)",
    type: "Full Time or Part Time",
    companyDescription:
      "Join our AI/ML center of excellence and lead the development of next-generation artificial intelligence solutions for enterprise clients.",
    qualifications: [
      "7+ years of experience in AI/ML development",
      "Strong expertise in Python, TensorFlow, PyTorch",
      "Experience with cloud AI services (AWS, Azure, GCP)",
      "Leadership experience in technical teams",
    ],
    roleDescription:
      "Lead our AI/ML initiatives and architect scalable solutions that solve complex business problems. You will mentor junior developers and drive technical excellence across projects.",
    responsibilities: [
      "Design and architect AI/ML solutions",
      "Lead technical teams and mentor developers",
      "Collaborate with clients on AI strategy",
      "Stay current with latest AI/ML technologies and trends",
    ],
    applyLink: "#",
    images: [
      { src: Team, title: "Team competitions" },
      { src: Learning, title: "Constant learning" },
      { src: Growth, title: "Focused growth" },
      {
        src: Innovate,
        title: "Innovate + engineer",
      },
      { src: Global, title: "Global exposure" },
      { src: Atmosphere, title: "Great atmosphere" },
    ],
  },
  {
    id: 6,
    position: "Senior Java Server Side Developer",
    location: "Pune (Maharashtra)",
    type: "Full Time or Part Time",
    companyDescription:
      "Work on enterprise-grade Java applications and contribute to our robust backend systems that serve millions of users worldwide.",
    qualifications: [
      "5+ years of Java development experience",
      "Strong knowledge of Spring Framework and microservices",
      "Experience with databases and cloud platforms",
      "Understanding of DevOps practices and CI/CD",
    ],
    roleDescription:
      "Develop and maintain high-performance Java applications, work with cross-functional teams, and contribute to architectural decisions for our backend systems.",
    responsibilities: [
      "Design and develop scalable Java applications",
      "Optimize application performance and reliability",
      "Collaborate with frontend and DevOps teams",
      "Participate in code reviews and technical discussions",
    ],
    applyLink: "#",
    images: [
      { src: Team, title: "Team competitions" },
      { src: Learning, title: "Constant learning" },
      { src: Growth, title: "Focused growth" },
      {
        src: Innovate,
        title: "Innovate + engineer",
      },
      { src: Global, title: "Global exposure" },
      { src: Atmosphere, title: "Great atmosphere" },
    ],
  },
  {
    id: 7,
    position: "Executive - Sales / Biz Dev / Marketing",
    location: "Pune (Maharashtra)",
    type: "Full Time or Part Time",
    companyDescription:
      "Drive our sales and marketing efforts across multiple channels and help establish our brand presence in competitive markets.",
    qualifications: [
      "3+ years of sales, business development, or marketing experience",
      "Strong communication and presentation skills",
      "Experience with digital marketing tools and CRM",
      "Results-oriented with proven track record",
    ],
    roleDescription:
      "Execute sales and marketing strategies, support business development initiatives, and contribute to our overall growth objectives through various channels and campaigns.",
    responsibilities: [
      "Execute sales and marketing campaigns",
      "Support business development activities",
      "Manage client relationships and communications",
      "Analyze market trends and competitive landscape",
    ],
    applyLink: "#",
    images: [
      { src: Team, title: "Team competitions" },
      { src: Learning, title: "Constant learning" },
      { src: Growth, title: "Focused growth" },
      {
        src: Innovate,
        title: "Innovate + engineer",
      },
      { src: Global, title: "Global exposure" },
      { src: Atmosphere, title: "Great atmosphere" },
    ],
  },
  {
    id: 8,
    position: "Senior UI Developer/UI Developer (React JS / Angular JS)",
    location: "Pune (Maharashtra)",
    type: "Full Time or Part Time",
    companyDescription:
      "Create exceptional user experiences and build responsive web applications using modern frontend technologies and frameworks.",
    qualifications: [
      "4+ years of frontend development experience",
      "Strong expertise in React JS or Angular JS",
      "Proficiency in HTML5, CSS3, and JavaScript",
      "Experience with responsive design and modern UI frameworks",
    ],
    roleDescription:
      "Develop user-friendly web applications, collaborate with UX designers, and ensure optimal performance across different devices and browsers.",
    responsibilities: [
      "Develop responsive web applications using React/Angular",
      "Collaborate with UX/UI designers on implementation",
      "Optimize applications for performance and accessibility",
      "Maintain code quality and participate in peer reviews",
    ],
    applyLink: "#",
    images: [
      { src: Team, title: "Team competitions" },
      { src: Learning, title: "Constant learning" },
      { src: Growth, title: "Focused growth" },
      {
        src: Innovate,
        title: "Innovate + engineer",
      },
      { src: Global, title: "Global exposure" },
      { src: Atmosphere, title: "Great atmosphere" },
    ],
  },
];

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
  const [jobData, setJobData] = useState(mainJobData);
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

  // The is not occuring when I comment out the below function
  function search(value) {
    if (value === "") setJobData(mainJobData);
    else
      setJobData(
        mainJobData.filter((blog) =>
          blog.position.toLowerCase().includes(value.toLowerCase())
        )
      );
  }
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
          setOpenDropdown={setOpenDropdown}
          toggleDropdown={toggleDropdown}
          selectFilter={selectFilter}
          searchDebouncing={search}
          mainClass={"p-0 mx-0 px-0 sm:px-0 lg:px-0 -px-1 -ml-4"}
        />
      </div>
      <div className="h-10" />
      <JobBoard jobData={jobData} />
    </div>
  );
}
