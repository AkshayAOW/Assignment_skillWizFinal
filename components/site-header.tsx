"use client";

// import Link from "next/link";  // Removed for compatibility
// import Image from "next/image"; // Removed for compatibility
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
// import { usePathname } from "next/navigation"; // Removed for compatibility

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Replaced usePathname with a state that's safely set on the client
  const [pathname, setPathname] = useState("");

  // Use useEffect to safely access window.location.pathname only on the client side
  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      <nav className="flex flex-col w-full md:w-4/5 lg:w-3/5 xl:w-1/2 mx-auto bg-[#335f92] text-white rounded-b-3xl shadow-lg">
        {/* Increased vertical padding from py-2 to py-4 to make navbar taller */}
        <div className="flex items-center justify-between px-4 py-2">
          
          <a href="/" className="flex items-center">
            {/* Logo with a large height class */}
            <img
              src="/images/Logo_SVG.png"
              alt="SkillKwiz Logo"
              className="h-20 w-auto"
            />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus-outline-none z-20"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation with standard <a> tags */}
          <div className="hidden md:flex md:items-center md:justify-center">
            <a
              href="/"
              className={`relative group py-4 px-2 text-sm md:px-4 lg:text-base transition-all ${
                pathname === "/" ? "text-yellow-400 font-semibold" : "text-white"
              }`}
            >
              <span>Home</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative group py-4 px-2 text-sm md:px-4 lg:text-base transition-all ${
                  pathname === link.href
                    ? "text-yellow-400 font-semibold"
                    : "text-white"
                }`}
              >
                <span>{link.label}</span>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Navigation with standard <a> tags */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center py-4 bg-[#335f92] rounded-b-3xl absolute top-full left-0 w-full shadow-lg transition-all duration-300 ease-in-out">
            <a
              href="/"
              className="text-white relative group py-3 text-lg w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Home</span>
              <span className="absolute left-1/4 right-1/4 bottom-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white relative group py-3 text-lg w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{link.label}</span>
                <span className="absolute left-1/4 right-1/4 bottom-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}
