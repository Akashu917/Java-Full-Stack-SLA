import './WeatherCard.css'

function WeatherCard({ weather }) {
  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`

  return (
    <div className="weather-card">
      <div className="city-info">
        <h2>{weather.name}, {weather.sys.country}</h2>
        <p className="description">{weather.weather[0].main}</p>
      </div>

      <div className="weather-main">
        <img src={iconUrl} alt={weather.weather[0].main} className="weather-icon" />
        <div className="temperature">
          <span className="temp">{Math.round(weather.main.temp)}°C</span>
          <span className="feels-like">Feels like {Math.round(weather.main.feels_like)}°C</span>
        </div>
      </div>

      <div className="weather-details">
        <div className="detail">
          <span className="label">Humidity</span>
          <span className="value">{weather.main.humidity}%</span>
        </div>
        <div className="detail">
          <span className="label">Wind Speed</span>
          <span className="value">{weather.wind.speed} m/s</span>
        </div>
        <div className="detail">
          <span className="label">Pressure</span>
          <span className="value">{weather.main.pressure} hPa</span>
        </div>
        <div className="detail">
          <span className="label">UV Index</span>
          <span className="value">{weather.clouds.all}%</span>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
