import React, { useState } from 'react'
import Lottie from "lottie-react";
import Test from '../assets/Succes.json'
import Tans from '../assets/Tra.json'

const Testing = () => {


    const [show, setShow] = useState(false)
    return (
        <div>
           {show ? <div className='w-[100px] h-[100px]'>

           <Lottie animationData={Test} loop={true} autoPlay={true} />;
       </div>: <div className=''> 
       <Lottie animationData={Tans} loop={true} autoPlay={true} />
       <Lottie animationData={Tans} loop={true} autoPlay={true} />
       <Lottie animationData={Tans} loop={true} autoPlay={true} />
        
   </div>
   } 


            
        </div>
    )
}

export default Testing