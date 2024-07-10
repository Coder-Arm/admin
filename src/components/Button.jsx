import React from 'react'

const Button = ({text,onClick}) => {
  return (
    <button className='bg-sky-500 w-[300px] p-4 text-white font-semibold hover:bg-sky-600' onClick={onClick}>{text}</button>
  )
}

export default Button