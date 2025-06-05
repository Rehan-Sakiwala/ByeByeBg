import React from "react";
import { assets } from "../assets/assets";

function Header() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
      {/* Left Section: Video banner */}
      <div className="order-2 md:order-1 flex justify-center">
        <div className="shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] rounded-3xl overflow-hidden">
          <video
            src={assets.video_banner}
            autoPlay
            loop
            muted
            className="w-full max-w-[400px] h-auto object-cover"
          />
        </div>
      </div>

      {/* Right Section: Text content */}
      <div className="order1 md:order-2">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          One stop solution for{" "}
          <span className="text-indigo-700">erasing background.</span>
        </h1>
        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
          AI Background Removal is a cutting-edge technology that automatically
          detects and removes the background from images. It enables users to
          isolate subjects. Whether you're creating content for e-commerce,
          graphic design, or social media, AI-powered background removal offers
          fast, accurate, and high-quality results, saving time and enhancing
          creativity. Simply upload your image, and let the AI do the work with
          precision and ease.
        </p>

        <div>
          <input type="file" accept="image/*" id="upload1" hidden />
          <label
            htmlFor="upload1"
            className="bg-black text-white font-medium px-8 py-4 rounded-full hover:opacity-60 transition-transform hover:scale-105 text-lg"
          >
            Upload your image
          </label>
        </div>
      </div>
    </div>
  );
}

export default Header;
