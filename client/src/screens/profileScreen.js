import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Table, Button, Form, Row, Col } from 'react-bootstrap'
import CustomButton from "../components/common/CustomButton"
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import "../styles/ProfileScreen.scss"

// import FormContainer from '../components/FormContainer'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { ListMyOrders } from '../actions/orderActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'

const ProfileScreen = ({ location }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const userDetails = useSelector(state => state.userDetails)
  const { loading, error, user } = userDetails


  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin


  const userUpdateProfile = useSelector(state => state.userUpdateProfile)
  const { success } = userUpdateProfile

  const orderMyList = useSelector(state => state.orderMyList)
  const { loading: loadingOrders, error: errorOrders, orders } = orderMyList

  //url query string   
  // const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
    } else {
      if (!user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET })
        dispatch(getUserDetails('profile'))
        dispatch(ListMyOrders())
      } else {
        // console.log(user)
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [dispatch, navigate, userInfo, user, success])

  const submitHandler = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }))
    }

  }

  const validateForm = () => {
    return email.length > 0 && password.length > 4;
  }


  return <Row className='row'>
    <Col className='top' md={3}>
      <h2 id='signUp'>User Profile</h2>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {success && <Message variant='success'>Profile Updated</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler} >

        <Form.Group className='group' controlId='name'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            className="bar"
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='group' controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            className="bar"
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>

        </Form.Group>


        <Form.Group className='group' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="bar"
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='group' controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            className="bar"
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <div className="seperator"></div>
        <Button className='buttn' type="submit" disabled={!validateForm()} variant='warning'>
          Update
        </Button>

      </Form>
    </Col>
    <Col className='top' md={9}>
      <h2>My Orders</h2>
      {loadingOrders ? <Loader /> : errorOrders ? <Message variant='danger'>{errorOrders}</Message> :
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>{order.totalPrice}</td>
                <td>
                  {order.isPaid ? (
                    order.paidAt.substring(0, 10)
                  ) : (
                    <i className='far fa-times-circle' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  {order.isDelivered ? (
                    order.deliveredAt.substring(0, 10)
                  ) : (
                    <i className='far fa-times-circle' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  <LinkContainer to={`/order/${order._id}`}>
                    <CustomButton variant='light'>
                      Order Details
                    </CustomButton>
                  </LinkContainer>
                </td>

              </tr>
            ))}
          </tbody>
        </Table>

      }
    </Col>

  </Row>
};

export default ProfileScreen;