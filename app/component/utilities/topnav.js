"use client";
import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/logo.png";
import barmenu from "../../assets/menu-bar.svg";
import MegaMenuImg1 from "../../assets/home/megamenu1.webp";
import MegaMenuImg2 from "../../assets/home/megamenu2.webp";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [openMenus, setOpenMenus] = useState({});
  const [activeMenu, setActiveMenu] = useState(null);
  const [selectedSubmenu, setSelectedSubmenu] = useState(null);
  const pathname = usePathname();

  const toggleMenu = (index) => {
    setOpenMenus((prev) => ({
      ...prev,

      [index]: !prev[index],
    }));
  };

  const navItems = [
    {
      title: "DATA & AI",
      // href: "/data-ai",
      href: "",
      submenu: [
        {
          title: "End-to-end data pipeline implementation",
          href: "/data-ai/end-to-end-data-pipeline-implementation",
          section: [
            "Data architecture enhancement",
            "Data platform and ecosystem integration",
            "Effortless and faultless data migration",
            "Data sanity and lineage handling",
          ],
        },
        {
          title: "Technical consulting",
          href: "/data-ai/technical-consulting",
          section: [
            "Strategic architecture advisory",
            "Risk mitigation and recovery planning",
            "Platform interoperability consulting",
            "Cost-optimized orchestration planning",
          ],
        },
        {
          title: "Data observability",
          href: "/data-ai/data-observability",
          section: [
            "Real-time data streaming analytics",
            "Compliance tracking",
            "Real-time data workflow synchronization",
            "Proactive risk alerts",
          ],
        },
        {
          title: "Data governance and quality",
          href: "/data-ai/data-governance-quality",
          section: [
            "Data profiling and cataloging",
            "Data cleansing and deduplication",
            "Policy governance",
            "Data collaboration & orchestration",
          ],
        },
        {
          title: "Data analytics and reporting",
          href: "/data-ai/data-analytics-reporting",
          section: [
            "Dashboard and KPI visualization",
            "Business Intelligence (BI) integration",
            "Custom reporting",
            "Real-time business insights streaming",
          ],
        },
        {
          title: "AI-driven prediction and inferences",
          href: "/data-ai/ai-driven-prediction-inferences",
          section: [
            "Predictive modeling",
            "Pattern detection",
            "Inferential analytics",
            "Model adaptability",
          ],
        },
        {
          title: "Agentic AI planning & development",
          href: "/data-ai/agentic-ai-planning-development/",
          section: [
            "AIOps planning",
            "Use-case specific AI agents",
            "Monitor and control",
            "Lifecycle and adaptability",
          ],
        },
        {
          title: "Custom-LLM for Gen AI and RAG",
          href: "/data-ai/custom-llm-for-gen-ai-rag",
          section: [
            "LLM fine-tuning",
            "RAG pipeline design",
            "Enterprise deployment models",
            "System integration and orchestration",
          ],
        },
        {
          title: "AI-powered accelerators",
          href: "/data-ai/ai-powered-accelerators",
          section: [
            "CalTIA – Faster, better, and consistent testing",
            "CalPSR – Calsoft Performance, Scalability, and Resilience",
            "Calsoft’s migration accelerator",
            "Calsoft Mozaic | Engineering intelligence framework",
          ],
        },
      ],
    },
    {
      title: "DIGITAL PRODUCT ENGINEERING",
      // href: "/digital-product-engineering",
      href: "",
      submenu: [
        {
          title: "Product and application development ",
          href: "/digital-product-engineering/product-application-development",
          section: [
            "Ideation & architecture orchestration",
            "Development lifecycle services",
            "Quality engineering",
            "DevOps + SRE with AI-driven enhancements",
            "Deployment and upgrades",
            "Accelerate with Calsoft’s Mozaic",
          ],
        },
        {
          title: "Modernization & Ecosystem",
          href: "/digital-product-engineering/modernization-ecosystem",
          section: [
            "Maturity assessment and planning",
            "Future readiness with application modernization",
            "Ecosystem management",
            "Plugin development: Improve extendibility",
            "IoT engineering",
          ],
        },
        {
          title: "CX Engineering",
          href: "/digital-product-engineering/cx-engineering",
          section: [
            "Front-end development",
            "UX modernization : Better user journeys",
            "Intelligent UI: Make interfaces adaptive",
            "Rapid prototyping",
            "Mobile engineering & development",
          ],
        },
        {
          title: "Cloud Services",
          href: "/digital-product-engineering/cloud",
          section: [
            "IT infrastructure assessment and road mapping",
            "Multi-cloud infrastructure provisioning",
            "Cloud-native development enablement",
            "Cloud migration and scaling",
            "Cost and usage optimization",
            "SRE (Site Reliability Engineering)",
          ],
        },
        {
          title: "Testing as a Service",
          href: "/digital-product-engineering/testing-as-a-service",
          section: [
            "Functional and non-functional testing",
            "CalTIA | Automated regression testing",
            "Load and stress testing for scalability",
            "Test impact analysis using ML models",
            "QAOps with CI/CD pipeline integration",
            "Product and ecosystem benchmarking",
          ],
        },
        {
          title: "Sustenance Support",
          href: "/digital-product-engineering/sustenance-support",
          section: [
            "Release management",
            "Streamline technical documentation",
            "Multi-tier support",
            "Uptime continuity",
          ],
        },
        {
          title: "Virtualization Solutions",
          href: "/digital-product-engineering/virtualization",
          section: [
            "Virtualization lifecycle management (Day 0–N)",
            "Containerization and orchestration",
            "Hypervisor: Optimizing foundations",
            "Migrate seamlessly across platforms",
            "OpenStack environment configuration",
          ],
        },
        {
          title: "Security Services",
          href: "/digital-product-engineering/security",
          section: [
            "Endpoint and perimeter security enablement",
            "Identity and access management (IAM)",
            "DevSecOps - Embed security into DevOps",
            "Zero Trust architecture enablement",
            "Service continuity and backup automation",
          ],
        },
        {
          title: "Storage Networking",
          href: "/digital-product-engineering/storage-networking",
          section: [
            "Software-defined storage (SDS) development",
            "Software Defined Networking (SDN) controller & engineering",
            "Hyperconverged infrastructure (HCI) integration",
            "Storage gateway engineering",
            "AI-driven network automation",
            "Network function virtualization (NFV) services",
            "Edge computing",
          ],
        },
      ],
    },
    {
      title: "INDUSTRIES",
      href: "/industries",
      submenu: [
        {
          title: "Hi-tech",
          href: "/industries/hitech",
          section: [
            "Software and product engineering",
            "Cloud and platform engineering",
            "AI-powered modernization",
          ],
        },
        {
          title: "Retail",
          href: "/industries/retail",
          section: [
            "Enhance shopping experiences with AI",
            "Improve efficiency and boost product availability",
            "Prevent fraud and secure transactions",
          ],
        },
        {
          title: "Telecom",
          href: "/industries/telecom",
          section: [
            "Automate network operations and orchestration",
            "Build agile and low-latency telecom networks",
            "Enhance service assurance and cybersecurity",
          ],
        },
        {
          title: "Manufacturing",
          href: "/industries/manufacturing",
          section: [
            "Scale with real-time monitoring and automation",
            "Strengthen predictive maintenance strategies",
            "Enhance visibility, agility, and demand forecasting",
          ],
        },
      ],
    },
    {
      title: "INSIGHTS",
      href: "/insights",
      submenu: [
        { title: "Blogs", href: "/insights/blogs" },
        {
          title: "Resources",
          href: "/insights",
          inersubmenu: [
            { title: "Whitepapers", href: "/insights/whitepaper" },
            { title: "Datasheets", href: "/insights/datesheets" },
            { title: "Infographics", href: "/insights/infographic" },
            { title: "Case Studies", href: "/insights/case-studies" },
            {
              title: "Industry Reports",
              href: "/insights/industry-report",
            },
            { title: "Videos", href: "/insights/videos" },
          ],
        },
        { title: "Press Releases", href: "#" },
        { title: "Events & Webinars", href: "#" },
      ],
    },
    {
      title: "ABOUT",
      href: "/about-us",
      submenu: [{ title: "Career", href: "#" }],
    },
  ];

  const fetaureInsights = [
    {
      image: MegaMenuImg1,
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      image: MegaMenuImg2,
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];
  // Handle submenu default selection
  // useEffect(() => {
  //   const current = navItems.find((i) => i.title === activeMenu);
  //   if (current && current.submenu?.length) {
  //     setSelectedSubmenu(current.submenu[0]);
  //   } else {
  //     setSelectedSubmenu(null);
  //   }
  // }, [activeMenu]);
  useEffect(() => {
    const current = navItems.find((i) => i.title === activeMenu);

    if (current && current.submenu?.length) {
      const matchedSubmenu = current.submenu.find((sub) =>
        pathname.includes(sub.href)
      );
      if (matchedSubmenu) {
        setSelectedSubmenu(matchedSubmenu);
      } else {
        setSelectedSubmenu(current.submenu[0]);
      }
    } else {
      setSelectedSubmenu(null);
    }
  }, [activeMenu, pathname]);

  return (
    <header className="w-full sticky top-0 z-[90]">
      {/* Top Bar */}
      <div className="text-white px-6 py-3 border-b bg-[#141414] border-gray-700">
        <div className="flex items-end justify-end text-sm container mx-auto px-1 md:px-20">
          <Link href="#" className="text-xs md:text-sm hover:font-bold">
            Customer Stories<span className="text-white p-3">|</span>
          </Link>
          <Link href="#" className="text-xs md:text-sm hover:font-bold">
            Blogs<span className="text-white p-3">|</span>
          </Link>
          <Link href="#" className="text-xs md:text-sm hover:font-bold">
            Careers
          </Link>
        </div>
      </div>

      {/* Main Nav */}
      <Disclosure as="nav" className="bg-black py-2 relative">
        {({ open }) => (
          <>
            <div className="container mx-auto px-4 md:px-10 xl:px-20 flex items-center justify-between">
              <Link
                href="/"
                className="flex items-center text-2xl font-bold text-white"
              >
                <Image src={Logo} height={50} alt="Logo" />
              </Link>

              {/* Desktop Menu */}

              <div className="hidden lg:flex xl:space-x-6 items-center relative group">
                <div className="flex xl:space-x-6 items-center">
                  {navItems.map(({ title, href, submenu }) => (
                    <div
                      key={title}
                      className="relative px-2"
                      onMouseEnter={() => submenu && setActiveMenu(title)}
                    >
                      <Link
                        href={href}
                        className="flex items-center space-x-1 text-white"
                      >
                        <span className="text-sm font-normal hover:font-bold">
                          {title}
                        </span>
                        {submenu && <IoIosArrowDown />}
                      </Link>
                    </div>
                  ))}
                </div>
                {/* Search */}
                <div className="hidden lg:flex items-center space-x-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search"
                      className="px-3 py-1 border border-red-500 rounded-full bg-black text-white w-40 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-red-600 p-1 rounded-full">
                      <FaSearch />
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile Toggle */}
              <Disclosure.Button className="lg:hidden p-2 text-white focus:outline-none">
                <Image src={barmenu} width={40} height={24} alt="menu bar" />
              </Disclosure.Button>
            </div>

            {/* Mega Menu */}
            {activeMenu && (
              <div
                className="absolute top-full left-0 w-full z-[999]"
                onMouseEnter={() => setActiveMenu(activeMenu)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <div className="max-w-[1340px] mx-auto bg-white text-black rounded-xl shadow-xl flex ">
                  {/* Left Column */}
                  <div className="w-[30%]  p-6">
                    {navItems
                      .find((item) => item.title === activeMenu)
                      ?.submenu?.map((sub, idx) => {
                        const isActive = pathname === sub.href;

                        return (
                          <Link
                            href={sub.href}
                            key={idx}
                            className={`group flex items-center justify-between text-sm py-1 w-full text-left ${
                              isActive
                                ? "text-[#2E3092] font-semibold"
                                : "text-[#1A1A1A]"
                            }`}
                            onMouseEnter={() => setSelectedSubmenu(sub)}
                          >
                            <span>{sub.title}</span>
                            {isActive && (
                              <span className="text-[#2E3092]">→</span>
                            )}
                          </Link>
                        );
                      })}
                  </div>
                  <div className="w-px h-64 bg-[#CECECE] mx-6 mt-6"></div>
                  {/* Center Column */}
                  <div className="w-[30%] p-6">
                    {selectedSubmenu?.section ? (
                      selectedSubmenu.section.map((s, idx) => {
                        // Convert section title to ID-friendly format
                        const sectionId = s
                          .toLowerCase()
                          .replace(/\s+/g, "-")
                          .replace(/[^a-z0-9-]/g, "");

                        return (
                          <div
                            key={idx}
                            className="text-sm py-1 cursor-pointer hover:text-[#2E3092]"
                            onClick={() => {
                              const el = document.getElementById(sectionId);
                              if (el) {
                                el.scrollIntoView({ behavior: "smooth" });
                                setActiveMenu(null); // Close the mega menu after click
                              }
                            }}
                          >
                            {s}
                          </div>
                        );
                      })
                    ) : selectedSubmenu?.inersubmenu ? (
                      selectedSubmenu.inersubmenu.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          className="block text-sm py-1 hover:text-[#2E3092]"
                        >
                          {item.title}
                        </Link>
                      ))
                    ) : (
                      <div className="text-sm italic text-gray-500">
                        No details available.
                      </div>
                    )}
                  </div>

                  {/* Right Column */}

                  <div className="w-[40%] bg-[#F5F5F5]  ">
                    <h3 className="text-[#454545] text-lg font-semibold my-3 text-center">
                      Featured Insights
                    </h3>
                    <div className="space-y-3 flex items-start">
                      {fetaureInsights.map((f, idx) => (
                        <>
                          <div
                            key={idx}
                            className="flex flex-col items-center space-x-2 p-6"
                          >
                            <Image
                              src={f.image}
                              alt="Insight"
                              width={250}
                              height={50}
                              className="w-[200px] h-44"
                            />
                            <p className="text-sm text-[#454545] leading-tight p-4">
                              {f.detail}
                            </p>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Mobile Panel — unchanged */}
            <Disclosure.Panel className="lg:hidden p-4 bg-black text-white space-y-2 max-h-[80vh] overflow-y-auto">
              {navItems.map((item, index) => (
                <div key={index}>
                  <button
                    onClick={() => toggleMenu(index)}
                    className="flex justify-between w-full py-2"
                  >
                    <span>{item.title}</span>
                    <IoIosArrowDown
                      className={`transform transition-transform ${
                        openMenus[index] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openMenus[index] &&
                    item.submenu?.map((subItem, subIdx) => (
                      <div key={subIdx} className="pl-4">
                        <Link
                          href={subItem.href}
                          className="block py-2 text-sm hover:bg-gray-700 rounded"
                        >
                          {subItem.title}
                        </Link>
                        {subItem.inersubmenu &&
                          subItem.inersubmenu.map((inner, innerIdx) => (
                            <Link
                              key={innerIdx}
                              href={inner.href}
                              className="block py-1 pl-6 text-sm hover:bg-gray-600 rounded"
                            >
                              {inner.title}
                            </Link>
                          ))}
                      </div>
                    ))}
                </div>
              ))}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
}
