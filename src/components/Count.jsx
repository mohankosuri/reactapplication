import React,{useState} from 'react'
import Newcomponent from './Newcomponent'

const Count = (props) => {
    
  return (
    <div>
      {props.count}

      <button onClick={props.increment}>click</button>
    
    </div>
  )
}

export default Newcomponent(Count);