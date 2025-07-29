// src/components/Hero.jsx
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
    <section className="text-center py-20 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      <div className="absolute top-12 left-10 w-10 h-10 bg-green-500 text-white rounded-lg flex items-center justify-center rotate-12 shadow-md">
        <BsBriefcase className="text-xl" />
      </div>
      <div className="absolute bottom-16 left-20 w-8 h-8 bg-lime-400 text-white rounded-md rotate-12 flex items-center justify-center shadow">
        <BsCheck className="text-lg" />
      </div>
      <div className="absolute top-10 right-16 w-10 h-10 bg-orange-400 text-white rounded-md -rotate-12 flex items-center justify-center shadow">
        <BsBook className="text-xl" />
      </div>
      <div className="absolute bottom-12 right-16 w-9 h-9 bg-blue-500 text-white rounded-md rotate-12 flex items-center justify-center shadow">
        <AiOutlineUpload className="text-lg" />
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        Online CV Builder With <br />
        <span className="text-black">Creative Templates</span>
      </h1>
      <p className="mt-4 text-gray-600 text-sm md:text-base">
        Standout resume in minutes—no design skills needed.
      </p>

      <div className="mt-8 flex justify-center gap-4 flex-wrap">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md text-sm font-medium">
          Build a New Resume
        </button>
        <button className="border border-blue-500 text-blue-600 px-5 py-3 rounded-md text-sm font-medium hover:bg-blue-50">
          Upload My Existing Resume
        </button>
      </div>

  
      <div className="mt-16 flex justify-center">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden w-[90%] max-w-5xl border border-gray-200">

          <div className="flex justify-between items-center px-6 py-3 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <img
                src="/Frame.png"
                alt="logo"
                className="w-6 h-6"
              />
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

    
          <div className="flex">
      
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
