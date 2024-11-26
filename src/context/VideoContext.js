import React, { createContext, useState, useEffect } from "react";

export const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("http://localhost:5000/featured");
        const data = await response.json();

        // Add random views to each video
        const videosWithViews = data.videos.map((video) => ({
          ...video,
          views: Math.floor(Math.random() * 100000) + 1000,
        }));

        setVideos(videosWithViews);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch videos:", error);
      }
    };

    fetchVideos();
  }, []);

  // Helper function to find a video by UID
  const getVideoById = (uid) => videos.find((video) => video.uid === uid);

  return (
    <VideoContext.Provider value={{ videos, loading, getVideoById }}>
      {children}
    </VideoContext.Provider>
  );
};

export default VideoProvider;
