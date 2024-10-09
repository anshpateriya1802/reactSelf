import { useState } from 'react';

import './App.css';
function App() {
  let [count, setCount] = useState(10)
  function addValue() {
    if(count<20){
      setCount(count + 1)
    }
    else{
      setCount(count)
    }
    
  }
  function subtractValue() {
    if(count>0){
      setCount(count-1)
    }
  }
  return (
    <><h1>Hello</h1>
    <button 
    onClick={addValue}>Add VALUE:{count}</button>
    <br />
    <button onClick={subtractValue}>Subtract VALUE:{count}</button>
    </>
    
  )
}

export default App
