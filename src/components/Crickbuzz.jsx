import React,{useState,useEffect} from 'react'

const Crickbuzz = () => {

    const [playersData, setPlayersData] = useState([]);



    useEffect(() => {
        const fetchdata =async()=>{
            const url = 'https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/35878/team/9';
            const options = {
	           method: 'GET',
	           headers: {
		            'X-RapidAPI-Key': '8d5a988d4fmsh76b78ab88329b45p14286bjsn418dbed7c5e1',
		            'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();

    setPlayersData(result);

    
	console.log(result);

    console.log('data is.....',playersData)
} catch (error) {
	console.error(error);
}
        }
    fetchdata();
    }, []);

  return (
    <div>
    <h1>Players Data</h1>
    <ul>
    
  </ul>
  </div>
  )
}

export default Crickbuzz