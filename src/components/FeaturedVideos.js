import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faPlayCircle, faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"; // For navigation
import { filters } from "../Database/Filters"; // Reintroduced Filters.js
import { VideoContext } from "../context/VideoContext"; // Use global video context

const FeaturedVideos = () => {
  const { videos, loading } = useContext(VideoContext); // Access video data from context
  const [selectedFilter, setSelectedFilter] = useState("All");

  // Filter videos based on the selected filter
  const filteredVideos = videos.filter((video) => {
    if (selectedFilter === "All") return true;
    return video.categories?.includes(selectedFilter);
  });

  if (loading) {
    return <p className="text-center text-white">Loading videos...</p>;
  }

  return (
    <div className="py-4">
      {/* Page Title */}
      <div className="flex items-center mb-4 px-2">
        <h1 className="text-2xl text-left font-semibold">Trending</h1>
        <FontAwesomeIcon
          icon={faFire}
          className="text-customPink-dark text-2xl ml-3"
        />
      </div>

      {/* Filter Row */}
      <div className="flex justify-between overflow-x-auto mb-6">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`flex-grow mx-2 px-2 py-1.5 rounded-full text-sm font-semibold transition-colors duration-300 ${
              selectedFilter === filter ? "straightGradient" : "bg-neutral-800"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      <section>
        <div className="grid gap-4 gap-y-5 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mb-32">
          {filteredVideos.map((video) => (
            <Link
              key={video.uid}
              to={`/video/${video.uid}`} // Use `uid` for navigation
              className="flex flex-col group"
            >
              {/* Thumbnail with Play Button */}
              <div className="relative pb-[56.25%] hover:cursor-pointer">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <FontAwesomeIcon
                    icon={faPlayCircle}
                    className="text-white text-5xl"
                  />
                </div>
              </div>
              {/* Video Title */}
              <p className="mt-2 text-left text-sm font-medium truncate w-full group-hover:underline">
                {video.title}
              </p>
              {/* View Counter */}
              <div className="flex items-center mt-1 text-left text-sm text-gray-400">
                <FontAwesomeIcon icon={faEye} className="mr-1" />
                {video.views.toLocaleString()} views
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturedVideos;
