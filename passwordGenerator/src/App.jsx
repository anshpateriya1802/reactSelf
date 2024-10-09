import {useRef, useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const[number,setNumber]=useState(false)
  const[character,setCharacter]=useState(false)
  const[password,setPassword]=useState('')

  const passwordGenerator= useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number){
      str+="0123456789"
    }
    if(character){
      str+="!@#$%^&*()_+"}
    
      for (let i = 0; i <=length; i++) {
        pass+=str.charAt(Math.floor(Math.random()*str.length+1))
        
      }

      setPassword(pass)
  },[length,number,character,setPassword])

  const passwordRef=useRef(null)


  useEffect(()=>{
    passwordGenerator()
  },[number,character,length,setPassword])

  const copyToClipboard=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
    },[password])
    
  return (
    <>
    <div className='bg-gray-700 rounded-3xl py-8 px-4 my-8 text-orange-500 text-center'>
      <h1 className='text-white text-4xl'>PASSWORD GENERATOR</h1>
      <div className='flex shadow overflow-hidden rounded-lg mb-7'>
        <input 
        type="text"
        placeholder='PASSWORD'
        value={password}
        readOnly
        ref={passwordRef}
        className='outline-none w-full px-3 py-1' />
        <button className='bg-blue-700 text-white py-0.5 shrink-0 px-3'
        onClick={copyToClipboard}>COPY</button>
      </div>
      <div className='text-sm flex gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6}
          max={30}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>setLength(e.target.value)}
          />Length: {length}
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          value={number} 
          
          onChange={()=>{
            setNumber((prev)=>!prev);
          }} />Numbers
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          value={character} 
          
          onChange={()=>{
            setCharacter((prev)=>!prev);
          }} />Characters
        </div>
      </div>
    </div>
    </>
  )
}

export default App
