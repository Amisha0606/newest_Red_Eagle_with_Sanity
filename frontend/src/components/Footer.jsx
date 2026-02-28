import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Facilities", path: "/facilities" },
    { name: "Toppers", path: "/toppers" },
    { name: "Event Gallery", path: "/eventGallery" },
  ];

  const importantLinks = [
    { name: "Admission", path: "/admission" },
    { name: "Fee Structure", path: "/fee-structure" },
    { name: "Rules & Regulations", path: "/rules" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">RE</span>
              </div>
              <div>
                <div className="text-lg font-bold text-white">Red Eagle</div>
                <div className="text-xs text-red-400">
                  Group of Institutions
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Providing quality education and a nurturing environment to help
              students excel in academics and beyond.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-red-400 transition-colors duration-200 inline-flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 group-hover:w-3 transition-all duration-200"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Important Links
            </h3>
            <ul className="space-y-2">
              {importantLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-red-400 transition-colors duration-200 inline-flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 group-hover:w-3 transition-all duration-200"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <Phone className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span>+91 8400773055</span>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Mail className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span>info@redeaglepublicschool.com</span>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span>Main Campus, Red Eagle Public School</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Red Eagle Group of Institutions. All
              rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy"
                className="hover:text-red-400 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-red-400 transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
