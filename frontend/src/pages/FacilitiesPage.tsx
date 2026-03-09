import React from "react";
import {
  GraduationCap,
  Trophy,
  BookOpen,
  Microscope,
  Monitor,
  Users,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { facilities } from "../data/mockData";

const FacilitiesPage = () => {
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
          <GraduationCap className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Facilities
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            State-of-the-art infrastructure and modern amenities for
            comprehensive student development
          </p>
        </div>
      </section>

      {/* Main Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              World-Class Infrastructure
            </h2>
            <p className="text-xl text-gray-600">
              Everything your child needs for holistic development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility) => (
              <Card
                key={facility.id}
                className="group hover:shadow-2xl transition-all duration-500 border-none overflow-hidden"
              >
                <div className="relative h-44 flex items-center justify-center bg-gray-100 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="max-h-full max-w-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <CardContent className="p-6 -mt-16 relative z-10">
                  <div className="bg-white rounded-xl p-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {facility.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Amenities */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Additional Amenities
            </h2>
            <p className="text-xl text-gray-600">
              More facilities that make learning enjoyable and effective
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🖥️",
                title: "Smart Classrooms",
                desc: "Digital classrooms with smart boards and modern teaching tools",
              },
              {
                icon: "🗣️",
                title: "Language Lab",
                desc: "Interactive space to improve communication and language skills",
              },
              {
                icon: "🎯",
                title: "Career Guidance",
                desc: "Preparation support for exams like JEE, NEET, and CLAT",
              },
              {
                icon: "🧠",
                title: "Experiential Learning",
                desc: "Activity-based programs that make learning practical and engaging",
              },
              {
                icon: "🎤",
                title: "Cultural Activities",
                desc: "Stage exposure through events, performances, and competitions",
              },
              {
                icon: "🧘",
                title: "Yoga & Values",
                desc: "Yoga sessions and value education for holistic development",
              },
              {
                icon: "🚌",
                title: "Educational Trips",
                desc: "Excursions and field trips for real-world learning experiences",
              },
              {
                icon: "🏠",
                title: "Hostel Facility",
                desc: "Comfortable and secure hostel accommodation for students",
              },
            ].map((amenity, idx) => (
              <Card
                key={idx}
                className="text-center p-6 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <div className="text-5xl mb-4">{amenity.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {amenity.title}
                  </h3>
                  <p className="text-sm text-gray-600">{amenity.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Security */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Safety & Security
            </h2>
            <p className="text-xl text-gray-600">
              Your child's safety is our top priority
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                24/7 Security
              </h3>
              <p className="text-gray-600">
                Trained security personnel and CCTV surveillance throughout
                campus
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Emergency Systems
              </h3>
              <p className="text-gray-600">
                Fire alarms, emergency exits, and regular safety drills
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Parent Connect
              </h3>
              <p className="text-gray-600">
                Real-time updates and communication with parents
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacilitiesPage;
