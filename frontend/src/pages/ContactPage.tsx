import React, { useEffect, useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import client from "../lib/sanityClient";

interface Branch {
  _id: string;
  name: string;
  address: string;
  contactNumbers?: {
    officeIncharge?: string;
    transportIncharge?: string;
    otherNumber?: string;
  };
  email?: string;
  googleMapsLink?: string;
}

const ContactPage = () => {
  const [branches, setBranches] = useState<Branch[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const query = `*[_type == "branch"] | order(visibilityOrder asc) {
          _id,
          name,
          address,
          contactNumbers,
          email,
          googleMapsLink
        }`;
        const data = await client.fetch(query);
        setBranches(data);
      } catch (error) {
        console.error("Error fetching branches:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBranches();
  }, []);

  // helper to split comma-separated values (emails/numbers)
  const splitComma = (text?: string) => {
    if (!text) return [];
    return text.split(",").map((t) => t.trim());
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
          <Mail className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Get in touch with us for admissions, queries, or any assistance
          </p>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-8 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-red-200 bg-white">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Office Hours
                  </h3>
                  <div className="space-y-1 text-gray-600">
                    <p>
                      The school office operates from <b>9:00 AM</b> to{" "}
                      <b>1:00 PM </b>
                      throughout the year, regardless of the season. The school
                      office remains closed on Sundays.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Branches Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                Loading branch information...
              </p>
            </div>
          ) : branches.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No branch information available
              </p>
            </div>
          ) : (
            branches.map((branch, index) => (
              <div key={branch._id}>
                {/* Branch Header */}
                <div className="mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-2">
                    {branch.name}
                  </h2>
                  <div className="h-1 w-20 bg-red-600"></div>
                </div>

                {/* Branch Contact & Map Layout */}
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Contact Information - Left Side */}
                  <div className="space-y-6">
                    {/* Address */}
                    {branch.address && (
                      <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <MapPin className="w-6 h-6 text-red-600" />
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-900 mb-1">
                                Postal Address
                              </h3>
                              <p className="text-gray-600 whitespace-pre-line">
                                {branch.address}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    {/* Contact Numbers */}
                    {(branch.contactNumbers?.officeIncharge ||
                      branch.contactNumbers?.transportIncharge) && (
                      <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Phone className="w-6 h-6 text-red-600" />
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-900 mb-1">
                                Contact Numbers
                              </h3>
                              <div className="space-y-1 text-gray-600">
                                {branch.contactNumbers?.officeIncharge && (
                                  <p>
                                    Office Incharge:{" "}
                                    {branch.contactNumbers.officeIncharge}
                                  </p>
                                )}
                                {branch.contactNumbers?.transportIncharge && (
                                  <p>
                                    Transport Incharge:{" "}
                                    {branch.contactNumbers.transportIncharge}
                                  </p>
                                )}
                                {branch.contactNumbers?.otherNumber && (
                                  <p>
                                    Other: {branch.contactNumbers.otherNumber}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    {/* Email */}
                    {branch.email && (
                      <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Mail className="w-6 h-6 text-red-600" />
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-900 mb-1">
                                Email Address
                              </h3>
                              <div className="text-gray-600 space-y-1">
                                {splitComma(branch.email).map((e, i) => (
                                  <a
                                    key={i}
                                    href={`mailto:${e}`}
                                    className="block hover:text-red-600"
                                  >
                                    {e}
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>

                  {/* Map - Right Side */}
                  <div className="space-y-4">
                    {branch.googleMapsLink ? (
                      <div className="rounded-2xl overflow-hidden shadow-xl h-96">
                        <iframe
                          src={branch.googleMapsLink}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title={`${branch.name} Location`}
                        ></iframe>
                      </div>
                    ) : (
                      <p className="text-gray-500">Map not available</p>
                    )}
                  </div>
                </div>

                {/* Divider between branches */}
                {index < branches.length - 1 && (
                  <div className="my-16 border-t-2 border-gray-300"></div>
                )}
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
