import React from 'react'

const Button = ({name}) => {
  return (
    <button className='bg-black px-4 py-2 rounded-full text-white'>{name}</button>
  )
}

export default Button