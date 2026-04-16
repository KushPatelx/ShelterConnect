import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Clock,
  User,
  MessageCircle,
} from "lucide-react";
import contactBg from "../assets/contact-bg.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Message sent successfully! Our team will contact you soon.");
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "General Inquiry",
          message: "",
        });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="pt-32 pb-20 min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300 font-sans relative"
      style={{
        backgroundImage: `url(${contactBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-slate-950/70 dark:bg-slate-950/80 backdrop-blur-[2px]"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            Get In Touch
          </h1>
          <p className="text-slate-100 max-w-2xl mx-auto text-xl leading-relaxed font-medium">
            Have a question or want to help? Reach out to us. Our team will get
            back to you shortly.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/3 w-full space-y-6">
            <div className="bg-slate-900 text-white rounded-[2.5rem] shadow-2xl p-10 relative overflow-hidden h-full border border-blue-900/50">
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-10 border-b border-blue-800 pb-4 flex items-center gap-3">
                  <User size={24} className="text-blue-500" /> Contact Info
                </h2>

                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="bg-blue-800/50 p-3 rounded-xl text-blue-400">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-1">
                        Our Location
                      </h3>
                      <p className="text-slate-200 text-sm leading-relaxed">
                        NMMC Urban Homeless Shelter, Sector 3, Ghansoli, Navi
                        Mumbai - 400701
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="bg-blue-800/50 p-3 rounded-xl text-blue-400">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-1">
                        Call Us
                      </h3>
                      <p className="text-2xl font-black">+91 98765 43210</p>
                      <div className="flex items-center gap-1 mt-1.5 text-rose-400 text-xs font-bold">
                        <Clock size={12} /> 24/7 Emergencies
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="bg-blue-800/50 p-3 rounded-xl text-blue-400">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-1">
                        Email
                      </h3>
                      <p className="text-slate-200">
                        contact@shelterconnect.org
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600 opacity-10 rounded-full blur-3xl"></div>
            </div>
          </div>

          <div className="lg:w-2/3 w-full bg-white/90 dark:bg-slate-900/90 rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-slate-100/50 dark:border-slate-800/50 transition-all backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950/30 text-blue-600 rounded-xl flex items-center justify-center">
                <MessageCircle size={28} />
              </div>
              <div>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white">
                  Send a Message
                </h2>
              </div>
            </div>

            <div className="w-full h-px bg-slate-200 dark:bg-slate-700 my-8"></div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2 ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 bg-slate-100/70 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-600 text-slate-900 dark:text-white rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all font-medium"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2 ml-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-4 bg-slate-100/70 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-600 text-slate-900 dark:text-white rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all font-medium"
                    placeholder="+91 00000 00000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2 ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 bg-slate-100/70 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-600 text-slate-900 dark:text-white rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all font-medium"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2 ml-1">
                  Your Message
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-slate-100/70 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-600 text-slate-900 dark:text-white rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none font-medium"
                  rows="5"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white font-black py-5 rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/30 text-lg flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={20} /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
