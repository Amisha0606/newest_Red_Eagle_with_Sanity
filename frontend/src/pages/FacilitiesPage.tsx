import React from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import {
  ShieldCheck,
  Lock,
  Bell,
  Smartphone,
  School,
  Building2,
  Bus,
  HeartPulse,
  Utensils,
  Palette,
  Music2,
  Wifi,
  GraduationCap,
  Award
} from 'lucide-react';
import { facilities } from '../data/mockData';

// --- Variants ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const FacilitiesPage = () => {
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

  return (
    <div className="bg-parchment selection:bg-crimson selection:text-white overflow-hidden">
      {/* --- HERO SECTION --- */}
      <section data-scroll-section className="relative min-h-[70vh] flex items-center justify-center pt-24 overflow-hidden">
        <motion.div
          style={{ scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/assets/facilities/Infrastructure.png"
            alt="Campus Infrastructure"
            className="w-full h-full object-cover filter brightness-[0.3] grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-obsidian/40 to-parchment"></div>
        </motion.div>

        <div className="relative z-10 text-center max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="font-outfit text-gold tracking-[0.5em] text-sm md:text-lg mb-6 block uppercase">
              State-Of-The-Art • Infrastructure
            </span>
            <h1 className="text-6xl md:text-[100px] font-instrument font-black text-white leading-[0.9] tracking-tight">
              BEYOND THE <br /> <span className="text-crimson italic">CLASSROOM</span>
            </h1>
          </motion.div>
        </div>

        {/* Floating Architectural Element */}
        <div className="absolute top-1/2 left-10 w-[1px] h-[300px] bg-white/20 hidden lg:block"></div>
        <div className="absolute top-1/2 right-10 w-[1px] h-[300px] bg-white/20 hidden lg:block"></div>
      </section>

      {/* --- MAIN FACILITIES (EDITORIAL GRID) --- */}
      <section data-scroll-section className="py-40">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-32">
            <div className="max-w-3xl">
              <span className="font-outfit text-crimson tracking-[0.3em] mb-4 block">Our Environment</span>
              <h2 className="text-5xl md:text-[80px] font-instrument font-black text-obsidian leading-[0.9]">
                MASTERING <br /> <span className="text-crimson italic">THE SPACES</span>
              </h2>
            </div>
            <p className="text-lg text-obsidian/50 max-w-sm font-inter italic">
              Every corner of our campus is engineered to provoke discovery and inspire intellectual growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24">
            {facilities.map((facility, idx) => (
              <motion.div
                key={facility.id}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="relative aspect-[4/5] overflow-hidden mb-8 shadow-xl">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-crimson/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-full p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-obsidian/80 backdrop-blur-md">
                    <p className="text-parchment/60 font-inter text-sm leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-start justify-between">
                  <div className="pt-2">
                    <div className="font-outfit text-gold tracking-widest text-xs mb-2 uppercase">0{idx + 1} • Mastery</div>
                    <h3 className="text-3xl font-instrument font-bold text-obsidian group-hover:text-crimson transition-colors duration-300">
                      {facility.title}
                    </h3>
                  </div>
                  <div className="w-12 h-12 border border-obsidian/10 rounded-full flex items-center justify-center text-obsidian/30 group-hover:bg-crimson group-hover:text-white group-hover:border-crimson transition-all duration-500">
                    <Building2 className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ADDITIONAL AMENITIES (LUXURY GRID) --- */}
      <section data-scroll-section className="py-40 bg-obsidian text-parchment">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="text-center mb-32">
            <span className="font-outfit text-crimson tracking-[0.5em] mb-4 block">The Holistic Grid</span>
            <h2 className="text-5xl md:text-7xl font-instrument font-black">PREMIUM <span className="text-crimson italic">SERVICES</span></h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-white/10"
          >
            {[
              { icon: School, title: 'Swimming Pool', desc: 'Olympic-size pool for professional swimming training.' },
              { icon: Award, title: 'Auditorium', desc: 'A 500-seat theater for arts, drama, and intellectual discourse.' },
              { icon: Bus, title: 'Transport', desc: 'GPS-tracked luxury fleet covering 50+ regional routes.' },
              { icon: HeartPulse, title: 'Medical Wing', desc: 'Full-time nursing staff and immediate emergency response unit.' },
              { icon: Utensils, title: 'Cafeteria', desc: 'Chef-led nutrition program offering gourmet, healthy meals.' },
              { icon: Palette, title: 'Art Atelier', desc: 'Expansive studio space for visual arts and digital design.' },
              { icon: Music2, title: 'Music Lab', desc: 'Soundproof studios with classical and modern instruments.' },
              { icon: Wifi, title: 'Fiber Campus', desc: 'Gigabit-speed connectivity powering the digital learning age.' }
            ].map((amenity, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-12 border border-white/5 hover:bg-parchment hover:text-obsidian transition-all duration-500 group shadow-[inset_0_0_20px_rgba(255,255,255,0.01)]"
              >
                <amenity.icon className="w-10 h-10 text-crimson mb-8" />
                <h4 className="text-2xl font-instrument font-bold mb-4">{amenity.title}</h4>
                <p className="text-parchment/40 group-hover:text-obsidian/60 font-inter text-sm leading-relaxed transition-colors duration-500">
                  {amenity.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- SAFETY & SECURITY (HIGH TRUST) --- */}
      <section data-scroll-section className="py-40 bg-parchment relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative overflow-hidden rounded-sm"
            >
              <img src="/assets/facilities/MedicalRoom.png" alt="Medical Safety" className="w-full aspect-[4/3] object-cover grayscale brightness-75" />
              <div className="absolute inset-0 bg-crimson/10 mix-blend-multiply"></div>
              <div className="absolute top-10 right-10 flex items-center space-x-4">
                <div className="p-6 bg-crimson text-white">
                  <ShieldCheck className="w-10 h-10" />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="font-outfit text-crimson tracking-[0.3em] mb-4 block">Uncompromising Care</span>
              <h2 className="text-5xl md:text-7xl font-instrument font-black text-obsidian leading-[0.9] mb-12">
                THE FORTRESS <br /> <span className="text-crimson italic">OF GROWTH</span>
              </h2>
              <p className="text-xl text-obsidian/60 font-inter leading-relaxed mb-16">
                Your child's safety is the non-negotiable bedrock of our institution. We employ a multi-layered security architecture that blends human vigilance with advanced technology.
              </p>

              <div className="space-y-12">
                {[
                  { icon: Lock, title: '24/7 Elite Surveillance', desc: 'Integrated AI-powered CCTV and trained rapid response personnel.' },
                  { icon: Bell, title: 'Emergency Protocol', desc: 'Military-grade response systems and regular unified safety drills.' },
                  { icon: Smartphone, title: 'Parent Nexus', desc: 'Direct, real-time connectivity through our encrypted institution portal.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="flex-shrink-0 w-16 h-16 border border-gold/30 rounded-full flex items-center justify-center group-hover:bg-gold group-hover:text-obsidian transition-all duration-300">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h5 className="text-xl font-instrument font-bold text-obsidian mb-2">{item.title}</h5>
                      <p className="text-obsidian/50 font-inter text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- CTA BAR --- */}
      <section data-scroll-section className="py-24 bg-obsidian border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
          <h3 className="text-3xl md:text-5xl font-instrument font-bold text-parchment">
            Experience The <span className="text-crimson italic">Legacy.</span>
          </h3>
          <button className="px-12 py-5 bg-crimson text-white font-outfit text-lg tracking-widest hover:bg-gold hover:text-obsidian transition-all duration-500">
            Book a Private Campus Tour
          </button>
        </div>
      </section>
    </div>
  );
};

export default FacilitiesPage;
