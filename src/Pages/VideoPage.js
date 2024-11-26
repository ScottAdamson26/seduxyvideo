import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { VideoContext } from "../context/VideoContext";
import VerticalAds from "../components/VerticalAds";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const VideoPage = () => {
  const { uid } = useParams();
  const { getVideoById } = useContext(VideoContext);
  const videoData = getVideoById(uid);

  const [isLoading, setIsLoading] = useState(true); // State to track iframe loading

  if (!videoData) {
    return <p className="text-center text-white mt-10">Video not found.</p>;
  }

  const handleIframeLoad = () => {
    setIsLoading(false); // Set loading to false when iframe has loaded
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="container mx-auto xl:max-w-7xl px-4">
        <div className="flex py-8 space-x-4 h-[calc(100vh-200px)]">
          {/* Video Player Section */}
          <div className="flex-[4] relative">
            {/* Loader */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faCircleNotch}
                  spin
                  className="text-customPink-dark text-4xl"
                />
              </div>
            )}
            {/* Iframe */}
            <iframe
              src={videoData.src}
              frameBorder="0"
              allowFullScreen
              onLoad={handleIframeLoad} // Trigger when iframe finishes loading
              className="absolute top-0 left-0 w-full h-full"
              title={videoData.title}
            ></iframe>
          </div>

          {/* Vertical Ads Section */}
          <div className="flex-[1] h-full">
            <VerticalAds />
          </div>
        </div>

        {/* Video Details */}
        <div className="text-left mt-4">
          <h1 className="text-2xl font-semibold mb-2">{videoData.title}</h1>
          <p className="text-gray-400 text-sm">
            {videoData.views.toLocaleString()} views
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
