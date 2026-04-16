import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import {
  Activity,
  Shield,
  Users,
  ArrowRight,
  HeartPulse,
  Stethoscope,
  Utensils,
  BookOpen,
  Quote,
  Globe,
  Award,
} from "lucide-react";

const AnimatedCounter = ({ end, label, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    if (end === 0 || !end) {
      setCount(0);
      return;
    }
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="flex flex-col items-center justify-center p-6 transition-all hover:scale-105 duration-300">
      <h3 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 mb-2">
        {prefix}
        {count}
        {suffix}
      </h3>
      <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-[0.2em] text-xs text-center">
        {label}
      </p>
    </div>
  );
};

const Home = () => {
  const [stats, setStats] = useState({ sheltered: 0, rescued: 0, reunited: 0 });

  useEffect(() => {
    const fetchLiveStats = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/persons/stats");
        const json = await res.json();
        if (json.success) {
          setStats({
            sheltered: json.data.totalSheltered || 0,
            rescued: json.data.rescuedPeople || 0,
            reunited: json.data.reunited || 0,
          });
        }
      } catch (error) {
        console.error("Failed to fetch live stats");
      }
    };
    fetchLiveStats();
  }, []);

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 font-sans transition-colors duration-300 overflow-hidden">
      {/* 🚀 Hero Section component imported */}
      <HeroSection />

      {/* 📊 FLOATING STATS BAR (Strictly Real Data Now) */}
      <section className="relative z-20 max-w-5xl mx-auto px-4 -mt-16 sm:-mt-24">
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/50 dark:border-slate-700/50 p-2 md:p-4 flex flex-col md:flex-row justify-around divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-slate-800">
          <AnimatedCounter
            end={stats.sheltered}
            label="Active Residents"
            suffix="+"
          />
          <AnimatedCounter
            end={stats.rescued}
            label="Total Rescues"
            suffix="+"
          />
          <AnimatedCounter end={stats.reunited} label="Families Reunited" />
        </div>
      </section>

      {/* 🏢 CORPORATE SPONSORS / TRUSTED BY */}
      <section className="py-12 border-b border-slate-200/50 dark:border-slate-800/50 bg-white/30 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-6">
            Supported By & Partnered With
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 dark:opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 text-xl font-black text-slate-800 dark:text-white">
              <Globe size={24} /> GlobalCare
            </div>
            <div className="flex items-center gap-2 text-xl font-black text-slate-800 dark:text-white">
              <Shield size={24} /> SecureLife Auth
            </div>
            <div className="flex items-center gap-2 text-xl font-black text-slate-800 dark:text-white">
              <Award size={24} /> UN Habitat
            </div>
            <div className="flex items-center gap-2 text-xl font-black text-slate-800 dark:text-white font-serif">
              TechForGood
            </div>
          </div>
        </div>
      </section>

      {/* 🧩 BENTO GRID APPROACH SECTION */}
      <section className="py-24 relative">
        <div className="absolute top-20 left-0 w-72 h-72 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-16 md:text-center max-w-3xl mx-auto">
            <span className="text-blue-600 dark:text-blue-400 font-black tracking-widest uppercase text-sm bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-full border border-blue-100 dark:border-blue-800/50">
              Our Methodology
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mt-6 leading-tight tracking-tight">
              A Comprehensive{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Care Ecosystem
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-6 text-lg leading-relaxed font-medium">
              We go beyond providing a temporary roof. Our data-driven,
              interconnected systems ensure that every individual gets medical
              attention, psychological support, and a definitive pathway back to
              society.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 p-8 md:p-12 rounded-[2.5rem] border border-slate-200 dark:border-slate-700/50 shadow-xl group hover:shadow-2xl hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-500 overflow-hidden relative">
              <div className="absolute -right-10 -bottom-10 opacity-5 dark:opacity-10 text-blue-600 group-hover:scale-110 transition-transform duration-700">
                <Activity size={250} />
              </div>
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                <HeartPulse size={32} strokeWidth={2.5} />
              </div>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4 relative z-10">
                Medical & Psychiatric Rehabilitation
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed relative z-10 max-w-lg">
                Immediate first-aid, daily medical rounds, and specialized
                psychological therapies to heal traumas and mental health
                challenges faced on the streets.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-700/50 shadow-xl group hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between">
              <div className="w-14 h-14 bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 rounded-2xl flex items-center justify-center mb-6">
                <Shield size={28} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Rapid Rescue
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  24/7 active response team bridging the gap between an
                  emergency alert and a secure shelter environment.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🌟 KEY INITIATIVES SECTION */}
      <section className="py-24 bg-slate-100/50 dark:bg-slate-900/50 border-y border-slate-200/50 dark:border-slate-800/50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Our Core Initiatives
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-4 text-lg max-w-2xl mx-auto">
              Addressing the root causes of homelessness through targeted,
              impact-driven programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Utensils size={24} />,
                title: "Zero Hunger Drive",
                desc: "Providing 5,000+ nutritious meals monthly to the destitute.",
                color: "text-orange-500",
                bg: "bg-orange-50 dark:bg-orange-900/20",
                border: "hover:border-orange-500",
              },
              {
                icon: <Stethoscope size={24} />,
                title: "Mobile Clinics",
                desc: "Weekly health checkups and free medicine distribution in slums.",
                color: "text-emerald-500",
                bg: "bg-emerald-50 dark:bg-emerald-900/20",
                border: "hover:border-emerald-500",
              },
              {
                icon: <BookOpen size={24} />,
                title: "Skill Development",
                desc: "Vocational training for rescued individuals to ensure self-reliance.",
                color: "text-indigo-500",
                bg: "bg-indigo-50 dark:bg-indigo-900/20",
                border: "hover:border-indigo-500",
              },
              {
                icon: <Users size={24} />,
                title: "Awareness Camps",
                desc: "Educating local communities on how to help the homeless effectively.",
                color: "text-blue-500",
                bg: "bg-blue-50 dark:bg-blue-900/20",
                border: "hover:border-blue-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-lg border border-slate-100 dark:border-slate-700 transition-all duration-300 hover:-translate-y-2 ${item.border}`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${item.bg} ${item.color}`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 💬 VOICES OF IMPACT (Testimonials) */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                Voices of Impact
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mt-4 text-lg">
                Hear from the people whose lives have been transformed and the
                heroes who make it happen.
              </p>
            </div>
            <Link
              to="/about"
              className="text-blue-600 dark:text-blue-400 font-bold hover:underline flex items-center gap-2"
            >
              Read all stories <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-600 text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              <Quote
                size={120}
                className="absolute -top-6 -left-6 opacity-10 rotate-180"
              />
              <div className="relative z-10">
                <p className="text-xl md:text-2xl font-medium leading-relaxed italic mb-8">
                  "I had lost all hope and forgot my own name after living on
                  the streets for 3 years. HopeHaven didn't just give me
                  food, they gave me my life back and found my daughter."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold text-xl">
                    R
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Ramesh P.</h4>
                    <p className="text-blue-200 text-sm">Rescued Resident</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-700 relative overflow-hidden">
              <Quote
                size={120}
                className="absolute -top-6 -right-6 opacity-5 dark:opacity-10 text-slate-900 dark:text-white"
              />
              <div className="relative z-10">
                <p className="text-xl md:text-2xl font-medium leading-relaxed italic mb-8 text-slate-700 dark:text-slate-300">
                  "Volunteering here has been the most fulfilling experience of
                  my life. The system they have built for tracking and
                  rehabilitating individuals is truly world-class."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl">
                    A
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg">
                      Anjali S.
                    </h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                      Medical Volunteer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 PREMIUM CTA BANNER */}
      <section className="py-12 px-4 mb-12">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-700 to-indigo-800 dark:from-blue-900 dark:to-slate-900 rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl border border-blue-500/30 dark:border-slate-700">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Ready to make a real difference?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto">
              Whether you want to volunteer your time, report a missing person,
              or support our operations financially, every action counts.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/donate"
                className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-2xl font-black transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 text-lg hover:-translate-y-1"
              >
                Donate Now <HeartPulse size={20} />
              </Link>
              <Link
                to="/missing"
                className="bg-transparent border-2 border-white/70 text-white hover:bg-white/10 px-8 py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 text-lg hover:-translate-y-1"
              >
                Find Missing <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
