import React from "react";
import { howItWorks1, howItWorks2, howItWorks3 } from "../utils/Lists";
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
      heading: "Activate your subscription",
      image: howItWorks2,
      paragraph:
        "Jump on board to the best monthly cologne subscription around. Switch up your scent to match your energy",
    },
    {
      heading: "Receive your Fragrance",
      image: howItWorks3,
      paragraph:
        "At Aroma Shop believe in fast delivery and expert pricing. Things are feeling fresh. Right at your doorstep.",
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
