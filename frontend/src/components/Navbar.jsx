import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CiLight, CiDark } from "react-icons/ci";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Missing", path: "/missing" },
    { name: "Events", path: "/events" },
    { name: "Volunteer", path: "/volunteer" },
    { name: "Contact", path: "/contact" },
    { name: "Admin", path: "/admin" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-500 font-sans 
      ${
        scrolled
          ? "py-2 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md shadow-lg border-b border-slate-100/30 dark:border-slate-800/30"
          : "py-5 bg-white dark:bg-slate-900"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              onClick={closeMenu}
              className="flex items-center gap-3 group"
            >
              <img
                src={logo}
                alt="ShelterConnect Logo"
                className="h-12 w-auto object-contain rounded-full shadow-md group-hover:scale-105 transition-transform"
              />
              <span className="font-heading font-black text-2xl tracking-tighter text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                ShelterConnect
              </span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-1 xl:space-x-3">
            <div className="flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path;
                return (
                  <div key={index} className="relative group px-3 py-2">
                    <Link
                      to={link.path}
                      className={`transition-all duration-300 font-bold text-sm uppercase tracking-wider whitespace-nowrap 
                        ${
                          isActive
                            ? "text-blue-600 dark:text-blue-400"
                            : "text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                        }`}
                    >
                      {link.name}
                    </Link>
                    <span
                      className={`absolute bottom-0 left-3 h-0.5 bg-blue-600 rounded-full transition-all duration-300 
                      ${isActive ? "w-4/5" : "w-0 group-hover:w-4/5"}`}
                    ></span>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center space-x-4 border-l pl-4 xl:pl-6 border-slate-200 dark:border-slate-700">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:ring-2 ring-blue-600/20 dark:ring-slate-700 transition-all flex-shrink-0"
                title="Toggle Theme"
              >
                {theme === "light" ? (
                  <CiDark size={22} />
                ) : (
                  <CiLight size={22} className="text-yellow-400" />
                )}
              </button>

              <Link
                to="/rescue"
                className="text-white bg-rose-600 hover:bg-rose-700 px-5 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all shadow-md shadow-rose-600/20 whitespace-nowrap"
              >
                Emergency
              </Link>
              <Link
                to="/donate"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all shadow-lg shadow-blue-600/30 whitespace-nowrap"
              >
                Donate
              </Link>
            </div>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:ring-2 ring-blue-600/20 dark:ring-slate-700 transition-all"
              title="Toggle Theme"
            >
              {theme === "light" ? (
                <CiDark size={22} />
              ) : (
                <CiLight size={22} className="text-yellow-400" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 dark:text-white text-3xl focus:outline-none p-1 rounded-lg"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden absolute w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-2xl border-t border-slate-100/30 dark:border-slate-800/30 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-4 pb-10 space-y-2 flex flex-col">
          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={index}
                to={link.path}
                onClick={closeMenu}
                className={`block px-5 py-4 rounded-xl text-base font-bold uppercase tracking-wider transition-all border-l-4 ${
                  isActive
                    ? "bg-blue-50 dark:bg-blue-900/40 text-blue-600 border-blue-600"
                    : "border-transparent text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-slate-800/50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col space-y-4 px-3">
            <Link
              to="/rescue"
              onClick={closeMenu}
              className="w-full text-center text-white bg-rose-600 hover:bg-rose-700 px-5 py-4 rounded-xl font-bold uppercase tracking-wider transition shadow-md shadow-rose-600/20"
            >
              Emergency
            </Link>
            <Link
              to="/donate"
              onClick={closeMenu}
              className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-4 rounded-xl font-bold uppercase tracking-wider transition shadow-lg shadow-blue-600/30"
            >
              Donate
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
