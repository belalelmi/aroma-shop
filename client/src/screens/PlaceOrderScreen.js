import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import CustomButton from "../components/common/CustomButton"
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import CheckOutTracker from '../components/CheckOutTracker'
import { createOrder } from '../actions/orderActions'
import '../styles/PlaceOrder.scss'

const PlaceOrderScreen = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cart = useSelector(state => state.cart)

  //calculate prices 
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }

  cart.itemsPrice = addDecimals(cart.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0))
  cart.shippingPrice = addDecimals(0)
  cart.taxPrice = addDecimals(Number((0.13 * cart.itemsPrice).toFixed(2)))
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2)

  const orderCreate = useSelector(state => state.orderCreate)
  const { order, success, error } = orderCreate

  useEffect(() => {
    if (success) {
      navigate(`/order/${order._id}`)
    }
    // eslint-disable-next-line
  }, [navigate, success])

  const placeOrderHandler = () => {
    dispatch(createOrder({
      orderItems: cart.cartItems,
      shippingAddress: cart.shippingAddress,
      paymentMethod: cart.paymentMethod,
      itemsPrice: cart.itemsPrice,
      shippingPrice: cart.shippingPrice,
      taxPrice: cart.taxPrice,
      totalPrice: cart.totalPrice,
    }))
  }




  return (
    <>
      <div className='summary'>
        <CheckOutTracker step1 step2 step3 step4 />
        <Row>
          <Col md={8}>
            <ListGroup variant='flush'>

              <ListGroup.Item>
                <h3>Shipping</h3>
                <p>
                  <strong>Address:</strong>
                  {cart.shippingAddress.address}, {cart.shippingAddress.city},{' '}
                  {cart.shippingAddress.postalCode},{' '}
                  {cart.shippingAddress.country}
                </p>
              </ListGroup.Item>

              <ListGroup.Item>
                <h3>Payment Method</h3>
                <strong>Method: </strong>
                {cart.paymentMethod}
              </ListGroup.Item>

              <ListGroup.Item>
                <h3>Order Items</h3>
                {cart.cartItems.length === 0 ? <Message>Your cart is empty</Message>
                  : (
                    <ListGroup variant='flush'>
                      {cart.cartItems.map((item, index) => (
                        <ListGroup.Item key={index}>
                          <Row>
                            <Col md={1}>
                              <Image src={item.image} alt={item.name}
                                fluid rounded />
                            </Col>
                            <Col>
                              <Link to={`/product/${item.product}`}>
                                {item.name}
                              </Link>
                            </Col>
                            <Col md={4}>
                              {item.quantity} x ${item.price} = ${item.quantity * item.price}
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  )
                }
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={4}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h2>Order Summary</h2>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Items</Col>
                    <Col>${cart.itemsPrice}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Shipping</Col>
                    <Col>${cart.shippingPrice}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Tax</Col>
                    <Col>${cart.taxPrice}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Total</Col>
                    <Col>${cart.totalPrice}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <ListGroup.Item>
                    {error && <Message variant='danger'>{error}</Message>}
                  </ListGroup.Item>
                  <br></br>
                  <CustomButton
                    style={{ width: '100%' }}
                    type='button'
                    disabled={cart.cartItems === 0}
                    onClick={placeOrderHandler}
                  >
                    Place Order
                  </CustomButton>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>

      </div>
    </>
  )
};

export default PlaceOrderScreen;
