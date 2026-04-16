import React, { useState } from "react";
import { UserPlus, Image as ImageIcon, X, AlertCircle } from "lucide-react";

const AddPerson = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    address: "",
    reason: "",
    condition: "",
    broughtBy: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const clearImage = () => {
    setFormData({ ...formData, image: null });
    setImagePreview(null);
    document.getElementById("person-image").value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const token = localStorage.getItem("adminToken");
      const submitData = new FormData();

      submitData.append("fullName", formData.fullName);
      submitData.append("age", Number(formData.age));
      submitData.append("gender", formData.gender);
      submitData.append("address", formData.address);
      submitData.append("reason", formData.reason);
      submitData.append("condition", formData.condition);
      submitData.append("broughtBy", formData.broughtBy);

      if (formData.image) {
        submitData.append("image", formData.image);
      }

      const response = await fetch("http://localhost:5000/api/persons/add", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: submitData,
      });

      const data = await response.json();

      if (data.success) {
        alert("New resident added successfully!");
        setFormData({
          fullName: "",
          age: "",
          gender: "",
          address: "",
          reason: "",
          condition: "",
          broughtBy: "",
          image: null,
        });
        setImagePreview(null);
        document.getElementById("person-image").value = "";
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      alert("Failed to connect to server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClear = () => {
    if (window.confirm("Are you sure you want to clear the form?")) {
      setFormData({
        fullName: "",
        age: "",
        gender: "",
        address: "",
        reason: "",
        condition: "",
        broughtBy: "",
        image: null,
      });
      setImagePreview(null);
      document.getElementById("person-image").value = "";
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden font-sans transition-colors duration-300">
      <div className="p-6 md:p-8 border-b border-slate-100 dark:border-slate-800 flex items-center gap-4 bg-slate-50 dark:bg-slate-800/50">
        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl border border-blue-200 dark:border-blue-800/50">
          <UserPlus size={24} strokeWidth={2.5} />
        </div>
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white font-heading tracking-tight">
            Add New Resident
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
            Register a newly rescued individual into the shelter database.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-8">
        {/* Section 1: Basic Info */}
        <div>
          <h3 className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4 border-b border-slate-100 dark:border-slate-800 pb-2">
            Personal Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                Full Name / Alias *
              </label>
              <input
                required
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Unknown / John Doe"
                className="w-full p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                Age (Approx) *
              </label>
              <input
                required
                name="age"
                type="number"
                value={formData.age}
                onChange={handleChange}
                placeholder="e.g. 45"
                className="w-full p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                Gender *
              </label>
              <select
                required
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none transition-colors"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                Found At Location *
              </label>
              <input
                required
                name="address"
                type="text"
                value={formData.address}
                onChange={handleChange}
                placeholder="e.g. Kalyan Station Platform 1"
                className="w-full p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Condition & Admission */}
        <div>
          <h3 className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4 border-b border-slate-100 dark:border-slate-800 pb-2">
            Admission Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                Brought By *
              </label>
              <input
                required
                name="broughtBy"
                type="text"
                value={formData.broughtBy}
                onChange={handleChange}
                placeholder="e.g. NMMC Rescue Team / NGO Volunteer"
                className="w-full p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                Primary Reason for Admission *
              </label>
              <input
                required
                name="reason"
                type="text"
                value={formData.reason}
                onChange={handleChange}
                placeholder="e.g. Homeless, Injured, Mentally Ill"
                className="w-full p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none transition-colors"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                Physical / Mental Condition Details
              </label>
              <textarea
                name="condition"
                rows="3"
                value={formData.condition}
                onChange={handleChange}
                placeholder="Describe current health status, injuries, or behavior..."
                className="w-full p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none transition-colors resize-none"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Section 3: Photo Upload */}
        <div>
          <h3 className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4 border-b border-slate-100 dark:border-slate-800 pb-2">
            Identification
          </h3>

          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-1 w-full">
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                Upload Photograph
              </label>
              <div className="relative border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-6 bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-center group">
                <input
                  type="file"
                  id="person-image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div className="pointer-events-none flex flex-col items-center justify-center space-y-2">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full group-hover:scale-110 transition-transform">
                    <ImageIcon size={28} />
                  </div>
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                    Click to upload or drag and drop
                  </span>
                  <span className="text-xs text-slate-500">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </span>
                </div>
              </div>
            </div>

            {/* Image Preview Box */}
            {imagePreview && (
              <div className="relative w-40 h-40 rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700 shrink-0">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={clearImage}
                  className="absolute top-2 right-2 p-1.5 bg-black/60 text-white rounded-lg hover:bg-red-600 backdrop-blur-sm transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* 🔥 FIX: Buttons contrast explicitly handled for dark mode */}
        <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
          <button
            type="button"
            onClick={handleClear}
            className="px-6 py-3.5 rounded-xl font-bold transition-all text-slate-700 bg-slate-100 border border-slate-200 hover:bg-slate-200 dark:text-slate-300 dark:bg-slate-800 dark:border-slate-700 dark:hover:bg-slate-700 dark:hover:text-white w-full sm:w-auto"
          >
            Clear Form
          </button>

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3.5 rounded-xl font-bold transition-all bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20 disabled:opacity-50 w-full sm:w-auto flex justify-center items-center gap-2"
          >
            {isSubmitting ? (
              "Saving Record..."
            ) : (
              <>
                <UserPlus size={18} /> Add Resident
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPerson;
