import { useState } from 'react'
import './App.css'
import data from './data.json'
import PlantCard from './PlantCard';

function App() {
  const[plants,setPlants] = useState(data);
  
  return (
    <>
    <div className='card'>
      {
        plants.map((ele)=>(
          <PlantCard plant = {ele}/>
        ))
      }

    </div>
    
      
    </>
  )
}

export default App
