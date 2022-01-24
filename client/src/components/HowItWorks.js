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
      heading: "Confirm your purchase",
      image: howItWorks2,
      paragraph:
        "Your order will arrive within 3 business days thanks to our partnerships with shiping companies worldwide!",
    },
    {
      heading: "Receive your Fragrance",
      image: howItWorks3,
      paragraph:
        "At Aroma Shop, we believe in fast delivery and expert pricing. It just never smelt better.",
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
