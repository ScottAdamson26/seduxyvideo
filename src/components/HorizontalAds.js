import React from "react";

const HorizontalAds = () => {
  const ads = [
    { id: 1, text: "Ad 1" },
    { id: 2, text: "Ad 2" },
    { id: 3, text: "Ad 3" },
  ]; // Array of ads

  return (
    <div className="flex justify-between items-center w-full pt-4 space-x-4">
      {ads.map((ad) => (
        <div
          key={ad.id}
          className="flex-1 h-20 straightGradient rounded flex items-center justify-center text-white font-semibold text-lg"
        >
          <p className="opacity-75">{ad.text}</p>
        </div>
      ))}
    </div>
  );
};

export default HorizontalAds;
