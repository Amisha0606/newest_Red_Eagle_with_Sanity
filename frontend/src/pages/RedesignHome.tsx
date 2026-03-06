import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useInView, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    Menu,
    X,
    ChevronRight,
    Star,
    Award,
    BookOpen,
    Users,
    ShieldCheck,
    Target,
    Quote
} from "lucide-react";

// --- Design Tokens (from Tailwind config) ---
const COLORS = {
    crimson: "#9B1B30",
    obsidian: "#0F0F0F",
    gold: "#C9A84C",
    parchment: "#F7F4EF",
};

// --- Framer Motion Variants ---
const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const wordReveal: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const cardHover: Variants = {
    hover: { scale: 1.02, y: -5, transition: { duration: 0.3 } },
};

// --- Components ---

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-8"
                }`}
        >
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between font-sora">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-3 group">
                    <div className="relative">
                        <div className="w-10 h-10 bg-crimson transform rotate-45 flex items-center justify-center group-hover:rotate-0 transition-transform duration-500">
                            <span className="text-white font-playfair font-bold text-xl -rotate-45 group-hover:rotate-0 transition-transform duration-500">RE</span>
                        </div>
                        <div className="absolute -inset-1 border border-gold/30 rotate-45"></div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-obsidian font-playfair font-black text-xl leading-none tracking-tight">RED EAGLE</span>
                        <span className="text-crimson font-bebas text-xs tracking-[0.2em]">INSTITUTIONS</span>
                    </div>
                </Link>

                {/* Links */}
                <div className="hidden lg:flex items-center space-x-10 text-[13px] font-semibold uppercase tracking-[0.1em] text-obsidian/70">
                    {["Philosophy", "Admissions", "Departments", "Research", "Campus Life"].map((item) => (
                        <Link
                            key={item}
                            to="#"
                            className="relative group hover:text-crimson transition-colors duration-300"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-crimson transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden lg:block">
                    <button className="relative px-8 py-3 bg-obsidian text-white overflow-hidden group transition-all duration-300">
                        <span className="relative z-10 font-bebas text-sm tracking-widest">Enquire Now</span>
                        <div className="absolute top-0 left-0 w-0 h-full bg-crimson transition-all duration-500 group-hover:w-full"></div>
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setIsMenuOpen(true)} className="lg:hidden p-2">
                    <Menu className="w-6 h-6 text-obsidian" />
                </button>
            </div>

            {/* Full-screen Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-parchment z-[200] flex flex-col p-12"
                    >
                        <div className="flex justify-between items-center mb-24">
                            <span className="font-playfair font-bold text-2xl">REGS</span>
                            <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-obsidian text-white rounded-full">
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="flex flex-col space-y-8">
                            {["Philosophy", "Admissions", "Departments", "Research", "Campus Life", "Contact"].map((item, idx) => (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.1 }}
                                    key={item}
                                >
                                    <Link to="#" className="text-5xl md:text-7xl font-playfair font-bold text-obsidian hover:text-crimson transition-colors">
                                        {item}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

const StatCounter = ({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div ref={ref} className="text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay }}
                className="text-4xl md:text-5xl font-playfair font-bold text-crimson mb-2"
            >
                {value}
            </motion.div>
            <div className="font-bebas text-sm tracking-widest text-obsidian/50">{label}</div>
        </div>
    );
};

const ProgramCard = ({ title, category, description, image }: any) => {
    return (
        <motion.div
            variants={fadeInUp}
            whileHover="hover"
            className="group relative h-[500px] overflow-hidden bg-obsidian cursor-pointer"
        >
            <div className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity duration-500">
                <img src={image} alt={title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-8 z-10">
                <div className="font-bebas text-gold mb-2 tracking-[0.2em]">{category}</div>
                <h3 className="text-3xl font-playfair font-bold text-white mb-4 group-hover:text-crimson transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-parchment/70 text-sm line-clamp-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-500 max-w-xs font-sora">
                    {description}
                </p>
                <div className="mt-6 flex items-center text-white/50 group-hover:text-gold transition-colors duration-300">
                    <span className="font-bebas text-xs tracking-widest mr-2 uppercase">Discover More</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>
            </div>
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Award className="text-gold w-8 h-8" />
            </div>
            {/* Background sweep on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-crimson/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
        </motion.div>
    );
};

const RedesignHome = () => {
    const { scrollYProgress } = useScroll();
    const heroImgScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.2]);
    const heroTextY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

    return (
        <div className="bg-parchment overflow-x-hidden selection:bg-crimson selection:text-white">
            <Navbar />

            {/* --- HERO SECTION --- */}
            <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
                {/* Large watermark logo */}
                <div className="absolute -top-20 -left-20 w-[600px] h-[600px] opacity-[0.03] pointer-events-none">
                    <svg viewBox="0 0 100 100" fill="currentColor"><path d="M50 5L15 90H85L50 5Z" /></svg>
                </div>

                <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Headline Text */}
                    <motion.div
                        style={{ y: heroTextY }}
                        className="lg:col-span-7 z-10"
                    >
                        <motion.div
                            initial="hidden"
                            animate="show"
                            variants={staggerContainer}
                            className="flex flex-col font-playfair font-black leading-[0.9]"
                        >
                            <div className="overflow-hidden">
                                <motion.h1 variants={wordReveal} className="text-7xl sm:text-8xl md:text-[140px] text-obsidian">
                                    SHAPING
                                </motion.h1>
                            </div>
                            <div className="overflow-hidden mt-[-10px] md:mt-[-30px]">
                                <motion.h1 variants={wordReveal} className="text-7xl sm:text-8xl md:text-[140px] text-crimson italic ml-12 md:ml-32">
                                    LEGACIES
                                </motion.h1>
                            </div>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="mt-12 text-xl text-obsidian/60 max-w-xl font-sora leading-relaxed border-l-2 border-gold pl-8"
                        >
                            Since 2010, Red Eagle Group of Institutions has been a forge for intellectual giants and visionary leaders. We don't just teach; we ignite legacies.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="mt-16 flex flex-wrap gap-8 items-center"
                        >
                            <button className="relative px-12 py-5 bg-crimson text-white group overflow-hidden transition-all duration-300">
                                <span className="relative z-10 flex items-center font-bebas text-lg tracking-[0.2em]">
                                    Explore Programs <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                                </span>
                                <div className="absolute top-0 left-0 w-0 h-full bg-obsidian transition-all duration-500 group-hover:w-full"></div>
                            </button>

                            <div className="flex -space-x-4">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-12 h-12 rounded-full border-2 border-parchment bg-obsidian overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?u=${i}`} alt="student" />
                                    </div>
                                ))}
                                <div className="w-12 h-12 rounded-full border-2 border-parchment bg-gold flex items-center justify-center text-obsidian font-bold text-xs">
                                    2K+
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Hero Image Block */}
                    <div className="lg:col-span-5 relative mt-20 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: "circOut" }}
                            className="relative z-10 rounded-sm overflow-hidden shadow-[40px_40px_0px_rgba(155,27,48,1)]"
                        >
                            <motion.img
                                style={{ scale: heroImgScale }}
                                src="/assets/school/SchoolFullPicture.jpg"
                                className="w-full aspect-[4/5] object-cover"
                                alt="Institutional Pride"
                            />
                        </motion.div>

                        {/* Overlay stats card */}
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2, duration: 1 }}
                            className="absolute -bottom-10 -left-10 md:-left-20 bg-obsidian p-10 z-20 shadow-2xl min-w-[300px]"
                        >
                            <div className="grid grid-cols-2 gap-10">
                                <StatCounter value="15+" label="Years of Glory" delay={1.4} />
                                <StatCounter value="98%" label="Success Rate" delay={1.6} />
                                <StatCounter value="40+" label="Programs" delay={1.8} />
                                <StatCounter value="250+" label="Global Partners" delay={2} />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- PHILOSOPHY SECTION --- */}
            <section className="py-40 relative">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    <div className="sticky top-40">
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="relative"
                        >
                            <Quote className="absolute -top-12 -left-8 text-gold/20 w-32 h-32" />
                            <h2 className="text-5xl md:text-7xl font-playfair font-bold text-obsidian leading-tight mb-8">
                                We do not educate workers. <br />
                                <span className="text-crimson italic">We forge polymaths.</span>
                            </h2>
                            <div className="w-24 h-[1px] bg-gold mb-8"></div>
                            <p className="text-sm font-bebas tracking-[0.3em] text-crimson">Our Vision established 2010</p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="space-y-12"
                    >
                        <p className="text-2xl font-playfair text-obsidian/80 leading-relaxed italic">
                            "To see a Red Eagle student is to see a refined fusion of classical discipline and cutting-edge innovation. We believe the future belongs to those who can speak the language of both poetry and algorithms."
                        </p>
                        <div className="text-obsidian/60 font-sora leading-loose space-y-6">
                            <p>
                                Our pedagogy is rooted in the belief that education is a sacred trust. We have spent over a decade curating an environment where curiosity is celebrated as the highest form of intelligence.
                            </p>
                            <p>
                                From our state-of-the-art laboratories to our expansive digital libraries, every square inch of our campus is designed to provoke thought and inspire action. We aren't just an institution; we are a catalyst for metamorphosis.
                            </p>
                        </div>
                        <button className="flex items-center space-x-4 group text-obsidian hover:text-crimson transition-colors duration-300">
                            <span className="font-bebas text-lg tracking-[0.2em]">Read the Director's Manifesto</span>
                            <div className="w-12 h-12 border border-obsidian rounded-full flex items-center justify-center group-hover:bg-crimson group-hover:border-crimson group-hover:text-white transition-all duration-300">
                                <ChevronRight className="w-5 h-5" />
                            </div>
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* --- PROGRAMS SECTION --- */}
            <section className="py-20 bg-obsidian overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <span className="font-bebas text-gold tracking-[0.3em] mb-4 block">Academic Excellence</span>
                        <h2 className="text-5xl md:text-7xl font-playfair font-bold text-parchment leading-tight">
                            Fields of <br /><span className="text-crimson italic underline decoration-gold/30">Mastery</span>
                        </h2>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-4 font-bebas tracking-widest text-xs">
                        {["All Domains", "Advanced Sciences", "Liberal Arts", "Engineering", "Business"].map((filter, i) => (
                            <button
                                key={i}
                                className={`px-6 py-3 border transition-all duration-300 ${i === 0 ? "bg-crimson border-crimson text-white" : "border-parchment/20 text-parchment hover:border-crimson"}`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                >
                    <ProgramCard
                        category="School of Engineering"
                        title="Computer Science"
                        description="Mastering algorithms, AI, and distributed systems in our world-class research labs."
                        image="/assets/facilities/Smartclass.png"
                    />
                    <ProgramCard
                        category="Biological Sciences"
                        title="Advanced Biotech"
                        description="Deep diving into genomics and molecular biology with Nobel-grade equipment."
                        image="/assets/facilities/ScienceLab.png"
                    />
                    <ProgramCard
                        category="Humanities & Arts"
                        title="Liberal Arts"
                        description="Fostering critical thinkers and cultural architects through interdisciplinary study."
                        image="/assets/facilities/ArtAndMusic.png"
                    />
                    <ProgramCard
                        category="Physical Education"
                        title="Sports Mastery"
                        description="Elite-level athletic training integrated with performance analytics and sports science."
                        image="/assets/facilities/Sports.png"
                    />
                </motion.div>
            </section>

            {/* --- STATS ACCENT --- */}
            <section className="py-24 border-y border-obsidian/10">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="flex flex-col items-center">
                        <Users className="w-10 h-10 text-crimson mb-6" />
                        <StatCounter value="2,400+" label="Global Alumni" />
                    </div>
                    <div className="flex flex-col items-center">
                        <BookOpen className="w-10 h-10 text-crimson mb-6" />
                        <StatCounter value="42" label="Research Papers" />
                    </div>
                    <div className="flex flex-col items-center">
                        <ShieldCheck className="w-10 h-10 text-crimson mb-6" />
                        <StatCounter value="100%" label="Placement Security" />
                    </div>
                    <div className="flex flex-col items-center">
                        <Target className="w-10 h-10 text-crimson mb-6" />
                        <StatCounter value="08km" label="Eco-Campus Radius" />
                    </div>
                </div>
            </section>

            {/* --- LEADERSHIP HORIZONTAL SCROLL --- */}
            <section className="py-40 bg-parchment">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-20">
                    <h2 className="text-4xl md:text-6xl font-playfair font-bold text-obsidian text-center italic">
                        "The Visionaries Behind the Eagle"
                    </h2>
                </div>

                <div className="hide-scrollbar overflow-x-auto flex space-x-12 px-12 md:px-32 pb-12">
                    {[
                        { name: "Mr. Sarvesh Pandey", role: "Managing Director", img: "/assets/leadership/REPSManagingDirector.jpeg" },
                        { name: "Mrs. Renu Mishra", role: "School Manager", img: "/assets/leadership/REPSManager.jpeg" },
                        { name: "Mr. Suman Srikant", role: "Principal", img: "/assets/leadership/REPSPrincipal.jpeg" },
                        { name: "Ms. Ananya Sharma", role: "Academic Dean", img: "https://i.pravatar.cc/400?u=12" },
                    ].map((leader, idx) => (
                        <motion.div
                            key={idx}
                            className="flex-shrink-0 w-80 group cursor-crosshair"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden mb-6 filter sepia-[0.3] group-hover:sepia-0 transition-all duration-700">
                                <img src={leader.img} alt={leader.name} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-crimson/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                            <div className="font-bebas text-crimson tracking-[0.2em] mb-1">{leader.role}</div>
                            <h4 className="text-2xl font-playfair font-bold text-obsidian group-hover:text-gold transition-colors duration-300">{leader.name}</h4>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- TESTIMONIAL MARQUEE --- */}
            <section className="py-20 bg-crimson overflow-hidden text-white">
                <div className="flex whitespace-nowrap marquee">
                    {[1, 2, 3, 1, 2, 3].map((_, i) => (
                        <div key={i} className="flex items-center space-x-24 mx-12">
                            <div className="flex items-center space-x-6">
                                <div className="w-16 h-16 rounded-full bg-parchment/20 flex items-center justify-center italic font-playfair text-xl">“</div>
                                <p className="text-3xl md:text-4xl font-playfair font-medium max-w-xl">
                                    "The rigor here is matched only by the support from the faculty."
                                </p>
                                <div className="text-left border-l border-white/20 pl-6">
                                    <span className="block font-bebas text-lg tracking-widest text-gold">Aryan Malik</span>
                                    <span className="text-xs font-sora opacity-50 uppercase tracking-widest">Class of 2024 • Computer Science</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <style dangerouslySetInnerHTML={{
                    __html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee {
            animation: marquee 40s linear infinite;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}} />
            </section>

            {/* --- CTA SECTION --- */}
            <section className="py-40 bg-parchment relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none grid grid-cols-12 -rotate-12 translate-y-[-20%]">
                    {[...Array(48)].map((_, i) => (
                        <div key={i} className="border border-obsidian h-24 w-full"></div>
                    ))}
                </div>

                <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <span className="font-bebas text-crimson tracking-[0.5em] mb-8 block">Your Future Awaits</span>
                        <h2 className="text-6xl md:text-9xl font-playfair font-bold text-obsidian mb-16 leading-[1.1]">
                            The Eagle is <br />
                            <span className="italic text-crimson">Calling.</span>
                        </h2>

                        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                            <button className="px-12 py-6 bg-obsidian text-white font-bebas text-xl tracking-widest hover:bg-crimson transition-all duration-300 transform hover:scale-105">
                                Apply for Session 2026-27
                            </button>
                            <button className="px-12 py-6 border-2 border-obsidian text-obsidian font-bebas text-xl tracking-widest hover:bg-obsidian hover:text-white transition-all duration-300">
                                Book a Campus Tour
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="bg-obsidian pt-32 pb-12 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-crimson via-gold to-crimson"></div>

                <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32 relative z-10">
                    <div className="lg:col-span-1">
                        <div className="flex items-center space-x-3 mb-8">
                            <div className="w-12 h-12 bg-crimson transform rotate-45 flex items-center justify-center">
                                <span className="text-white font-playfair font-bold text-xl -rotate-45">RE</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-parchment font-playfair font-black text-xl leading-none">RED EAGLE</span>
                                <span className="text-crimson font-bebas text-xs tracking-[0.2em]">SINCE 2010</span>
                            </div>
                        </div>
                        <p className="text-parchment/40 font-sora text-sm leading-relaxed max-w-xs">
                            Pioneering world-class education through intellectual rigor, moral integrity, and relentless innovation.
                        </p>
                    </div>

                    <div>
                        <h5 className="font-bebas text-gold tracking-widest mb-10 text-lg uppercase">Institutional</h5>
                        <div className="flex flex-col space-y-4 text-parchment/60 font-sora text-sm">
                            {["Our Philosophy", "Board of Governors", "Academic Council", "Safety & Security", "Careers"].map(link => (
                                <Link key={link} to="#" className="hover:text-crimson transition-colors duration-300">{link}</Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h5 className="font-bebas text-gold tracking-widest mb-10 text-lg uppercase">Connect</h5>
                        <div className="flex flex-col space-y-4 text-parchment/60 font-sora text-sm">
                            {["Admissions Office", "Partner with Us", "Alumni Association", "Press Media", "Privacy Policy"].map(link => (
                                <Link key={link} to="#" className="hover:text-crimson transition-colors duration-300">{link}</Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h5 className="font-bebas text-gold tracking-widest mb-10 text-lg uppercase">Global Campus</h5>
                        <p className="text-parchment/60 font-sora text-sm mb-6 leading-relaxed">
                            NH-27, Main Campus <br />
                            City, State, India <br />
                            +91 8400773055
                        </p>
                        <div className="flex space-x-6">
                            <div className="w-10 h-10 border border-parchment/20 rounded-full flex items-center justify-center hover:bg-crimson hover:border-crimson transition-all duration-300 cursor-pointer">
                                <span className="text-xs">FB</span>
                            </div>
                            <div className="w-10 h-10 border border-parchment/20 rounded-full flex items-center justify-center hover:bg-crimson hover:border-crimson transition-all duration-300 cursor-pointer">
                                <span className="text-xs">IG</span>
                            </div>
                            <div className="w-10 h-10 border border-parchment/20 rounded-full flex items-center justify-center hover:bg-crimson hover:border-crimson transition-all duration-300 cursor-pointer">
                                <span className="text-xs">IN</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-12 border-t border-parchment/10 flex flex-col md:flex-row justify-between items-center text-[10px] font-bebas tracking-[0.3em] text-parchment/20">
                    <div>© 2026 RED EAGLE GROUP OF INSTITUTIONS. ALL RIGHTS RESERVED.</div>
                    <div className="mt-4 md:mt-0">DESIGNED BY ANTIGRAVITY</div>
                </div>

                {/* Subtle texture overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }}></div>
            </footer>
        </div>
    );
};

export default RedesignHome;
