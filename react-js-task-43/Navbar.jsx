import React from "react";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
        
        <h1 className="text-2xl font-bold">
          Tailwind App
        </h1>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="/" className="hover:text-gray-200">
            Home
          </a>

          <a href="/" className="hover:text-gray-200">
            About
          </a>

          <a href="/" className="hover:text-gray-200">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;