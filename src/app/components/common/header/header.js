"use client";
import React, { useState, useEffect } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import Images from "../Image/Image";
import { LiaAngleRightSolid } from "react-icons/lia";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setShowMenu(!showMenu);

  const closeAll = () => {
    setShowMenu(false);
  };

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 90) {
        // scrolling down
        setShowHeader(false);
      } else {
        // scrolling up
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-30 transition-all duration-500 ${
          showMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        onClick={closeAll}
      >
        <div
          className={`w-4/5 sm:w-3/5 md:w-2/5 min-h-screen bg-themeColor transition-all duration-300 ${
            showMenu ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-2 flex justify-end">
            <button onClick={toggleMenu}>
              <HiXMark className="w-6 h-6 text-white transition-all duration-300 hover:rotate-90" />
            </button>
          </div>
          <div className="pt-2">
            {[
              { name: "Home", link: "/" },
              { name: "About Us", link: "/about-us" },

              { name: "Our Products", link: "/our-products" },
              { name: "Our Services", link: "/our-services" },
            ].map((item) => (
              <div
                className="flex items-center justify-between px-4 border-b border-b-gray-700"
                key={item?.link}
              >
                <a
                  href={item?.link}
                  className="w-full uppercase py-4 text-white text-sm"
                >
                  {item?.name}
                </a>
                <LiaAngleRightSolid size={18} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className={`w-full sticky top-0 left-0 right-0 z-20 bg-themeColor text-white shadow-sm transform transition-transform duration-500 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Top Banner */}
        <div className="w-full bg-desColor py-2">
          <p className="text-sm text-white text-center px-2">
            Discover the future with our cutting-edge AI Solutions!
          </p>
        </div>

        {/* Main Navigation */}
        <div className="w-full px-4 sm:px-4 lg:px-2 flex items-center justify-between py-1">
          {/* Left - Menu Button (Mobile) */}
          <div className="w-[5%] pl-3 pt-1">
            <button onClick={toggleMenu}>
              <HiOutlineMenuAlt4 size={22} />
            </button>
          </div>

          {/* Center - Logo */}
          <div className="w-[15%] h-full sm:w-[18%] xs:w-[20%] flex items-center justify-center mx-auto md:mx-0 cursor-pointer">
            <a href="/">
              <Images
                className="w-full md:h-full max-h-16 py-4 object-contain select-none"
                src={"/images/png/logo.png"}
                alt="orbitAi Logo"
              />
            </a>
          </div>

          {/* Right - Desktop Links */}
          <div className="w-[80%] hidden md:flex items-center justify-end space-x-4 px-4">
            <div className="hidden lg:flex space-x-6 justify-end">
              <a href="/" className="text-xs uppercase font-medium">
                Home
              </a>
              <a href="/about-us" className="text-xs uppercase font-medium">
                About us
              </a>
             
              <a href="/our-services" className="text-xs uppercase font-medium">
                Our Services
              </a>
               <a href="/our-products" className="text-xs uppercase font-medium">
                Our Products
              </a>
              <a href="/contact-us" className="text-xs uppercase font-medium">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
