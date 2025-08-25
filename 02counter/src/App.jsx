import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counterValue,SetCounterValue] = useState(0)
  
 //let counterValue = 25;

 const AddValue = () => {  
  if(counterValue <=19){

    SetCounterValue(counterValue + 1);
  }
 }

  const SubValue = () => {
    if(counterValue !== 0){
      SetCounterValue(counterValue - 1);
    }
  }

  return (
    <>
     <h1> Counter App</h1>
     <h2>Counter Value : {counterValue}</h2>

     <button
      onClick={AddValue}
     >Add Value</button>
     <br />
      <button
      onClick={SubValue}
      >Sub Value</button>
    </>
  )
}

export default App
