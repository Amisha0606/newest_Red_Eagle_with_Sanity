import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  MapPin,
  Image as ImageIcon,
  ArrowRight,
  Loader2,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import sanityClient, { urlFor } from "../lib/sanityClient";

const EventsListPage = () => {
  const [filter, setFilter] = useState("all");
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const query = `*[_type == "event"] | order(date desc) {
          _id,
          title,
          slug,
          date,
          category,
          description,
          location,
          coverImage,
          "galleryCount": count(gallery)
        }`;
        const result = await sanityClient.fetch(query);
        setEvents(result || []);
      } catch (err) {
        console.warn("Sanity fetch error (may be empty dataset):", err);
        setEvents([]);
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
    { value: "all", label: "All Events" },
    { value: "annual", label: "Annual Event" },
    { value: "sports", label: "Sports" },
    { value: "competitions", label: "Competitions" },
    { value: "academic", label: "Academic" },
    { value: "others", label: "Others" },
  ];

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-red-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading events...</p>
        </div>
      </div>
    );
  }

  if (error) {
    // Show empty state instead of error (Sanity may not have data yet)
    console.warn("Sanity fetch error:", error);
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-red-600 to-red-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20px 20px, white 2px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calendar className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Event Galleries
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Browse through our vibrant school events and their memorable photo
            galleries
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                data-testid={`filter-${cat.value}`}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  filter === cat.value
                    ? "bg-red-600 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-red-50 border-2 border-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-xl text-gray-600">No events found</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => {
                const eventSlug = event.slug?.current || event._id;
                const coverImageUrl = event.coverImage
                  ? urlFor(event.coverImage).width(800).height(600).url()
                  : null;

                return (
                  <Link
                    key={event._id}
                    to={`/eventGallery/${eventSlug}`}
                    data-testid={`event-card-${eventSlug}`}
                  >
                    <Card className="group hover:shadow-2xl transition-all duration-300 border-none overflow-hidden hover:-translate-y-2 cursor-pointer">
                      {coverImageUrl ? (
                        <div className="relative h-64 overflow-hidden">
                          <img
                            src={coverImageUrl}
                            alt={event.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                          <div className="absolute top-4 right-4">
                            <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full capitalize font-semibold">
                              {event.category?.replace("_", " ") || "Event"}
                            </span>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h3 className="text-2xl font-bold mb-2">
                              {event.title}
                            </h3>
                            <div className="flex items-center text-sm text-red-100">
                              <Calendar className="w-4 h-4 mr-2" />
                              {formatDate(event.date)}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="bg-gradient-to-br from-red-600 to-red-700 p-6 text-white h-64 flex flex-col justify-between">
                          <div className="flex items-center justify-between">
                            <Calendar className="w-8 h-8" />
                            <span className="bg-white/20 text-xs px-3 py-1 rounded-full capitalize">
                              {event.category?.replace("_", " ") || "Event"}
                            </span>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold mb-2">
                              {event.title}
                            </h3>
                            <p className="text-red-100">
                              {formatDate(event.date)}
                            </p>
                          </div>
                        </div>
                      )}

                      <CardContent className="p-6">
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {event.description || "View event details and photos"}
                        </p>
                        {event.location && (
                          <div className="flex items-center text-sm text-gray-500 mb-4">
                            <MapPin className="w-4 h-4 mr-1" />
                            {event.location}
                          </div>
                        )}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <span className="text-sm font-semibold text-gray-700">
                              <ImageIcon className="w-4 h-4 inline mr-1" />
                              {event.galleryCount || 0} Photos
                            </span>
                          </div>
                          <div className="flex items-center text-red-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                            View Gallery
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default EventsListPage;
