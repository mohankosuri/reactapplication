import React,{useState} from 'react'

const Mouseover = () => {
    const [count,setCount]=useState(0)


    const increasing=()=>{
        setCount(count+1)
    }
  return (
    <div>
      {count}

      <button onMouseOver={increasing}>click</button>
    
    </div>
  )
}

export default Mouseover;