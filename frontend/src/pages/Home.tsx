import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Users, Award, MapPin } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { facilities, leadership, galleryImages } from "../data/mockData";
import FAQ from "../components/FAQ";
import HeroSection from "./HomeHeroSection";
import client, { urlFor } from "../lib/sanityClient";

const Home = () => {
  const [branches, setBranches] = useState([]);
  const topFacilities = facilities.slice(0, 3);
  const topGallery = galleryImages.slice(0, 3);

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const query = `*[_type == "branch"] | order(visibilityOrder asc){
          name,
          slug,
          address,
          heroImage,
          email,
          contactNumbers
        }`;
        const data = await client.fetch(query);
        setBranches(data || []);
      } catch (err) {
        console.warn("Error loading branches:", err);
      }
    };
    fetchBranches();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Branches Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Locations
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Branches
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Red Eagle Public School operates multiple campuses to provide
              accessible and quality education to students across the region.
            </p>
          </div>

          {/* Branch Cards */}
          <div className="grid md:grid-cols-2 gap-10">
            {branches.map((branch) => (
              <Link
                key={branch.slug?.current || branch.name}
                to={
                  branch.slug?.current === "main-campus"
                    ? "/"
                    : `/${branch.slug?.current || "bhopatpur"}`
                }
                className="group"
              >
                <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 bg-white">
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={urlFor(branch.heroImage)
                        .width(1000)
                        .quality(90)
                        .url()}
                      alt={branch.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                  </div>

                  {/* Branch Details */}
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {branch.name}
                    </h3>

                    {/* Address */}
                    <div className="flex items-start text-gray-600 mb-4">
                      <MapPin className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">
                        {branch.address}
                      </span>
                    </div>

                    {/* Action Row */}
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      {/* Email */}
                      <span className="text-gray-500 font-medium truncate">
                        {branch.email || "N/A"}
                      </span>

                      {/* Office Phone */}
                      <div className="text-red-600 font-semibold">
                        Office Incharge:{" "}
                        {branch.contactNumbers?.officeIncharge || "N/A"}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Facilities
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              World-Class Infrastructure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide the best educational and extracurricular facilities for
              our students
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topFacilities.map((facility) => (
              <Card
                key={facility.id}
                className="group hover:shadow-xl transition-all duration-300 border-none overflow-hidden"
              >
                <div className="relative h-44 flex items-center justify-center bg-gray-100 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="max-h-full max-w-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardContent className="p-6 -mt-16 relative z-10">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
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

          <div className="text-center mt-12">
            <Link to="/facilities">
              <Button
                variant="outline"
                size="lg"
                className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
              >
                View All Facilities
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/school/School1.jpg"
                  alt="Students"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-red-600 rounded-2xl flex items-center justify-center shadow-xl">
                <div className="text-center text-white">
                  <div className="text-5xl font-bold">15+</div>
                  <div className="text-sm mt-2">
                    Years of
                    <br />
                    Excellence
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-block bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                About Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Red Eagle Public School?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Red Eagle Public School (R.E.P.S.), we are dedicated to
                creating a safe, secure, and supportive environment that
                nurtures every student's potential. Our commitment is to provide
                a foundation that enables students to embark on their
                educational journey with confidence and curiosity.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We strive to prepare students not just for examinations but for
                life, cultivating individuals who are ready to contribute
                meaningfully to the world. At R.E.P.S., your journey towards
                excellence begins in an atmosphere of encouragement,
                inspiration, and innovation.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      CBSE Curriculum
                    </h3>
                    <p className="text-sm text-gray-600">
                      Structured academic excellence
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Expert Faculty
                    </h3>
                    <p className="text-sm text-gray-600">
                      Experienced educators
                    </p>
                  </div>
                </div>
              </div>

              <Link to="/about">
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              School Gallery
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Campus Life & Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at our exciting school events & activities throughout
              the year
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {topGallery.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-200 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/eventGallery">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                View Event Gallery
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Management
            </div>
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

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your Journey with Us
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join Red Eagle Group of Institutions and experience education that
            prepares you for life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="https://forms.gle/J8GvJ5T4XjKbaQ8J8" target="_blank">
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-6"
              >
                Apply for Admission
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 text-lg px-8 py-6"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
