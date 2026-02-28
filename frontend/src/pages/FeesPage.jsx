import React from "react";
import {
  Shield,
  AlertCircle,
  CheckCircle,
  XCircle,
  FileText,
  Users,
  DollarSign,
  Download,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

const FeesPage = () => {
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
          <DollarSign className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Fees Structure
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Transparent and affordable education for all students at Red Eagle
            Public School
          </p>
        </div>
      </section>

      {/* Fees Structure Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Annual Fees Breakdown
            </h2>
            <p className="text-lg text-gray-600">Academic Year 2025-2026</p>
          </div>

          {/* Fees Table */}
          <Card className="border-none shadow-lg mb-8">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-red-600 text-white">
                      <th className="px-6 py-4 text-left font-semibold">
                        Class
                      </th>
                      <th className="px-6 py-4 text-left font-semibold">
                        Tuition Fee
                      </th>
                      <th className="px-6 py-4 text-left font-semibold">
                        Activities & Sports
                      </th>
                      <th className="px-6 py-4 text-left font-semibold">
                        Library & Lab
                      </th>
                      <th className="px-6 py-4 text-left font-semibold">
                        Annual Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        class: "I-II",
                        tuition: "₹35,000",
                        activities: "₹5,000",
                        library: "₹3,000",
                        total: "₹43,000",
                      },
                      {
                        class: "III-V",
                        tuition: "₹45,000",
                        activities: "₹6,000",
                        library: "₹4,000",
                        total: "₹55,000",
                      },
                      {
                        class: "VI-VIII",
                        tuition: "₹55,000",
                        activities: "₹7,000",
                        library: "₹5,000",
                        total: "₹67,000",
                      },
                      {
                        class: "IX-X",
                        tuition: "₹70,000",
                        activities: "₹8,000",
                        library: "₹6,000",
                        total: "₹84,000",
                      },
                      {
                        class: "XI-XII",
                        tuition: "₹85,000",
                        activities: "₹9,000",
                        library: "₹7,000",
                        total: "₹101,000",
                      },
                    ].map((row, idx) => (
                      <tr
                        key={idx}
                        className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="px-6 py-4 font-semibold text-gray-900">
                          {row.class}
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          {row.tuition}
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          {row.activities}
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          {row.library}
                        </td>
                        <td className="px-6 py-4 font-bold text-red-600">
                          {row.total}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Additional Charges */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Optional Add-ons
                </h3>
                <div className="space-y-3">
                  {[
                    { name: "Transport (One-way)", price: "₹8,000/year" },
                    { name: "Transport (Two-way)", price: "₹15,000/year" },
                    { name: "Meal Plan", price: "₹12,000/year" },
                    { name: "Extra-Curricular Classes", price: "₹5,000/year" },
                  ].map((addon, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <span className="text-gray-700">{addon.name}</span>
                      <span className="font-semibold text-gray-900">
                        {addon.price}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Payment Terms
                </h3>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm text-gray-600">
                      <strong>Annual:</strong> Due by June 30
                    </p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm text-gray-600">
                      <strong>Semi-Annual:</strong> Due by June 30 & December 31
                    </p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm text-gray-600">
                      <strong>Quarterly:</strong> Due by June 30, Sept 30, Dec
                      31, Mar 31
                    </p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-sm text-green-700">
                      <strong>✓ Sibling Discount:</strong> 10% on 2nd child
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Important Notes */}
          <Card className="border-none shadow-lg bg-yellow-50 border-yellow-200">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <AlertCircle className="w-5 h-5 text-yellow-600 mr-2" />
                Important Notes
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>• Fees are non-refundable once admitted</p>
                <p>
                  • Late fee of ₹500 will be charged if payment is made after
                  due date
                </p>
                <p>• 15% scholarship available for meritorious students</p>
                <p>
                  • Concession up to 25% available for economically weaker
                  sections on merit basis
                </p>
                <p>
                  • Registration fee of ₹5,000 is payable at the time of
                  admission (non-refundable)
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Download Prospectus */}
          <div className="text-center mt-8">
            <a
              href="#"
              className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              <Download className="w-5 h-5" />
              <span>Download Complete Fee Prospectus</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Clarification?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            For any questions regarding the fees Structure, please contact the
            Red Eagle Public School Fees Incharge
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+918400773055" className="inline-block">
              <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Call Fees Incharge: +91 8400773055
              </button>
            </a>
            <a
              href="mailto:info@redeaglepublicschool.com"
              className="inline-block"
            >
              <button className="bg-red-700 text-white hover:bg-red-800 px-8 py-4 rounded-lg font-semibold border-2 border-white transition-colors duration-200">
                Email Us
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeesPage;
