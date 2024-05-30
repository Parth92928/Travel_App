import React from "react";
import NavBar from "../components/NavBar";

import Footer from "../components/Footer";
import Hero from "../components/Hero";
import PricingCards from "../components/PricingCards";

const Pricing = () => {
  return (
    <div>
      <NavBar />
      <Hero heading="PRICING" text="Choose your trip" />
      <PricingCards />
      <Footer />
    </div>
  );
};

export default Pricing;
