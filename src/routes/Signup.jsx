// Login.js

import React from 'react';
import Lottie from "lottie-react";
import Loginpageimage from '../assets/Login1.json'
import { Link } from 'react-router-dom';


const styles={
  inputs:"mt-1 p-2 w-full border rounded-md outline-none"
}
 

const loginimage ="https://as2.ftcdn.net/v2/jpg/04/60/71/01/1000_F_460710131_YkD6NsivdyYsHupNvO3Y8MPEwxTAhORh.jpg"

const Signup = () => {

   
  return (
    <div className="flex h-[557px] opacity-80">
      <div className="flex-1 flex items-center justify-center">
      <Lottie animationData={Loginpageimage} loop={true} autoPlay={true} />;
      </div>
      <div className="flex-1 p-8 flex items-center justify-center">
        <div className="max-w-md w-full p-8 rounded-md bg-slate-800">
          <h2 className="text-3xl font-semibold mb-6 flex items-center justify-center text-white tracking-wider">Signup</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-white">
                Email:
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className={styles.inputs}
                required
              />
            </div>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-white">
                Create Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className={styles.inputs}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white">
                Password:
              </label>
              
              <input
                type="password"
                id="password"
                name="password"
                className={styles.inputs}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Login
            </button>
          </form>
          <div className='mt-10 text-white font-bold'>Already have an account <Link to={'/login'} className='text-blue-500 ml-4 text-lg font-bold'>Login</Link></div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
