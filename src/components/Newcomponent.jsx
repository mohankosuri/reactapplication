import React,{useState} from 'react'

const Newcomponent = (Originalcomponent) => {


    const Higherorder=()=>{

        const [count,setCount]=useState(0)


        const increasing=()=>{
            setCount(count+1)
        }
          return(
            <div><Originalcomponent count={count} increment={increasing}/></div>
          )
    }
  return  Higherorder;
}

export default Newcomponent