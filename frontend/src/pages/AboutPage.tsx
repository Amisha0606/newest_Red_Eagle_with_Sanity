import React from 'react';
import { GraduationCap, Heart, Target, Users, Award, BookOpen } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { leadership } from '../data/mockData';

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-red-600 to-red-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20px 20px, white 2px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GraduationCap className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Red Eagle</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Shaping minds, building futures - A legacy of educational excellence since 2010
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Our Story
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                15+ Years of Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Red Eagle Public School (R.E.P.S.), we are dedicated to creating a safe, secure, and supportive environment that nurtures every student's potential. Our commitment is to provide a foundation that enables students to embark on their educational journey with confidence and curiosity, making the most of the opportunities we offer.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We strive to prepare students not just for examinations but for life, cultivating individuals who are ready to contribute meaningfully to the world. At R.E.P.S., your journey towards excellence begins in an atmosphere of encouragement, inspiration, and innovation.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold text-red-600 mb-2">2000+</div>
                  <div className="text-gray-600">Students Enrolled</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-red-600 mb-2">100+</div>
                  <div className="text-gray-600">Expert Faculty</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
                alt="Students Learning"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Mission & Vision
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-xl overflow-hidden">
              <div className="bg-gradient-to-br from-red-600 to-red-700 p-8 text-white">
                <Target className="w-12 h-12 mb-4" />
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-red-100 leading-relaxed">
                  To provide quality education that nurtures intellectual curiosity, critical thinking, and moral values. We aim to develop confident, responsible, and compassionate individuals who can contribute positively to society.
                </p>
              </div>
            </Card>

            <Card className="border-none shadow-xl overflow-hidden">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white">
                <Award className="w-12 h-12 mb-4" />
                <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-100 leading-relaxed">
                  To be a leading educational institution recognized for academic excellence, innovative teaching methods, and holistic development. We envision creating future leaders who are equipped to face global challenges.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Compassion',
                description: 'Fostering empathy, kindness, and respect for all individuals'
              },
              {
                icon: BookOpen,
                title: 'Excellence',
                description: 'Striving for the highest standards in academics and character'
              },
              {
                icon: Users,
                title: 'Integrity',
                description: 'Upholding honesty, ethics, and accountability in all actions'
              },
              {
                icon: Target,
                title: 'Innovation',
                description: 'Embracing creativity and forward-thinking approaches'
              },
              {
                icon: Award,
                title: 'Leadership',
                description: 'Developing confident leaders who inspire positive change'
              },
              {
                icon: GraduationCap,
                title: 'Growth',
                description: 'Nurturing continuous learning and personal development'
              }
            ].map((value, idx) => (
              <Card key={idx} className="text-center p-8 border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leaders committed to educational excellence
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
                <CardContent className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {leader.message}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '95%', label: 'Board Exam Pass Rate' },
              { number: '150+', label: 'Distinction Holders' },
              { number: '50+', label: 'Awards & Recognition' },
              { number: '100%', label: 'Parent Satisfaction' }
            ].map((achievement, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold text-red-600 mb-2">{achievement.number}</div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
