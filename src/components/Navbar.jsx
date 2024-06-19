import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-center mt-2'>
    <div className='flex text-white space-x-8 justify-center text-sm font-bold bg-gray-800 px-8 rounded-full items-center font-mono border'>
          <div><NavLink to={'/'} className="tracking-widest">Home</NavLink></div> 
          <div> <NavLink to={'/contact'} className="tracking-widest">Contact</NavLink></div>
          <div><NavLink to={'/about'} className="tracking-widest">About</NavLink></div>
            
          
          
    </div>
    <div className='flex ml-[50px]'> <NavLink to={'/login'} className="bg-white text-black py-2 px-8 rounded-full font-mono font-bold border border-orange-500 hover:bg-orange-100">Login</NavLink></div>
    <div className='flex ml-4'> <NavLink to={'/signup'} className="bg-black text-white py-2 px-4 rounded-lg font-mono font-bold">Signup</NavLink></div>
    </div>
  )
}

export default Navbar