import React from "react";
import { Link } from "react-router-dom";
import buildingImage from "../assets/landing-hero.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative w-full min-h-[100svh] md:min-h-[85vh] flex items-center justify-center bg-cover bg-center bg-no-repeat pt-24 pb-32 transition-colors"
      style={{ backgroundImage: `url(${buildingImage})` }}
    >
      {/* Premium Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-900/80 to-slate-950/95"></div>

      {/* Main Content Group */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center mt-8">
        {/* Floating Badge */}
        <div className="inline-block bg-blue-500/20 border border-blue-500/30 backdrop-blur-md text-blue-400 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-widest mb-6 shadow-lg uppercase">
          Urban Homeless Shelter Initiative
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 drop-shadow-2xl leading-tight tracking-tight">
          HopeHaven <br className="hidden md:block" /> Foundation
        </h1>

        {/* Glow Divider */}
        <div className="w-16 sm:w-24 h-1.5 bg-blue-500 mx-auto mb-8 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)]"></div>

        {/* Quotes */}
        <div className="mb-10 sm:mb-12 space-y-2">
          <p className="text-lg sm:text-xl md:text-2xl text-slate-200 font-medium italic drop-shadow-md">
            "Compassion in Action, Dignity in Life"
          </p>
          <p className="text-base sm:text-lg text-blue-200/80 font-medium">
            Restoring hope for the homeless and destitute.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full max-w-2xl mx-auto">
          <Link
            to="/rescue"
            className="w-full sm:w-auto bg-rose-600 hover:bg-rose-700 text-white px-8 py-3.5 sm:py-4 rounded-2xl font-bold transition-all shadow-xl shadow-rose-900/40 flex items-center justify-center border border-rose-500 group"
          >
            <span className="text-base sm:text-lg flex items-center gap-2">
              🚨 Emergency Rescue
            </span>
          </Link>

          <Link
            to="/donate"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 sm:py-4 rounded-2xl font-bold transition-all shadow-xl shadow-blue-900/40 flex items-center justify-center border border-blue-500 group"
          >
            <span className="text-base sm:text-lg">Support Our Cause</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
