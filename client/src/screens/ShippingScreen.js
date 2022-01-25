import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckOutTracker from '../components/CheckOutTracker'
import "../styles/ShippingScreen.scss"
import CustomButton from "../components/common/CustomButton"
import { saveShippingAddress } from '../actions/cartActions'


const ShippingScreen = () => {

  const cart = useSelector(state => state.cart)
  const { shippingAddress } = cart

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [country, setCountry] = useState(shippingAddress.country)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, postalCode, country }))
    navigate('/payment')
  }


  return (
    <FormContainer className="FormContainer">
      <CheckOutTracker step1 step2 />
      <h1 className='h1'>Shipping</h1>
      <Form className='former' onSubmit={submitHandler}>
        <Form.Group className='group' controlId='address'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            className="bar"
            type='text'
            placeholder='Enter address'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className='group' controlId='city'>
          <Form.Label>City</Form.Label>
          <Form.Control
            className="bar"
            type='text'
            placeholder='Enter city'
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>


        <Form.Group className='group' controlId='postal Code'>
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            className="bar"
            type='text'
            placeholder='Enter postal code'
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='group' controlId='country'>
          <Form.Label>Country</Form.Label>
          <Form.Control
            className="bar"
            type='text'
            placeholder='Enter country'
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <CustomButton type="submit" text="Continue"
          style={{ margin: "1rem auto" }}>
          Continue
        </CustomButton>
      </Form>

    </FormContainer>
  )
};

export default ShippingScreen;
