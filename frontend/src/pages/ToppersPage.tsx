import React, { useState, useEffect } from "react";
import { Award, Trophy, Star, Loader2 } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import sanityClient, { urlFor } from "../lib/sanityClient";

const ToppersPage = () => {
  const [selectedSection, setSelectedSection] = useState("primary");
  const [selectedClass, setSelectedClass] = useState(null);
  const [toppersData, setToppersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const sections = [
    { id: "primary", title: "Primary", classes: ["1", "2", "3", "4", "5"] },
    { id: "middle", title: "Middle", classes: ["6", "7", "8"] },
    { id: "secondary", title: "Secondary", classes: ["9", "10"] },
    { id: "senior", title: "Senior", classes: ["11", "12"] },
  ];

  useEffect(() => {
    const fetchToppers = async () => {
      try {
        const query = `*[_type == "toppers"] | order(classNumber asc) {
          _id,
          section,
          classNumber,
          academicYear,
          students[] {
            name,
            photo,
            percentage,
            stream,
            rank
          }
        }`;
        const result = await sanityClient.fetch(query);
        setToppersData(result || []);
      } catch (err) {
        console.warn("Sanity fetch error (may be empty dataset):", err);
        setToppersData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchToppers();
  }, []);

  // Get toppers for current section
  const currentSection = sections.find((s) => s.id === selectedSection);
  const sectionToppers = toppersData.filter(
    (t) => t.section === selectedSection,
  );

  // Get toppers for a specific class
  const getToppersForClass = (classNum) => {
    const classData = sectionToppers.find((t) => t.classNumber === classNum);
    return classData?.students || [];
  };

  // Check if section has any data
  const sectionHasData = sectionToppers.length > 0;

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-red-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading toppers data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    // Show empty state instead of error (Sanity may not have data yet)
    console.warn("Sanity fetch error:", error);
  }

  const renderToppersGrid = (classNum) => {
    const toppers = getToppersForClass(classNum);

    if (!toppers || toppers.length === 0) {
      return (
        <div className="text-center py-8 text-gray-500">
          No toppers data for Class {classNum} yet.
        </div>
      );
    }

    return toppers.map((topper, idx) => {
      const imageUrl = topper.photo
        ? urlFor(topper.photo).width(400).height(300).url()
        : "https://via.placeholder.com/400x300?text=No+Photo";

      return (
        <Card
          key={idx}
          className="group relative overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          data-testid={`topper-card-${classNum}-${idx}`}
        >
          {(topper.rank === 1 || idx === 0) && (
            <div className="absolute top-4 right-4 z-10">
              <div className="bg-yellow-400 text-yellow-900 rounded-full p-2">
                <Trophy className="w-5 h-5" />
              </div>
            </div>
          )}
          <div className="relative h-64 overflow-hidden">
            <img
              src={imageUrl}
              alt={topper.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          </div>
          <CardContent className="p-6 -mt-16 relative z-10">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <Award className="w-8 h-8 text-red-600" />
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {topper.name}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                {topper.stream || "Overall"}
              </p>
              <div className="flex items-end justify-between">
                <span className="text-4xl font-bold text-red-600">
                  {topper.percentage}%
                </span>
                {topper.rank && (
                  <span className="text-sm text-gray-500">
                    Rank #{topper.rank}
                  </span>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      );
    });
  };

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
          <Trophy className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Toppers</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Celebrating academic excellence and outstanding achievements of our
            students across all sections
          </p>
        </div>
      </section>

      {/* Sections Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Selector */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  setSelectedSection(section.id);
                  setSelectedClass(null);
                }}
                data-testid={`section-${section.id}`}
                className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg ${
                  selectedSection === section.id
                    ? "bg-red-600 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-red-50 border-2 border-gray-200"
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>

          {!sectionHasData ? (
            <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
              <Trophy className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-xl text-gray-600">
                No toppers data available for {currentSection?.title} section
                yet.
              </p>
              <p className="text-gray-500 mt-2">
                Data will appear here once added in Sanity CMS
              </p>
            </div>
          ) : (
            <>
              {/* Class Selector */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
                  {currentSection?.title} Section - Select Class
                </h2>
                <div className="flex flex-wrap gap-3 justify-center">
                  {currentSection?.classes.map((classNum) => {
                    const hasData = getToppersForClass(classNum).length > 0;
                    return (
                      <button
                        key={classNum}
                        onClick={() => setSelectedClass(classNum)}
                        data-testid={`class-${classNum}`}
                        className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                          selectedClass === classNum
                            ? "bg-red-600 text-white shadow-lg"
                            : hasData
                              ? "bg-white text-gray-700 hover:bg-red-50 border-2 border-gray-200"
                              : "bg-gray-100 text-gray-400 border-2 border-gray-200 cursor-not-allowed"
                        }`}
                        disabled={!hasData}
                      >
                        Class {classNum}
                        {!hasData && " (No data)"}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Toppers Display */}
              <div className="space-y-16">
                {selectedClass ? (
                  <div>
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        Class {selectedClass} Toppers
                      </h2>
                      <p className="text-gray-600">
                        Outstanding performers of the academic year
                      </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {renderToppersGrid(selectedClass)}
                    </div>
                  </div>
                ) : (
                  currentSection?.classes.map((classNum) => {
                    const toppers = getToppersForClass(classNum);
                    if (toppers.length === 0) return null;

                    return (
                      <div key={classNum}>
                        <div className="text-center mb-8">
                          <h2 className="text-3xl font-bold text-gray-900 mb-2">
                            Class {classNum} Toppers
                          </h2>
                          <p className="text-gray-600">
                            Outstanding performers of the academic year
                          </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {renderToppersGrid(classNum)}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-10 h-10 text-red-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">95%</div>
              <div className="text-gray-600">Pass Percentage</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-red-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">150+</div>
              <div className="text-gray-600">Distinction Holders</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-10 h-10 text-red-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">92%</div>
              <div className="text-gray-600">Above 75% Score</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-10 h-10 text-red-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">25+</div>
              <div className="text-gray-600">Above 90% Score</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToppersPage;
