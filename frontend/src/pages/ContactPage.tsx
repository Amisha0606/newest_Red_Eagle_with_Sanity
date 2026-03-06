import React from 'react';
import { motion, Variants } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Globe, MessageSquare } from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const ContactPage = () => {
  return (
    <div className="bg-parchment selection:bg-crimson selection:text-white overflow-hidden pb-40">
      {/* --- HERO SECTION --- */}
      <section data-scroll-section className="relative pt-40 pb-24 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <span className="font-outfit text-crimson tracking-[0.5em] text-sm md:text-lg mb-6 block uppercase">
              Open Dialogue • Academic Inquiries
            </span>
            <h1 className="text-6xl md:text-[100px] font-instrument font-black text-obsidian leading-[0.9] tracking-tight mb-12">
              CONNECT WITH <br /> <span className="text-crimson italic text-7xl md:text-[120px]">THE EAGLE</span>
            </h1>
            <p className="text-xl md:text-2xl text-obsidian/60 font-inter leading-relaxed max-w-2xl border-l-2 border-gold pl-8">
              Whether you're looking to Join our flight or have a specific query, our dedicated administration is here to facilitate your journey.
            </p>
          </motion.div>
        </div>

        {/* Abstract Line Background */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] pointer-events-none">
          <svg viewBox="0 0 100 100" fill="currentColor" className="text-obsidian w-full h-full rotate-12"><path d="M50 5L15 90H85L50 5Z" /></svg>
        </div>
      </section>

      {/* --- CONTACT GRID --- */}
      <section data-scroll-section className="py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-24">

          {/* Contact Channels */}
          <div className="lg:col-span-5 space-y-16">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="font-outfit text-3xl tracking-widest text-obsidian mb-10 border-b border-obsidian/10 pb-4">Direct Channels</h2>
              <div className="space-y-12">
                {[
                  { icon: MapPin, title: 'Main Campus', detail: 'Red Eagle Square, NH-27, City Campus, State PIN-XXXXXX' },
                  { icon: Phone, title: 'Phone Support', detail: '+91 8400773055 • +91 99999 88888' },
                  { icon: Mail, title: 'Electronic Mail', detail: 'info@redeaglepublicschool.com • admissions@redeagle.edu' },
                  { icon: Clock, title: 'Registry Hours', detail: 'Mon - Fri: 0800h to 1600h • Sat: 0800h to 1300h' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-obsidian text-parchment flex items-center justify-center rounded-sm transition-all duration-500 group-hover:bg-crimson">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-outfit tracking-widest text-lg text-crimson group-hover:text-obsidian transition-colors">{item.title}</h4>
                      <p className="text-obsidian/60 font-inter text-sm leading-relaxed max-w-xs">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="p-10 bg-crimson text-white relative overflow-hidden group"
            >
              <Globe className="absolute -bottom-10 -right-10 w-40 h-40 opacity-10 group-hover:rotate-45 transition-transform duration-1000" />
              <h3 className="text-2xl font-instrument font-bold mb-4 relative z-10">Institutional Portal</h3>
              <p className="text-white/70 font-inter text-sm mb-6 relative z-10 leading-relaxed">
                Access the centralized ERP for real-time student updates, fees, and internal communications.
              </p>
              <button className="px-6 py-3 border border-white/20 hover:bg-white hover:text-crimson transition-all duration-300 font-outfit tracking-widest text-sm relative z-10">
                ENTER PORTAL
              </button>
            </motion.div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white p-10 md:p-16 shadow-[0_40px_100px_rgba(0,0,0,0.05)] border border-obsidian/5"
            >
              <div className="flex items-center gap-4 mb-12">
                <MessageSquare className="text-gold w-8 h-8" />
                <h3 className="text-4xl font-instrument font-bold text-obsidian">Request <span className="text-crimson italic">Inquiry</span></h3>
              </div>

              <form className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="relative group">
                    <input type="text" className="w-full bg-transparent border-b border-obsidian/10 py-4 outline-none focus:border-crimson transition-colors font-inter placeholder:text-transparent peer" placeholder="Full Name" />
                    <label className="absolute left-0 top-4 text-obsidian/30 font-outfit tracking-widest text-sm pointer-events-none transition-all peer-focus:-top-6 peer-focus:text-crimson peer-focus:text-xs">Distinguished Name</label>
                  </div>
                  <div className="relative group">
                    <input type="email" className="w-full bg-transparent border-b border-obsidian/10 py-4 outline-none focus:border-crimson transition-colors font-inter placeholder:text-transparent peer" placeholder="Email" />
                    <label className="absolute left-0 top-4 text-obsidian/30 font-outfit tracking-widest text-sm pointer-events-none transition-all peer-focus:-top-6 peer-focus:text-crimson peer-focus:text-xs">Electronic Mail</label>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <div className="relative group">
                    <input type="tel" className="w-full bg-transparent border-b border-obsidian/10 py-4 outline-none focus:border-crimson transition-colors font-inter placeholder:text-transparent peer" placeholder="Full Name" />
                    <label className="absolute left-0 top-4 text-obsidian/30 font-outfit tracking-widest text-sm pointer-events-none transition-all peer-focus:-top-6 peer-focus:text-crimson peer-focus:text-xs">Contact Number</label>
                  </div>
                  <div className="relative group">
                    <select className="w-full bg-transparent border-b border-obsidian/10 py-4 outline-none focus:border-crimson transition-colors font-inter text-obsidian/70">
                      <option>General Admissions</option>
                      <option>Academic Inquiry</option>
                      <option>Scholarship Program</option>
                      <option>Bhopatpur Campus</option>
                      <option>Other Assistance</option>
                    </select>
                    <label className="absolute left-0 -top-6 text-crimson font-outfit tracking-widest text-xs">Department of Interest</label>
                  </div>
                </div>

                <div className="relative group">
                  <textarea className="w-full bg-transparent border-b border-obsidian/10 py-4 min-h-[150px] outline-none focus:border-crimson transition-colors font-inter placeholder:text-transparent peer" placeholder="Message"></textarea>
                  <label className="absolute left-0 top-4 text-obsidian/30 font-outfit tracking-widest text-sm pointer-events-none transition-all peer-focus:-top-6 peer-focus:text-crimson peer-focus:text-xs">Your Message/Request</label>
                </div>

                <div className="pt-6">
                  <button className="w-full h-20 bg-obsidian text-parchment font-outfit tracking-[0.3em] flex items-center justify-center group overflow-hidden relative">
                    <span className="relative z-10 flex items-center gap-4 group-hover:gap-8 transition-all duration-500 uppercase">
                      Dispatch Enquiry <Send className="w-5 h-5 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-crimson translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- MAP SECTION --- */}
      <section data-scroll-section className="py-24 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto rounded-sm overflow-hidden shadow-2xl h-[600px] border border-obsidian/5 relative group">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.012!2d80.123!3d26.123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDA3JzI0LjQiTiA4MMKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(1) contrast(1.2) invert(0.1)' }}
            allowFullScreen={true}
            loading="lazy"
            title="Institutional Geometry"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none border-[20px] border-white/10 group-hover:border-crimson/10 transition-colors duration-700"></div>

          <a
            href="https://maps.app.goo.gl/2pwvpUdPanC9EThs9"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-10 right-10 px-8 py-4 bg-obsidian text-white font-outfit tracking-widest text-sm hover:bg-crimson transition-colors shadow-2xl"
          >
            LAUNCH GOOGLE MAPS
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
