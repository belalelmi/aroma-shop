import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useParams,
  useNavigate,
  useSearchParams,
  Link,
} from "react-router-dom";

// imported files
import { addToCart, removeFromCart } from "../actions/cartActions";

import CustomButton from "../components/common/CustomButton";

// styles

import "../styles/CartItem.scss";
import "../styles/common/QuantityButtons.scss";
import "../styles/CartDetails.scss";

const CartScreen = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const productId = params.id;

  const qty = Number(searchParams.get("qty")) || 1;
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
      // navigate("/cart");
    }
  }, [dispatch, productId, qty]);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const round = (x, y) => {
    let z = x * y;
    return Math.round(z * 100) / 100;
  };

  const checkoutHandler = () => {
    navigate(`/login?redirect=shipping`);
  };
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      {/* <CartHero /> */}
      {cartItems.length === 0 ? (
        // style this div
        <>
          <div className="cart-details" style={{ padding: "230px 0 " }}>
            <h1 className="heading slide-up">Your Cart is Empty</h1>
            <Link to="/ExploreScents" className="continue-link slide-up">
              Begin Shopping
            </Link>
          </div>
        </>
      ) : (
        <div className="cart-details">
          <h1 className="heading slide-up">Your Cart</h1>
          <Link to="/ExploreScents" className="continue-link slide-up">
            Continue Shopping
          </Link>

          {cartItems?.map((item) => (
            <div className="cart-item">
              <div className="details-section">
                <div className="image-section">
                  <img src={item.image} alt="" className="product-image" />
                  <Link
                    to={`/product/${item.product}`}
                    className="view-details-link"
                  >
                    View Cologne Details <span>{`>`}</span>
                  </Link>
                </div>

                <div className="product-description">
                  <h1
                    style={{
                      fontSize: "1.2rem",
                      color: "black",
                      marginTop: "0.5rem",
                    }}
                  >
                    {item.name}
                  </h1>
                  <h1
                    style={{
                      fontWeight: "normal",
                    }}
                  >
                    {item.category} - ${item.price}{" "}
                  </h1>

                  <p
                    style={{
                      fontWeight: "lighter",
                      fontSize: "1rem",
                      color: "black",
                      margin: "1rem 0",
                    }}
                  >
                    {item.description}
                  </p>
                  <p
                    style={{
                      fontWeight: "lighter",
                      fontSize: "1rem",
                      color: "black",
                      margin: "0.5rem 0",
                    }}
                  >
                    {" "}
                    Your cologne pick is rated {item.rating} out of 5
                  </p>
                  <div className="quantity-items">
                    <select
                      value={item.quantity}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                      className="quant"
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                    <h3
                      style={{
                        fontWeight: "normal",
                        padding: "0 0.5rem",
                        textAlign: "center",
                      }}
                    >
                      ${round(item.quantity, item.price)}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="buttons-section">
                <CustomButton
                  text="Remove"
                  style={{ margin: "1rem auto" }}
                  onClick={() => removeFromCartHandler(item.product)}
                />
                <CustomButton
                  text="Proceed to check out"
                  onClick={checkoutHandler}
                  style={{ margin: "1rem auto" }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CartScreen;
