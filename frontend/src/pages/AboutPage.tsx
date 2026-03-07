import React from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { GraduationCap, Target, Users, Award, BookOpen, Heart, ShieldCheck, Zap } from 'lucide-react';
import { leadership } from '../data/mockData';

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
      staggerChildren: 0.15,
    },
  },
};

const AboutPage = () => {
  const { scrollYProgress } = useScroll();
  const heroImgY = useTransform(scrollYProgress, [0, 0.5], [0, 150]);
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="bg-parchment selection:bg-crimson selection:text-white overflow-hidden">
      {/* --- HERO SECTION --- */}
      <section data-scroll-section className="relative h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        <motion.div
          style={{ y: heroImgY }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/assets/school/SchoolFullPicture.jpg"
            alt="Institutional Heritage"
            className="w-full h-full object-cover grayscale opacity-40 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-parchment/80 via-transparent to-parchment"></div>
        </motion.div>

        <div className="relative z-10 text-center max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="mb-8"
          >
            <span className="font-outfit text-crimson tracking-[0.5em] text-sm md:text-lg mb-4 block uppercase leading-none">
              Estd. 2010 • The Legacy Continues
            </span>
            <motion.h1
              style={{ opacity: heroTextOpacity }}
              className="text-6xl md:text-[120px] font-instrument font-black text-obsidian leading-[0.8] tracking-tight"
            >
              THE <br /> <span className="text-crimson italic">INSTITUTION</span>
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12"
          >
            <div className="h-[1px] w-24 bg-gold hidden md:block"></div>
            <p className="text-lg md:text-2xl font-instrument italic text-obsidian/70 max-w-2xl">
              "A forge for intellectual giants and visionary leaders, crafted in the heart of academic rigor."
            </p>
            <div className="h-[1px] w-24 bg-gold hidden md:block"></div>
          </motion.div>
        </div>

        {/* Vertical Line Accent */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent to-gold"></div>
      </section>

      {/* --- OUR STORY SECTION --- */}
      <section data-scroll-section className="py-40 relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-1 hidden lg:block">
            <span className="font-outfit text-[8vw] text-gold/10 whitespace-nowrap -rotate-90 origin-center absolute left-[-4vw] top-1/2 -translate-y-1/2 select-none tracking-[0.2em]">
              CHRONICLES
            </span>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <span className="font-outfit text-crimson tracking-[0.3em] mb-6 block uppercase">Our Genesis</span>
              <h2 className="text-5xl md:text-7xl font-instrument font-bold text-obsidian leading-tight mb-10">
                15 Years of <br />
                <span className="italic underline decoration-gold/30">Academic Sovereignty</span>
              </h2>
              <div className="space-y-8 text-obsidian/60 font-inter text-lg leading-relaxed">
                <p>
                  At Red Eagle Public School (R.E.P.S.), we are dedicated to creating a safe, secure, and supportive environment that nurtures every student's potential. Our commitment is to provide a foundation that enables students to embark on their educational journey with confidence.
                </p>
                <p>
                  We strive to prepare students not just for examinations but for life, cultivating individuals who are ready to contribute meaningfully to the world. At R.E.P.S., your journey towards excellence begins in an atmosphere of encouragement and innovation.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-12 mt-16 pt-12 border-t border-gold/20">
                <div>
                  <div className="text-5xl font-instrument font-black text-crimson mb-2">2K+</div>
                  <div className="font-outfit text-sm tracking-widest text-obsidian/40">Students Enrolled</div>
                </div>
                <div>
                  <div className="text-5xl font-instrument font-black text-crimson mb-2">100+</div>
                  <div className="font-outfit text-sm tracking-widest text-obsidian/40">Expert Faculty</div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "circOut" }}
              className="relative"
            >
              <div className="relative z-10 rounded-sm overflow-hidden shadow-[30px_30px_0px_rgba(201,168,76,0.5)]">
                <img src="/assets/facilities/Library.png" alt="Library" className="w-full h-full object-cover filter sepia-[0.2]" />
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-crimson rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-gold rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- MISSION & VISION (GLASSMORPHISM) --- */}
      <section data-scroll-section className="py-40 bg-obsidian relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="currentColor" className="text-crimson w-full h-full"><path d="M50 5L15 90H85L50 5Z" /></svg>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group p-12 bg-white/5 backdrop-blur-md border border-white/10 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-crimson transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <Target className="w-16 h-16 text-crimson mb-8" />
              <h3 className="text-4xl font-instrument font-bold text-parchment mb-6 tracking-tight">Our Mission</h3>
              <p className="text-parchment/60 font-inter text-lg leading-relaxed mb-8">
                To provide quality education that nurtures intellectual curiosity, critical thinking, and moral values. We aim to develop confident, responsible, and compassionate individuals who can contribute positively to society.
              </p>
              <div className="flex items-center space-x-4 text-crimson">
                <span className="font-outfit tracking-[0.2em] text-sm">Targeting Excellence</span>
                <div className="h-[1px] w-12 bg-crimson"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group p-12 bg-white/5 backdrop-blur-md border border-white/10 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <Award className="w-16 h-16 text-gold mb-8" />
              <h3 className="text-4xl font-instrument font-bold text-parchment mb-6 tracking-tight">Our Vision</h3>
              <p className="text-parchment/60 font-inter text-lg leading-relaxed mb-8">
                To be a leading educational institution recognized for academic excellence, innovative teaching methods, and holistic development. We envision creating future leaders who are equipped to face global challenges.
              </p>
              <div className="flex items-center space-x-4 text-gold">
                <span className="font-outfit tracking-[0.2em] text-sm">Visioning the Future</span>
                <div className="h-[1px] w-12 bg-gold"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- CORE VALUES (MODERN GRID) --- */}
      <section data-scroll-section className="py-40">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="text-center mb-24">
            <span className="font-outfit text-gold tracking-[0.5em] mb-4 block">The Red Eagle Code</span>
            <h2 className="text-5xl md:text-7xl font-instrument font-black text-obsidian">Core <span className="text-crimson italic">Ethos</span></h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-obsidian/10"
          >
            {[
              { icon: Heart, title: 'Compassion', desc: 'Fostering empathy, kindness, and respect for all individuals' },
              { icon: BookOpen, title: 'Excellence', desc: 'Striving for the highest standards in academics and character' },
              { icon: Users, title: 'Integrity', desc: 'Upholding honesty, ethics, and accountability in all actions' },
              { icon: Target, title: 'Innovation', desc: 'Embracing creativity and forward-thinking approaches' },
              { icon: Award, title: 'Leadership', desc: 'Developing confident leaders who inspire positive change' },
              { icon: GraduationCap, title: 'Growth', desc: 'Nurturing continuous learning and personal development' }
            ].map((value, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-12 border border-obsidian/5 hover:bg-obsidian hover:text-parchment transition-all duration-500 group cursor-default"
              >
                <value.icon className="w-10 h-10 text-crimson group-hover:text-gold mb-8 transition-colors duration-500" />
                <h4 className="text-2xl font-instrument font-bold mb-4">{value.title}</h4>
                <p className="text-obsidian/50 group-hover:text-parchment/60 font-inter leading-relaxed transition-colors duration-500">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- LEADERSHIP (EDITORIAL DESIGN) --- */}
      <section data-scroll-section className="py-40 bg-parchment border-t border-obsidian/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-32">
            <div className="max-w-3xl">
              <span className="font-outfit text-crimson tracking-[0.3em] mb-4 block">The Guardians</span>
              <h2 className="text-5xl md:text-[80px] font-instrument font-black text-obsidian leading-[0.9]">
                LEADERSHIP <br /> <span className="text-crimson">& COLLECTIVE</span>
              </h2>
            </div>
            <p className="text-lg text-obsidian/50 max-w-sm font-inter italic">
              Hand-picked experts dedicated to the sacred trust of shaping the next generation of global citizens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {leadership.map((leader, idx) => (
              <motion.div
                key={leader.id}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                variants={fadeInUp}
                className="group"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-8 shadow-2xl">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-crimson/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-8 right-8 w-16 h-16 border border-white/20 flex items-center justify-center text-white/50 group-hover:bg-crimson group-hover:text-white transition-all duration-500">
                    <Award className="w-8 h-8" />
                  </div>
                </div>
                <div className="space-y-4">
                  <span className="font-outfit text-crimson tracking-[0.3em] text-sm uppercase">{leader.designation}</span>
                  <h5 className="text-3xl font-instrument font-bold text-obsidian group-hover:text-gold transition-colors duration-300">{leader.name}</h5>
                  <p className="text-obsidian/60 font-inter leading-relaxed border-l border-gold pl-6 py-2 italic text-sm">
                    "{leader.message}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ACHIEVEMENTS ACCENT --- */}
      <section data-scroll-section className="py-40 bg-obsidian text-parchment relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-20">
            {[
              { icon: ShieldCheck, number: '95%', label: 'Board Excellence' },
              { icon: Zap, number: '150+', label: 'Distinctions' },
              { icon: Award, number: '50+', label: 'Global Awards' },
              { icon: Users, number: '100%', label: 'Trust Index' }
            ].map((ach, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <ach.icon className="w-12 h-12 text-crimson mb-8 opacity-50" />
                <div className="text-5xl md:text-7xl font-instrument font-black text-crimson mb-2">{ach.number}</div>
                <div className="font-outfit tracking-[0.3em] text-xs text-parchment/40 uppercase">{ach.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA BAR --- */}
      <section data-scroll-section className="h-[40vh] bg-crimson flex items-center justify-center overflow-hidden">
        <div className="flex whitespace-nowrap marquee-fast">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center mx-12">
              <span className="text-[10vw] font-instrument font-black text-transparent stroke-white stroke-1 opacity-20 uppercase tracking-tighter">
                JOIN THE EAGLES FLY WITH PURPOSE
              </span>
              <div className="w-20 h-[1px] bg-white/30 mx-12"></div>
            </div>
          ))}
        </div>

        <style dangerouslySetInnerHTML={{
          __html: `
                    @keyframes marquee-fast {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-33.33%); }
                    }
                    .marquee-fast { animation: marquee-fast 20s linear infinite; }
                    .stroke-white { -webkit-text-stroke: 1px rgba(255,255,255,0.3); }
                `}} />
      </section>
    </div>
  );
};

export default AboutPage;
