import React,{useContext, useState} from 'react'
import { Countercontext } from '../context/countcontext'
import Count from '../components/Count';
import Mouseover from '../components/Mouseover';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

const Home = () => {
    const { count, reset, increase, decrease } = useContext(Countercontext);

    const[name,setName]=useState("")

    const[color,setColor]=useState('red')
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const API_KEY = 'AIzaSyCYQ_JWgmQ4S5WI1fVJZNoagYoDVFHkl58';
    const SEARCH_ENGINE_ID = '92cf40e796ca64946';

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


    const handleSearch = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.get(`https://www.googleapis.com/customsearch/v1`, {
          params: {
            key: API_KEY,
            cx: SEARCH_ENGINE_ID,
            q: query,
          },
        });
        setResults(response.data.items);
        console.log(results)
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };
  
  return (
     <div>
     <div className='flex justify-center items-center mt-[150px]'>
       <h2 className='font-bold text-5xl tracking-wider text-white'><span className='text-red-500'>S</span>earch <span className='text-red-500'>A</span>ny<span className='text-red-500'>T</span>hing</h2>
     
     </div>
     
        <div className='flex justify-center items-center mt-[100px] space-x-3'>
        <form onSubmit={handleSearch}>
          <input className='w-[500px] px-3 py-2 rounded outline-none mr-2' placeholder="Search..."  type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}/>
          <button type="submit" className='bg-black text-white px-4 py-2 rounded-md'>Search</button>
        </form>
        </div>
        
        <div>
      
      <div>
        {results.map((result, index) => (
          <div key={index} className='bg-white border m-10 p-4'>
            <h3 className='text-lg font-bold'>{result.title}</h3>
            
            <a href={result.link} target="_blank" rel="noopener noreferrer" className='text-blue-500'>
              {result.link}
            </a>
          </div>
        ))}
      </div>
    </div>
     </div>
  )
}

export default Home