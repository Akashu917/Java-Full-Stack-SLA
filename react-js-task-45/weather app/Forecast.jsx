import './Forecast.css'

function Forecast({ forecast }) {
  // Get unique days (one forecast per day at noon)
  const dailyForecasts = {}
  forecast.list.forEach((item) => {
    const date = new Date(item.dt * 1000).toLocaleDateString()
    if (!dailyForecasts[date]) {
      dailyForecasts[date] = item
    }
  })

  const forecasts = Object.values(dailyForecasts).slice(0, 5)

  return (
    <div className="forecast">
      <h3>5-Day Forecast</h3>
      <div className="forecast-grid">
        {forecasts.map((item, index) => {
          const date = new Date(item.dt * 1000)
          const day = date.toLocaleDateString('en-US', { weekday: 'short' })
          const iconUrl = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`

          return (
            <div key={index} className="forecast-card">
              <p className="day">{day}</p>
              <img src={iconUrl} alt={item.weather[0].main} className="forecast-icon" />
              <p className="forecast-temp">{Math.round(item.main.temp)}°C</p>
              <p className="forecast-desc">{item.weather[0].main}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Forecast
