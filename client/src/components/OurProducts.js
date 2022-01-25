import React from "react";
import { bestCollection, dollar, freeShipping } from "../utils/Lists";
import "../styles/OurProducts.scss";

const OurProducts = () => {
  const blocks = [
    {
      heading: "Reward Referral",
      icon: dollar,
      paragraph:
        "Help your family & friends enjoy the magic of good scents. Refer 5 friends and we will include a FREE sample scent with your next order!",
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
        "A collection and an assortment of high-class name-brand luxury colognes hand picked with a variety of scents for every occasion.",
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
