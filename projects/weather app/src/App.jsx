import { useState} from 'react'

import './App.css'
import axios from 'axios'

function App() {
  const [city, setCity] = useState()

  const handleCityChange = (event) => {
   setCity(event.target.value)

  }
  const  fetchWeather =async () => {
try{
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/
    weather?q=${city}&appid=${'7710bf8bef3a5e17cba92fb343a57714'}`)
    console.log(response)
}
catch{






  return (
  <>
  <input type="text"  placeholder='enter city name' value={city} onChange={handleCityChange} />
  <button onClick={fetchWeather}>Get Weather </button>
  
  </>
  )
}

export default App
