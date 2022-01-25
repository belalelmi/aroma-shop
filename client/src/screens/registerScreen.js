import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import "../styles/RegisterScreen.scss"

import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'


const RegisterScreen = ({ location }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const userRegister = useSelector(state => state.userRegister)
  const { loading, error, userInfo } = userRegister

  //url query string   
  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }

  }, [navigate, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(register(name, email, password))
    }

  }

  const validateForm = () => {
    return email.length > 0 && password.length > 4;
  }


  return (
    <>
      <div className="login-form">

        <FormContainer>
          <h1 id='signUp'>Sign Up</h1>
          {message && <Message variant='danger'>{message}</Message>}
          {error && <Message variant='danger'>{error}</Message>}
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
            <div class="seperator"></div>

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
            <Button type="submit" disabled={!validateForm()} variant='warning'>
              Register
            </Button>

          </Form>
          <Row className='py3'>
            <Col>
              Have an Account?{' '}
              <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Login</Link>
            </Col>
          </Row>

        </FormContainer>
      </div>
    </>

  )
};

export default RegisterScreen;