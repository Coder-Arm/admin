import React from 'react'

const Input = ({placeholder,value,onChange}) => {

  return (
    <input 
    className='text-xl rounded-sm border-zinc-700 border-2 p-4 w-[300px]' type='text' placeholder={placeholder} value={value} onChange={onChange}/>
  )
}

export default Input