import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    
      <div  className='w-full h-screen duration-200'  
      style={{backgroundColor: color}}
      >
<div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

  <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl' >
    <button className='outline-none px-10 py-2 rounded-full text-white shadow-lg hover:bg-gray-400'
    onClick={() => setColor("red")}
    style={{backgroundColor: "red"}}
    >Red</button>

    <button className='outline-none px-10 py-2 rounded-full text-white shadow-lg hover:bg-gray-400'
    onClick={() => setColor("green")}
    style={{backgroundColor: "green"}}
    >Green</button>

    <button className='outline-none px-10 py-2 rounded-full text-white shadow-lg hover:bg-gray-400 twxt-border-black'
    onClick={() => setColor("yellow")}
    style={{backgroundColor: "yellow"}}
    >Yellow</button>

    <button className='outline-none px-10 py-2 rounded-full text-white shadow-lg hover:bg-gray-400'
    onClick={() => setColor("blue")}
    style={{backgroundColor: "blue"}}
    >Blue</button>

    <button className='outline-none px-10 py-2 rounded-full text-white shadow-lg hover:bg-gray-400 '
    onClick={() => setColor("gray")}
    style={{backgroundColor: "gray"}}
    >Gray</button>

    <button className='outline-none px-10 py-2 rounded-full text-white shadow-lg hover:bg-gray-400'
    onClick={() => setColor("pink")}
    style={{backgroundColor: "pink"}}
    >Pink</button>

    <button className='outline-none px-10 py-2 rounded-full text-white shadow-lg hover:bg-gray-400'
    onClick={() => setColor("purple")}
    style={{backgroundColor: "purple"}}
    >Purple</button>

    <button className='outline-none px-10 py-2 rounded-full text-white shadow-lg hover:bg-gray-400 text-shadow-black-xl'
    onClick={() => setColor("lavender")}
    style={{backgroundColor: "lavender"}}
    >Lavender</button>

<button className='outline-none px-10 py-2 rounded-full text-white shadow-lg hover:bg-gray-400'
    onClick={() => setColor("black")}
    style={{backgroundColor: "black"}}
    >Black</button>

  </div>
</div>

      </div>
    
  )
}

export default App
