import React, { useEffect, useState } from 'react'
import Input from '../components/Input'
import Table from '../components/Table'
import Button from '../components/Button'
import {addUsers} from '../store/adminSlice';
import { useDispatch } from 'react-redux'

const AdminPage = () => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const dispatch = useDispatch();
 


  function handleAssign(){
    dispatch(addUsers({username,password}))
    setUsername('');
    setPassword('');
  }

  return (
    <div className='p-8'>
        <h1 className='text-center text-3xl font-bold mt-4 mb-12'>Admin Dashboard</h1>
        <form onSubmit={(e) => e.preventDefault()} className='flex flex-col items-center gap-4'>
            <Input placeholder={'Username'} value={username} onChange={(e) => setUsername(e.target.value)}/>
            <Input placeholder={'Password'} value={password} onChange={(e) => setPassword(e.target.value)}/>
            <Button text={'Assign'} onClick={handleAssign}/>
        </form>
        <Table/>
    </div>
  )
}

export default AdminPage