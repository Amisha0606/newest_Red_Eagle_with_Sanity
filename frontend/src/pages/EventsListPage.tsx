import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Calendar, MapPin, Image as ImageIcon, ArrowRight, Loader2, BookOpen, Clock } from "lucide-react";
import sanityClient, { urlFor } from "../lib/sanityClient";
import { events as mockEvents } from "../data/mockData";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
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

const EventsListPage = () => {
  const [filter, setFilter] = useState("all");
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const query = `*[_type == "event"] | order(eventDate desc) {
          _id,
          title,
          slug,
          eventDate,
          category,
          description,
          location,
          coverImage,
          "galleryCount": count(gallery)
        }`;
        const result = await sanityClient.fetch(query);
        // Fallback to mock data if Sanity is empty
        setEvents(result?.length > 0 ? result : mockEvents);
      } catch (err) {
        console.warn("Sanity fetch error (falling back to mock data):", err);
        setEvents(mockEvents);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "Date TBD";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const filteredEvents =
    filter === "all" ? events : events.filter((e) => e.category === filter);

  const categories = [
    { value: "all", label: "Registry" },
    { value: "annual_function", label: "Annual" },
    { value: "sports", label: "Athletics" },
    { value: "cultural", label: "Cultural" },
    { value: "academic", label: "Academic" },
    { value: "ceremony", label: "Ceremony" },
    { value: "competition", label: "Arena" },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-parchment">
        <Loader2 className="w-16 h-16 animate-spin text-crimson mb-6" />
        <span className="font-outfit tracking-[0.5em] text-obsidian/40 uppercase">Unsealing Archives...</span>
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
            <BookOpen className="w-20 h-20 text-crimson mx-auto mb-8 opacity-20" />
            <span className="font-outfit text-crimson tracking-[0.5em] text-sm md:text-lg mb-6 block uppercase">
              The Institutional Chronicle
            </span>
            <h1 className="text-6xl md:text-[100px] font-instrument font-black text-obsidian leading-[0.9] tracking-tight mb-12">
              THE <br /> <span className="text-crimson italic">ARCHIVES</span>
            </h1>
            <p className="text-xl text-obsidian/50 font-inter max-w-2xl mx-auto leading-relaxed border-b border-gold/20 pb-12">
              A visual anthology of academic triumphs, cultural heritage, and institutional milestones.
            </p>
          </motion.div>
        </div>

        <div className="absolute top-1/2 left-0 w-full flex justify-center opacity-[0.02] select-none pointer-events-none text-[30vw] font-instrument font-black text-obsidian leading-none">
          CHRONICLE
        </div>
      </section>

      {/* --- FILTER BAR --- */}
      <section data-scroll-section className="py-12 bg-obsidian text-parchment relative z-10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 overflow-x-auto">
          <div className="flex gap-12 justify-center min-w-max">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-4 py-2 font-outfit tracking-[0.3em] text-sm md:text-lg transition-all duration-500 relative group ${filter === cat.value ? "text-crimson" : "text-parchment/30 hover:text-parchment"
                  }`}
              >
                {cat.label}
                {filter === cat.value && (
                  <motion.div layoutId="eventFilterTab" className="absolute -bottom-2 left-0 w-full h-[2px] bg-crimson" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- EVENTS GRID --- */}
      <section data-scroll-section className="py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <AnimatePresence mode="wait">
            {filteredEvents.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-40 border-2 border-dashed border-obsidian/10"
              >
                <Clock className="w-16 h-16 text-gold/20 mx-auto mb-6" />
                <h3 className="text-4xl font-instrument font-bold text-obsidian/20 italic">History in the Making</h3>
              </motion.div>
            ) : (
              <motion.div
                key={filter}
                initial="hidden"
                animate="show"
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24"
              >
                {filteredEvents.map((event) => {
                  const eventSlug = event.slug?.current || event.id || event._id;
                  const coverImageUrl = event.coverImage
                    ? urlFor(event.coverImage).width(800).height(1000).url()
                    : event.cover_image_url || "/assets/gallery/gallery1.jpg";

                  return (
                    <motion.div key={eventSlug} variants={fadeInUp} className="group">
                      <Link to={`/eventGallery/${eventSlug}`}>
                        <div className="relative aspect-[3/4] overflow-hidden mb-10 shadow-2xl">
                          <img
                            src={coverImageUrl}
                            alt={event.title}
                            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>

                          <div className="absolute top-8 left-8">
                            <span className="bg-crimson text-white font-outfit tracking-widest text-xs px-6 py-2 shadow-xl">
                              {event.category?.replace("_", " ") || "Official"}
                            </span>
                          </div>

                          <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end border-t border-white/20 pt-8 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                            <div className="flex items-center gap-3 text-white/70">
                              <ImageIcon className="w-5 h-5" />
                              <span className="font-outfit tracking-tighter text-lg">{event.galleryCount || event.image_count || 0} EXPOSURES</span>
                            </div>
                            <ArrowRight className="text-gold w-8 h-8" />
                          </div>
                        </div>

                        <div className="relative z-10 px-4">
                          <div className="flex items-center gap-4 text-crimson mb-4">
                            <Calendar className="w-4 h-4" />
                            <span className="font-outfit tracking-[0.2em] text-xs uppercase">{formatDate(event.eventDate || event.event_date)}</span>
                          </div>
                          <h3 className="text-3xl font-instrument font-black text-obsidian mb-4 group-hover:text-crimson transition-colors duration-300">
                            {event.title || event.name}
                          </h3>
                          <p className="text-obsidian/50 font-inter text-sm leading-relaxed line-clamp-2">
                            {event.description}
                          </p>

                          {event.location && (
                            <div className="flex items-center gap-2 mt-6 text-obsidian/30 font-outfit tracking-widest text-[10px] uppercase">
                              <MapPin className="w-3 h-3" /> {event.location}
                            </div>
                          )}
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section data-scroll-section className="py-40 bg-obsidian text-center overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative z-10"
        >
          <h2 className="text-5xl md:text-7xl font-instrument font-black text-parchment mb-12 leading-tight">
            Contribute to the <br /> <span className="text-gold italic">Gallery</span>
          </h2>
          <p className="text-parchment/40 font-inter mb-16 max-w-lg mx-auto">
            Are you an alumni with memories to share? Help us expand our digital heritage.
          </p>
          <button className="h-20 px-12 border border-white/20 text-parchment font-outfit tracking-widest text-lg hover:bg-white hover:text-obsidian transition-all duration-700">
            DISPATCH ARCHIVE REQUEST
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default EventsListPage;
