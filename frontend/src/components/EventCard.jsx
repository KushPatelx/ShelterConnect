import React from "react";

const EventCard = ({ title, date, description, imageUrl }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="md:w-1/3 h-48 md:h-auto bg-slate-200">
        <img
          src={
            imageUrl || "https://via.placeholder.com/400x300?text=Event+Image"
          }
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6 md:w-2/3 flex flex-col justify-center">
        <div className="text-sm text-blue-600 font-bold mb-1 tracking-wider uppercase">
          {date}
        </div>
        <h3 className="text-2xl font-bold font-heading text-slate-900 mb-3">
          {title}
        </h3>
        <p className="text-slate-600 mb-4 line-clamp-3">{description}</p>
        <div>
          <button className="text-blue-600 font-semibold border-b-2 border-blue-600 hover:text-slate-900 hover:border-slate-900 transition-colors pb-1">
            Read More →
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
