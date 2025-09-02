"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Atmosphere from "../../assets/career/Atmosphere.webp";
import Global from "../../assets/career/Global.webp";
import Growth from "../../assets/career/Growth.webp";
import Innovate from "../../assets/career/Innovate.webp";
import Learning from "../../assets/career/Learning.webp";
import Team from "../../assets/career/Team.webp";
import JobApplicationModal from "./JobForm";

const jobData = [
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

export default function JobBoard() {
  const [expandedJob, setExpandedJob] = useState(null);

  const toggleJob = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  const headerVariants = {
    collapsed: {
      backgroundColor: "transparent",
      borderRadius: "0px",
    },
    expanded: {
      backgroundColor: "#2e3092",
      borderRadius: "0px",
    },
  };

  const contentVariants = {
    collapsed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    expanded: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const iconVariants = {
    collapsed: {
      rotate: 0,
      transition: { duration: 0.2 },
    },
    expanded: {
      rotate: 90,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="bg-gray-100 font-sans">
      {/* Job Accordion */}
      <div className="">
        {/* <div className="px-8"> */}
        {jobData.map((job, index) => {
          const [isModalOpen, setIsModalOpen] = useState(false);
          return (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="mb-0.5"
            >
              {/* Job Header - Clickable */}
              <motion.div
                onClick={() => toggleJob(job.id)}
                variants={headerVariants}
                animate={expandedJob === job.id ? "expanded" : "collapsed"}
                whileHover={{ scale: 1.001 }}
                className=""
              >
                <div className="py-5">
                  <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-5 items-center cursor-pointer transition-colors duration-300 container">
                    <div
                      className={`text-base font-medium transition-colors duration-300 ${
                        expandedJob === job.id ? "text-white" : "text-black"
                      }`}
                    >
                      {job.position}
                    </div>
                    <div
                      className={`text-base transition-colors duration-300 hidden md:block ${
                        expandedJob === job.id ? "text-white" : "text-black"
                      }`}
                    >
                      {job.location}
                    </div>
                    <div
                      className={`text-base transition-colors duration-300 hidden md:block ${
                        expandedJob === job.id ? "text-white" : "text-black"
                      }`}
                    >
                      {job.type}
                    </div>
                    <div className="flex justify-end">
                      <motion.button
                        variants={iconVariants}
                        animate={
                          expandedJob === job.id ? "expanded" : "collapsed"
                        }
                        className={`bg-transparent border-none text-xl cursor-pointer transition-colors duration-300 ${
                          expandedJob === job.id
                            ? "text-white"
                            : "text-gray-500"
                        }`}
                      >
                        <svg
                          width="48"
                          height="47"
                          viewBox="0 0 48 47"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <ellipse
                            cx="24"
                            cy="23.0691"
                            rx="24"
                            ry="23.0691"
                            fill="#E1E1E1"
                          />
                          {expandedJob !== job.id && (
                            <line
                              x1="12"
                              y1="22.5693"
                              x2="36"
                              y2="22.5693"
                              stroke="black"
                            />
                          )}
                          <line
                            x1="23.5"
                            y1="34.6035"
                            x2="23.5"
                            y2="11.5344"
                            stroke="black"
                          />
                        </svg>
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              {/* Content-width Divider - Only show if not expanded and not last item */}
              {expandedJob !== job.id && index < jobData.length - 1 && (
                <div className="px-8 sm:px-12 md:px-15">
                  <div className="border-b border-gray-300"></div>
                </div>
              )}

              {/* Expanded Job Details - Full Width */}
              <AnimatePresence>
                {expandedJob === job.id && (
                  <motion.div
                    variants={contentVariants}
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                    className="w-full relative bg-[#2e3092] overflow-hidden"
                    style={{ borderRadius: "0px" }}
                  >
                    {/* Content Container - Centered with max width */}
                    <div className="px-8 sm:px-12 md:px-15">
                      {/* Job Details */}
                      <div className="py-8">
                        <div className="container grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10">
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                          >
                            <div className="mb-6">
                              <h3 className="text-white text-base font-semibold mb-2.5">
                                Company Description:
                              </h3>
                              <p className="text-white text-sm leading-6 m-0">
                                {job.companyDescription}
                              </p>
                            </div>

                            <div className="mb-6">
                              <h3 className="text-white text-base font-semibold mb-4">
                                Qualifications:
                              </h3>
                              <ol className="text-white text-sm leading-6 pl-5 m-0">
                                {job.qualifications.map((qual, index) => (
                                  <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                      duration: 0.3,
                                      delay: 0.2 + index * 0.05,
                                    }}
                                  >
                                    {qual}
                                  </motion.li>
                                ))}
                              </ol>
                            </div>

                            <div className="mb-6">
                              <h3 className="text-white text-base font-semibold mb-2.5">
                                Role Description
                              </h3>
                              <p className="text-white text-sm leading-6 m-0 mb-4">
                                {job.roleDescription}
                              </p>
                            </div>

                            <div className="mb-8">
                              <h3 className="text-white text-base font-semibold mb-4">
                                Responsibilities
                              </h3>
                              <ul className="text-white text-sm leading-6 pl-5 m-0">
                                {job.responsibilities.map((resp, index) => (
                                  <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                      duration: 0.3,
                                      delay: 0.4 + index * 0.05,
                                    }}
                                  >
                                    {resp}
                                  </motion.li>
                                ))}
                              </ul>
                            </div>

                            <motion.button
                              onClick={() => setIsModalOpen(true)}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                              className="bg-white text-[#2e3092] border-none py-3 px-8 rounded-full text-sm font-semibold cursor-pointer flex items-center gap-2"
                            >
                              Apply Now →
                            </motion.button>
                            <JobApplicationModal
                              isOpen={isModalOpen}
                              onClose={() => setIsModalOpen(false)}
                              jobTitle={job.position}
                            />
                          </motion.div>

                          {/* Image Grid */}
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="hidden md:grid grid-cols-2 gap-4"
                          >
                            {job.images.map((image, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                  duration: 0.3,
                                  //   delay: 0.3 + index * 0.1,
                                }}
                                whileHover={{ scale: 1.05 }}
                                className="relative aspect-square rounded-lg overflow-hidden"
                              >
                                <Image
                                  src={image.src}
                                  alt={image.title}
                                  className="w-auto h-full object-cover z-0"
                                />
                                <div className="absolute top-0 w-full h-full text-white font-medium bg-[#00000059] z-10 p-4 flex justify-center items-end">
                                  {image.title}
                                </div>
                              </motion.div>
                            ))}
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Content-width Divider after expanded content - Only show if not last item */}
              {expandedJob === job.id && index < jobData.length - 1 && (
                <div className="px-5 sm:px-7 md:px-10 mt-0.5">
                  <div className="border-b border-gray-300"></div>
                </div>
              )}
            </motion.div>
          );
        })}
        {/* </div> */}
      </div>
      <div className="h-8" />
    </div>
  );
}
