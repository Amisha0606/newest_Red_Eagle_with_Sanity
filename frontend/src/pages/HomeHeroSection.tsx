import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import Counter from "@/components/ui/counter";

const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0);

  /* Parallax scroll effect */
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden pt-24">
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${offsetY * 0.4}px)` /* Parallax speed */,
        }}
      >
        <img
          src="/assets/school/SchoolFullPicture.jpg"
          alt="Red Eagle School"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-gray-500/80 via-gray-900/80 to-gray-700/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-red-600/20 backdrop-blur-sm border border-red-500/30 rounded-full px-4 py-2 mb-8">
          <Sparkles className="w-4 h-4 text-red-400" />
          <span className="text-red-300 text-sm font-medium">
            Admissions Open for 2026–27
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Welcome to
          <br />
          <span className="text-red-500">Red Eagle Group</span>
          <br />
          of Institutions
        </h1>

        <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto mb-14 leading-relaxed">
          Providing quality education and a nurturing environment where students
          grow academically, intellectually and morally.
        </p>

        <div className="grid grid-cols-3 gap-10 max-w-4xl mx-auto">
          <Counter number={15} suffix="+" label="Years of Excellence" />

          <Counter number={3500} suffix="+" label="Students" />

          <Counter number={95} suffix="%" label="Success Rate" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
