import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Form from "../components/Form";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <NavBar />
      <Hero heading="CONTACT" text="Contact GLX Travel" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
