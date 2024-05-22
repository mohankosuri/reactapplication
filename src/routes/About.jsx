import React,{useContext} from 'react'
import Loginpage from '../components/Loginpage'
import { Countercontext } from '../context/countcontext'
import Pdf from '../components/Pdf'
import Card from '../components/Card'
import Button from '../components/Button'
import DataTable from '../components/Table'
import MultiActionAreaCard from '../components/Card1'
import Crickbuzz from '../components/Crickbuzz'
import Passwordgenerator from '../components/Passwordgenerator'
import Testing from '../components/Testing'
import Createbook from './Createbook'

const About = () => {

    const Counter = useContext(Countercontext)
  return (
    <div className="bg-transparent">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-white">About Us</h1>
        <div className="mt-6 prose prose-lg text-white text-lg font-mono font-bold">
          <p>
            Welcome to <span className='text-red-600'>ProcessQ</span>, where we are passionate about crafting cutting-edge software solutions.
          </p>
          <p>
            At [Your Company Name], we strive to innovate and create software that solves real-world problems, empowers businesses, and enhances people's lives.
          </p>
          <p>
            Our team consists of highly skilled developers, designers, and engineers who are dedicated to delivering top-notch software products.
          </p>
          <p>
            Whether you're a startup looking to build your first MVP, or an enterprise seeking to streamline your operations, we've got you covered.
          </p>
          <p>
            We specialize in a wide range of technologies, including React, Node.js, Python, and more. Whatever your project demands, we have the expertise to deliver.
          </p>
          <p>
            Get in touch with us today to discuss how we can help bring your ideas to life.
          </p>
        </div>
      </div>
      <div className='m-10 flex justify-end'>
       
      </div>

      <div className='grid grid-cols-3 ml-10 mb-10'>
       <MultiActionAreaCard/>
       <MultiActionAreaCard/>
       <MultiActionAreaCard/>
        
      </div>
     
 

  
      
    </div>
  )
}

export default About