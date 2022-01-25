import React from "react";
import { howItWorks1, howItWorks3, howItWorks4 } from "../utils/Lists";
import "../styles/HowItWorks.scss";

const HowItWorks = () => {
  const blocks = [
    {
      heading: "Pick a scent",
      image: howItWorks1,
      paragraph:
        "Explore our collection of Blue de Chanel, Armani Code, some Jo Malone, and so much more ",
    },
    {
      heading: "Confirm your purchase",
      image: howItWorks4,
      paragraph:
        "Within 48Hrs you will be able to switch up your scent to match your energy thanks to our partnerships with shiping companies worldwide!",
    },
    {
      heading: "Receive your Fragrance",
      image: howItWorks3,
      paragraph:
        "At Aroma Shop, we believe in fast delivery and expert pricing. Good deals never smelt any better.",
    },
  ];

  return (
    <div className="how-it-works">
      <h1 className="hiw-main-heading">How It Works</h1>

      <div className="horizontal-scroll">
        <div className="how-it-work-blocks">
          {blocks.map((block, index) => (
            <div key={index} className="hiw-block">
              <span className="top-blue-circle">{index + 1}</span>
              <img className="how-it-works-image" src={block.image} alt="" />
              <h4 className="hiw-sub-heading">{block.heading}</h4>
              <p className="hiw-paragraph">{block.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
