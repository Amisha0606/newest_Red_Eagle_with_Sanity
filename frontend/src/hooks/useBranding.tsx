import { useState, useEffect } from "react";
import sanityClient from "../lib/sanityClient";

interface BrandingData {
  schoolName: string;
  schoolShortName: string;
  tagline: string;
  logoImage: {
    asset: {
      url: string;
    };
  };
  altText: string;
  favicon?: {
    asset: {
      url: string;
    };
  };
}

export const useBranding = () => {
  const [branding, setBranding] = useState<BrandingData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBranding = async () => {
      try {
        const query = `*[_type == "logo"][0]{
          schoolName,
          schoolShortName,
          tagline,
          logoImage{
            asset->{
              url
            }
          },
          altText,
          favicon{
            asset->{
              url
            }
          }
        }`;

        const result = await sanityClient.fetch(query);

        // If no data exists, use fallback values
        if (!result) {
          setBranding({
            schoolName: "Red Eagle Group of Institutions",
            schoolShortName: "Red Eagle",
            tagline: "Group of Institutions",
            altText: "Red Eagle Group of Institution Logo",
            logoImage: null,
            favicon: null,
          } as BrandingData);
        } else {
          setBranding(result);
        }
      } catch (err) {
        console.error("Error fetching branding:", err);
        setError("Failed to load branding information");

        // Use fallback values on error
        setBranding({
          schoolName: "Red Eagle Group of Institutions",
          schoolShortName: "Red Eagle",
          tagline: "Group of Institutions",
          altText: "Red Eagle Group of Institution Logo",
          logoImage: null,
          favicon: null,
        } as BrandingData);
      } finally {
        setLoading(false);
      }
    };

    fetchBranding();
  }, []);

  return { branding, loading, error };
};
