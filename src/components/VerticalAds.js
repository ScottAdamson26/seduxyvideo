import React from "react";

const VerticalAds = () => {
  const ads = [
    { id: 1, text: "Ad 1" },
    { id: 2, text: "Ad 2" },
    { id: 3, text: "Ad 3" },
  ]; // Array of ads

  return (
    <div className="flex flex-col h-full space-y-8 pl-6">
      {ads.map((ad) => (
        <div
          key={ad.id}
          className="flex-1 bg-gradient-to-br from-pink-400 to-pink-600 rounded flex items-center justify-center text-white font-semibold text-lg"
        >
          <p className="opacity-75">{ad.text}</p>
        </div>
      ))}
    </div>
  );
};

export default VerticalAds;
