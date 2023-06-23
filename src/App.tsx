import "./App.css"
import SearchBar from "./components/SearchBar"
import WeatherStats from "./components/WeatherStats"
import Forecast from "./components/Forecast"
import { getCityWeather } from "./api"
import { useState } from "react"
import { useFetch } from "@hyper-fetch/react"

function App() {
  const [weather, setWeather] = useState("Salt Lake City")
  const { loading, data } = useFetch(getCityWeather(weather))

  const onSearch = (city: string) => {
    setWeather(city)
  }
  console.log(loading, data)

  return (
    <div>
      {loading || !data ? (
        "Loading..."
      ) : (
        <>
          <SearchBar onSearch={onSearch} />
          <WeatherStats {...data} />
          {/* <Forecast /> */}
        </>
      )}
    </div>
  )
}

export default App
