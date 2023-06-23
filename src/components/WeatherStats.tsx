import { WeatherResponseType } from "../api"

const WeatherStats = ({ name, weather, main, wind }: WeatherResponseType) => {
  const firstWeather = weather[0]
  return (
    <div className="content">
      <h1>{name}</h1>
      <p></p>
      <p>Temperature: {main.temp}°F</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {wind.speed} km/h</p>
      <img
        src={`https://openweathermap.org/img/w/${firstWeather.icon}.png`}
        alt="Weather Icon"
      />
    </div>
  )
}

export default WeatherStats
