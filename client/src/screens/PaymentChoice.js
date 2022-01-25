import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Col } from 'react-bootstrap'
import CustomButton from "../components/common/CustomButton"
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckOutTracker from '../components/CheckOutTracker'
import "../styles/PaymentChoice.scss"

import { savePaymentChoice } from '../actions/cartActions'


const PaymentChoiceScreen = () => {
  const navigate = useNavigate();

  const cart = useSelector(state => state.cart)
  const { shippingAddress } = cart

  if (!shippingAddress) {
    navigate('/login/shipping')
  }

  const [paymentChoice, setPaymentChoice] = useState('PayPal');

  const dispatch = useDispatch();


  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentChoice(paymentChoice))
    navigate('/placeorder')
  }


  return (
    <FormContainer className="FormContainer">
      <CheckOutTracker step1 step2 step3 />
      <h2 className='h2'>Payment Method</h2>
      <Form className='former' onSubmit={submitHandler}>


        <Form.Group >
          <Form.Label as='legend'>Select Method</Form.Label>

          <Col>

            <Form.Check
              type='radio'
              label={<i class="fab fa-cc-paypal"> PayPal & Credit Card</i>}
              id='PayPal'
              name='paymentChoice'
              value='PayPal'
              checked
              onChange={(e) => setPaymentChoice(e.target.value)}
            ></Form.Check>
            {<br></br>}
            <Form.Check
              type='radio'
              label={<i class="fab fa-ethereum"> Ethereum</i>}
              id='ETH'
              name='paymentChoice'
              className='ether'
              value='Ethereum'
              onChange={(e) => setPaymentChoice(e.target.value)}
            >
            </Form.Check>

          </Col>
        </Form.Group>


        <CustomButton type="submit" text="Continue"
          style={{ margin: "1rem auto" }}>
          Continue
        </CustomButton>
      </Form>

    </FormContainer >
  )
};

export default PaymentChoiceScreen;
