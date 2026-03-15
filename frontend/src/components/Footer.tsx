import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";
import { useBranding } from "../hooks/useBranding";

const Footer = () => {
  const { branding } = useBranding();

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Facilities", path: "/facilities" },
    // { name: "Toppers", path: "/toppers" },
    { name: "Event Gallery", path: "/eventGallery" },
  ];

  const importantLinks = [
    // { name: "Admission Enquiry", path: "https://forms.gle/J8GvJ5T4XjKbaQ8J8" },
    // { name: "Fee Structure", path: "/fee-structure" },
    { name: "Rules & Regulations", path: "/rules" },
    { name: "Public Disclosure", path: "/public-disclosure" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              {branding?.logoImage?.asset?.url ? (
                <img
                  src={branding.logoImage.asset.url}
                  alt={branding.altText || "School Logo"}
                  className="w-12 h-12 rounded-full object-contain bg-white"
                />
              ) : (
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">RE</span>
                </div>
              )}
              <div>
                <div className="text-lg font-bold text-white">
                  {branding?.schoolShortName || "Red Eagle"}
                </div>
                <div className="text-xs text-red-400">
                  {branding?.tagline || "Group of Institutions"}
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Providing quality education and a nurturing environment to help
              students excel in academics and beyond.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/RedEaglePublicSchool"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Red Eagle Public School
                Facebook page"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href="https://www.instagram.com/reps_saidabad/"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Red Eagle Public School Instagram page"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@RedEaglePublicSchoolSaidabad"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Red Eagle Public School YouTube channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/red-eagle-public-school-prayagraj"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Red Eagle Public School LinkedIn page"
              >
                <Linkedin className="w-4 h-4" />
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
                <a
                  href="mailto:sarveshredeagle@gmail.com"
                  className="hover:text-red-600"
                >
                  <span>sarveshredeagle@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />

                <a
                  href="https://maps.app.goo.gl/SJB95f37FMCwRE9M9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-600"
                >
                  Main Campus, Red Eagle Public School
                </a>
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
