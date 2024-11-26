// HomePage.js
import React from "react";
import FeaturedVideos from "../components/FeaturedVideos";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="container mx-auto xl:max-w-7xl px-4">
        <FeaturedVideos />
      </div>
    </div>
  );
};

export default HomePage;
