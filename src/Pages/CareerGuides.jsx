import React from "react";
import { Link } from "react-router-dom";

const CareerGuides = () => {
  const cards = Array.from({ length: 18 });

  return (
    <div className="bg-[#f7f7f7] min-h-screen px-6 py-10">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-semibold text-black">Essential Career Guides</h1>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Find an online library of free career resources, job search strategies, and interview prep guides
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-4 mb-10">
        {["Featured Articles", "Resume", "Cover Letter", "Interview", "Career"].map((tab, i) => (
          <button
            key={i}
            className={`px-4 py-1.5 rounded-full border ${
              tab === "Resume" ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cards.map((_, index) => (
          <Link to={`/career-guides/${index + 1}`} key={index}>
            <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-all">
              <img
                src="/Frames.png"
                alt="Career Guide"
                className="w-full max-h-[500px] object-contain border"
              />
              <div className="p-4">
                <p className="text-sm text-gray-500 font-medium mb-1">Harvard Resume Writing Tips</p>
                <h3 className="text-base font-semibold mb-1">How to create a resume and cover letter.</h3>
                <p className="text-sm text-gray-600 mb-2">Focus on highlighting your accomplishments</p>
                <p className="text-xs text-gray-400">May 14, 2025 • By Tatjana</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CareerGuides;
