import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Image as ImageIcon,
  X,
  Loader2,
  Maximize2,
  ChevronRight
} from "lucide-react";
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

const EventDetailPage = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const query = `*[_type == "event" && (slug.current == $eventId || _id == $eventId)][0] {
          _id,
          title,
          slug,
          eventDate,
          category,
          description,
          location,
          coverImage,
          gallery[] {
            image,
            caption
          }
        }`;
        const result = await sanityClient.fetch(query, { eventId });

        if (result) {
          setEvent(result);
        } else {
          // Fallback to mock data if it matches ID/slug
          const mockMatch = (mockEvents as any[]).find(e => e.id === eventId || e.slug === eventId);
          setEvent(mockMatch || null);
        }
      } catch (err) {
        console.warn("Sanity error (falling back to mock data):", err);
        const mockMatch = (mockEvents as any[]).find(e => e.id === eventId || e.slug === eventId);
        setEvent(mockMatch || null);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]);

  const formatDate = (dateString) => {
    if (!dateString) return "Date TBD";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-parchment">
        <Loader2 className="w-16 h-16 animate-spin text-crimson mb-6" />
        <span className="font-outfit tracking-[0.5em] text-obsidian/40 uppercase">Unpacking History...</span>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-parchment p-12 text-center">
        <h2 className="text-4xl font-instrument font-black text-obsidian mb-8 italic opacity-20">The Archive is Missing</h2>
        <Link to="/eventGallery">
          <button className="h-16 px-8 bg-obsidian text-parchment font-outfit tracking-widest flex items-center gap-4 hover:bg-crimson transition-colors">
            <ArrowLeft className="w-4 h-4" /> REVISIT THE CHRONICLES
          </button>
        </Link>
      </div>
    );
  }

  const coverImageUrl = event.coverImage
    ? urlFor(event.coverImage).width(1920).height(1080).url()
    : event.cover_image_url || "/assets/gallery/gallery1.jpg";

  const galleryImages = event.gallery || event.images || [];

  return (
    <div className="bg-parchment selection:bg-crimson selection:text-white overflow-hidden pb-40">
      {/* Immersive Hero Section */}
      <section data-scroll-section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={coverImageUrl} alt={event.title} className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 transition-all duration-1000 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 via-obsidian/40 to-parchment"></div>
        </div>

        <div className="absolute inset-0 flex items-end pb-32">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Link to="/eventGallery" className="inline-flex items-center gap-4 text-gold/60 hover:text-gold transition-colors font-outfit tracking-[0.3em] text-xs mb-12 uppercase group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" /> Back to Chronicles
              </Link>

              <div className="flex items-center gap-6 mb-8">
                <span className="h-[1px] w-12 bg-crimson"></span>
                <span className="font-outfit text-crimson tracking-[0.4em] text-sm uppercase">Official Retrospective</span>
              </div>

              <h1 className="text-6xl md:text-[100px] font-instrument font-black text-obsidian leading-[0.9] tracking-tighter mb-12">
                {event.title?.toUpperCase()} <br /> <span className="text-crimson italic">EXPOSURE</span>
              </h1>

              <div className="flex flex-wrap items-center gap-x-12 gap-y-6 text-obsidian/40 font-outfit tracking-widest text-xs">
                <div className="flex items-center gap-3"><Calendar className="w-4 h-4 text-crimson" /> {formatDate(event.eventDate || event.event_date)}</div>
                {event.location && <div className="flex items-center gap-3"><MapPin className="w-4 h-4 text-crimson" /> {event.location}</div>}
                <div className="flex items-center gap-3"><ImageIcon className="w-4 h-4 text-crimson" /> {galleryImages.length} DEVELOPED PLATES</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Narrative */}
      <section data-scroll-section className="py-24 border-y border-obsidian/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-8">
              <p className="text-2xl md:text-3xl font-instrument text-obsidian/70 leading-relaxed italic border-l-4 border-crimson pl-8 md:pl-12">
                {event.description}
              </p>
            </div>
            <div className="lg:col-span-4 flex items-center justify-end">
              <div className="w-full h-[1px] bg-gold opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* The Visual Highlights (Gallery) */}
      <section data-scroll-section className="py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          {galleryImages.length === 0 ? (
            <div className="text-center py-40 bg-white/50 border border-dashed border-obsidian/10">
              <h3 className="text-3xl font-instrument font-black text-obsidian/20 italic">No Visual Evidence Found</h3>
            </div>
          ) : (
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
            >
              {galleryImages.map((item, idx) => {
                const imageUrl = item.image
                  ? urlFor(item.image).width(800).height(1000).url()
                  : item.url || item; // Mock data might be strings

                const fullUrl = item.image
                  ? urlFor(item.image).width(1920).url()
                  : item.url || item;

                return (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="relative group aspect-[3/4] overflow-hidden cursor-crosshair bg-obsidian"
                    onClick={() => setSelectedImage({ ...item, url: fullUrl })}
                  >
                    <img
                      src={imageUrl}
                      alt={item.caption || "Gallery Image"}
                      className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="absolute bottom-8 left-8 right-8 text-parchment">
                        <h4 className="font-outfit tracking-[0.2em] text-xs text-gold mb-2 uppercase">Plate No. {idx + 1}</h4>
                        <p className="font-instrument italic text-lg line-clamp-2">
                          {item.caption || "An unspoken moment of institutional pride."}
                        </p>
                        <div className="mt-6 flex items-center gap-2 opacity-60">
                          <Maximize2 className="w-4 h-4" /> <span className="text-[10px] font-outfit tracking-widest">EXPAND FRAME</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </div>
      </section>

      {/* Cinematic Modal (Lightbox) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-obsidian/95 z-[100] flex items-center justify-center p-8 md:p-24 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-12 right-12 text-parchment/40 hover:text-crimson transition-colors group">
              <X className="w-12 h-12 group-hover:rotate-90 transition-transform" />
            </button>
            <div className="relative max-w-7xl w-full h-full flex flex-col md:flex-row items-center gap-12 pointer-events-none">
              <div className="w-full md:w-2/3 h-full flex items-center justify-center pointer-events-auto">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.caption || event.title}
                  className="max-w-full max-h-full object-contain shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/5"
                />
              </div>
              <div className="w-full md:w-1/3 flex flex-col justify-center text-left pointer-events-auto">
                <h5 className="font-outfit text-crimson tracking-[0.5em] mb-6">Plate Specification</h5>
                <p className="text-3xl md:text-5xl font-instrument font-black text-parchment leading-tight mb-8 italic">
                  {selectedImage.caption || "A singular moment etched in the institutional memory."}
                </p>
                <div className="h-[1px] w-24 bg-gold mb-8"></div>
                <p className="text-parchment/40 font-inter text-sm leading-relaxed max-w-sm">
                  Part of the {event.title} archives. Authorized for academic and archival use only.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Nav */}
      <section data-scroll-section className="pt-24 pb-40 text-center">
        <Link to="/eventGallery">
          <button className="group flex flex-col items-center gap-6 mx-auto">
            <div className="w-16 h-16 rounded-full border border-obsidian/10 flex items-center justify-center group-hover:bg-crimson group-hover:border-crimson transition-all duration-500">
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 group-hover:text-white transition-all" />
            </div>
            <span className="font-outfit tracking-[0.4em] text-xs text-obsidian px-8 py-3 border border-obsidian group-hover:bg-obsidian group-hover:text-parchment transition-all duration-500">REVISIT ALL CHRONICLES</span>
          </button>
        </Link>
      </section>
    </div>
  );
};

export default EventDetailPage;
