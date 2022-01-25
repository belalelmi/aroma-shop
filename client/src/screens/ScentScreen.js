import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DetailsTopSection from "../components/DetailsTopSection";
import { listProductDetails } from "../actions/productActions";
import Message from "../components/Message";
import Loader from "../components/Loader";


const ScentScreen = () => {
  const params = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  useEffect(() => {
    dispatch(listProductDetails(params.id));
  }, [dispatch, params]);

  const [quantity, setQuantity] = useState(1);
  const handleDecrement = quantity > 0 ? () => setQuantity(quantity - 1) : null;
  const handleIncrement =
    quantity < product.countInStock ? () => setQuantity(quantity + 1) : null;

  const handleAddToCart = () => {
    navigate(`/cart/${params.id}?quantity=${quantity}`);
  };
  return (
    <>
      {loading ? (
        <Loader />
        // <div>Loading...</div>
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <DetailsTopSection
          scent={product}
          handleAddToCart={handleAddToCart}
          quantity={quantity}
          setQuantity={setQuantity}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
        />
      )}
    </>
  );
};

export default ScentScreen;
