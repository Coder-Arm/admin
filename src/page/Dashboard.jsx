import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
  const userState = useSelector(state => state.user);
  const navigate = useNavigate()
  useEffect(() => {
    if(!userState) navigate('/')
  },[])
  return (
    <h1 className='text-3xl'>Welcome {userState?.username}!</h1>

  )
}

export default Dashboard