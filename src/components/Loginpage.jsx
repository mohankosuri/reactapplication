 // Login.js

import React, { useState } from 'react';
import Lottie from "lottie-react";
import Loginpageimage from '../../src/assets/Log1.json'
import { Link } from 'react-router-dom';
import Button from './Button';

const loginimage ="https://as2.ftcdn.net/v2/jpg/04/60/71/01/1000_F_460710131_YkD6NsivdyYsHupNvO3Y8MPEwxTAhORh.jpg"

const Loginpage = () => {

  const[data,setData]=useState({
    username:"",
    password:""
  })

  const Onhandlechange=(e)=>{
    setData(prevData => ({ ...prevData, [e.target.name]: e.target.value }));
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", data);
    // You can add further logic here, like sending the data to a backend server
  };

   
  return (
    <div className="flex h-[558px]">
      <div className="flex-1 flex items-center justify-center">
      <Lottie animationData={Loginpageimage} loop={true} autoPlay={true} />;
      </div>
      <div className="flex-1 p-8 flex items-center justify-center">
        <div className="max-w-md w-full p-4 bg-slate-100 rounded-md opacity-80">
          <h2 className="text-3xl font-semibold mb-6 flex items-center justify-center">Login</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="block text-sm  text-black font-bold">
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="logininput"
                required
                
                onChange={Onhandlechange}
               
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm text-black font-bold">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="logininput"
                required
                onChange={Onhandlechange}
               
              />
            </div>
             
            <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
          
          </form>
          <div className='mt-10 font-bold'>Don't have an account <Link to={'/signup'} className='text-blue-500 text-lg font-bold ml-4'>Signup</Link></div>
           
        </div>
       
      </div>
    </div>
  );
};

export default Loginpage;
