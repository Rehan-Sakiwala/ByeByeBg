import React from "react";
import Header from "../components/Header";
import BgRemovalSteps from "../components/BgRemovalSteps";
import BgSlider from "../components/BgSlider";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import TryNow from "../components/TryNow";

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
      <Pricing />

      {/* Testimonial Section */}
      <Testimonials />

      {/* Try Now */}
      <TryNow />
    </div>
  );
}

export default Home;
