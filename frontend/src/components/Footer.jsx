import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Heart,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 pt-16 pb-8 border-t-[6px] border-blue-600 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white font-heading tracking-tight mb-2">
              Shelter<span className="text-blue-600">Connect</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              An NGO dedicated to the rescue, rehabilitation, and reintegration
              of homeless and missing individuals.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-slate-600 dark:text-slate-400"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-slate-600 dark:text-slate-400"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-slate-600 dark:text-slate-400"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-slate-600 dark:text-slate-400"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white font-heading mb-6 border-b border-slate-200 dark:border-slate-800 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-600 transition-colors flex items-center gap-2"
                >
                  <span className="text-blue-600">▸</span> About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/missing"
                  className="hover:text-blue-600 transition-colors flex items-center gap-2"
                >
                  <span className="text-blue-600">▸</span> Missing Persons
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="hover:text-blue-600 transition-colors flex items-center gap-2"
                >
                  <span className="text-blue-600">▸</span> NGO Events
                </Link>
              </li>
              <li>
                <Link
                  to="/volunteer"
                  className="hover:text-blue-600 transition-colors flex items-center gap-2"
                >
                  <span className="text-blue-600">▸</span> Volunteer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white font-heading mb-6 border-b border-slate-200 dark:border-slate-800 pb-2 inline-block">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-600 shrink-0 mt-0.5" />
                <span className="text-slate-600 dark:text-slate-400">
                  HopeHaven Shelter, Sector 3, Ghansoli, Navi Mumbai - 400701
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-600 shrink-0" />
                <span className="text-slate-600 dark:text-slate-400">
                  +91 98765 43210
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-600 shrink-0" />
                <span className="text-slate-600 dark:text-slate-400">
                  contact@shelterconnect.org
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white font-heading mb-6 border-b border-slate-200 dark:border-slate-800 pb-2 inline-block">
              Take Action
            </h4>
            <Link
              to="/rescue"
              className="w-full flex justify-center items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-lg font-bold text-sm transition-colors shadow-lg shadow-rose-900/20"
            >
              🚨 Request a Rescue
            </Link>
            <Link
              to="/donate"
              className="w-full flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold text-sm transition-colors shadow-lg shadow-blue-900/20"
            >
              <Heart size={16} /> Donate Now
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-center items-center gap-4 text-xs text-slate-500 text-center">
          <p>
            © {new Date().getFullYear()} HopeHaven Foundation. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
