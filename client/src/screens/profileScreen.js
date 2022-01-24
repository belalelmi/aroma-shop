import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import "../styles/ProfileScreen.scss"

// import FormContainer from '../components/FormContainer'
import { getUserDetails, updateUserProfile } from '../actions/userActions'


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

  //url query string   
  // const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
    } else {
      if (!user.name) {
        dispatch(getUserDetails('profile'))
      } else {
        // console.log(user)
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [dispatch, navigate, userInfo, user])

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
          <Form.Label>Name</Form.Label>
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
    </Col>

  </Row>
};

export default ProfileScreen;