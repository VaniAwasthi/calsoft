"use client";
import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown, IoMdArrowDropright } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/logo.png";
import barmenu from "../../assets/menu-bar.svg";
import MegaMenuImg1 from "../../assets/feature1.webp";
import MegaMenuImg2 from "../../assets/feature2.webp";
import { usePathname } from "next/navigation";
import { navItems } from "./data/NavItems";

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

  const fetaureInsights = [
    {
      image: MegaMenuImg1,
      detail:
        "Strategic decision-makers in IT and operations are facing the impacts of rising infrastructure costs and vendor constraints."
    },
    {
      image: MegaMenuImg2,
      detail:
        "Enhancing legal accuracy, reducing manual effort, and ensuring compliance with Calsoft’s GenAI solution",
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
        <div className="flex items-end justify-end text-sm container mx-auto px-1 md:px-20 transition-all">
          <Link
            href="/insights/case-studies"
            className="text-xs md:text-sm hover:font-bold "
          >
            Customer Stories<span className="text-white p-3">|</span>
          </Link>
          <Link
            href="/insights/blogs"
            className="text-xs md:text-sm hover:font-bold"
          >
            Blogs<span className="text-white p-3">|</span>
          </Link>
          <Link href="/career" className="text-xs md:text-sm hover:font-bold">
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
                        <span
                          className={`${
                            navItems
                              .find((item) => item.title === title)
                              ?.submenu?.some((sub) =>
                                pathname.startsWith(sub.href)
                              )
                              ? "font-bold text-[#fffff] text-[16px]"
                              : "font-normal text-sm"
                          } hover:font-bold`}
                        >
                          {title}
                        </span>
                        {submenu && (
                          <IoIosArrowDown
                            className={`transition-transform ${
                              navItems
                                .find((item) => item.title === title)
                                ?.submenu?.some((sub) =>
                                  pathname.startsWith(sub.href)
                                )
                                ? "text-[#fffff] font-bold "
                                : "text-white"
                            }`}
                          />
                        )}
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
                <div className="max-w-[1200px] mx-auto bg-white text-black rounded-xl shadow-xl flex ">
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
                            className={`group flex items-center justify-between text-sm py-1 w-full hover:text-[#2E3092] text-left ${
                              pathname.startsWith(sub.href) ||
                              sub.inersubmenu?.some((inner) =>
                                pathname.startsWith(inner.href)
                              )
                                ? "text-[#2E3092] font-semibold"
                                : "text-[#1A1A1A]"
                            }`}
                            onMouseEnter={() => setSelectedSubmenu(sub)}
                            onClick={() => setActiveMenu(null)}
                          >
                            <span>{sub.title}</span>
                            {(pathname.startsWith(sub.href) ||
                              sub.inersubmenu?.some((inner) =>
                                pathname.startsWith(inner.href)
                              )) && (
                              <IoMdArrowDropright
                                size={25}
                                className="text-[#2E3092]"
                              />
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

                        return (
                          <Link
                            key={idx}
                            href={s.href}
                            className="block text-sm py-1 hover:text-[#2E3092]"
                          >
                            {s.title}
                          </Link>
                        );
                      })
                    ) : (
                      // )
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
                              className="w-[200px] h-44 rounded-3xl"
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
