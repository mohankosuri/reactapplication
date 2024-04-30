import React,{useState,useContext} from 'react'
import { Countercontext } from '../context/countcontext'
import Button from '../components/Button'
import Crickbuzz from '../components/Crickbuzz'

const Contact = () => {
 


  return (
    <div className="flex justify-center items-center opacity-70 mt-[100px]">
      <div className="max-w-md w-full bg-black p-8 rounded border border-white shadow-2xl">
        <h2 className="text-2xl font-semibold mb-4 justify-center flex text-white">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-white">Name</label>
            <input type="text" id="name" name="name" className="mt-1 block w-full border-gray-700 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 p-2" />
          </div>
          <div>
            <label htmlFor="email" className="block text-white  ">Email</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 p-2" />
          </div>
          <div>
            <label htmlFor="message" className="block text-white">Message</label>
            <textarea id="message" name="message" rows="4" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"></textarea>
          </div>
          <div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
          </div>
        </form>
         <Crickbuzz/>
      </div>
    </div>
  )
}

export default Contact