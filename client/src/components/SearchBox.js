import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import CustomButton from './common/CustomButton'
import { useNavigate } from 'react-router-dom'
import { searchIcon } from "../utils/Lists.js"



const SearchBox = () => {
  const [keyword, setKeyword] = useState('')

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      navigate(`/search/${keyword}`)
    } else {
      navigate('/')
    }
  }
  // <Button type='submit' variant='outline-success' className='p-2'>
  //   Search

  // </Button>

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-6 ml-sm-5'
      ></Form.Control>
    </Form>
  )
}

export default SearchBox;