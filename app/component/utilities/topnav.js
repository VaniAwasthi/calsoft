"use client";

import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/logo.png";
import barmenu from "../../assets/menu-bar.svg";


export default function Navbar() {
  return (
    <header className=" w-full">
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
      <Disclosure as="nav" className="bg-black  py-4 ">
        {({ open }) => (
          <>
            <div className="container mx-auto px-4 md:px-20 flex items-center justify-between">
              {/* Logo */}
              <Link href="#" className="text-2xl font-bold text-white">
                <Image src={Logo} height={50} alt="Logo" />
              </Link>

              {/* Desktop Menu */}
              <div className="hidden lg:flex space-x-6 ">
                {[
                  "DATA & AI",
                  "DIGITAL ENGINEERING",
                  "INDUSTRIES",
                  "INSIGHTS ",
                  "ABOUT ",
                ].map((item) => (
                  <div key={item} className="relative group">
                    <button className="flex items-center space-x-1 text-white hover:text-white">
                      <span className="text-sm leading-12  font-normal hover:font-bold">
                        {item}
                      </span>
                      <IoIosArrowDown />
                    </button>
                    <div className="absolute left-0 hidden p-2 mt-2 bg-white text-black rounded shadow-md group-hover:block">
                      <Link
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Submenu Item
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Submenu Item
                      </Link>
                    </div>
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
                {/* <FiMenu className="w-6 h-6" /> */}
                <Image src={barmenu} width={40} height={24} alt="bar menu" />
              </Disclosure.Button>
            </div>

            {/* Mobile Menu */}
            <Disclosure.Panel className="lg:hidden flex flex-col space-y-2 p-4 bg-black text-white">
              {[
                "Data & AI",
                "Digital Engineering",
                "Industries",
                "Insights",
                "About",
              ].map((item) => (
                <Link key={item} href="#" className="block py-4">
                  {item}
                </Link>
              ))}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
}
