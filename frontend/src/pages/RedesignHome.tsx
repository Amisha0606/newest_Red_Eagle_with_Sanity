import React from "react";
import { motion, useScroll, useTransform, useInView, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ChevronRight,
    Award,
    BookOpen,
    Users,
    ShieldCheck,
    Target,
    Quote,
    Sparkles,
    HelpCircle
} from "lucide-react";
import FAQ from "../components/FAQ";

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
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

// --- Components ---

const StatCounter = ({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div ref={ref} className="text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay }}
                className="text-4xl md:text-5xl font-instrument font-bold text-crimson mb-2"
            >
                {value}
            </motion.div>
            <div className="font-outfit text-[10px] tracking-[0.3em] text-obsidian/40 uppercase font-bold">{label}</div>
        </div>
    );
};

const ProgramCard = ({ title, category, description, image }: any) => {
    return (
        <motion.div
            variants={fadeInUp}
            whileHover="hover"
            className="group relative h-[500px] overflow-hidden bg-obsidian cursor-pointer border border-parchment/10 rounded-2xl"
        >
            <div className="absolute inset-0 p-4 transition-all duration-700">
                <img src={image} alt={title} className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-10 z-10 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent">
                <div className="font-outfit text-gold mb-4 tracking-[0.3em] text-[10px] uppercase font-bold">{category}</div>
                <h3 className="text-2xl font-instrument font-black text-white mb-4 group-hover:text-crimson transition-colors duration-300 leading-tight">
                    {title}
                </h3>
                <p className="text-parchment/60 text-xs opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-8 transition-all duration-500 max-w-xs font-inter leading-relaxed">
                    {description}
                </p>
                <div className="mt-6 flex items-center text-white/30 group-hover:text-gold transition-colors duration-300">
                    <span className="font-outfit text-[8px] tracking-[0.3em] mr-4 uppercase font-bold">Details</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-3 transition-transform duration-500" />
                </div>
            </div>
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Award className="text-gold w-8 h-8 opacity-50" />
            </div>
        </motion.div>
    );
};

const RedesignHome = () => {
    const { scrollYProgress } = useScroll();
    const heroImgY = useTransform(scrollYProgress, [0, 0.5], [0, 200]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

    return (
        <div className="bg-parchment selection:bg-crimson selection:text-white overflow-hidden">
            {/* --- IMMERSIVE HERO SECTION --- */}
            <section data-scroll-section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
                <motion.div
                    style={{ y: heroImgY }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src="/assets/school/SchoolFullPicture.jpg"
                        alt="Institutional Heritage"
                        className="w-full h-full object-cover grayscale opacity-30 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-parchment/90 via-transparent to-parchment"></div>
                </motion.div>

                <div className="relative z-10 text-center max-w-[1440px] px-6">
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={staggerContainer}
                        style={{ opacity: heroOpacity }}
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-4 px-6 py-2 border border-crimson/20 bg-white/50 backdrop-blur-md rounded-full mb-12 shadow-sm">
                            <Sparkles className="w-4 h-4 text-crimson" />
                            <span className="font-outfit text-crimson tracking-[0.4em] text-[10px] uppercase font-bold">
                                Established 2010 • The Seat of Excellence
                            </span>
                        </motion.div>

                        <div className="mb-8">
                            <motion.h1
                                variants={wordReveal}
                                className="text-5xl md:text-[100px] font-instrument font-black text-obsidian leading-[0.9] tracking-tight"
                            >
                                Welcome to <br /> <span className="text-crimson italic">Red Eagle Public School</span>
                            </motion.h1>
                        </div>

                        <motion.p
                            variants={fadeInUp}
                            className="text-lg md:text-xl text-obsidian/60 max-w-3xl mx-auto font-inter leading-relaxed mb-20 italic font-medium"
                        >
                            Providing quality education and a nurturing environment to help students excel in academics and beyond.
                        </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-col md:flex-row gap-8 items-center justify-center"
                        >
                            <Link to="/about" className="w-full md:w-auto">
                                <button className="w-full md:w-auto relative px-16 py-6 bg-crimson text-white group overflow-hidden transition-all duration-500 shadow-[0_20px_50px_rgba(155,27,48,0.3)] rounded-xl">
                                    <span className="relative z-10 flex items-center justify-center font-outfit text-sm tracking-[0.3em] uppercase font-bold">
                                        OUR MANIFESTO <ArrowRight className="ml-4 w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
                                    </span>
                                    <div className="absolute top-0 left-0 w-0 h-full bg-obsidian transition-all duration-700 group-hover:w-full"></div>
                                </button>
                            </Link>
                            <Link to="/contact" className="w-full md:w-auto">
                                <button className="w-full md:w-auto px-16 py-6 border-2 border-obsidian text-obsidian font-outfit text-sm tracking-[0.3em] uppercase font-bold hover:bg-obsidian hover:text-white transition-all duration-500 rounded-xl">
                                    ENROLMENT 2026
                                </button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Background Large Text Overlay */}
                <div className="absolute top-1/2 left-0 w-full flex justify-center opacity-[0.02] select-none pointer-events-none text-[25vw] font-instrument font-black text-obsidian leading-none tracking-tighter">
                    ARCHIVE
                </div>

                {/* Vertical Line Accent */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent to-gold"></div>
            </section>

            {/* --- PHILOSOPHY SECTION --- */}
            <section data-scroll-section className="py-40 relative">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
                    <div className="sticky top-40">
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="relative"
                        >
                            <Quote className="absolute -top-16 -left-12 text-gold/10 w-48 h-48" />
                            <h2 className="text-6xl md:text-8xl font-instrument font-black text-obsidian leading-[0.9] mb-12">
                                We do not nurture <br /> workers.
                                <span className="text-crimson italic block mt-4">We forge polymaths.</span>
                            </h2>
                            <div className="w-32 h-[2px] bg-gold mb-10"></div>
                            <p className="font-outfit text-xs tracking-[0.4em] text-crimson uppercase font-bold">Institutional Ethos established 2010</p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="space-y-16 mt-12 lg:mt-24"
                    >
                        <p className="text-3xl md:text-4xl font-instrument text-obsidian/80 leading-[1.2] italic border-l-4 border-crimson pl-10">
                            "To see a Red Eagle student is to witness a refined fusion of classical discipline and frontier innovation."
                        </p>
                        <div className="text-obsidian/50 font-inter text-lg leading-[1.8] space-y-8">
                            <p>
                                Our pedagogy is rooted in the sovereign belief that education is a sacred trust. We have spent over a decade curating an environment where intellectual curiosity is celebrated as the highest form of human agency.
                            </p>
                            <p>
                                From our state-of-the-art laboratories to our expansive digital archives, every square inch of our campus is designed to provoke radical thought and inspire global action. We aren't just an institution; we are a catalyst for generational metamorphosis.
                            </p>
                        </div>
                        <Link to="/about" className="inline-block group">
                            <div className="flex items-center gap-6">
                                <span className="font-outfit text-sm tracking-[0.2em] uppercase font-bold text-obsidian group-hover:text-crimson transition-colors">Read the Rector's Manifesto</span>
                                <div className="w-14 h-14 border border-obsidian rounded-full flex items-center justify-center group-hover:bg-crimson group-hover:border-crimson group-hover:text-white transition-all duration-500 group-hover:scale-110 shadow-lg">
                                    <ChevronRight className="w-6 h-6" />
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* --- PROGRAMS SECTION --- */}
            <section data-scroll-section className="py-24 bg-obsidian overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-20 flex flex-col md:flex-row md:items-end justify-between gap-12">
                    <div className="max-w-3xl">
                        <span className="font-outfit text-gold tracking-[0.4em] mb-6 block text-xs uppercase font-bold">Domains of Excellence</span>
                        <h2 className="text-6xl md:text-8xl font-instrument font-black text-parchment leading-[0.85] tracking-tight">
                            FIELDS OF <br /><span className="text-crimson italic">MASTERY</span>
                        </h2>
                    </div>

                    <div className="flex flex-wrap gap-4 font-outfit tracking-widest text-[10px] uppercase font-bold">
                        {["Universal", "Sciences", "Liberal Arts", "Engineering", "Commerce"].map((filter, i) => (
                            <button
                                key={i}
                                className={`px-8 py-4 border transition-all duration-500 rounded-xl ${i === 0 ? "bg-crimson border-crimson text-white shadow-[0_10px_30px_rgba(155,27,48,0.4)]" : "border-parchment/10 text-parchment/40 hover:border-crimson hover:text-parchment"}`}
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
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-12"
                >
                    <ProgramCard
                        category="Computational Logic"
                        title="Computer Science"
                        description="Mastering neural architectures, high-performance computing, and digital sovereignty in our specialized labs."
                        image="/assets/facilities/Smartclass.png"
                    />
                    <ProgramCard
                        category="Empirical Studies"
                        title="Advanced Biotech"
                        description="Harnessing the laws of biology to solve planetary challenges through rigorous clinical research."
                        image="/assets/facilities/ScienceLab.png"
                    />
                    <ProgramCard
                        category="Cultural Architecture"
                        title="The Liberal Arts"
                        description="Nurturing critical dialogue and historical perspective to navigate the complexities of power and society."
                        image="/assets/facilities/ArtAndMusic.png"
                    />
                    <ProgramCard
                        category="Human Performance"
                        title="Elite Athletics"
                        description="Synchronizing physical mastery with performance psychology and kinetic science for the competitive edge."
                        image="/assets/facilities/Sports.png"
                    />
                </motion.div>
            </section>

            {/* --- STATS ACCENT --- */}
            <section data-scroll-section className="py-32 border-b border-obsidian/5 bg-white/50">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="flex flex-col items-center">
                        <Users className="w-12 h-12 text-crimson mb-8 opacity-20" />
                        <StatCounter value="2,400+" label="Global Alumni" />
                    </div>
                    <div className="flex flex-col items-center">
                        <BookOpen className="w-12 h-12 text-crimson mb-8 opacity-20" />
                        <StatCounter value="12,000" label="Digital Volumes" />
                    </div>
                    <div className="flex flex-col items-center">
                        <ShieldCheck className="w-12 h-12 text-crimson mb-8 opacity-20" />
                        <StatCounter value="100%" label="Security Protocol" />
                    </div>
                    <div className="flex flex-col items-center">
                        <Target className="w-12 h-12 text-crimson mb-8 opacity-20" />
                        <StatCounter value="15+" label="Academic Years" />
                    </div>
                </div>
            </section>

            {/* --- LEADERSHIP (SCROLLABLE ARCHIVE) --- */}
            <section data-scroll-section className="py-40 overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-24 flex items-end justify-between">
                    <div className="max-w-2xl">
                        <h2 className="text-5xl md:text-7xl font-instrument font-black text-obsidian leading-[0.9]">
                            THE <span className="text-crimson italic">COMMAND</span> <br /> STRUCTURE
                        </h2>
                    </div>
                    <div className="hidden md:block w-32 h-[2px] bg-obsidian/10 mb-6"></div>
                </div>

                <div className="hide-scrollbar overflow-x-auto flex space-x-12 px-6 md:px-12 lg:px-24 pb-20">
                    {[
                        { name: "Mr. Sarvesh Pandey", role: "Managing Director", img: "/assets/leadership/REPSManagingDirector.jpeg" },
                        { name: "Mrs. Renu Mishra", role: "Institution Manager", img: "/assets/leadership/REPSManager.jpeg" },
                        { name: "Mr. Suman Srikant", role: "Executive Principal", img: "/assets/leadership/REPSPrincipal.jpeg" },
                        { name: "Ms. Ananya Sharma", role: "Dean of Academics", img: "https://i.pravatar.cc/400?u=12" },
                    ].map((leader, idx) => (
                        <motion.div
                            key={idx}
                            className="flex-shrink-0 w-96 group cursor-none"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden mb-10 shadow-2xl border border-obsidian/5 rounded-2xl">
                                <img src={leader.img} alt={leader.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                                <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-obsidian to-transparent opacity-100 group-hover:opacity-40 transition-opacity"></div>
                                <div className="absolute top-8 left-8">
                                    <span className="font-outfit text-crimson tracking-widest text-[10px] uppercase font-bold px-4 py-2 bg-white/90 backdrop-blur-md rounded-lg">PLATE: LDR-0{idx + 1}</span>
                                </div>
                            </div>
                            <div className="font-outfit text-crimson tracking-[0.3em] mb-3 text-[10px] uppercase font-bold">{leader.role}</div>
                            <h4 className="text-4xl font-instrument font-black text-obsidian group-hover:text-gold transition-colors duration-300 italic">{leader.name}</h4>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- FAQ SECTION --- */}
            <FAQ />

            {/* --- CTA SECTION --- */}
            <section data-scroll-section className="py-40 bg-parchment relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
                    <h2 className="text-[40vw] font-instrument font-black text-obsidian absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none whitespace-nowrap">LEGACY</h2>
                </div>

                <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <span className="font-outfit text-crimson tracking-[0.5em] mb-12 block text-sm uppercase font-bold italic">The Call of the Eagle</span>
                        <h2 className="text-7xl md:text-9xl font-instrument font-black text-obsidian mb-20 leading-[0.85] tracking-tighter">
                            TRANSFORM YOUR <br />
                            <span className="italic text-crimson underline decoration-gold/20">TRAJECTORY.</span>
                        </h2>

                        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                            <button className="w-full md:w-auto px-16 py-8 bg-obsidian text-white font-outfit text-sm tracking-[0.4em] uppercase font-bold hover:bg-crimson transition-all duration-700 shadow-2xl hover:scale-105 active:scale-95 rounded-xl">
                                APPLY FOR SESSION 2026
                            </button>
                            <button className="w-full md:w-auto px-16 py-8 border-2 border-obsidian text-obsidian font-outfit text-sm tracking-[0.4em] uppercase font-bold hover:bg-obsidian hover:text-white transition-all duration-700 shadow-lg hover:scale-105 active:scale-95 rounded-xl">
                                SCHEDULE ADMITTANCE
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default RedesignHome;
