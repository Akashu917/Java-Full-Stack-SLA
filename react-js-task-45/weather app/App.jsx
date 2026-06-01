import { useState } from 'react'
import axios from 'axios'
import './App.css'
import WeatherCard from './components/WeatherCard'
import SearchBar from './components/SearchBar'
import Forecast from './components/Forecast'

function App() {
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const API_KEY = '863d8f4b7aecf5d4acd999c97ff89a3d'

  const getWeather = async (city) => {
    setLoading(true)
    setError(null)
    try {
      // Current weather
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
      setWeather(weatherResponse.data)

      // 5-day forecast
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      )
      setForecast(forecastResponse.data)
    } catch (err) {
      setError('City not found. Please try again.')
      setWeather(null)
      setForecast(null)
    }
    setLoading(false)
  }

  return (
    <div className="app">
      <div className="container">
        <h1>Weather App</h1>
        <SearchBar onSearch={getWeather} />
        
        {error && <div className="error">{error}</div>}
        {loading && <div className="loading">Loading...</div>}
        
        {weather && (
          <>
            <WeatherCard weather={weather} />
            {forecast && <Forecast forecast={forecast} />}
          </>
        )}
      </div>
    </div>
  )
}

export default App
