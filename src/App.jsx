 import React,{createContext,useState} from 'react'
 import { Router,Route,NavLink,Routes } from 'react-router-dom'
import Home from './routes/Home'
import Contact from './routes/Contact'
import About from './routes/About'
import Navbar from './components/Navbar'
import Loginpage from './components/Loginpage'
import { Countercontext } from './context/countcontext'
import Signup from './routes/Signup'
import Headroom from 'react-headroom'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from "./redux/countslice"

 
 const App = () => {

  const counte = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()
  const [count,setCount]=useState(0)

 
  const increase =()=>{
    setCount(count+1)
}
const decrease = () => {
    if (count > 0) {
        setCount(count - 1);
    }
}

const reset =()=>{
    setCount(0)
}
 

   return ( 
     <div>


     <div className='App'>
        <h1>The count is {counte}</h1>
        <div className="button">
        <button
          onClick={() => dispatch(increment())}
        >
          Increase
        </button>
        <button
          onClick={() => dispatch(decrement())}
        >
          Decrease
        </button>
        <button onClick={()=>dispatch(incrementByAmount(10))} > Increase by 10</button>

        </div>
        
      </div>

      
     <Countercontext.Provider value={{count,setCount,reset,increase,decrease}}>
     <Headroom>
         <Navbar/>
     
     </Headroom>
      

     
     <Routes>
       <Route path='/' element={<Home/>}>Home</Route>
       <Route path={'/contact'} element={<Contact/>}>Contact</Route>
       <Route path={'/about'} element={<About/>}>About</Route>
       <Route path={'/login'} element={<Loginpage/>}>About</Route>
       <Route path={'/signup'} element={<Signup/>}>About</Route>
     </Routes>
     
     </Countercontext.Provider>  
     
     </div>
   )
 }
 
 export default App