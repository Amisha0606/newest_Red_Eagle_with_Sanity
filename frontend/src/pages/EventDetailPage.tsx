import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Image as ImageIcon,
  X,
  Loader2,
} from "lucide-react";
import { Button } from "../components/ui/button";
import sanityClient, { urlFor } from "../lib/sanityClient";

const EventDetailPage = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        // Try to find by slug first, then by _id
        const query = `*[_type == "event" && (slug.current == $eventId || _id == $eventId)][0] {
          _id,
          title,
          slug,
          date,
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
        setEvent(result);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching event:", err);
        setError(err.message);
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
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-red-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading event...</p>
        </div>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">
            {error ? `Error: ${error}` : "Event not found"}
          </p>
          <Link to="/eventGallery">
            <Button className="bg-red-600 hover:bg-red-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Events
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const coverImageUrl = event.coverImage
    ? urlFor(event.coverImage).width(1920).height(600).url()
    : null;

  const galleryImages = event.gallery || [];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section with Cover Image */}
      <section className="relative h-96 overflow-hidden">
        {coverImageUrl ? (
          <>
            <img
              src={coverImageUrl}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-700"></div>
        )}

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <Link to="/eventGallery">
              <Button
                variant="outline"
                className="mb-6 border-white text-white hover:bg-white hover:text-red-600 backdrop-blur-sm bg-white/10"
                data-testid="back-to-events"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Events
              </Button>
            </Link>
            <div className="flex items-center space-x-3 mb-4">
              <span className="bg-red-600 text-white text-sm px-4 py-2 rounded-full capitalize font-semibold">
                {event.category?.replace("_", " ") || "Event"}
              </span>
            </div>
            <h1
              className="text-5xl md:text-6xl font-bold text-white mb-4"
              data-testid="event-title"
            >
              {event.title} Gallery
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <span className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                {formatDate(event.date)}
              </span>
              {event.location && (
                <>
                  <span>•</span>
                  <span className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    {event.location}
                  </span>
                </>
              )}
              <span>•</span>
              <span className="flex items-center">
                <ImageIcon className="w-5 h-5 mr-2" />
                {galleryImages.length} Photos
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Event Description */}
      {event.description && (
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              {event.description}
            </p>
          </div>
        </section>
      )}

      {/* Photo Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Event Highlights
            </h2>
            <p className="text-xl text-gray-600">
              Memorable moments captured from {event.title}
            </p>
          </div>

          {galleryImages.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
              <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-xl text-gray-600">No photos available yet</p>
              <p className="text-gray-500 mt-2">Photos will be added soon</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((item, idx) => {
                const imageUrl = item.image
                  ? urlFor(item.image).width(800).height(600).url()
                  : null;

                if (!imageUrl) return null;

                return (
                  <div
                    key={idx}
                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setSelectedImage({
                        ...item,
                        url: urlFor(item.image).width(1920).url(),
                      })
                    }
                    data-testid={`gallery-image-${idx}`}
                  >
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={imageUrl}
                        alt={
                          item.caption || `${event.title} - Photo ${idx + 1}`
                        }
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          {item.caption && (
                            <p className="text-sm font-medium">
                              {item.caption}
                            </p>
                          )}
                          <p className="text-xs text-white/80 mt-2">
                            Click to view full size
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 bg-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                      Photo {idx + 1}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          data-testid="lightbox-modal"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors duration-200"
            data-testid="close-lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-6xl max-h-full flex flex-col items-center">
            <img
              src={selectedImage.url}
              alt={selectedImage.caption || event.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            {selectedImage.caption && (
              <div className="mt-6 text-center">
                <p className="text-white text-lg font-medium">
                  {selectedImage.caption}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetailPage;
