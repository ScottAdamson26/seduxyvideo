
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = [
    "Trending",
    "Gangbang",
    "Schoolgirl",
    "Cuckold",
    "Gooning",
    "Teen",
    "Bondage",
    "Domination",
    "Public",
    "Big Tits",
  ];


  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Inner Wrapper */}
      <div className="container mx-auto xl:max-w-7xl px-4">
        {/* Page Title */}
        <div className="flex items-center mb-6 px-2">
          <h1 className="text-2xl text-left font-semibold">Trending</h1>
          <FontAwesomeIcon icon={faFire} className="text-customBlue-dark text-2xl ml-3" />

        </div>

        {/* Filter Row */}
        <div className="flex justify-between overflow-x-auto mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`flex-grow mx-2 px-4 py-2 rounded-full text-sm font-bold transition-colors duration-300 ${
                selectedFilter === filter
                  ? "bg-gradient-to-br from-customBlue-light via-customBlue to-customBlue-dark bg-opacity-50"
                  : "bg-neutral-800"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Featured Videos Section */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example Video Cards */}
            <div className="bg-neutral-800 p-4 rounded-lg">
              <div className="aspect-w-16 aspect-h-9 bg-gray-700 rounded-md mb-2"></div>
              <h3 className="text-lg font-medium">Example Video Title 1</h3>
              <p className="text-gray-400 text-sm">
                This is a short description of the video.
              </p>
            </div>

            <div className="bg-neutral-800 p-4 rounded-lg">
              <div className="aspect-w-16 aspect-h-9 bg-gray-700 rounded-md mb-2"></div>
              <h3 className="text-lg font-medium">Example Video Title 2</h3>
              <p className="text-gray-400 text-sm">
                This is a short description of the video.
              </p>
            </div>

            <div className="bg-neutral-800 p-4 rounded-lg">
              <div className="aspect-w-16 aspect-h-9 bg-gray-700 rounded-md mb-2"></div>
              <h3 className="text-lg font-medium">Example Video Title 3</h3>
              <p className="text-gray-400 text-sm">
                This is a short description of the video.
              </p>
            </div>
          </div>
        </section>

        {/* More Sections Can Go Here */}
      </div>
    </div>
  );
};

export default HomePage;
