import React from 'react';
import {
  AiOutlineLayout,
  AiOutlineUser,
  AiOutlineUpload,
  AiOutlineMessage,
  AiOutlineLogout,
} from 'react-icons/ai';
import {
  BsBriefcase,
  BsBook,
  BsImage,
  BsGlobe,
  BsFlag,
  BsCheck,
} from 'react-icons/bs';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-white to-blue-100 text-center">
      {/* Floating Icons */}
      <div className="absolute top-10 left-6 w-12 h-12 bg-green-500 text-white rounded-xl flex items-center justify-center rotate-[20deg] shadow-md">
        <BsBriefcase className="text-2xl" />
      </div>
      <div className="absolute top-1/3 left-6 w-10 h-10 bg-lime-400 text-white rounded-xl flex items-center justify-center rotate-[15deg] shadow-md">
        <BsCheck className="text-xl" />
      </div>
      <div className="absolute top-16 right-10 w-12 h-12 bg-orange-500 text-white rounded-xl flex items-center justify-center rotate-[25deg] shadow-md">
        <BsBook className="text-2xl" />
      </div>
      <div className="absolute bottom-16 right-16 w-11 h-11 bg-blue-500 text-white rounded-xl flex items-center justify-center rotate-[15deg] shadow-md">
        <AiOutlineUpload className="text-xl" />
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
        Online CV Builder With <br />
        <span className="text-black">Creative Templates</span>
      </h1>
      <p className="text-gray-600 text-base md:text-lg mb-8">
        Standout resume in minutes—no design skills needed.
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-4 flex-wrap mb-16">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-sm font-medium transition">
          Build a New Resume
        </button>
        <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md text-sm font-medium hover:bg-blue-50 transition">
          Upload My Existing Resume
        </button>
      </div>

      {/* Resume Preview Box */}
      <div className="flex justify-center">
        <div className="w-[90%] max-w-5xl bg-white border border-gray-200 shadow-xl rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-3 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <img src="/Frame.png" alt="logo" className="w-6 h-6" />
              <span className="font-semibold text-gray-800">Resume Maker</span>
            </div>
            <div className="space-x-3">
              <button className="px-4 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100">
                Share
              </button>
              <button className="px-4 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                Download
              </button>
            </div>
          </div>

          {/* Resume Body */}
          <div className="flex">
            {/* Sidebar */}
            <div className="bg-[#f5f7ff] px-3 py-4 border-r border-gray-200 flex flex-col justify-between items-center rounded-l-2xl">
              <div className="flex flex-col items-center gap-6 text-gray-700 text-xl">
                <AiOutlineLayout />
                <AiOutlineUser />
                <BsBriefcase />
                <BsBook />
                <BsImage />
                <BsGlobe />
                <BsFlag />
                <AiOutlineMessage />
              </div>
              <div className="w-full h-px bg-gray-200 my-4"></div>
              <div className="text-xl text-gray-700">
                <AiOutlineLogout />
              </div>
            </div>

            {/* Left Panel */}
            <div className="flex-1 bg-white p-8 text-left">
              <h2 className="text-2xl font-bold text-blue-800 tracking-wide">STEVE ROBERTS</h2>
              <p className="text-gray-700 font-medium">ARCHITECT</p>

              <div className="mt-6">
                <h3 className="text-blue-700 font-bold text-sm mb-1">PROFILE</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The origins of the first constellations date back to prehistoric times. Their purpose was to tell stories of their beliefs, experiences, creation, or mythology. The recognition of constellations has changed over time.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-blue-700 font-bold text-sm mb-1">EDUCATION</h3>
                <p className="text-gray-700 text-sm">
                  Master of Architecture (M.Arch.) | Harvard University — 2018
                  <br />
                  Thesis: Sustainable Urban Development and Smart Cities.
                  <br />
                  Bachelor of Architecture (B.Arch.) | Columbia University
                </p>
              </div>
            </div>

            {/* Right Panel */}
            <div className="w-1/3 bg-gray-50 p-8 text-left border-l border-gray-200">
              <div className="mb-6">
                <h3 className="text-blue-700 font-bold text-sm mb-1">LANGUAGES</h3>
                <ul className="text-gray-700 text-sm list-disc ml-4">
                  <li>English (Fluent)</li>
                  <li>Indonesian (Fluent)</li>
                  <li>Spanish (Proficient)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-blue-700 font-bold text-sm mb-1">SKILLS</h3>
                <ul className="text-gray-700 text-sm list-disc ml-4 space-y-1">
                  <li>Architectural Design</li>
                  <li>Green Building Design</li>
                  <li>3D Modeling</li>
                  <li>BIM</li>
                  <li>Documentation</li>
                  <li>Project Management</li>
                  <li>Client Consultation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
