"use client";
import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/logo.png";
import barmenu from "../../assets/menu-bar.svg";

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
        { title: "Submenu Item 1", href: "/data-ai/submenu1" },
        { title: "Submenu Item 2", href: "/data-ai/submenu2" },
      ],
    },
    {
      title: "DIGITAL ENGINEERING",
      href: "/digital-engineering",
      submenu: [
        { title: "Submenu Item 1", href: "/digital-engineering/submenu1" },
        { title: "Submenu Item 2", href: "/digital-engineering/submenu2" },
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
            { title: "Datesheets", href: "/insights/resource/datesheets" },
            { title: "Infographics", href: "/insights/resource/infographic" },
            {
              title: "Industry Reports",
              href: "/insights/resource/industry-report",
            },
            { title: "Videos", href: "/insights/resource/videos" },
          ],
        },
        { title: "Press Releases", href: "#" },
        { title: "Events & Webinars", href: "#" },
        { title: "Videos & Podcasts", href: "#" },
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

      {/* Navigation */}
      <Disclosure as="nav" className="bg-black py-4">
        {({ open }) => (
          <>
            <div className="container mx-auto px-4 md:px-10 xl:px-20 flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold text-white">
                <Image src={Logo} height={50} alt="Logo" />
              </Link>

              {/* Desktop Menu */}
              <div className="hidden lg:flex xl:space-x-6">
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

                    {/* Desktop Submenu */}
                    {submenu && (
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

              {/* Mobile Menu Button */}
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

                        {/* Inner Submenu */}
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
