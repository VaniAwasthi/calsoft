"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/logo.png";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="text-white px-6 py-3 border-b bg-[#141414] border-gray-700">
        <div className="flex items-end justify-end text-sm container mx-auto  lg:max-w-7xl ">
          <Link href="#" className="hover:underline">
            Customer Stories
            <span className="text-white p-3">|</span>
          </Link>
          <Link href="#" className="hover:underline">
            Blogs
            <span className="text-white p-3">|</span>
          </Link>
          <Link href="#" className="hover:underline">
            Careers
          </Link>
        </div>
      </div>
      <nav className="bg-black px-6 py-4">
        <div className=" container mx-auto  lg:max-w-7xl  w-full flex items-center justify-between space-x-10">
          <Link href="#" className="text-2xl font-bold text-white">
            <Image src={Logo} alt="Logoo" />
          </Link>
          <div className="hidden lg:flex space-x-6">
            {[
              "Data & AI",
              "Digital Engineering",
              "Industries",
              "Insights",
              "About",
            ].map((item) => (
              <div key={item} className="relative group">
                <button className="flex items-center space-x-1 text-white hover:text-gray-400">
                  <span>{item}</span>
                  <IoIosArrowDown />
                </button>
                <div className="absolute left-0 hidden p-2 mt-2 bg-white text-black rounded shadow-md group-hover:block">
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-200">
                    Submenu Item
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-200">
                    Submenu Item
                  </Link>
                </div>
              </div>
            ))}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-3 py-1 border border-red-500 rounded-full bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-red-600 ">
                  <FaSearch />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <button
        className="block lg:hidden px-4 py-2 text-white bg-gray-800"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        Menu
      </button>
      {menuOpen && (
        <div className="md:hidden flex flex-col space-y-2 p-4 bg-black text-white">
          {[
            "DATA & AI",
            "DIGITAL ENGINEERING",
            "INDUSTRIES",
            "INSIGHTS",
            "ABOUT",
          ].map((item) => (
            <Link
              key={item}
              href="#"
              className="block py-2 text-center border-b border-gray-700"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
