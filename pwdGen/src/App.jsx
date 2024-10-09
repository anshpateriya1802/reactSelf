import { useState,useCallback,useEffect,useRef } from 'react'

import './App.css'

function App() {
  const [length,setLength]=useState(8)
  const [number,setNumber]=useState(false)
  const [character,setCharacter]=useState(false)
  const [password,setPassword]=useState('')

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number){
      str+="0123456789"

    }
    if(character){
      str+="!@#$%^&*()_+"
    }

    for (let i = 0; i <= length; i++) {
      pass+=str.charAt(Math.floor(Math.random()*str.length+1))
      
    }
    setPassword(pass)
  },[setPassword,length,number,character])

  useEffect(()=>{passwordGenerator()},[number,length,character,setPassword])

  const copyToClipboard=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  const passwordRef=useRef(null)

  return (
    <>
    <div className='bg-gray-700 rounded-3xl py-8 px-4 my-8 text-orange-500 text-center'>
      <h1 className='text-white text-xl p-4'>PASSWORD GENERATOR</h1>
      <div className='flex shadow overflow-hidden rounded-lg mb-9'>
        <input type="text"
        placeholder='password'
        className='outline-none w-full px-3 py-1'
        readOnly
        value={password}
        ref={passwordRef}
         />
         <button className='bg-blue-700 text-white py-0.5 shrink-0 px-3'
         onClick={copyToClipboard}>copy</button>
      </div>
      <div className='text-lg'>
        <input type="range"
        value={length}
        min={6}
        max={50}
        className='cursor-pointer'
        onChange={(e)=>setLength(e.target.value)}
        />Length: {length}
        <input type="checkbox"
        className='m-3 '
        value={number}
        onChange={()=>{setNumber((prev)=>!prev);}}  
        />Number
        <input type="checkbox"
        className='m-3 '
        value={character}
        onChange={()=>{setCharacter((prev)=>!prev)}}
        />Character
      </div>
    </div>
    </>
  )
}

export default App
