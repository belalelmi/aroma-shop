import React from "react";
import "../../styles/common/FruitWithText.scss";

const FruitWithText = ({ name, img }) => {
  return (
    <div className='fruit'>
      <img src={img} alt='' />
      <p>{name}</p>
    </div>
  );
};

export default FruitWithText;
