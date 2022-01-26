import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Table } from 'react-bootstrap'
import CustomButton from "../components/common/CustomButton"
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listUsers, deleteUser } from '../actions/userActions'
import '../styles/AdminUserList.scss'

const UserListScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const userList = useSelector((state) => state.userList)
  const { loading, error, users } = userList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userDelete = useSelector((state) => state.userDelete)
  const { success: successDelete } = userDelete


  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers())

    } else {
      navigate('/login')
    }
  }, [dispatch, navigate, userInfo, successDelete])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteUser(id))
    }
  }
  return (
    <>
      <div className='userList'>
        <h2>Users</h2>
        {loading ? (
          <Loader />
        ) :
          error ? (
            <Message variant='danger'>{error}</Message>
          ) : (
            <Table striped bordered hover responsive className='table-sm'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>ADMIN</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>
                      <a style={{ color: 'black' }} href={`mailto:${user.email}`}>{user.email}</a>
                    </td>
                    <td>
                      {user.isAdmin ? (
                        <i className='fas fa-check' style={{ color: 'green' }}></i>
                      ) : (
                        <i className='far fa-times-circle' style={{ color: 'red' }}></i>)}
                    </td>
                    <td>
                      <LinkContainer to={`/admin/user/${user._id}/edit`}>
                        <CustomButton style={{ padding: '80px' }} variant='light' className='btn-sm'>
                          <i className='fas fa-edit'></i>
                        </CustomButton>
                      </LinkContainer>
                      <CustomButton
                        variant='danger'
                        className='btn-sm'
                        onClick={() => deleteHandler(user._id)}
                      >
                        <i style={{ color: 'red' }} className='fas fa-trash-alt'></i>
                      </CustomButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}

      </div>
    </>
  )
}

export default UserListScreen;
