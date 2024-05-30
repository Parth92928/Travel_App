import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import TrainingSection from "../components/TrainingSection";

const Training = () => {
  return (
    <div>
      <NavBar />
      <Hero heading="TRAINING" text="Pre-Flight & In-Flight Training" />
      <TrainingSection />
      <Footer />
    </div>
  );
};

export default Training;
