import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, ShieldCheck, Award } from "lucide-react";

const Footer = () => {
  return (
    <footer data-scroll-section className="bg-obsidian pt-40 pb-12 overflow-hidden relative">
      {/* Large Typography Watermark */}
      <div className="absolute top-20 left-0 w-full flex justify-center opacity-[0.03] select-none pointer-events-none">
        <h2 className="text-[20vw] font-instrument font-black text-parchment leading-none whitespace-nowrap">
          RED EAGLE
        </h2>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center space-x-6 mb-8 group">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-crimson/20 group-hover:border-crimson transition-all duration-500 shadow-2xl bg-white">
                <img src="/assets/branding/logo.jpeg" alt="Red Eagle Logo" className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700" />
              </div>
              <div className="flex flex-col">
                <span className="text-parchment font-instrument font-black text-3xl leading-none tracking-tight">RED EAGLE</span>
                <span className="text-crimson font-outfit text-[10px] tracking-[0.4em] uppercase font-bold">Institutions</span>
              </div>
            </div>
            <p className="text-parchment/50 font-inter text-lg leading-relaxed max-w-lg mb-12">
              We are the architects of future legacies. Our institution stands as a lighthouse of intellectual rigor and creative innovation. Join the flight.
            </p>

            {/* Newsletter Subscription */}
            <div className="max-w-md">
              <h6 className="font-outfit text-gold tracking-widest mb-4 uppercase">The Eagle's Nest Newsletter</h6>
              <div className="flex border-b border-parchment/20 py-4 group focus-within:border-crimson transition-colors duration-500">
                <input
                  type="email"
                  placeholder="Official Email Address"
                  className="bg-transparent border-none outline-none text-parchment w-full font-inter py-2 transition-all placeholder:text-parchment/20 focus:placeholder:text-parchment/40"
                />
                <button className="px-6 text-crimson hover:text-white transition-colors">
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h5 className="font-outfit text-parchment tracking-[0.2em] mb-10 text-sm uppercase opacity-40">INSTITUTION</h5>
              <div className="flex flex-col space-y-5 text-parchment/70 font-inter text-[13px] uppercase tracking-wider">
                {["Philosophy", "Admissions", "Departments", "Research", "Campus Life", "Rules"].map(link => (
                  <Link key={link} to={`/${link.toLowerCase().replace(" ", "")}`} className="hover:text-gold transition-all duration-300 w-fit relative group">
                    {link}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-outfit text-parchment tracking-[0.2em] mb-10 text-sm uppercase opacity-40">COMMUNITY</h5>
              <div className="flex flex-col space-y-5 text-parchment/70 font-inter text-[13px] uppercase tracking-wider">
                {["Alumni Network", "Events", "Toppers", "Gallery", "Fees", "Bhopatpur"].map(link => (
                  <Link key={link} to={`/${link.toLowerCase().replace(" ", "")}`} className="hover:text-gold transition-all duration-300 w-fit relative group">
                    {link}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h5 className="font-outfit text-parchment tracking-[0.2em] mb-10 text-sm uppercase opacity-40">VISIT US</h5>
              <p className="text-parchment/60 font-inter text-sm mb-10 leading-relaxed italic">
                NH-27, Main Campus, Red Eagle Square, State Highway - 5, India.
              </p>
              <div className="flex space-x-4">
                {[
                  { name: "In", icon: <Star className="w-4 h-4" /> },
                  { name: "Tw", icon: <ShieldCheck className="w-4 h-4" /> },
                  { name: "Ig", icon: <Award className="w-4 h-4" /> }
                ].map((social, i) => (
                  <div key={i} className="w-12 h-12 border border-parchment/10 rounded-xl flex items-center justify-center text-parchment group hover:bg-parchment hover:text-obsidian transition-all duration-500 cursor-pointer">
                    {social.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Utility Bar */}
        <div className="pt-12 border-t border-parchment/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 relative z-20">
          <div className="flex items-center space-x-8 text-[10px] font-outfit tracking-[0.4em] text-parchment/20">
            <span>© 2026 RED EAGLE TRUST</span>
            <Link to="#" className="hover:text-parchment transition-colors">PRIVACY</Link>
            <Link to="#" className="hover:text-parchment transition-colors">COOKIES</Link>
          </div>
          <div className="flex items-center space-x-3 text-[10px] font-outfit tracking-[0.4em] text-parchment/20">
            <span>© 2026 RED EAGLE</span>
          </div>
        </div>
      </div>

      {/* Background Noise/Grain Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}></div>
    </footer>
  );
};

export default Footer;
