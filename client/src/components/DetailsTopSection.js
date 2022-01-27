import React, { useEffect, useState } from "react";
// import { product } from "../utils/Lists";
import { Link, useParams } from "react-router-dom";
import CustomButton from "../components/common/CustomButton";
import { useDispatch, useSelector } from 'react-redux'
import Rating from "./Rating";
import { Row, Col, Image, ListGroup, Card, Form } from 'react-bootstrap'
import Message from '../components/Message'
import {
  listProductDetails,
  createProductReview,
} from '../actions/productActions'
import QuantityButtons from "./common/QuantityButtons";
import "../styles/DetailsTopSection.scss";
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants'

const DetailsTopSection = ({
  quantity,
  setQuantity,
  handleDecrement,
  handleIncrement,
  handleAddToCart,
  scent,
}) => {
  const { name, description, countInStock, image, category } = scent || {};
  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const params = useParams()
  const productsId = params.id
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const dispatch = useDispatch()
  const productReviewCreate = useSelector((state) => state.productReviewCreate)
  const {
    success: successProductReview,
    loading: loadingProductReview,
    error: errorProductReview,
  } = productReviewCreate

  // const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (successProductReview) {
      setRating(0)
      setComment('')
    }
    if (!product._id || product._id !== productsId) {
      dispatch(listProductDetails(productsId))
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
    }
    // window.scrollTo(0, 0)

  }, [dispatch, productsId, product._id, successProductReview]);

  // const handleDecrement = quantity > 0 ? () => setQuantity(quantity - 1) : null;

  // const handleIncrement =
  //   quantity < countInStock ? () => setQuantity(quantity + 1) : null;
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      createProductReview(productsId, {
        rating,
        comment,
      })
    )
  }
  const NotesBlock = () => (
    <div className="notes-block">
      <div>
        <h2>Top Notes</h2>
        <div className="circle-with-text">
          <div className="yellow-circle" /> <p>Geranium</p>
        </div>
        <div className="circle-with-text">
          <div className="yellow-circle" /> <p>Lavender</p>
        </div>
        <div className="circle-with-text">
          <div className="yellow-circle" /> <p>Tonka Bean</p>
        </div>
      </div>
      <div>
        <h2>Heart Notes</h2>
        <div className="circle-with-text">
          <div className="yellow-circle" /> <p>Leather</p>
        </div>
        <div className="circle-with-text">
          <div className="yellow-circle" /> <p>Bergamont</p>
        </div>
        <div className="circle-with-text">
          <div className="yellow-circle" /> <p>Apple</p>
        </div>
      </div>
      <div>
        <h2>Base Notes</h2>
        <div className="circle-with-text">
          <div className="yellow-circle" /> <p>Grapefruit</p>
        </div>
        <div className="circle-with-text">
          <div className="yellow-circle" /> <p>Pink pepper</p>
        </div>
        <div className="circle-with-text">
          <div className="yellow-circle" /> <p>Orange Blossom</p>
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
    <>
      <div className="details-top-section">
        <Link to="/ExploreScents">
          {" "}
          <CustomButton>Back to Explore</CustomButton>
        </Link>
        <br></br>
        <h1 className="product-name" style={{ marginTop: "1rem" }}>
          {name}
          <h2 className="product-subhead">{category}</h2>
        </h1>
        <Row>

          <div className="image-with-details">
            <div className="image-block">
              <Image src={image} alt="" />
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
        </Row>
      </div>
      <>
        <Row>
          <Col md={6}>
            <br></br>
            <h2>Reviews</h2>
            {product.reviews.length === 0 && <Message>No Reviews</Message>}
            <ListGroup variant='flush'>

              {product.reviews.map((review) => (
                <ListGroup.Item key={review._id}>
                  <strong>{review.name}</strong>
                  <Rating value={review.rating} />
                  <p>{review.createdAt.substring(0, 10)}</p>
                  <p>{review.comment}</p>
                </ListGroup.Item>
              ))}
              <ListGroup.Item>
                <h2>Write a Customer Review</h2>
                {errorProductReview && (
                  <Message variant='danger'>{errorProductReview}</Message>
                )}
                {userInfo ? (
                  <Form onSubmit={submitHandler}>
                    <Form.Group controlId='rating'>
                      <Form.Label>Rating</Form.Label>
                      <Form.Control
                        as='select'
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                      >
                        <option value=''>Select...</option>
                        <option value='1'>1 - Poor</option>
                        <option value='2'>2 - Fair</option>
                        <option value='3'>3 - Good</option>
                        <option value='4'>4 - Very Good</option>
                        <option value='5'>5 - Excellent</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId='comment'>
                      <Form.Label>Comment</Form.Label>
                      <Form.Control
                        as='textarea'
                        row='3'
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                    <br></br>
                    <CustomButton
                      disabled={loadingProductReview}
                      type='submit'
                      variant='primary'
                    >
                      Submit
                    </CustomButton>
                  </Form>
                ) : (
                  <Message>
                    Please <Link to='/login'>sign in</Link> to write a review{' '}
                  </Message>

                )}
                <br></br>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </>
    </>

  );
};

export default DetailsTopSection;
