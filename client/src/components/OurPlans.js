import React from "react";
import { checkBox } from "../utils/Lists";
import "../styles/OurPlans.scss";
import CustomButton from "./common/CustomButton";

const OurPlans = () => {
  const ListItem = ({ item }) => (
    <div className="plan-list-item">
      <img src={checkBox} alt="" />
      <p>{item}</p>
    </div>
  );

  return (
    <div className="our-plans">
      <h1 className="our-plans-heading">Our Plans</h1>

      <div className="plans-blocks">
        <div className="plan" style={{ borderColor: "#112f59" }}>
          <div className="white-gap" />
          <h3 className="plan-name" style={{ color: "#112f59" }}>
            Standard
          </h3>
          <h2 className="plan-price" style={{ color: "#112f59" }}>
            $24.99 <span className="per-month">/ month</span>
          </h2>
          <ListItem item="First Item" />
          <ListItem item="First Item" />
          <ListItem item="First Item" />
          <ListItem item="First Item" />

          <CustomButton text="Select Plan" />
          {/* <button className='select-plan-btn'>Select Plan</button> */}
        </div>
        <div className="plan" style={{ borderColor: "#AF9500" }}>
          <div className="white-gap" />
          <h3 className="plan-name" style={{ color: "#AF9500" }}>
            Elite
          </h3>
          <h2 className="plan-price" style={{ color: "#AF9500" }}>
            $34.99 <span className="per-month">/ month</span>
          </h2>

          <ListItem item="First Item" />
          <ListItem item="First Item" />
          <ListItem item="First Item" />
          <ListItem item="First Item" />

          <CustomButton text="Select Plan" />
          {/* <button className='select-plan-btn'>Select Plan</button> */}
        </div>

        <div className="plan" style={{ borderColor: "#112f59" }}>
          <div className="white-gap" />
          <h3 className="plan-name" style={{ color: "#112f59" }}>
            Premium
          </h3>
          <h2 className="plan-price" style={{ color: "#112f59" }}>
            $29.99 <span className="per-month">/ month</span>
          </h2>

          <ListItem item="First Item" />
          <ListItem item="First Item" />
          <ListItem item="First Item" />
          <ListItem item="First Item" />

          <CustomButton text="Select Plan" />
          {/* <button className='select-plan-btn'>Select Plan</button> */}
        </div>
      </div>
    </div>
  );
};

export default OurPlans;
