import React from "react";
import "../../styles/common/QuantityButtons.scss";

const QuantityButtons = ({
  handleDecrement,
  handleIncrement,
  quantity,
  incVal,
  decVal,
  // countInStock,
}) => {
  return (
    <div className="quantity-btns">
      <button onClick={handleDecrement} disabled={quantity === decVal}>
        -
      </button>
      <span>{quantity}</span>
      <button onClick={handleIncrement} disabled={quantity === incVal}>
        +
      </button>
    </div>
  );
};

export default QuantityButtons;
