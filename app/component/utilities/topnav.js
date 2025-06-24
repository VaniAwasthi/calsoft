"use client";
import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/logo.png";
import barmenu from "../../assets/menu-bar.svg";
import MegaMenuImg1 from "../../assets/home/megamenu1.webp";
import MegaMenuImg2 from "../../assets/home/megamenu2.webp";
export default function Navbar() {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (index) => {
    setOpenMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const navItems = [
    {
      title: "DATA & AI",
      href: "/data-ai",
      submenu: [
        {
          title: "Data Pipeline Engineering",
          href: "/data-and-ai/data-pipeline-engineering",
        },
        { title: "Custom Solution Development", href: "#" },
        { title: "OSS Model Implementation", href: "#" },
        { title: "Model Fine-tuning and Training", href: "#" },
        { title: "RAG Production Apps", href: "#" },
        { title: "Model Fine-tuning and Training", href: "#" },
        { title: "RAG Production Apps", href: "#" },
      ],
    },
    {
      title: "DIGITAL ENGINEERING",
      href: "#",
      submenu: [
        {
          title: "Digital Product Engineering",
          href: "#",
          inersubmenu: [
            {
              title: "Cloud Services",
              href: "/digital-engineering/productEngineering/cloud-services",
            },
            {
              title: "CX Engineering",
              href: "/digital-engineering/productEngineering/cx-engineering",
            },
            {
              title: "Modernization & Ecosystem",
              href: "/digital-engineering/productEngineering/modernizationandecosystem",
            },
            {
              title: "Product and application development ",
              href: "/digital-engineering/productEngineering/product-and-application-development ",
            },
            {
              title: "Security Services",
              href: "/digital-engineering/productEngineering/security-services",
            },
            {
              title: "Storage Networking",
              href: "/digital-engineering/productEngineering/storage-networking",
            },
            {
              title: "Sustenance Support",
              href: "/digital-engineering/productEngineering/sustenance-support",
            },
            {
              title: "Testing as a Service",
              href: "/digital-engineering/productEngineering/testing-as-a-service",
            },
            {
              title: "Virtualization Solutions",
              href: "/digital-engineering/productEngineering/virtualization-solutions",
            },
          ],
        },
      ],
    },
    {
      title: "INDUSTRIES",
      href: "/industries",
      submenu: [
        { title: "Hi-tech", href: "/industries/hitech" },
        { title: "Telecom", href: "/industries/telecom" },
        { title: "Retail", href: "/industries/retail" },
        { title: "Manufacturing", href: "/industries/manufacturing" },
      ],
    },
    {
      title: "INSIGHTS",
      href: "/insights",
      submenu: [
        { title: "Blogs", href: "/insights/blogs" },
        {
          title: "Resources",
          href: "/insights/resource",
          inersubmenu: [
            { title: "Whitepapers", href: "/insights/resource/whitepaper" },
            { title: "Datasheets", href: "/insights/resource/datesheets" },
            { title: "Infographics", href: "/insights/resources/infographic" },
            {
              title: "Industry Reports",
              href: "/insights/resources/industry-report",
            },
            { title: "Videos", href: "/insights/resources/videos" },
          ],
        },
        { title: "Press Releases", href: "#" },
        { title: "Events & Webinars", href: "#" },
      ],
    },
    {
      title: "ABOUT",
      href: "/about",
      submenu: [
        { title: "Submenu Item 1", href: "#" },
        { title: "Submenu Item 2", href: "#" },
      ],
    },
  ];
  const fetaureInsights = [
    {
      index: 1,
      image: MegaMenuImg1,
      detail:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      index: 2,
      image: MegaMenuImg2,
      detail:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];
  return (
    <header className="w-full sticky top-0 z-90">
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
      <Disclosure as="nav" className="bg-black py-2">
        {({ open }) => (
          <>
            <div className="container mx-auto px-4 md:px-10 xl:px-20 flex items-center justify-between">
              <Link
                href="/"
                className="flex items-center text-2xl font-bold text-white"
              >
                <Image src={Logo} height={50} alt="Logo" className="block" />
              </Link>

              {/* Desktop Menu */}
              <div className="hidden lg:flex xl:space-x-6 items-center">
                {navItems.map(({ title, href, submenu }, idx) => (
                  <div key={title} className="relative group">
                    <Link
                      href={href}
                      className="flex items-center space-x-1 text-white hover:text-white"
                    >
                      <span className="text-sm font-normal hover:font-bold">
                        {title}
                      </span>
                      <IoIosArrowDown />
                    </Link>

                    {/* Mega Menu for DATA & AI */}
                    {submenu && title === "DATA & AI" && (
                      <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300  absolute  left-[9rem] translate-y-5 -translate-x-1/2 top-full  min-w-7xl bg-white text-black rounded-xl shadow-xl z-[999] flex justify-center ">
                        {/* Left Side Menu */}
                        <div className="w-1/4 p-6 text-sm font-medium text-[#1A1A1A]">
                          <div className="space-y-3">
                            <div className="text-[#2E3092] font-bold flex items-center justify-between">
                              GEN AI <span>▸</span>
                            </div>
                            <div className="text-[#1A1A1A] hover:text-[#2E3092] cursor-pointer">
                              Analytics & ML
                            </div>
                            <div className="text-[#1A1A1A] hover:text-[#2E3092] cursor-pointer">
                              Data Engineering
                            </div>
                            <div className="text-[#1A1A1A] hover:text-[#2E3092] cursor-pointer">
                              AI-Driven Solutions
                            </div>
                            <div className="text-[#1A1A1A] hover:text-[#2E3092] cursor-pointer">
                              Use Cases & Solutions
                            </div>
                            <div className="text-[#1A1A1A] hover:text-[#2E3092] cursor-pointer">
                              Use Cases & Solutions
                            </div>
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="w-px h-[200px] bg-[#D9D9D9] mx-2 my-10"></div>

                        {/* Center Submenu */}
                        <div className="w-1/2 px-6 mt-7 flex flex-col  text-sm">
                          {submenu.map(({ title, href }, i) => (
                            <Link
                              key={i}
                              href={href}
                              className="text-[#2E3092] hover:underline font-medium my-2 py-0"
                            >
                              {title}
                            </Link>
                          ))}
                        </div>

                        {/* Right Side: Featured Insights */}
                        <div className="w-2/4 my-0 p-6 bg-[#F5F5F5]  flex-col flex justify-center items-center">
                          <h3 className="text-[#454545] text-2xl font-regular mb-4 manrope text-center">
                            Featured Insights
                          </h3>
                          <div className="space-y-4 space-x-4 flex ">
                            {fetaureInsights.map((fetaureInsight, idx) => (
                              <div key={idx} className=" space-x-3 space-y-6">
                                <div className="w-35 h-35 rounded-md overflow-hidden">
                                  {/* Replace below with <Image /> if dynamic images available */}
                                  <Image
                                    src={fetaureInsight.image}
                                    alt="Insight"
                                    width={50}
                                    height={50}
                                    className="object-cover w-full h-full"
                                  />
                                </div>
                                <p className="text-sm text-[#454545] leading-tight manrope">
                                  {fetaureInsight.detail}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Simple Dropdown for Others */}
                    {submenu && title !== "DATA & AI" && (
                      <div className="absolute top-full left-0 mt-2 min-w-[200px] bg-white text-black rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-90">
                        {submenu.map(({ title, href, inersubmenu }) => (
                          <div key={title}>
                            <Link
                              href={href}
                              className="block px-4 py-2 hover:bg-gray-200"
                            >
                              {title}
                            </Link>
                            {inersubmenu &&
                              inersubmenu.map((item) => (
                                <Link
                                  key={item.title}
                                  href={item.href}
                                  className="block px-6 py-1 text-sm hover:bg-gray-100"
                                >
                                  {item.title}
                                </Link>
                              ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Search Bar */}
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

              {/* Mobile Menu Toggle */}
              <Disclosure.Button className="lg:hidden p-2 text-white focus:outline-none">
                <Image src={barmenu} width={40} height={24} alt="bar menu" />
              </Disclosure.Button>
            </div>

            {/* Mobile Menu */}
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
