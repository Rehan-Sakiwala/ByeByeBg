import React from "react";
import Header from "../components/Header";
import BgRemovalSteps from "../components/BgRemovalSteps";
import BgSlider from "../components/BgSlider";

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-['Outfit']">
      <Header />
      {/* Hero Section */}

      {/* Background removal steps Section */}
      <BgRemovalSteps />

      {/* Slider Section */}
      <BgSlider />
      {/* Pricing Section */}
      {/* Testimonial Section */}
      {/* Try Now */}
    </div>
  );
}

export default Home;
