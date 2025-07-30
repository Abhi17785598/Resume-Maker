import React from "react";
import Navbar from "../Components/Navbar";
const ResumeTemplates = () => {
  const colors = ["#000000", "#2563eb", "#ef4444", "#22c55e", "#eab308", "#6b7280"];

  return (
    <div className="bg-[#f5f5f5] min-h-screen px-6 sm:px-12 py-10">
      {/* Title and Description */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-black mb-2">Resume templates built to impress.</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Creative resume templates designed by professional typographers.
          No matter how you customize your resume, it will always stand out.
        </p>
      </div>

      {/* Toggle Tabs */}
      <div className="flex justify-center space-x-4 mb-6">
        <button className="bg-black text-white px-4 py-2 rounded font-medium">Resume Template</button>
        <button className="border px-4 py-2 rounded font-medium text-gray-700 hover:text-black">Cover Letter Template</button>
      </div>

      {/* Filters */}
      <div className="flex justify-center items-center gap-6 mb-10 flex-wrap">
        <div className="flex items-center gap-2">
          <label className="font-medium">Select job title:</label>
          <select className="border px-3 py-1 rounded">
            <option>Top design</option>
            <option>Modern</option>
            <option>Classic</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium">Color:</label>
          {colors.map((color, index) => (
            <span
              key={index}
              className="w-5 h-5 rounded-full border border-gray-400 cursor-pointer"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {Array.from({ length: 18 }).map((_, index) => (
          <div
  key={index}
  className="bg-white p-4 rounded shadow text-center hover:shadow-md transition-all"
>
  <img
    src="image.png"
    alt="Resume Template"
    className="w-full max-h-[500px] object-contain border"
  />
  <p className="text-sm text-gray-700 mt-2">Modern</p>
</div>

        ))}
      </div>
    </div>
  );
};

export default ResumeTemplates;
