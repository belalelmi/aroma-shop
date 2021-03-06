import React from "react";
import "../../styles/common/FruitWithText.scss";



// return (
//   <div className='fruit'>
//     <img src={img} alt='' className="fruit_img" />
//     <p>{name}</p>
//   </div>
// );
const FruitWithText = ({ name, img }) => {
  return (
    <div className='fruit'>
      <p>{name}</p>
    </div>
  );
};

export default FruitWithText;
