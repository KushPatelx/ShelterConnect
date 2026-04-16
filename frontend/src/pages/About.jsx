import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  HandHeart,
  ShieldCheck,
  Users,
  MapPin,
} from "lucide-react";
import img1 from "../assets/about-1.jpeg";

const About = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  const missionRef = useRef(null);
  const operationsRef = useRef(null);
  const impactRef = useRef(null);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/stories/all");
        const json = await res.json();
        if (json.success) setStories(json.data);
      } catch (error) {
        console.error("Failed to fetch stories");
      } finally {
        setLoading(false);
      }
    };
    fetchStories();
  }, []);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 100,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-900 min-h-screen font-sans transition-colors duration-300">
      <div className="bg-slate-950 pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 text-center border-b-[8px] border-blue-600">
        <div className="max-w-4xl mx-auto animate-fadeInUp">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-3 sm:mb-4 tracking-tight leading-tight">
            Our Identity & Purpose
          </h1>
          <div className="w-16 sm:w-24 h-1.5 bg-blue-600 mx-auto mb-6 sm:mb-8 rounded-full mt-6"></div>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 italic font-medium leading-snug px-2">
            "ShelterConnect: A journey of compassion, healing, and hope."
          </p>
        </div>
      </div>

      <div className="sticky top-[70px] sm:top-16 md:top-20 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
          <ul className="flex justify-start md:justify-center items-center overflow-x-auto no-scrollbar gap-2 sm:gap-6 py-3 sm:py-4 px-4 snap-x snap-mandatory">
            <li className="snap-start shrink-0">
              <button
                onClick={() => scrollToSection(missionRef)}
                className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 uppercase tracking-wider whitespace-nowrap transition-colors"
              >
                Mission & Vision
              </button>
            </li>
            <li className="snap-start shrink-0">
              <button
                onClick={() => scrollToSection(operationsRef)}
                className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 uppercase tracking-wider whitespace-nowrap transition-colors"
              >
                Operations
              </button>
            </li>
            <li className="snap-start shrink-0">
              <button
                onClick={() => scrollToSection(impactRef)}
                className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 uppercase tracking-wider whitespace-nowrap transition-colors"
              >
                Impact
              </button>
            </li>
          </ul>
        </div>
      </div>

      <main className="max-w-7xl mx-auto py-12 sm:py-20 px-4 sm:px-6 md:px-12 space-y-20 sm:space-y-32">
        <div
          ref={missionRef}
          className="scroll-mt-32 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center"
        >
          <div className="space-y-6 sm:space-y-10">
            <div className="bg-white dark:bg-slate-800 p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 relative overflow-hidden group hover:border-blue-600 transition-colors">
              <div className="absolute top-0 right-0 p-4 sm:p-6 opacity-5 transform group-hover:scale-110 transition-transform">
                <Target size={100} className="sm:w-[120px] sm:h-[120px]" />
              </div>
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                  <Target
                    size={24}
                    strokeWidth={2.5}
                    className="sm:w-[28px] sm:h-[28px]"
                  />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight">
                    Our Mission
                  </h2>
                </div>
              </div>
              <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed relative z-10">
                To provide a safe, dignified, and loving environment for the
                homeless, abandoned, and destitute.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 relative overflow-hidden group hover:border-indigo-500 transition-colors">
              <div className="absolute top-0 right-0 p-4 sm:p-6 opacity-5 transform group-hover:scale-110 transition-transform">
                <Eye size={100} className="sm:w-[120px] sm:h-[120px]" />
              </div>
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                  <Eye
                    size={24}
                    strokeWidth={2.5}
                    className="sm:w-[28px] sm:h-[28px]"
                  />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight">
                    Our Vision
                  </h2>
                </div>
              </div>
              <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed relative z-10">
                A world where no individual is left behind on the streets. We
                envision a society that is sensitive to the needs of the
                homeless.
              </p>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-blue-600 rounded-[2rem] sm:rounded-[3rem] transform rotate-3 scale-105 opacity-20 dark:opacity-40"></div>
            <img
              src={img1}
              alt="Care"
              className="relative rounded-[2rem] sm:rounded-[3rem] shadow-2xl w-full h-[400px] sm:h-[600px] object-cover"
            />
          </div>
        </div>

        <div ref={operationsRef} className="scroll-mt-32">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-xs sm:text-sm font-bold tracking-widest text-blue-600 uppercase mb-1 sm:mb-2">
              Core Operations
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
              What We Do
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 text-center hover:-translate-y-1 sm:hover:-translate-y-2 transition-all">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-rose-50 dark:bg-rose-900/20 text-rose-500 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <HandHeart size={28} className="sm:w-[36px] sm:h-[36px]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
                Rescue Operations
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
                Our active response team rescues sick, injured, or mentally
                challenged individuals from the streets.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 text-center hover:-translate-y-1 sm:hover:-translate-y-2 transition-all">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-blue-50 dark:bg-blue-900/20 text-blue-500 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <ShieldCheck size={28} className="sm:w-[36px] sm:h-[36px]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
                Safe Shelter & Care
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
                We provide rescued individuals with food, clean clothing,
                medical care, and a safe place to stay.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 text-center hover:-translate-y-1 sm:hover:-translate-y-2 transition-all">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-indigo-50 dark:bg-indigo-900/20 text-indigo-500 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <Users size={28} className="sm:w-[36px] sm:h-[36px]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
                Family Reunion
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
                With the help of local authorities and social media, we reunite
                these individuals with their families.
              </p>
            </div>
          </div>
        </div>

        <div ref={impactRef} className="scroll-mt-32">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-xs sm:text-sm font-bold tracking-widest text-blue-600 uppercase mb-1 sm:mb-2">
              Impact
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 sm:mb-6 leading-tight">
              Transformations that Inspire
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto italic text-sm sm:text-base px-2">
              "Real stories of hope and healing."
            </p>
          </div>

          {loading ? (
            <div className="text-center text-slate-500 py-10 text-sm sm:text-base">
              Loading stories of impact...
            </div>
          ) : stories.length === 0 ? (
            <div className="text-center text-slate-500 bg-slate-100 dark:bg-slate-800 p-8 sm:p-10 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-700 text-sm sm:text-base mx-4">
              More success stories are being updated soon. Stay tuned!
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {stories.map((story) => (
                <div
                  key={story._id}
                  className="bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-700"
                >
                  <div className="grid grid-cols-2 h-40 sm:h-64 bg-slate-200 dark:bg-slate-700">
                    <div className="relative border-r-2 sm:border-r-4 border-white dark:border-slate-900">
                      <div className="absolute top-2 left-2 z-10 bg-rose-500 text-white text-[8px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded shadow-md uppercase">
                        Before
                      </div>
                      <img
                        src={story.beforeImageUrl}
                        alt="Before"
                        className="relative z-0 w-full h-full object-cover grayscale"
                      />
                    </div>
                    <div className="relative">
                      <div className="absolute top-2 right-2 z-10 bg-emerald-500 text-white text-[8px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded shadow-md uppercase">
                        After
                      </div>
                      <img
                        src={story.afterImageUrl}
                        alt="After"
                        className="relative z-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="p-5 sm:p-8">
                    <h4 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-1 sm:mb-2">
                      {story.title}
                    </h4>
                    {story.location && (
                      <p className="text-xs sm:text-sm font-bold text-indigo-500 mb-3 sm:mb-4 flex items-center gap-1">
                        <MapPin size={12} className="sm:w-3.5 sm:h-3.5" />{" "}
                        {story.location}
                      </p>
                    )}
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs sm:text-sm line-clamp-4 sm:line-clamp-none">
                      {story.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <div className="bg-indigo-50 dark:bg-slate-950 py-16 sm:py-24 px-4 text-center border-t border-indigo-100 dark:border-slate-800">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
          Be a Part of Our Journey
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto">
          <Link
            to="/volunteer"
            className="bg-slate-900 text-white hover:bg-blue-600 font-bold py-3.5 sm:py-4 px-6 sm:px-10 rounded-xl transition-all shadow-lg text-sm sm:text-base"
          >
            Join as Volunteer
          </Link>
          <Link
            to="/donate"
            className="border-2 border-slate-900 text-slate-900 dark:border-white dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 font-bold py-3.5 sm:py-4 px-6 sm:px-10 rounded-xl transition-all text-sm sm:text-base"
          >
            Donate Now
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default About;
