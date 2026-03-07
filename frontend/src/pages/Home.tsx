import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  GraduationCap,
  Users,
  Award,
  Sparkles,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { facilities, leadership, galleryImages } from "../data/mockData";
import FAQ from "../components/FAQ";

const Home = () => {
  const topFacilities = facilities.slice(0, 3);
  const topGallery = galleryImages.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/school/SchoolFullPicture.jpg"
            alt="Red Eagle School"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-red-600/20 backdrop-blur-sm border border-red-500/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-red-400" />
            <span className="text-red-300 text-sm font-medium">
              Admissions Open for 2026-27
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome to <br />
            <span className="text-red-500">Red Eagle Group</span> of
            Institutions
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Providing quality education and a nurturing environment to help
            students excel in academics and beyond
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="https://forms.gle/J8GvJ5T4XjKbaQ8J8" target="_blank">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6"
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/bhopatpur">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6"
              >
                New Branch
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                15+
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                Years of Excellence
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                2000+
              </div>
              <div className="text-gray-300 text-sm md:text-base">Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                95%
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                Success Rate
              </div>
            </div>
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
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Leadership
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Messages from Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our school's leadership team about our vision and
              dedication to excellence
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
                <CardContent className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                    {leader.message}
                  </p>
                </CardContent>
              </Card>
            ))}
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
