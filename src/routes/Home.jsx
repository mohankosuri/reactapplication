import React,{useContext, useState} from 'react'
import { Countercontext } from '../context/countcontext'
import Count from '../components/Count';
import Mouseover from '../components/Mouseover';

const Home = () => {
    const { count, reset, increase, decrease } = useContext(Countercontext);

    const[name,setName]=useState("")

    const[color,setColor]=useState('red')




    const changeColor =(color)=>{
      setColor(color)
    }
 

    const Handlechnage =(e)=>{
        setName(e.target.value)
    }

    const Handlesubmit =(e)=>{
        e.preventDefault()

        console.log(name)
    }
  return (
    <div className='text-white mt-[50px]'>
    <div className='flex space-x-3'>
    <button className='text-white bg-black p-4 rounded-lg' onClick={increase}>+</button>
    <button className='text-white bg-black p-4 rounded-lg' onClick={decrease}>-</button>
    <button className='text-white bg-black p-4 rounded-lg' onClick={reset}>Reset</button>
    
   <form onSubmit={Handlesubmit}>
   <label className='mx-2'>Entername</label>
   <input value={name} onChange={Handlechnage} className='p-2 text-black mx-2'/>

   <button type='submit'>submit</button>
   
   </form>
    
    </div>

    <div className='grid grid-cols-4 m-10'>
    <div className='bg-red-300 h-[200px] w-[250px] flex justify-center items-center text-8xl opacity-50 text-black'>{count}</div>
    <div className='bg-red-300 h-[200px] w-[250px] flex justify-center items-center text-2xl opacity-50'>{name}</div>
    <div className='bg-red-300 h-[200px] w-[250px]'></div>
    <div className='bg-red-300 h-[200px] w-[280px]'></div>



    <div className='w-[200px] h-[200px] ' style={{backgroundColor:color}}>
       this is a color {color}
    
    </div>


   
    
    </div>
    <Count/>

    <Mouseover/>


    <button onClick={()=>changeColor("green")} className='px-4 py-2 bg-green-500 rounded-md'>color</button>
    <button onClick={()=>changeColor("gray")} className='px-4 py-2 bg-pink-500 rounded-md'>color</button>
    </div>
  )
}

export default Home