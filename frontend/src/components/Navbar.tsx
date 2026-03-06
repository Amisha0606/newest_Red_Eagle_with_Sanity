import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Rules", path: "/rules" },
    { name: "Facilities", path: "/facilities" },
    { name: "Toppers", path: "/toppers" },
    { name: "Events", path: "/eventGallery" },
    { name: "Fees", path: "/fee-structure" },
    { name: "Bhopatpur", path: "/bhopatpur" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? "bg-white/95 backdrop-blur-md py-4 shadow-xl border-b border-obsidian/5" : "bg-transparent py-8"
        }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between font-inter">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-4 group">
          <div className="relative">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-crimson/20 group-hover:border-crimson transition-all duration-500 shadow-2xl bg-white">
              <img src="/assets/branding/logo.jpeg" alt="Red Eagle Logo" className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-obsidian font-instrument font-black text-2xl leading-none tracking-tight">RED EAGLE</span>
            <span className="text-crimson font-outfit text-[10px] tracking-[0.4em] uppercase font-bold">Institutions</span>
          </div>
        </Link>

        {/* Links */}
        <div className="hidden lg:flex items-center space-x-10 text-[11px] font-bold uppercase tracking-[0.25em] text-obsidian/80">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative group hover:text-crimson transition-colors duration-300 ${location.pathname === link.path ? "text-crimson" : ""}`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-crimson transition-all duration-300 ${location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"}`}></span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link to="/contact">
            <button className="relative px-10 py-3 bg-obsidian text-white overflow-hidden group transition-all duration-500 shadow-lg">
              <span className="relative z-10 font-outfit text-xs tracking-[0.3em] uppercase">Enquire Now</span>
              <div className="absolute top-0 left-0 w-0 h-full bg-crimson transition-all duration-500 group-hover:w-full"></div>
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsMenuOpen(true)} className="lg:hidden p-3 bg-obsidian text-white rounded-sm active:scale-95 transition-transform">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Full-screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-parchment z-[200] flex flex-col p-12 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-16">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-crimson shadow-xl bg-white">
                  <img src="/assets/branding/logo.jpeg" alt="Red Eagle Logo" className="w-full h-full object-cover" />
                </div>
                <span className="text-obsidian font-instrument font-black text-3xl leading-none tracking-tight">RED EAGLE</span>
              </Link>
              <button onClick={() => setIsMenuOpen(false)} className="p-4 bg-obsidian text-white rounded-full hover:bg-crimson transition-colors">
                <X className="w-8 h-8" />
              </button>
            </div>

            <div className="flex flex-col space-y-2">
              {[...navLinks, { name: "Contact", path: "/contact" }].map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  key={link.name}
                >
                  <Link
                    onClick={() => setIsMenuOpen(false)}
                    to={link.path}
                    className="text-5xl md:text-7xl font-instrument font-black text-obsidian hover:text-crimson transition-all block py-4 border-b border-obsidian/5 relative group"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span className="absolute left-0 bottom-4 w-0 h-4 bg-gold/20 -z-10 group-hover:w-full transition-all duration-500"></span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pt-12 border-t border-obsidian/5 flex flex-col gap-4">
              <p className="font-outfit text-obsidian/40 tracking-widest text-xs uppercase">The Future of Education</p>
              <p className="font-instrument italic text-obsidian/60 text-lg">Igniting legacies since 2010.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
