import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import "../styles/LoginScreen.scss"

import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'


const LoginScreen = ({ location }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { loading, error, userInfo } = userLogin

  //url query string   
  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [navigate, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))

  }

  const validateForm = () => {
    return email.length > 0 && password.length > 4;
  }


  return (
    <>
      <div className="login-form">

        <FormContainer>
          <h1>Sign In</h1>
          {error && <Message variant='danger'>{error}</Message>}
          {loading && <Loader />}
          <Form onSubmit={submitHandler} >
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
            <div class="seperator"></div>
            <Button type="submit" disabled={!validateForm()} variant='warning'>
              Sign In
            </Button>

          </Form>
          <Row className='py3'>
            <Col>
              New Customer?{' '}
              <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Register</Link>
            </Col>
          </Row>

        </FormContainer>
      </div>
    </>

  )
};

export default LoginScreen;
