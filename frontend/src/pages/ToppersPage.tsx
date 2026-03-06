import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Award, Trophy, Star, Loader2, Sparkles, UserCheck } from "lucide-react";
import sanityClient, { urlFor } from "../lib/sanityClient";
import { toppersByClass } from "../data/mockData";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
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

const ToppersPage = () => {
  const [selectedSection, setSelectedSection] = useState("primary");
  const [selectedClass, setSelectedClass] = useState(null);
  const [toppersData, setToppersData] = useState([]);
  const [loading, setLoading] = useState(true);

  const sections = [
    { id: "primary", title: "Primary", classes: ["1", "2", "3", "4", "5"] },
    { id: "middle", title: "Middle", classes: ["6", "7", "8"] },
    { id: "secondary", title: "Secondary", classes: ["9", "10"] },
    { id: "senior", title: "Senior", classes: ["11", "12"] },
  ];

  useEffect(() => {
    const fetchToppers = async () => {
      try {
        const query = `*[_type == "toppers"] | order(classNumber asc) {
          _id,
          section,
          classNumber,
          academicYear,
          students[] {
            name,
            photo,
            percentage,
            stream,
            rank
          }
        }`;
        const result = await sanityClient.fetch(query);
        setToppersData(result || []);
      } catch (err) {
        console.warn("Sanity fetch error:", err);
        setToppersData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchToppers();
  }, []);

  const currentSection = sections.find((s) => s.id === selectedSection);

  // Helper to get toppers from either Sanity or Mock Data
  const getToppersForClass = (classNum) => {
    // Try Sanity data first
    const sanityClassData = toppersData.find((t) => String(t.classNumber) === String(classNum));
    if (sanityClassData?.students?.length > 0) return sanityClassData.students;

    // Fallback to mock data
    return toppersByClass[classNum] || [];
  };

  const sectionHasData = currentSection.classes.some(c => getToppersForClass(c).length > 0);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-parchment">
        <Loader2 className="w-16 h-16 animate-spin text-crimson mb-6" />
        <span className="font-outfit tracking-[0.5em] text-obsidian/40 uppercase">Analyzing Excellence...</span>
      </div>
    );
  }

  return (
    <div className="bg-parchment selection:bg-crimson selection:text-white overflow-hidden pb-40">
      {/* --- HERO SECTION --- */}
      <section data-scroll-section className="relative pt-40 pb-24 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Trophy className="w-20 h-20 text-gold mx-auto mb-8 opacity-30" />
            <span className="font-outfit text-crimson tracking-[0.5em] text-sm md:text-lg mb-6 block uppercase">
              The Pantheon of Scholars
            </span>
            <h1 className="text-6xl md:text-[100px] font-instrument font-black text-obsidian leading-[0.9] tracking-tight mb-12">
              HALL OF <br /> <span className="text-crimson italic">TRIUMPH</span>
            </h1>
            <p className="text-xl text-obsidian/50 font-inter max-w-2xl mx-auto leading-relaxed border-b border-gold/20 pb-12">
              Commemorating the intellectual sovereignty and academic rigor of our most distinguished scholars.
            </p>
          </motion.div>
        </div>

        {/* Background Watermark */}
        <div className="absolute top-1/2 left-0 w-full flex justify-center opacity-[0.02] select-none pointer-events-none">
          <h2 className="text-[25vw] font-instrument font-black text-obsidian leading-none">LAURELS</h2>
        </div>
      </section>

      {/* --- NAVIGATION & FILTER --- */}
      <section data-scroll-section className="py-12 bg-obsidian text-parchment relative z-10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  setSelectedSection(section.id);
                  setSelectedClass(null);
                }}
                className={`px-8 py-4 font-outfit tracking-[0.2em] text-sm md:text-lg transition-all duration-500 relative group ${selectedSection === section.id ? "text-crimson" : "text-parchment/40 hover:text-parchment"
                  }`}
              >
                {section.title}
                {selectedSection === section.id && (
                  <motion.div layoutId="sectionTab" className="absolute -bottom-2 left-0 w-full h-[2px] bg-crimson" />
                )}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {currentSection.classes.map((classNum) => (
              <button
                key={classNum}
                onClick={() => setSelectedClass(selectedClass === classNum ? null : classNum)}
                className={`w-12 h-12 flex items-center justify-center font-outfit text-sm transition-all duration-300 border ${selectedClass === classNum
                  ? "bg-crimson border-crimson text-white scale-110"
                  : "border-white/10 text-white/40 hover:border-white/30"
                  }`}
              >
                {classNum}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- TOPPERS GRID --- */}
      <section data-scroll-section className="py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          {!sectionHasData ? (
            <div className="text-center py-40 border-2 border-dashed border-obsidian/10">
              <Sparkles className="w-16 h-16 text-gold/20 mx-auto mb-6" />
              <h3 className="text-4xl font-instrument font-bold text-obsidian/20 italic">Awaiting New Legacies</h3>
            </div>
          ) : (
            <div className="space-y-40">
              {currentSection.classes.map((classNum) => {
                const toppers = getToppersForClass(classNum);
                if (toppers.length === 0) return null;
                if (selectedClass && selectedClass !== classNum) return null;

                return (
                  <motion.div
                    key={classNum}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                  >
                    <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20 border-b border-obsidian/5 pb-10">
                      <div>
                        <span className="font-outfit text-crimson tracking-[0.3em] text-sm block mb-4 uppercase">Scholastic Results</span>
                        <h2 className="text-5xl md:text-7xl font-instrument font-black text-obsidian">GRADE <span className="text-crimson italic">{classNum}</span></h2>
                      </div>
                      <div className="flex items-center gap-4 text-obsidian/40 font-outfit tracking-widest text-xs">
                        <UserCheck className="w-4 h-4" /> DISTINGUISHED PANEL
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                      {toppers.map((topper, i) => {
                        const imageUrl = topper.photo
                          ? urlFor(topper.photo).width(500).height(600).url()
                          : topper.image || "https://images.unsplash.com/photo-1544717297-fa154da09f51?w=500";

                        return (
                          <motion.div
                            key={i}
                            variants={fadeInUp}
                            className="group relative"
                          >
                            <div className="relative aspect-[4/5] overflow-hidden mb-10 shadow-2xl">
                              <img
                                src={imageUrl}
                                alt={topper.name}
                                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                              {/* Rank Badge */}
                              <div className="absolute top-8 left-8 w-16 h-16 bg-gold text-obsidian flex flex-col items-center justify-center font-outfit shadow-xl translate-y-[-120%] group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-[10px] leading-none mb-1">RANK</span>
                                <span className="text-2xl leading-none font-black">{topper.rank || i + 1}</span>
                              </div>

                              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-crimson/90 backdrop-blur-md">
                                <p className="text-white/80 font-instrument italic text-sm">
                                  "Excellence is not an act, but a habit."
                                </p>
                              </div>
                            </div>

                            <div className="text-center md:text-left">
                              <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                                <div className="h-[1px] w-8 bg-gold"></div>
                                <span className="font-outfit text-gold tracking-[0.3em] text-xs">LAUREATE</span>
                                {topper.percentage > 95 && <Sparkles className="w-4 h-4 text-gold animate-pulse" />}
                              </div>
                              <h3 className="text-3xl font-instrument font-black text-obsidian mb-2 tracking-tight">
                                {topper.name}
                              </h3>
                              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                                <span className="font-inter text-obsidian/40 text-sm uppercase tracking-widest">{topper.stream || topper.subject || 'Elite Program'}</span>
                                <div className="hidden md:block w-1 h-1 rounded-full bg-crimson"></div>
                                <span className="text-3xl font-instrument font-black text-crimson italic leading-none">{topper.percentage}%</span>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* --- ACHIEVEMENT STATS --- */}
      <section data-scroll-section className="py-40 bg-obsidian text-parchment relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-crimson skew-x-[-20deg] translate-x-32 opacity-10"></div>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-20">
            {[
              { icon: Trophy, value: '98%', label: 'PASS PERCENTAGE' },
              { icon: Award, value: '250+', label: 'DISTINCTIONS' },
              { icon: Star, value: '92%', label: 'ABOVE 75% SCORE' },
              { icon: Sparkles, value: '45+', label: 'BOARD LAUREATES' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center group">
                <stat.icon className="w-12 h-12 text-crimson mb-8 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                <div className="text-5xl md:text-7xl font-instrument font-black text-parchment mb-4 tracking-tighter">{stat.value}</div>
                <div className="font-outfit tracking-[0.3em] text-[10px] md:text-xs text-gold opacity-50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToppersPage;
