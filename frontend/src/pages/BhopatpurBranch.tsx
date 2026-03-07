import React from 'react';
import { Building2, Calendar, MapPin, Phone, Mail, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { leadership } from '../data/mockData';

const BhopatpurBranch = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
            alt="New School Building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-red-600/20 backdrop-blur-sm border border-red-500/30 rounded-full px-4 py-2 mb-6">
            <Building2 className="w-4 h-4 text-red-400" />
            <span className="text-red-300 text-sm font-medium">New Branch Opening Soon</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Red Eagle Public School
            <br />
            <span className="text-red-500">Bhopatpur Campus</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            A new chapter of excellence begins
          </p>
          
          <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
            <Calendar className="w-5 h-5 text-red-400" />
            <span className="text-white font-semibold">Inaugurating on 15th February 2026</span>
          </div>
        </div>
      </section>

      {/* Coming Soon Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Coming Soon to Bhopatpur
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are excited to announce the expansion of Red Eagle Group of Institutions with a new state-of-the-art campus in Bhopatpur
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">Bhopatpur, Premium Educational Hub</p>
            </Card>

            <Card className="text-center p-8 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Inauguration</h3>
              <p className="text-gray-600">15th February 2026</p>
            </Card>

            <Card className="text-center p-8 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Capacity</h3>
              <p className="text-gray-600">1500+ Students</p>
            </Card>
          </div>

          {/* Building Images */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-2xl shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
                alt="School Building"
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold">Modern Architecture</h3>
                <p className="text-gray-200 mt-2">Contemporary design for enhanced learning</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
                alt="Campus View"
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold">Spacious Campus</h3>
                <p className="text-gray-200 mt-2">Wide open spaces for holistic development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              World-Class Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The new campus will feature state-of-the-art infrastructure and modern amenities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Smart Classrooms', desc: 'Digital learning with interactive boards' },
              { title: 'Science Labs', desc: 'Fully equipped modern laboratories' },
              { title: 'Sports Complex', desc: 'Multi-purpose sports facilities' },
              { title: 'Library', desc: 'Extensive collection of books and resources' },
              { title: 'Computer Lab', desc: 'Latest technology and high-speed internet' },
              { title: 'Auditorium', desc: 'Modern auditorium for events and functions' }
            ].map((feature, idx) => (
              <Card key={idx} className="p-6 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-red-600 rounded"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
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
              <Card key={leader.id} className="group hover:shadow-xl transition-all duration-300 border-none overflow-hidden">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{leader.name}</h3>
                    <p className="text-red-400 font-medium">{leader.designation}</p>
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
              Register your interest for pre-admission enquiries at our new Bhopatpur campus
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
                  <div className="text-lg font-semibold">info@redeaglepublicschool.com</div>
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
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 w-full sm:w-auto">
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
