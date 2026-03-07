import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
  Shield,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  ScrollText,
  Clock,
  Stethoscope,
  PhoneCall,
  Mail
} from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const RulesPage = () => {
  return (
    <div className="bg-parchment selection:bg-crimson selection:text-white overflow-hidden pb-40">
      {/* --- HERO SECTION --- */}
      <section data-scroll-section className="relative pt-40 pb-24 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Shield className="w-20 h-20 text-crimson mx-auto mb-8 opacity-20" />
            <span className="font-outfit text-crimson tracking-[0.5em] text-sm md:text-lg mb-6 block uppercase">
              The Institutional Almanac
            </span>
            <h1 className="text-6xl md:text-[100px] font-instrument font-black text-obsidian leading-[0.9] tracking-tight mb-12">
              CHARTER OF <br /> <span className="text-crimson italic">CONDUCT</span>
            </h1>
            <p className="text-xl text-obsidian/50 font-inter max-w-2xl mx-auto leading-relaxed">
              Established guidelines to ensure the sanctity of our educational environment and the development of disciplined visionary leaders.
            </p>
          </motion.div>
        </div>

        {/* Large Almanac Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center opacity-[0.02] select-none pointer-events-none">
          <h2 className="text-[30vw] font-instrument font-black text-obsidian leading-none whitespace-nowrap">
            ALMANAC
          </h2>
        </div>
      </section>

      {/* --- MANDATORY NOTICE --- */}
      <section data-scroll-section className="py-12">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-crimson p-8 md:p-12 text-white flex flex-col md:flex-row items-center gap-12 relative overflow-hidden group shadow-2xl"
          >
            <AlertTriangle className="w-20 h-20 text-gold opacity-30 flex-shrink-0 animate-pulse" />
            <div className="relative z-10">
              <h3 className="font-outfit text-2xl tracking-[0.3em] mb-4 text-gold">Institutional Mandate</h3>
              <p className="text-xl font-instrument italic text-white/80 leading-relaxed">
                "Self-discipline is the highest form of brilliance. Adherence to these protocols is a requisite for membership in the Red Eagle fraternity. Violation of the charter may result in immediate revocation of institutional privileges."
              </p>
            </div>
            <div className="absolute top-0 right-0 w-32 h-full bg-white/5 skew-x-12 translate-x-16"></div>
          </motion.div>
        </div>
      </section>

      {/* --- GENERAL RULES (THE CHARTER) --- */}
      <section data-scroll-section className="py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-5 relative">
            <div className="sticky top-40">
              <span className="font-outfit text-crimson tracking-[0.3em] mb-4 block">Section One</span>
              <h2 className="text-5xl md:text-7xl font-instrument font-black text-obsidian leading-[0.9] mb-12">
                GENERAL <br /> <span className="text-crimson italic">PROTOCOLS</span>
              </h2>
              <div className="w-24 h-[1px] bg-gold mb-8"></div>
              <p className="text-obsidian/50 font-inter leading-relaxed max-w-sm">
                Standard operating procedures for all members of the institution to maintain aesthetic and behavioral harmony.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {[
              'Students must maintain the highest standard of grooming and adhere to the formal institutional uniform.',
              'The Almanac must be carried daily, featuring an updated photograph and verified credentials.',
              'Institutional property is a shared heritage; any damage shall be reclaimed from the responsible individual.',
              'Formal attire is mandatory for all members above Class VI during official observations and birthdays.',
              'Private celebrations within the institutional cafeteria are strictly prohibited.',
              'Defacing institutional surfaces is categorized as a serious misdemeanor.',
              'Observation of the Charter is an essential prerequisite for continued enrollment.',
              'Zero tolerance for intimidation, bullying, or the use of unsanctioned language.'
            ].map((rule, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.05 }}
                className="p-8 border-b border-obsidian/5 flex gap-8 group hover:bg-white transition-colors duration-500"
              >
                <span className="font-instrument font-black text-2xl text-crimson group-hover:scale-125 transition-transform duration-500">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-obsidian/70 font-inter leading-relaxed text-lg">{rule}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROHIBITED PRACTICES (CRIMSON GRID) --- */}
      <section data-scroll-section className="py-32 bg-obsidian text-parchment relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="text-center mb-24 relative z-10">
            <span className="font-outfit text-crimson tracking-[0.5em] mb-4 block">Critical Violations</span>
            <h2 className="text-5xl md:text-7xl font-instrument font-black">THE RED <span className="text-crimson italic">MANDATE</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                'Indecorous behavior in or near campus grounds.',
                'Deliberate destruction of institutional assets.',
                'Any form of rowdyism or unsanctioned gathering.',
                'Application of violence in any manifestation.',
                'Communalism or practices of social exclusion.',
                'Possession of intoxicants or illicit substances.'
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-8 border border-white/5 flex items-center gap-6 group hover:border-crimson transition-all duration-500"
                >
                  <XCircle className="w-10 h-10 text-crimson flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <p className="font-instrument text-xl italic text-parchment/70 group-hover:text-parchment transition-colors">{item}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-crimson/90 p-12 flex flex-col justify-center relative shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-obsidian translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
              <div className="relative z-10">
                <AlertTriangle className="w-16 h-16 text-gold mb-8" />
                <h4 className="text-3xl font-instrument font-bold mb-6">Electronic Restriction</h4>
                <p className="text-white/60 font-inter text-sm leading-relaxed mb-10">
                  High-value electronics and excessive currency are prohibited. Confiscated mobile devices will remain under institutional custody indefinitely.
                </p>
                <div className="p-4 border border-white/20 italic text-xs font-inter">
                  "Institutional geometry demands focus."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ATTENDANCE (PRECISION GRID) --- */}
      <section data-scroll-section className="py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-32">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="font-outfit text-crimson tracking-[0.3em] mb-4 block">Chronological Presence</span>
            <h2 className="text-5xl md:text-7xl font-instrument font-black text-obsidian leading-[0.9] mb-12">
              LEAVE & <br /> <span className="text-crimson italic">ATTENDANCE</span>
            </h2>
            <div className="space-y-8">
              {[
                'Interim departures are strictly monitored; presence of legal guardians is mandatory for early dismissal.',
                'Post-illness re-entry requires a certified medical validation from a licensed practitioner.',
                'The "Record of Absence" must be formally documented for every day of non-attendance.',
                'Unexplained absence exceeding 21 days results in automatic removal from the Rolls.',
                'Leave is not sanctioned outside scheduled vacation periods, barring medical emergencies.'
              ].map((policy, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <ScrollText className="w-6 h-6 text-crimson flex-shrink-0 mt-1" />
                  <p className="font-inter text-obsidian/60 leading-relaxed text-lg">{policy}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 shadow-2xl border-l-[10px] border-gold"
            >
              <div className="flex items-center gap-6 mb-8">
                <Clock className="w-12 h-12 text-gold" />
                <h4 className="text-3xl font-instrument font-bold text-obsidian underline decoration-gold/30">Mandatory 80%</h4>
              </div>
              <div className="space-y-6 font-inter text-obsidian/70">
                <p className="pb-6 border-b border-obsidian/5">
                  <strong className="text-obsidian block mb-2 font-outfit tracking-widest text-sm">Classes I-VIII</strong>
                  A strict 80% attendance threshold is required for assessment eligibility.
                </p>
                <p>
                  <strong className="text-obsidian block mb-2 font-outfit tracking-widest text-sm">Classes IX-XII</strong>
                  Advanced scholars must maintain an average of 80%; relaxations are at the sole discretion of the Principal.
                </p>
              </div>
            </motion.div>

            <div className="bg-parchment border-2 border-dashed border-crimson p-10 flex items-center gap-8 group">
              <div className="w-20 h-20 bg-crimson text-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <h5 className="font-outfit text-xl tracking-widest text-crimson mb-2">Merit Recognition</h5>
                <p className="font-instrument text-lg italic text-obsidian/60 leading-tight">
                  Distinguished scholars maintaining 100% attendance will be awarded the Certificate of Institutional Excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MEDICAL MANDATE --- */}
      <section data-scroll-section className="py-32 bg-obsidian text-parchment relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-24">
            <div className="text-center md:text-left">
              <h2 className="text-5xl md:text-7xl font-instrument font-black text-parchment mb-4">MEDICAL <span className="text-crimson italic">MANDATE</span></h2>
              <p className="font-outfit text-gold tracking-[0.5em] text-sm md:text-lg opacity-40 uppercase">Mandatory Quarantine Protocols</p>
            </div>
            <Stethoscope className="w-32 h-32 text-crimson opacity-20 hidden md:block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-px gap-y-px bg-white/10 border border-white/10">
            {[
              { disease: 'Chicken Pox', period: 'Until scabs drop' },
              { disease: 'Measles', period: '14 days post-rash' },
              { disease: 'Mumps', period: 'Until swelling expires' },
              { disease: 'Jaundice', period: '42 days recovery' },
              { disease: 'Cholera', period: 'Total clinical recovery' },
              { disease: 'Whooping Cough', period: 'Six weeks observation' },
              { disease: 'Swine Flu', period: 'Certified fit by Surgeon' },
              { disease: 'Other Contagions', period: 'Institutional Discretion' }
            ].map((item, i) => (
              <div key={i} className="bg-obsidian p-10 group hover:bg-crimson/20 transition-all duration-500">
                <span className="font-outfit text-gold/30 text-[40px] block mb-4 group-hover:text-gold transition-colors">{String(i + 1).padStart(2, '0')}</span>
                <h5 className="text-2xl font-instrument font-bold mb-4">{item.disease}</h5>
                <p className="text-parchment/40 font-inter text-sm uppercase tracking-widest">{item.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section data-scroll-section className="py-40 bg-parchment text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-5xl md:text-7xl font-instrument font-black text-obsidian mb-12">
              Need <span className="text-crimson italic">Clarification?</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-8 justify-center">
              <button className="h-20 px-12 bg-obsidian text-parchment font-outfit tracking-widest flex items-center justify-center gap-4 hover:bg-crimson transition-all duration-500">
                <PhoneCall className="w-5 h-5" /> REPS OFFICE Support
              </button>
              <button className="h-20 px-12 border-2 border-obsidian text-obsidian font-outfit tracking-widest flex items-center justify-center gap-4 hover:bg-obsidian hover:text-parchment transition-all duration-500">
                <Mail className="w-5 h-5" /> EMAIL DISPATCH
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RulesPage;
