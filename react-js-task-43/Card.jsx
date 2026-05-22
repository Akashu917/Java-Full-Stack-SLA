import React from "react";

function Card({ title, description }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-xl transition">
      
      <h2 className="text-2xl font-bold text-gray-800 mb-3">
        {title}
      </h2>

      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default Card;