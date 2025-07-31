// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 lg:px-20 py-4 shadow-sm bg-white">
      <div className="flex items-center gap-2">
        <img src="/Frame.png" alt="logo" className="w-6 h-6" />
        <h1 className="text-3xl font-semibold text-gray-800">Resume Maker</h1>
      </div>

      <ul className="hidden md:flex items-center gap-6 text-lg font-medium text-gray-600">
        <li className="hover:text-blue-600 font-semibold">Home</li>

        <li>
          <Link to="/templates" className="hover:text-blue-600">Templates</Link>
        </li>
        <li className=" hover:text-blue-600 relative group cursor-pointer">
          Resources
          <span className="ml-1">&#x25BC;</span>
          {/* Dropdown on hover */}
          <ul className="absolute top-full left-0 mt-1 hidden group-hover:block bg-white shadow-lg p-2 w-40">
            <li className="hover:bg-gray-100 px-3 py-2">Blog</li>
            <li className="hover:bg-gray-100 px-3 py-2">Guides</li>
          </ul>
        </li>
        <li className='hover:text-blue-600'>Pricing</li>
        <li className='hover:text-blue-600'>Contact Us</li>
      </ul>

      <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-lg font-medium hover:bg-blue-700">
        <i className="bx bx-user mr-1"></i> Log In
      </button>
    </nav>
  );
};

export default Navbar;
