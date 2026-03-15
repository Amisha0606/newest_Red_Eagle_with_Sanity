import React from "react";
import { useEffect, useState } from "react";
import client, { urlFor } from "../lib/sanityClient";
import {
  GraduationCap,
  Heart,
  Target,
  Award,
  Rocket,
  Users,
  BookOpen,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { leadership } from "../data/mockData";

const AboutPage = () => {
  const [aboutImages, setAboutImages] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      const query = `*[_type == "aboutImages"][0]{
        imageOne,
        imageTwo
      }`;

      const data = await client.fetch(query);
      setAboutImages(data);
    };

    fetchImages();
  }, []);

  const imageOneUrl = aboutImages?.imageOne
    ? urlFor(aboutImages.imageOne).width(600).url()
    : null;

  const imageTwoUrl = aboutImages?.imageTwo
    ? urlFor(aboutImages.imageTwo).width(600).url()
    : null;
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
            About Red Eagle
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Shaping minds, building futures - A legacy of educational excellence
            since 2008
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Left Text */}
            <div>
              <div className="inline-block bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                About Us
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Red Eagle Public School
              </h2>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                <strong>Red Eagle Public School (R.E.P.S.)</strong> is an
                English medium institution affiliated to the{" "}
                <strong>
                  Central Board of Secondary Education (CBSE), New Delhi
                </strong>
                , providing education from <strong>Nursery to Class XII</strong>
                . The school is run by the{" "}
                <strong>Priyadarshini Educational Society, Bhiura</strong>.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                The school strives to provide excellent education to its
                students under the supervision of competent and hardworking
                teachers. Along with studies, the school also pays special
                attention to the intellectual development of the children and
                competitive examinations. Children are prepared for engineering
                (JEE/IIT), medical (NEET), law (CLAT), Civil Services (UPSC,
                PCS), NDA/CDS, NTSE, Olympiad, CUET and other competitive
                examinations right from class 6. As a result, students are
                annually selected for medical, engineering, joint law entrance
                examination and in the best universities for higher education.
              </p>
            </div>

            {/* Right Images */}
            <div className="grid grid-cols-2 gap-6">
              {imageOneUrl && (
                <img
                  src={imageOneUrl}
                  className="rounded-xl shadow-lg object-cover h-60 w-full"
                  alt="Students learning"
                />
              )}

              {imageTwoUrl && (
                <img
                  src={imageTwoUrl}
                  className="rounded-xl shadow-lg object-cover h-60 w-full mt-10"
                  alt="School activity"
                />
              )}
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center mb-20">
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">2500+</div>
              <p className="text-gray-600">Students Enrolled</p>
            </div>

            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">100+</div>
              <p className="text-gray-600">Expert Faculty</p>
            </div>

            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">2</div>
              <p className="text-gray-600">School Branches</p>
            </div>

            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">15+</div>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
          </div>

          {/* BRANCHES */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 text-white p-8 rounded-xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4">REPS Saidabad</h3>

              <p className="text-gray-300 leading-relaxed">
                Located about 4 km north of Saidabad on the Saidabad–Phulpur
                Road in village <strong>Bhiura</strong>, opposite the
                <strong> Utraon Police Station</strong>.
              </p>

              <p className="mt-3 text-gray-300">
                Established in <strong>2008</strong> by
                <strong> Advocate Sarvesh Pandey</strong> with the vision of
                spreading education in rural areas and making rural students
                academically competitive.
              </p>
            </div>

            <div className="bg-red-600 text-white p-8 rounded-xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4">REPS Bhopatpur</h3>

              <p className="text-red-100 leading-relaxed">
                Established in <strong>2026</strong> to make quality education
                accessible for families living far from the Saidabad branch.
              </p>

              <p className="mt-3 text-red-100">
                Located on the <strong>Katahara–Damgada Road</strong> near
                <strong> Mohammadabad (Daser) Market</strong>.
              </p>
            </div>
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
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {leader.message}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision & Goal*/}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Mission, Vision & Goal
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Vision */}
            <Card className="border-none shadow-xl overflow-hidden">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white h-full">
                <Award className="w-12 h-12 mb-4" />
                <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-100 leading-relaxed">
                  To be a centre of excellence that nurtures confident,
                  disciplined and value-driven individuals ready to lead and
                  succeed.
                </p>
              </div>
            </Card>

            {/* Mission */}
            <Card className="border-none shadow-xl overflow-hidden">
              <div className="bg-gradient-to-br from-red-600 to-red-700 p-8 text-white h-full">
                <Rocket className="w-12 h-12 mb-4" />
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-red-100 leading-relaxed">
                  To provide quality education in a safe and supportive
                  environment that promotes academic excellence, character
                  building and holistic development.
                </p>
              </div>
            </Card>

            {/* Goal */}
            <Card className="border-none shadow-xl overflow-hidden">
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 text-white h-full">
                <Target className="w-12 h-12 mb-4" />
                <h3 className="text-3xl font-bold mb-4">Our Goal</h3>
                <p className="text-gray-100 leading-relaxed">
                  To empower every student with knowledge, skills, values and
                  confidence to excel in life and contribute positively to
                  society.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-red-50">
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
                title: "Compassion",
                description:
                  "Fostering empathy, kindness, and respect for all individuals",
              },
              {
                icon: BookOpen,
                title: "Excellence",
                description:
                  "Striving for the highest standards in academics and character",
              },
              {
                icon: Users,
                title: "Integrity",
                description:
                  "Upholding honesty, ethics, and accountability in all actions",
              },
              {
                icon: Target,
                title: "Innovation",
                description:
                  "Embracing creativity and forward-thinking approaches",
              },
              {
                icon: Award,
                title: "Leadership",
                description:
                  "Developing confident leaders who inspire positive change",
              },
              {
                icon: GraduationCap,
                title: "Growth",
                description:
                  "Nurturing continuous learning and personal development",
              },
            ].map((value, idx) => (
              <Card
                key={idx}
                className="text-center p-8 border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
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
              { number: "95%", label: "Board Exam Pass Rate" },
              { number: "150+", label: "Distinction Holders" },
              { number: "50+", label: "Awards & Recognition" },
              { number: "100%", label: "Parent Satisfaction" },
            ].map((achievement, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold text-red-600 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
