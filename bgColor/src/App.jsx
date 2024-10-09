import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-4" >
        <div className="fixed flex flex-wrap justify-normal bg-white p-2 rounded-3xl gap-4 bottom-12"><button 
        onClick={()=>{setColor("Red")}} className="shadow-lg rounded-2xl p-2 text-white" style={{backgroundColor:"red"}}>Red</button>

        <button onClick={()=>{setColor("green")}} className="shadow-lg rounded-2xl p-2 text-white" style={{backgroundColor:"green"}}>Green</button>
        
        <button onClick={()=>{setColor("yellow")}} className="shadow-lg rounded-2xl p-2 text-black" style={{backgroundColor:"yellow"}}>yellow</button>
        
        <button onClick={()=>{setColor("blue")}} className="shadow-lg rounded-2xl p-2 text-white" style={{backgroundColor:"blue"}}>blue</button>
        
        <button onClick={()=>{setColor("pink")}} className="shadow-lg rounded-2xl p-2 text-white" style={{backgroundColor:"pink"}}>Pink</button>
        
        <button onClick={()=>{setColor("violet")}} className="shadow-lg rounded-2xl p-2 text-white" style={{backgroundColor:"violet"}}>violet</button>
        
        <button onClick={()=>{setColor("black")}} className="shadow-lg rounded-2xl p-2 text-white" style={{backgroundColor:"black"}}>black</button>
        
        <button onClick={()=>{setColor("olive")}} className="shadow-lg rounded-2xl p-2 text-white" style={{backgroundColor:"olive"}}>olive</button>
        
        <button onClick={()=>{setColor("white")}} className="shadow-lg rounded-2xl p-2 text-black" style={{backgroundColor:"white"}}>white</button>
        
        </div>
      </div>
    </div>
  )
}

export default App
