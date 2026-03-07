import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Building2, Calendar, MapPin, Phone, Mail, Users, Globe, Sparkles, ShieldCheck } from 'lucide-react';
import { leadership } from '../data/mockData';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const BhopatpurBranch = () => {
  return (
    <div className="bg-parchment selection:bg-crimson selection:text-white overflow-hidden pb-40">
      {/* --- CINEMATIC HERO --- */}
      <section data-scroll-section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
            alt="Bhopatpur Campus Blueprint"
            className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/40 to-obsidian/60"></div>
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 border border-gold/30 bg-gold/5 backdrop-blur-md rounded-full mb-10">
              <Sparkles className="w-4 h-4 text-gold animate-pulse" />
              <span className="font-outfit tracking-[0.3em] text-gold text-xs uppercase">A New Frontier in Education</span>
            </div>

            <h1 className="text-6xl md:text-[110px] font-instrument font-black text-parchment leading-[0.85] tracking-tighter mb-12">
              BHOPATPUR <br /> <span className="text-crimson italic">CAMPUS</span>
            </h1>

            <p className="text-xl md:text-2xl text-parchment/60 font-inter mb-16 max-w-2xl mx-auto leading-relaxed italic">
              Transcending traditional boundaries to establish a modern sanctuary of intellectual and physical growth.
            </p>

            <div className="inline-flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex items-center gap-4 group cursor-help">
                <Calendar className="w-6 h-6 text-crimson group-hover:rotate-12 transition-transform" />
                <div className="text-left">
                  <p className="font-outfit tracking-widest text-parchment/40 text-[10px] uppercase">Grand Inauguration</p>
                  <p className="font-instrument font-bold text-parchment text-lg tracking-wide whitespace-nowrap">15 FEBRUARY 2026</p>
                </div>
              </div>
              <div className="w-[1px] h-12 bg-white/10 hidden md:block"></div>
              <div className="flex items-center gap-4 group cursor-help">
                <MapPin className="w-6 h-6 text-crimson group-hover:-translate-y-1 transition-transform" />
                <div className="text-left">
                  <p className="font-outfit tracking-widest text-parchment/40 text-[10px] uppercase">Institutional Geometry</p>
                  <p className="font-instrument font-bold text-parchment text-lg tracking-wide whitespace-nowrap">PREMIUM EDUCATION HUB</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Watermark */}
        <div className="absolute bottom-10 left-12 opacity-10 hidden md:block select-none pointer-events-none">
          <h2 className="font-instrument text-[8vw] font-black text-white leading-none tracking-tighter italic">EXPANSION</h2>
        </div>
      </section>

      {/* --- THE VISION SECTION --- */}
      <section data-scroll-section className="py-32 relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-12 flex flex-col items-center text-center">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Building2 className="w-20 h-20 text-crimson mb-10 opacity-20" />
                <h2 className="text-5xl md:text-[80px] font-instrument font-black text-obsidian leading-[0.9] mb-12">
                  A MASTERCLASS IN <br /> <span className="text-crimson italic">ARCHITECTURE</span>
                </h2>
                <p className="font-inter text-obsidian/50 text-xl max-w-3xl mx-auto leading-relaxed mb-24">
                  Designed by visionaries, the Bhopatpur campus integrates sustainable geometry with high-performance learning spaces.
                </p>
              </motion.div>
            </div>

            <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { icon: Building2, label: 'Modern Sanctuary', desc: 'Symmetrical design fostering focus and psychological well-being.' },
                { icon: Globe, label: 'Global Standard', desc: 'Digital connectivity that bridges our students with international scholars.' },
                { icon: ShieldCheck, label: 'Secure Perimeter', desc: 'State-of-the-art surveillance and localized safety protocols.' }
              ].map((feat, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-12 bg-white shadow-[0_40px_100px_rgba(0,0,0,0.05)] border border-obsidian/5 group hover:border-crimson transition-all duration-500"
                >
                  <feat.icon className="w-12 h-12 text-crimson mb-8 opacity-60 group-hover:scale-110 transition-transform" />
                  <h4 className="font-instrument font-bold text-2xl text-obsidian mb-4">{feat.label}</h4>
                  <p className="font-inter text-obsidian/50 text-sm leading-relaxed">{feat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- THE BLUEPRINT GALLERY --- */}
      <section data-scroll-section className="py-32 bg-obsidian overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[16/10] overflow-hidden group border border-white/5"
            >
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" alt="Main Portal" />
              <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-obsidian to-transparent translate-y-full group-hover:translate-y-0 transition-transform">
                <span className="font-outfit tracking-widest text-gold text-xs">REPS-BHP-01</span>
                <h4 className="text-2xl font-instrument font-bold text-white mt-2">THE MAIN PORTAL</h4>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[16/10] overflow-hidden group border border-white/5"
            >
              <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" alt="Learning Atrium" />
              <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-obsidian to-transparent translate-y-full group-hover:translate-y-0 transition-transform">
                <span className="font-outfit tracking-widest text-gold text-xs">REPS-BHP-02</span>
                <h4 className="text-2xl font-instrument font-bold text-white mt-2">LEARNING ATRIUM</h4>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- COMMAND & LEADERSHIP --- */}
      <section data-scroll-section className="py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center mb-20">
          <span className="font-outfit text-crimson tracking-[0.3em] text-sm block mb-4">Institutional Presence</span>
          <h2 className="text-5xl md:text-7xl font-instrument font-black text-obsidian">CENTRAL <span className="text-crimson italic">COMMAND</span></h2>
        </div>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          {leadership.map((leader, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-10 shadow-2xl border border-obsidian/5">
                <img src={leader.image} alt={leader.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-all"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h4 className="text-3xl font-instrument font-black text-parchment mb-2 tracking-tight group-hover:text-gold transition-colors">{leader.name?.toUpperCase()}</h4>
                  <span className="font-outfit text-crimson tracking-[0.2em] text-xs">{leader.designation}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- THE ENQUIRY PORTAL --- */}
      <section data-scroll-section className="py-40 bg-parchment relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-obsidian p-12 md:p-24 text-center relative overflow-hidden group shadow-[0_80px_150px_rgba(0,0,0,0.1)]"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-crimson to-transparent"></div>

            <h2 className="text-4xl md:text-[80px] font-instrument font-black text-parchment mb-12 leading-tight">
              PRE-ADMISSION <br /> <span className="text-crimson italic">REGISTRY</span>
            </h2>
            <p className="text-xl text-parchment/40 font-inter mb-16 max-w-lg mx-auto leading-relaxed border-l border-gold pl-8 text-left italic">
              Reserve your position within the inaugural cohort of the Bhopatpur campus.
            </p>

            <div className="flex flex-col md:flex-row gap-12 justify-center items-center mb-16">
              <div className="flex items-center gap-6 group">
                <Phone className="w-6 h-6 text-crimson group-hover:rotate-12 transition-transform" />
                <span className="font-outfit tracking-widest text-parchment text-lg">+91 8400773055</span>
              </div>
              <div className="flex items-center gap-6 group">
                <Mail className="w-6 h-6 text-crimson group-hover:-translate-y-1 transition-transform" />
                <span className="font-outfit tracking-widest text-parchment text-lg">info@redeagle.edu</span>
              </div>
            </div>

            <button className="h-20 px-16 bg-crimson text-white font-outfit tracking-[0.4em] text-lg hover:bg-white hover:text-obsidian transition-all duration-700 shadow-2xl">
              REGISTER INTEREST
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BhopatpurBranch;
