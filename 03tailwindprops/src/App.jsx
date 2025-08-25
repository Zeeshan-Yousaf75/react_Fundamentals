
import './App.css'
import Card  from './components/Card'

function App() {
  
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card  title="Shan" btnText ="Click Me!" imgSrc ="https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg" />
      <br />
       <Card  title="Yousaf" btnText ="Visit Me!" imgSrc= "https://cdn.pixabay.com/photo/2023/08/15/09/21/camera-8191564_640.jpg"/>
    </>
  )
}

export default App
