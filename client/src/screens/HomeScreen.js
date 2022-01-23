import React from "react";
import Hero from "../components/Hero";
import OurProducts from "../components/OurProducts";
import OurPlans from "../components/OurPlans";
import HowItWork from "../components/HowItWorks";

const Home = () => {
  return (
    <>
      <Hero />
      <OurProducts />
      <HowItWork />
      <OurPlans />
    </>
  );
};

export default Home;
