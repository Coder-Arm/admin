import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { useSelector,useDispatch } from 'react-redux'
import { manageUser } from '../store/userSlice'
import { nanoid } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const usersState = useSelector(state => state.admin.admin);
  const dispatch = useDispatch();
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('')
  const [error,setError]  = useState('');
  const navigate = useNavigate();

  function handleLogin(){
     if(!username || !password){
      setError('Please fill the fields.')
     }
     else if(username === 'admin' && password === 'admin@123'){
      navigate('/admin')
     }
     else{
     const user =  usersState.filter(item => item.username === username && item.password === password);
        if(user.length > 0){
          dispatch(manageUser({
            id : nanoid(),
            username,
            password
          }))
          navigate('/dashboard')
        }
        else{
          setError('User not found!')
        }
     }
  }
  return (
    <div>
    <h1 className='text-center text-3xl font-bold mt-8 mb-12'>Login</h1>

      <form onSubmit={(e) => e.preventDefault()} className='flex flex-col items-center gap-4'>
      <Input placeholder={'Username'} value={username} onChange={(e) => setUsername(e.target.value)}/>
      <Input placeholder={'Password'} value={password} onChange={(e) => setPassword(e.target.value)}/>
      <Button text={'Login'} onClick={handleLogin}/>  
      </form>
      {
        error && <p className='text-red-500 text-center mt-4 text-xl'>{error}</p>
      }  
    </div>
  )
}

export default LoginPage