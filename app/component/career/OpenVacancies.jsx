"use client";

import React, { useState, useEffect } from "react";
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
    location: "Pune",
    type: "Full Time or Part Time",
    experience: "10",
    role: "AI",
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
    location: "Pune",
    type: "Full Time or Part Time",
    experience: "5",
    role: "DevOps",
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
    location: "Pune",
    type: "Full Time or Part Time",
    experience: "2",
    role: "Sales",
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
    location: "Pune",
    type: "Full Time or Part Time",
    experience: "5",
    role: "Security",
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
    location: "Pune",
    type: "Full Time or Part Time",
    experience: "7",
    role: "AI",
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
    location: "Pune",
    type: "Full Time or Part Time",
    experience: "5",
    role: "Backend",
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
    location: "Pune",
    type: "Full Time or Part Time",
    experience: "3",
    role: "Sales",
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
    location: "Pune",
    type: "Full Time or Part Time",
    experience: "4",
    role: "Frontend",
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
  {
    id: 9,
    position: "QA Engineer",
    location: "Bengaluru",
    type: "Full Time",
    experience: "3",
    role: "QA",
    companyDescription:
      "Join our quality assurance team and ensure the highest standards of software quality across our products.",
    qualifications: [
      "3+ years of QA testing experience",
      "Strong knowledge of testing methodologies",
      "Experience with automated testing tools",
      "Attention to detail and analytical skills",
    ],
    roleDescription:
      "As a QA Engineer, you will be responsible for testing software applications, identifying bugs, and ensuring quality standards are met.",
    responsibilities: [
      "Design and execute test cases",
      "Identify and report bugs",
      "Collaborate with development teams",
      "Maintain test documentation",
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
    id: 10,
    position: "Full Stack Developer",
    location: "Hyderabad",
    type: "Full Time",
    experience: "4",
    role: "Full Stack",
    companyDescription:
      "Work on both frontend and backend technologies to build comprehensive web applications.",
    qualifications: [
      "4+ years of full-stack development experience",
      "Proficiency in React, Node.js, and databases",
      "Experience with cloud platforms",
      "Strong problem-solving skills",
    ],
    roleDescription:
      "Develop end-to-end web applications using modern technologies and frameworks.",
    responsibilities: [
      "Develop frontend and backend components",
      "Design database schemas",
      "Deploy applications to cloud platforms",
      "Collaborate with cross-functional teams",
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
    id: 11,
    position: "DevOps Engineer",
    location: "Indore",
    type: "Full Time",
    experience: "6",
    role: "DevOps",
    companyDescription:
      "Join our DevOps team to streamline deployment processes and maintain our cloud infrastructure.",
    qualifications: [
      "6+ years of DevOps experience",
      "Strong knowledge of AWS, Docker, Kubernetes",
      "Experience with CI/CD pipelines",
      "Scripting skills in Python/Bash",
    ],
    roleDescription:
      "Manage and optimize our cloud infrastructure, automate deployment processes, and ensure system reliability.",
    responsibilities: [
      "Design and maintain CI/CD pipelines",
      "Manage cloud infrastructure",
      "Automate deployment processes",
      "Monitor system performance",
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
    id: 12,
    position: "Security Analyst",
    location: "Bengaluru",
    type: "Full Time",
    experience: "2",
    role: "Security",
    companyDescription:
      "Protect our systems and data by implementing security measures and monitoring for threats.",
    qualifications: [
      "2+ years of cybersecurity experience",
      "Knowledge of security frameworks",
      "Experience with security tools",
      "Strong analytical skills",
    ],
    roleDescription:
      "Monitor security systems, analyze threats, and implement security measures to protect our infrastructure.",
    responsibilities: [
      "Monitor security systems",
      "Analyze security threats",
      "Implement security measures",
      "Conduct security audits",
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
    Location: [
      "All",
      { _id: 2, name: "Pune" },
      { _id: 3, name: "Hyderabad" },
      { _id: 4, name: "Bengaluru" },
      { _id: 5, name: "Indore" },
    ],
    Role: [
      "All",
      { _id: 2, name: "Security" },
      { _id: 3, name: "AI" },
      { _id: 4, name: "DevOps" },
      { _id: 5, name: "QA" },
      { _id: 6, name: "Backend" },
      { _id: 7, name: "Frontend" },
      { _id: 8, name: "Full Stack" },
      { _id: 9, name: "Sales" },
    ],
    Experience: [
      "All",
      { _id: 2, name: "1-3" },
      { _id: 3, name: "3-5" },
      { _id: 4, name: "5-10" },
      { _id: 5, name: "10+" },
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

  // Apply filters when activeFilters change
  useEffect(() => {
    let filteredData = mainJobData;

    // Filter by Location
    if (activeFilters.Location !== "All") {
      const locationFilter = filters.Location.find(
        (loc) => loc._id === activeFilters.Location
      );
      if (locationFilter) {
        filteredData = filteredData.filter(
          (job) => job.location === locationFilter.name
        );
      }
    }

    // Filter by Role
    if (activeFilters.Role !== "All") {
      const roleFilter = filters.Role.find(
        (role) => role._id === activeFilters.Role
      );
      if (roleFilter) {
        filteredData = filteredData.filter(
          (job) => job.role === roleFilter.name
        );
      }
    }

    // Filter by Experience
    if (activeFilters.Experience !== "All") {
      const experienceFilter = filters.Experience.find(
        (exp) => exp._id === activeFilters.Experience
      );
      if (experienceFilter) {
        const expRange = experienceFilter.name;
        filteredData = filteredData.filter((job) => {
          const jobExp = parseInt(job.experience);
          switch (expRange) {
            case "1-3":
              return jobExp >= 1 && jobExp <= 3;
            case "3-5":
              return jobExp >= 3 && jobExp <= 5;
            case "5-10":
              return jobExp >= 5 && jobExp <= 10;
            case "10+":
              return jobExp >= 10;
            default:
              return true;
          }
        });
      }
    }

    setJobData(filteredData);
  }, [activeFilters]);

  // Search function for text-based filtering
  function search(value) {
    if (value === "") {
      // If search is empty, apply current filters
      let filteredData = mainJobData;

      // Apply current filters
      if (activeFilters.Location !== "All") {
        const locationFilter = filters.Location.find(
          (loc) => loc._id === activeFilters.Location
        );
        if (locationFilter) {
          filteredData = filteredData.filter(
            (job) => job.location === locationFilter.name
          );
        }
      }

      if (activeFilters.Role !== "All") {
        const roleFilter = filters.Role.find(
          (role) => role._id === activeFilters.Role
        );
        if (roleFilter) {
          filteredData = filteredData.filter(
            (job) => job.role === roleFilter.name
          );
        }
      }

      if (activeFilters.Experience !== "All") {
        const experienceFilter = filters.Experience.find(
          (exp) => exp._id === activeFilters.Experience
        );
        if (experienceFilter) {
          const expRange = experienceFilter.name;
          filteredData = filteredData.filter((job) => {
            const jobExp = parseInt(job.experience);
            switch (expRange) {
              case "1-3":
                return jobExp >= 1 && jobExp <= 3;
              case "3-5":
                return jobExp >= 3 && jobExp <= 5;
              case "5-10":
                return jobExp >= 5 && jobExp <= 10;
              case "10+":
                return jobExp >= 10;
              default:
                return true;
            }
          });
        }
      }

      setJobData(filteredData);
    } else {
      // Apply search filter on top of current filters
      let filteredData = mainJobData;

      // Apply current filters first
      if (activeFilters.Location !== "All") {
        const locationFilter = filters.Location.find(
          (loc) => loc._id === activeFilters.Location
        );
        if (locationFilter) {
          filteredData = filteredData.filter(
            (job) => job.location === locationFilter.name
          );
        }
      }

      if (activeFilters.Role !== "All") {
        const roleFilter = filters.Role.find(
          (role) => role._id === activeFilters.Role
        );
        if (roleFilter) {
          filteredData = filteredData.filter(
            (job) => job.role === roleFilter.name
          );
        }
      }

      if (activeFilters.Experience !== "All") {
        const experienceFilter = filters.Experience.find(
          (exp) => exp._id === activeFilters.Experience
        );
        if (experienceFilter) {
          const expRange = experienceFilter.name;
          filteredData = filteredData.filter((job) => {
            const jobExp = parseInt(job.experience);
            switch (expRange) {
              case "1-3":
                return jobExp >= 1 && jobExp <= 3;
              case "3-5":
                return jobExp >= 3 && jobExp <= 5;
              case "5-10":
                return jobExp >= 5 && jobExp <= 10;
              case "10+":
                return jobExp >= 10;
              default:
                return true;
            }
          });
        }
      }

      // Then apply search filter
      filteredData = filteredData.filter((job) =>
        job.position.toLowerCase().includes(value.toLowerCase())
      );

      setJobData(filteredData);
    }
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
