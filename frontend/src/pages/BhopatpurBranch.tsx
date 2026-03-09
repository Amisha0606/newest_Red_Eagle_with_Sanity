import React, { useEffect, useState } from "react";
import {
  Building2,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Users,
  ExternalLink,
  CheckCircle,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { leadership } from "../data/mockData";
import client, { urlFor } from "../lib/sanityClient";

const BhopatpurBranch = () => {
  const [branchData, setBranchData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBranchData = async () => {
      try {
        const query = `*[_type == "branch" && slug.current == "bhopatpur"][0]{
          title,
          status,
          inaugurationDate,
          classesStartDate,
          admissionsOpen,
          heroImage,
          heroTitle,
          heroSubtitle,
          architectureImages,
          facilities,
          address,
          mapEmbedUrl,
          phoneNumbers,
          email,
          capacity,
          description,
          googleMapsLink
        }`;
        const data = await client.fetch(query);
        setBranchData(data);
      } catch (err) {
        console.warn("Error loading branch data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBranchData();
  }, []);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {branchData?.heroImage ? (
            <img
              src={urlFor(branchData.heroImage).width(1200).height(800).url()}
              alt="Bhopatpur Campus"
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
              alt="New School Building"
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-green-600/20 backdrop-blur-sm border border-green-500/30 rounded-full px-4 py-2 mb-6">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span className="text-green-300 text-sm font-medium">
              Now Open - Admissions Running
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Red Eagle Public School
            <br />
            <span className="text-green-400">Bhopatpur Campus</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            {branchData?.description ||
              "Excellence in education is now accessible at our new Bhopatpur campus"}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
              <Calendar className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-white font-semibold text-sm sm:text-base">
                Inaugurated:{" "}
                {branchData?.inaugurationDate || "15th February 2026"}
              </span>
            </div>
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
              <Users className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-white font-semibold text-sm sm:text-base">
                Capacity: {branchData?.capacity || "1500+ Students"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Excellence Now Open at Bhopatpur
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Red Eagle Public School Bhopatpur Campus is now officially open
              with classes running and admissions open for all classes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8 border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-green-50 to-white">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600 text-sm">
                Katahara–Damgada Road, near Mohammadabad Market, Bhopatpur
              </p>
            </Card>

            <Card className="text-center p-8 border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-green-50 to-white">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Status</h3>
              <p className="text-gray-600 text-sm">
                Operational | Classes & Admissions Open |{" "}
                {branchData?.capacity || "1500+ Students"}
              </p>
            </Card>

            <Card className="text-center p-8 border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-green-50 to-white">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Inauguration
              </h3>
              <p className="text-gray-600 text-sm">
                {branchData?.inaugurationDate || "15th February 2026"}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Architecture Images */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          {/* Section Title */}
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Campus Architecture
          </h3>

          {/* Architecture Images Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {branchData?.architectureImages.map((arch, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-2xl shadow-xl group h-96"
              >
                {/* Architecture Image */}
                <img
                  src={urlFor(arch.image).width(800).quality(90).url()}
                  alt={arch.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                {/* Image Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">{arch.title}</h3>
                  <p className="text-gray-200 mt-2">{arch.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              World-Class Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The new campus features state-of-the-art infrastructure and modern
              amenities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {branchData?.facilities && branchData.facilities.length > 0 ? (
              branchData.facilities.map((facility, idx) => (
                <Card
                  key={idx}
                  className="p-6 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-0">
                    <div className="text-5xl mb-4">{facility.emoji}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {facility.title}
                    </h3>
                    <p className="text-gray-600">{facility.description}</p>
                  </CardContent>
                </Card>
              ))
            ) : (
              <>
                <Card className="p-6 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="text-5xl mb-4">🎓</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Smart Classrooms
                    </h3>
                    <p className="text-gray-600">
                      Digital learning with interactive boards and smart
                      technology
                    </p>
                  </CardContent>
                </Card>
                <Card className="p-6 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="text-5xl mb-4">🔬</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Science Labs
                    </h3>
                    <p className="text-gray-600">
                      Fully equipped modern laboratories for hands-on learning
                    </p>
                  </CardContent>
                </Card>
                <Card className="p-6 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="text-5xl mb-4">⚽</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Sports Complex
                    </h3>
                    <p className="text-gray-600">
                      Multi-purpose sports facilities for athletes development
                    </p>
                  </CardContent>
                </Card>
                <Card className="p-6 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="text-5xl mb-4">📚</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Library
                    </h3>
                    <p className="text-gray-600">
                      Extensive collection of books and digital resources
                    </p>
                  </CardContent>
                </Card>
                <Card className="p-6 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="text-5xl mb-4">💻</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Computer Lab
                    </h3>
                    <p className="text-gray-600">
                      Latest technology and high-speed internet connectivity
                    </p>
                  </CardContent>
                </Card>
                <Card className="p-6 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="text-5xl mb-4">🎭</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Auditorium
                    </h3>
                    <p className="text-gray-600">
                      Modern auditorium for events, functions and performances
                    </p>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Campus Location
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit us at our new Bhopatpur campus
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Address & Contact Info */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Address
                </h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {branchData?.address ||
                    "Katahara–Damgada Road near Mohammadabad (Daser) Market, Bhopatpur"}
                </p>

                <div className="space-y-4 mb-8">
                  {Array.isArray(branchData?.phoneNumbers) &&
                  branchData.phoneNumbers.length > 0 ? (
                    branchData.phoneNumbers.map((phone, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <Phone className="w-6 h-6 text-green-600 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-gray-600">{phone.label}</p>
                          <p className="font-semibold text-gray-900">
                            {phone.number}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="flex items-center space-x-3">
                      <Phone className="w-6 h-6 text-green-600" />
                      <div>
                        <p className="font-semibold text-gray-900">
                          +91 8400773055
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center space-x-3 mb-8">
                  <Mail className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-semibold text-gray-900">
                      {branchData?.email || "info@redeaglepublicschool.com"}
                    </p>
                  </div>
                </div>

                {branchData?.googleMapsLink && (
                  <a
                    href={branchData.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    <MapPin className="w-5 h-5" />
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Map Embed */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-96 lg:h-full min-h-[500px]">
              {branchData?.mapEmbedUrl ? (
                <iframe
                  src={branchData.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="School Location"
                ></iframe>
              ) : (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.908372644456!2d82.37844999999999!3d25.91289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e7c8e8e8e8e8d%3A0x8e8e8e8e8e8e8e8e!2sBhopatpur!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="School Location"
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The same trusted leadership guiding the new campus
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader) => (
              <Card
                key={leader.id}
                className="group hover:shadow-xl transition-all duration-300 border-none overflow-hidden"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{leader.name}</h3>
                    <p className="text-red-400 font-medium">
                      {leader.designation}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Register your interest for pre-admission enquiries at our new
              Bhopatpur campus
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-red-300" />
                <div>
                  <div className="text-sm text-red-200">Call Us</div>
                  <div className="text-lg font-semibold">+91 8400773055</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-red-300" />
                <div>
                  <div className="text-sm text-red-200">Email Us</div>
                  <div className="text-lg font-semibold">
                    info@redeaglepublicschool.com
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-red-300" />
                <div>
                  <div className="text-sm text-red-200">Location</div>
                  <div className="text-lg font-semibold">Bhopatpur Campus</div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 w-full sm:w-auto"
              >
                Register Your Interest
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BhopatpurBranch;
