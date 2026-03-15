import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { useBranding } from "../hooks/useBranding";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [branchDropdown, setBranchDropdown] = useState(false);
  const branchDropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { branding, loading } = useBranding();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        branchDropdownRef.current &&
        !branchDropdownRef.current.contains(event.target as Node)
      ) {
        setBranchDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Facilities", path: "/facilities" },
    { name: "Events", path: "/eventGallery" },
    // { name: "Toppers", path: "/toppers" },
    { name: "Rules", path: "/rules" },
    { name: "Public Disclosure", path: "/public-disclosure" },
    { name: "Contact", path: "/contact" },
  ];

  const branches = [
    { name: "Main Campus", path: "/" },
    { name: "Bhopatpur - Classes Started", path: "/bhopatpur" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            {branding?.logoImage?.asset?.url ? (
              <img
                src={branding.logoImage.asset.url}
                alt={branding.altText || "School Logo"}
                className="w-12 h-12 rounded-full object-contain transform group-hover:scale-105 transition-transform duration-300 shadow-sm bg-white"
              />
            ) : (
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">RE</span>
              </div>
            )}
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-gray-900 leading-tight">
                {branding?.schoolShortName || "Red Eagle"}
              </div>
              <div className="text-xs text-red-600 font-medium">
                {branding?.tagline || "Group of Institutions"}
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              to="/"
              onClick={() => setBranchDropdown(false)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                location.pathname === "/"
                  ? "text-red-600 bg-red-50"
                  : "text-gray-700 hover:text-red-600 hover:bg-red-50"
              }`}
            >
              Home
            </Link>

            {/* Branch Selector */}
            <div className="relative ml-2" ref={branchDropdownRef}>
              <button
                onClick={() => setBranchDropdown(!branchDropdown)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-200 flex items-center space-x-1"
              >
                <span>Branches</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${branchDropdown ? "rotate-180" : ""}`}
                />
              </button>
              {branchDropdown && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
                  {branches.map((branch, idx) => (
                    <Link
                      key={idx}
                      to={branch.path}
                      onClick={() => setBranchDropdown(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                    >
                      {branch.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setBranchDropdown(false)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? "text-red-600 bg-red-50"
                    : "text-gray-700 hover:text-red-600 hover:bg-red-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="https://forms.gle/J8GvJ5T4XjKbaQ8J8" target="_blank">
              <Button className="ml-4 bg-red-600 hover:bg-red-700 text-white">
                Admission Enquiry
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-2">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                location.pathname === "/"
                  ? "text-red-600 bg-red-50"
                  : "text-gray-700 hover:text-red-600 hover:bg-red-50"
              }`}
            >
              Home
            </Link>
            <div className="pt-2 border-t border-gray-100">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-4 py-2">
                Branches
              </div>
              {branches.map((branch, idx) => (
                <Link
                  key={idx}
                  to={branch.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-200"
                >
                  {branch.name}
                </Link>
              ))}
            </div>
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? "text-red-600 bg-red-50"
                    : "text-gray-700 hover:text-red-600 hover:bg-red-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="https://forms.gle/J8GvJ5T4XjKbaQ8J8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white mt-4">
                Admission Enquiry
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
