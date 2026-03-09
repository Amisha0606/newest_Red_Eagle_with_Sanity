import React, { useEffect, useState } from "react";
import {
  FileText,
  ArrowUpRight,
  ShieldCheck,
  Loader2,
  Shield,
  AlertCircle,
} from "lucide-react";
import client from "../lib/sanityClient";
import { Card, CardContent } from "@/components/ui/card";

const PublicDisclosurePage = () => {
  const [disclosureDocs, setDisclosureDocs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const query = `*[_type == "publicDisclosure" && defined(pdf) && pdf != ""] | order(title asc){
          title,
          pdf
        }`;

        const data = await client.fetch(query);
        setDisclosureDocs(data || []);
      } catch (err) {
        console.warn("Error loading disclosure documents:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDocs();
  }, []);

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
          <ShieldCheck className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Mandatory Public Disclosure
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Red Eagle Public School — Official CBSE compliance documents
            available for transparency and public access.
          </p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-red-200 bg-white">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Important Notice
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    As per CBSE guidelines, all mandatory public disclosure
                    documents are available below. If any document is currently
                    unavailable, it may be under verification or updating by the
                    school administration.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* DISCLOSURE DOCUMENTS */}
      <section className="max-w-5xl mx-auto px-4 pb-20 py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Documents & Information
          </h2>
        </div>
        {loading && (
          <div className="flex flex-col items-center py-16 text-gray-500">
            <Loader2 className="w-10 h-10 animate-spin mb-4" />
            <p>Loading disclosure documents...</p>
          </div>
        )}

        {!loading && disclosureDocs.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-200">
            <FileText className="w-10 h-10 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Documents Updating
            </h3>
            <p className="text-gray-500 text-sm">
              Mandatory public disclosure documents are being updated. Please
              check back shortly.
            </p>
          </div>
        )}

        {!loading && disclosureDocs.length > 0 && (
          <div className="space-y-4 p-4">
            {disclosureDocs.map((doc, index) => (
              <a
                key={index}
                href={doc.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-white hover:bg-red-50 border border-gray-200 hover:border-red-200 rounded-xl px-6 py-5 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-red-100 text-red-600 p-3 rounded-lg">
                    <FileText className="w-5 h-5" />
                  </div>

                  <span className="text-gray-800 font-semibold text-base md:text-lg">
                    {doc.title}
                  </span>
                </div>

                <ArrowUpRight className="text-gray-400 group-hover:text-red-600 transition-colors" />
              </a>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default PublicDisclosurePage;
