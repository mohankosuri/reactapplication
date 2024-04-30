import React from 'react'

const Card = ({children}) => {
  return (
    <div className='bg-red-400 h-[200px] w-[200px]'>{children}</div>
  )
}

export default Card