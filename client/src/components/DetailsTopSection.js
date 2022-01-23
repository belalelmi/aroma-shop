import React, { useEffect } from "react";
// import { product } from "../utils/Lists";
import { Link } from "react-router-dom";
import CustomButton from "../components/common/CustomButton";

import QuantityButtons from "./common/QuantityButtons";
import "../styles/DetailsTopSection.scss";

const DetailsTopSection = ({
  quantity,
  setQuantity,
  handleDecrement,
  handleIncrement,
  handleAddToCart,
  scent,
}) => {
  const { name, description, countInStock, image, category } = scent || {};

  // const [quantity, setQuantity] = useState(0);

  useEffect(() => window.scrollTo(0, 0), []);

  // const handleDecrement = quantity > 0 ? () => setQuantity(quantity - 1) : null;

  // const handleIncrement =
  //   quantity < countInStock ? () => setQuantity(quantity + 1) : null;

  const NotesBlock = () => (
    <div className="notes-block">
      <div>
        <h2>Top Notes</h2>
        <div className="circle-with-text">
          <div className="yellow-circle" /> <p>Pink pepper</p>
        </div>
        <div className="circle-with-text">
          <div className="yellow-circle" /> <p>Pink pepper</p>
        </div>
        <div className="circle-with-text">
          <div className="yellow-circle" /> <p>Pink pepper</p>
        </div>
      </div>
      <div>
        <h2>Heart Notes</h2>
        <div className="circle-with-text">
          <div className="yellow-circle" /> <p>Pink pepper</p>
        </div>
        <div className="circle-with-text">
          <div className="yellow-circle" /> <p>Pink pepper</p>
        </div>
        <div className="circle-with-text">
          <div className="yellow-circle" /> <p>Pink pepper</p>
        </div>
      </div>
      <div>
        <h2>Base Notes</h2>
        <div className="circle-with-text">
          <div className="yellow-circle" /> <p>Pink pepper</p>
        </div>
        <div className="circle-with-text">
          <div className="yellow-circle" /> <p>Pink pepper</p>
        </div>
        <div className="circle-with-text">
          <div className="yellow-circle" /> <p>Pink pepper</p>
        </div>
      </div>
    </div>
  );

  const Description = () => <p className="description">{description}</p>;

  const Alerts = () => (
    <>
      {countInStock >= 1 && countInStock <= 5 && (
        <p className="product-left">
          Only {countInStock} items left, hurry up!
        </p>
      )}
      {quantity > countInStock && countInStock !== 0 && (
        <p className="description">Only {countInStock} items available!</p>
      )}
      {countInStock < 1 && <p className="description">Out of stock!</p>}
      {
        <div className="description">
          {countInStock < 10 ? (
            <p>
              This item is running out. Only <strong>{countInStock}</strong>{" "}
              bottles left!
            </p>
          ) : (
            <p>
              Just in time. We've got <strong>{countInStock}</strong> bottles
              left!
            </p>
          )}
        </div>
      }
    </>
  );

  return (
    <div className="details-top-section">
      <Link to="/ExploreScents">
        {" "}
        <CustomButton>Back to Explore</CustomButton>
      </Link>
      <h1 className="product-name" style={{ marginTop: "1rem" }}>
        {name}
      </h1>
      <h2 className="product-subhead">{category}</h2>

      <div className="image-with-details">
        <div className="image-block">
          <img src={image} alt="" />
        </div>

        <div className="detail-block">
          <NotesBlock />
          <Description />
          <Alerts />

          <div className="horizontal-container">
            {countInStock > 0 && (
              <QuantityButtons
                quantity={quantity}
                countInStock={countInStock}
                handleDecrement={handleDecrement}
                handleIncrement={handleIncrement}
                incVal={4}
                decVal={1}
              />
            )}
            <CustomButton
              text="Add to cart"
              disabled={countInStock === 0}
              onClick={handleAddToCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsTopSection;
