import React from "react"

interface ForecastProps {
  forecast: {
    date: string
    icon: string
    highTemp: number
    lowTemp: number
  }[]
}

const Forecast: React.FC<ForecastProps> = () => {
  return (
    <div>
      {/* {forecast.map((day) => (
        <div key={day.date}>
          <p>Date: {day.date}</p>
          <p>High: {day.highTemp}°C</p>
          <p>Low: {day.lowTemp}°C</p>
          <img
            src={`https://openweathermap.org/img/w/${day.icon}.png`}
            alt="Weather Icon"
          />
        </div>
      ))} */}
    </div>
  )
}

export default Forecast
