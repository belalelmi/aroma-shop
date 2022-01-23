import React, { useEffect } from "react";
import "../styles/CartHero.scss";

const CartHero = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className='cart-hero'>
      <h1 className='heading slide-up'>
        Your <span>Perfect Scent</span>
      </h1>
      <h2 className='text slide-up'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h2>
    </div>
  );
};

export default CartHero;
