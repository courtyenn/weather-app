import { WeatherResponseType } from "../api"

const WeatherStats = ({
  name,
  weather,
  main,
  wind,
  dt,
  timezone,
}: WeatherResponseType) => {
  const firstWeather = weather[0]
  return (
    <div className="content">
      <h1>{name}</h1>
      <p></p>
      <p>
        <strong>{convertTimestampToHumanReadable(dt)}</strong>
      </p>
      <p>Temperature: {main.temp}°F</p>
      <p>Max Temp: {main.temp_max}°F</p>
      <p>Min Temp: {main.temp_min}°F</p>
      <p>Wind Speed: {wind.speed} km/h</p>

      <img
        src={`https://openweathermap.org/img/w/${firstWeather.icon}.png`}
        alt="Weather Icon"
      />
    </div>
  )
}

function convertTimestampToHumanReadable(timestamp: number): string {
  const date = new Date(timestamp * 1000) // Convert timestamp to milliseconds
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  }

  return date.toLocaleString(undefined, options)
}

export default WeatherStats
