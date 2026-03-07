import React from "react";
import { motion, Variants } from "framer-motion";
import {
  ShieldCheck,
  AlertCircle,
  Users,
  Banknote,
  Download,
  PhoneCall,
  Mail,
  Zap,
  ArrowRight
} from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const FeesPage = () => {
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
            <Banknote className="w-20 h-20 text-crimson mx-auto mb-8 opacity-20" />
            <span className="font-outfit text-crimson tracking-[0.5em] text-sm md:text-lg mb-6 block uppercase">
              Fiscal Transparency • Session 2026-27
            </span>
            <h1 className="text-6xl md:text-[100px] font-instrument font-black text-obsidian leading-[0.9] tracking-tight mb-12">
              INVESTING IN <br /> <span className="text-crimson italic">EXCELLENCE</span>
            </h1>
            <p className="text-xl text-obsidian/50 font-inter max-w-2xl mx-auto leading-relaxed">
              A transparent breakdown of institutional fees committed to providing state-of-the-art facilities and elite academic instruction.
            </p>
          </motion.div>
        </div>

        {/* Background Watermark */}
        <div className="absolute top-1/2 left-0 w-full flex justify-center opacity-[0.03] select-none pointer-events-none">
          <h2 className="text-[25vw] font-instrument font-black text-obsidian leading-none whitespace-nowrap">
            FISCAL
          </h2>
        </div>
      </section>

      {/* --- THE LEDGER (FEES TABLE) --- */}
      <section data-scroll-section className="py-24 relative z-10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white shadow-[0_40px_100px_rgba(0,0,0,0.05)] border border-obsidian/5"
          >
            <div className="p-10 md:p-16 border-b border-obsidian/10">
              <h3 className="text-3xl font-instrument font-bold text-obsidian">Annual <span className="text-crimson italic">Scholastic Fees</span></h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-obsidian text-parchment font-outfit tracking-widest text-sm">
                    <th className="px-10 py-6 font-normal uppercase">Academic Grade</th>
                    <th className="px-10 py-6 font-normal uppercase">Tuition Endowment</th>
                    <th className="px-10 py-6 font-normal uppercase">Activities & Sports</th>
                    <th className="px-10 py-6 font-normal uppercase">Library & Research</th>
                    <th className="px-10 py-6 font-normal uppercase">Consolidated Total</th>
                  </tr>
                </thead>
                <tbody className="font-inter text-obsidian/70">
                  {[
                    { grade: "Grade I - II", tuition: "₹35,000", activities: "₹5,000", lib: "₹3,000", total: "₹43,000" },
                    { grade: "Grade III - V", tuition: "₹45,000", activities: "₹6,000", lib: "₹4,000", total: "₹55,000" },
                    { grade: "Grade VI - VIII", tuition: "₹55,000", activities: "₹7,000", lib: "₹5,000", total: "₹67,000" },
                    { grade: "Grade IX - X", tuition: "₹70,000", activities: "₹8,000", lib: "₹6,000", total: "₹84,000" },
                    { grade: "Grade XI - XII", tuition: "₹85,000", activities: "₹9,000", lib: "₹7,000", total: "₹101,000" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-obsidian/5 hover:bg-parchment/30 transition-colors">
                      <td className="px-10 py-8 font-instrument font-bold text-xl text-obsidian">{row.grade}</td>
                      <td className="px-10 py-8">{row.tuition}</td>
                      <td className="px-10 py-8">{row.activities}</td>
                      <td className="px-10 py-8">{row.lib}</td>
                      <td className="px-10 py-8 font-instrument font-black text-2xl text-crimson italic">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- ADRIFT SERVICES (ADD-ONS) --- */}
      <section data-scroll-section className="py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="font-outfit text-crimson tracking-[0.3em] mb-4 block">Optional Services</span>
            <h2 className="text-4xl md:text-6xl font-instrument font-black text-obsidian leading-[0.9] mb-12">
              MODERN <br /> <span className="text-crimson italic">CONVENIENCES</span>
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {[
                { name: "Transit Systems (One-way)", price: "₹8,000/year" },
                { name: "Transit Systems (Two-way)", price: "₹15,000/year" },
                { name: "Gourmet Nutrition Plan", price: "₹12,000/year" },
                { name: "Elite Extra-Curriculars", price: "₹5,000/year" },
              ].map((addon, i) => (
                <div key={i} className="flex justify-between items-center p-8 bg-white border border-obsidian/5 hover:border-gold transition-all duration-300">
                  <span className="font-instrument text-xl text-obsidian/70">{addon.name}</span>
                  <span className="font-outfit tracking-widest text-crimson text-xl">{addon.price}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-obsidian p-12 text-parchment relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-crimson translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700"></div>
              <div className="relative z-10">
                <h4 className="text-3xl font-instrument font-bold mb-8">Payment Cycles</h4>
                <div className="space-y-6">
                  {[
                    { label: 'Annual Endowment', date: 'Due June 30th' },
                    { label: 'Bi-Annual Cycle', date: 'June & December' },
                    { label: 'Quarterly Discipline', date: 'Every Quarter' }
                  ].map((term, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-white/10 pb-4">
                      <span className="font-outfit tracking-widest text-sm opacity-60">{term.label}</span>
                      <span className="font-instrument italic">{term.date}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-12 flex items-center gap-4 text-gold p-4 bg-white/5 border border-white/10">
                  <ShieldCheck className="w-6 h-6" />
                  <p className="font-inter text-sm">Siblings are entitled to a 10% Legacy Discount.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SCHOLASTIC AID & NOTES --- */}
      <section data-scroll-section className="py-24 bg-parchment">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-12 shadow-2xl relative border-t-8 border-crimson"
          >
            <AlertCircle className="absolute -top-10 -right-10 w-24 h-24 text-crimson opacity-10" />
            <h3 className="text-3xl font-instrument font-bold text-obsidian mb-10">Essential <span className="text-crimson italic">Disclosures</span></h3>
            <ul className="space-y-6 font-inter text-obsidian/60 text-sm md:text-base">
              <li className="flex gap-4"><div className="w-2 h-2 rounded-full bg-crimson mt-2 flex-shrink-0"></div> Endowment is non-refundable upon final confirmation.</li>
              <li className="flex gap-4"><div className="w-2 h-2 rounded-full bg-crimson mt-2 flex-shrink-0"></div> Surcharge of ₹500 applies to overdue balances.</li>
              <li className="flex gap-4"><div className="w-2 h-2 rounded-full bg-crimson mt-2 flex-shrink-0"></div> Meritorious scholars are eligible for a 15% Endowment Grant.</li>
              <li className="flex gap-4"><div className="w-2 h-2 rounded-full bg-crimson mt-2 flex-shrink-0"></div> Social equity concessions up to 25% for verified applicants.</li>
              <li className="flex gap-4"><div className="w-2 h-2 rounded-full bg-crimson mt-2 flex-shrink-0"></div> Non-refundable Registration Endowment of ₹5,000 at entry.</li>
            </ul>
          </motion.div>

          <div className="text-center lg:text-left">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Zap className="w-16 h-16 text-gold mb-8 mx-auto lg:mx-0" />
              <h2 className="text-4xl md:text-6xl font-instrument font-black text-obsidian mb-8 leading-tight">
                DOWNLOAD <br /> <span className="text-crimson italic">PROSPECTUS</span>
              </h2>
              <p className="text-xl text-obsidian/50 font-inter mb-12 max-w-lg leading-relaxed">
                Access the comprehensive fiscal overview and institutional roadmap for the upcoming session.
              </p>
              <button className="h-20 px-12 bg-crimson text-white font-outfit tracking-[0.3em] text-lg flex items-center justify-center gap-6 group hover:bg-obsidian transition-all duration-700">
                RETRIEVE DIGITAL COPY <Download className="w-6 h-6 group-hover:translate-y-2 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section data-scroll-section className="py-40 bg-obsidian text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-crimson to-transparent"></div>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Users className="w-16 h-16 text-crimson mx-auto mb-8" />
            <h2 className="text-5xl md:text-7xl font-instrument font-black text-parchment mb-12">
              Fiscal <span className="text-crimson italic">Inquiries</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-8 justify-center">
              <button className="h-20 px-12 border border-white/20 text-parchment font-outfit tracking-widest flex items-center justify-center gap-4 hover:bg-white hover:text-obsidian transition-all duration-500">
                <PhoneCall className="w-5 h-5" /> REPS FISCAL DESK
              </button>
              <button className="h-20 px-12 bg-white text-obsidian font-outfit tracking-widest flex items-center justify-center gap-4 hover:bg-crimson hover:text-white transition-all duration-500">
                <Mail className="w-5 h-5" /> DISPATCH INQUIRY
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FeesPage;
