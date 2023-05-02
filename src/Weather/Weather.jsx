import React from 'react'
import './Weather.css'
import { useState } from 'react'

const Weather = () => {
  const api = {
    key : 'b5316d753d2ff74397a28c9e763c87b3' ,
    base : 'https://api.openweathermap.org/data/2.5/'
  }

  const [search,setSearch] = useState('')
  const [weather,setWeather] = useState(null)

  const searchPressed = () =>{
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then((res) => res.json())
    .then((result) => {
      setWeather(result)
    })
  }

  return (
    <div className="weather">
      <h1>The Weather Now</h1>
      <div className="weatherSearch">
        <input type="text" placeholder='Enter the name of a city' onChange={(e) => setSearch(e.target.value)}/>
        <button onClick={searchPressed}>Search</button>
      </div>
                {weather  && weather.main && weather.main.temp && (
            <div className='info'>
              <div className="first">
              <div className="weatherLocation">
                <h2>{weather.name}</h2>
              </div>
              <div className="weatherTemperature">
                <h2>{Math.floor(weather.main.temp)}°C </h2>
              </div>
              </div>
              <div className="weatherCondition">
                <h2><div>{weather.weather[0].main}</div> </h2>
              </div>
              <div className="more"><img src={`icons/${weather.weather[0].icon}.png`}
 alt="" /><h2>{weather.weather[0].description}</h2></div>
            </div>
                  )}

    </div>
  )
}




export default Weather