import React, { useState,useCallback,useEffect } from 'react'

const Passwordgenerator = () => {

    const [lenth, setLenth] = useState(8)

    const [numberallowed, setNumberallowed] = useState(false)

    const [charallowed, setCharallowed] = useState(false)

    const [password, setPassword] = useState("")



    const generatepassword = useCallback(()=>{

        let pass =""
        let str  = "ABCDEFGHIJKLMNOPKRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if(numberallowed) str += "0123456789"
        if(charallowed) str += "!@#$%^&*()_"



        for(let i=1;i<lenth;i++){
             const char = Math.floor(Math.random() * str.length + 1)

             pass += str.charAt(char)
        }

        setPassword(pass)
    },[numberallowed, charallowed, lenth])
useEffect(() => {
    
    generatepassword()

}, [numberallowed, charallowed, lenth]);


const copypassword =()=>{
    window.navigator.clipboard.writeText(password)
     
}

    return (
        <div className='flex justify-center items-center m-10'>
            <div className='bg-gray-800 w-[700px] h-[300px] rounded-md p-4'>
                <div className='flex justify-center'><h1 className='text-white text-2xl mt-4'>Password Generator</h1></div>
                <div className='flex justify-center mt-10 space-x-10'>
                    <input className='w-[350px] py-2 px-1 rounded-md outline-none' type='text' value={password} placeholder='password' readOnly />
                    <button className='bg-orange-300 px-4 py-2 rounded-md font-bold' onClick={copypassword}>Copy</button>
                </div>

                <div className='flex items-center gap-x-4 text-white mt-4'>
                    <div>
                        <input type='range' min={8} max={20} value={lenth} className='cursor-pointer' onChange={(e) => setLenth(e.target.value)} name='length' />
                        <label htmlFor='length'>Length:{lenth}</label>

                    </div>
                    <div>
                        <input type='checkbox' defaultChecked={numberallowed} className='cursor-pointer ml-10' onChange={() => setNumberallowed((prev) => !prev)} />
                        <label>Number</label>

                    </div>

                    <div>
                        <input type='checkbox' defaultChecked={charallowed} className='cursor-pointer ml-10' onChange={() => setCharallowed((prev) => !prev)} />
                        <label>Charector</label>

                    </div>


                </div>

            </div>

        </div>
    )
}

export default Passwordgenerator