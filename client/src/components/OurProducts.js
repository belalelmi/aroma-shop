import React from "react";
import { bestCollection, dollar, freeShipping } from "../utils/Lists";
import "../styles/OurProducts.scss";

const OurProducts = () => {
  const blocks = [
    {
      heading: "Reward Referral",
      icon: dollar,
      paragraph:
        "Help your friends smell better and boost confidence. Refer 5 friends to subscribe and enjoy an instant FREE upgrade to our Elite level!",
    },
    {
      heading: "Free Shipping",
      icon: freeShipping,
      paragraph:
        "Because paying for shipping is never fun. Let us worry about shipping and handling fees and you worry about getting your cologne game up!",
    },
    {
      heading: "Authentic Collection",
      icon: bestCollection,
      paragraph:
        "A collection and an assortment of high-class name-brand luxury colognes hand picked with a variety of scents for the right occasion.",
    },
  ];

  return (
    <div className="our-products">
      <h1 className="main-heading">Why Us</h1>

      <div className="our-products-blocks">
        {blocks.map((block, index) => (
          <div key={index} className="block">
            <img className="icon" src={block.icon} alt="" />
            <h3 className="sub-heading">{block.heading}</h3>
            <p className="paragraph">{block.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
