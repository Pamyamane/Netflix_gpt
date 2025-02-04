import React from "react";

const VideoTitle = ({ original_title, overview }) => {
  return (
    <div className="max-w-2xl">
      <h1 className="text-6xl font-bold text-white drop-shadow-md">{original_title}</h1>
      <p className="text-lg text-gray-300 mt-4 leading-relaxed">{overview}</p>
      <div className="mt-6 flex space-x-4">
        <button className="bg-white text-black font-semibold px-6 py-3 rounded-md flex items-center hover:bg-opacity-80 transition-all duration-300 shadow-lg">
          ▶ Play
        </button>
        <button className="bg-gray-800 text-white font-semibold px-6 py-3 rounded-md flex items-center hover:bg-gray-700 transition-all duration-300 shadow-lg">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
