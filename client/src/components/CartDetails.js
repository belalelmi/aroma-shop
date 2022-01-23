import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import "../styles/CartDetails.scss";

const CartDetails = ({ cartItems }) => {
  return (
    <div className="cart-details">
      <h1 className="heading slide-up">Your Cart</h1>
      <Link to="/ExploreScents" className="continue-link slide-up">
        Continue Shopping
      </Link>

      {cartItems?.map((item) => (
        <CartItem key={item.product} item={item} />
      ))}
    </div>
  );
};

export default CartDetails;
