import React from "react";
import { useParams } from "react-router-dom";

const GuideDetails = () => {
  const { id } = useParams(); // gets guide ID from URL

  return (
    <div className="flex flex-col lg:flex-row p-4 sm:p-6 bg-[#f7f7f7] min-h-screen gap-4 lg:gap-6">
      
      {/* Sidebar */}
      <div className="w-full lg:w-1/5 bg-white p-4 rounded shadow">
        <h3 className="font-semibold mb-4">Contents</h3>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>– Personal Info</li>
          <li>– Education</li>
          <li>– Work Experience</li>
          <li>– Skills</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-full lg:flex-1 bg-white p-4 sm:p-6 rounded shadow space-y-4">
        <img src="/Frames.png" className="w-full h-auto rounded" alt="Banner" />

        <h1 className="text-lg sm:text-xl font-semibold">
          Functional Resume Templates & Expert Writing Tips (Guide #{id})
        </h1>

        <p className="text-gray-600">
          OpenAI doesn’t release new models gradually. Remember GPT-4. Silence, silence, then boom — the world changed overnight.
        </p>

        <p className="text-gray-600">
          In February 2024, Sam Altman said GPT-5 would follow 4.5 “in months, not years.” If you do the math, that puts us squarely in Summer 2025...
        </p>

        <img src="/image 7.png" className="w-full h-auto rounded" alt="OpenAI" />

        <p className="text-gray-600">
          So what can we expect? OpenAI doesn’t release new models gradually. Remember GPT-4. Silence, silence, then boom...
        </p>

        <p className="text-gray-600">
          In February 2024, Sam Altman said GPT-5 would follow 4.5 “in months, not years.” That puts us squarely in Summer 2025...
        </p>
      </div>
    </div>
  );
};

export default GuideDetails;
