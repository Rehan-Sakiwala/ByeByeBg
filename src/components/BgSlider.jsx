import React, { useState } from "react";
import { assets, categories } from "../assets/assets";

function BgSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeCategory, setActiveCategory] = useState("People");

  const handleSliderChange = (e) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="mb-16 relative">
      {/* Section title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
        Stunning quality.
      </h2>

      {/* Category Selector */}
      <div className="flex justify-center mb-10 flex-wrap">
        <div className="inline-flex gap-4 bg-gray-100 p-2 rounded-full flex-wrap justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full font-medium ${
                activeCategory === category
                  ? "bg-white text-gray-800 shadow-sm"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Image comparison slider */}
      <div className="relative w-full max-w-4xl overflow-hidden m-auto rounded-xl shadow-lg">
        {/* Original image (left side) */}
        <img
          src={assets.people_org}
          alt="original image"
          className="w-full h-full object-cover"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        />

        {/* Processed image (right side) */}
        <img
          src={assets.people}
          alt="bg removed image"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
        />

        {/* Slider control */}
        <input
          type="range"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider opacity-0 cursor-pointer slider"
          min={0}
          max={100}
          onChange={handleSliderChange}
          value={sliderPosition}
        />

        {/* Visual slider line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg border-2 border-gray-300 flex items-center justify-center">
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BgSlider;
