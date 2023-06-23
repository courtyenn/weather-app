import "./App.css"
import SearchBar from "./components/SearchBar"
import WeatherStats from "./components/WeatherStats"
import { getCityWeather } from "./api"
import { useState } from "react"
import { useFetch } from "@hyper-fetch/react"
import FavoriteCities from "./components/FavoriteCities"

function App() {
  const [city, setCity] = useState("Salt Lake City")
  const { loading: loadingCurrent, data: currentWeather } = useFetch(
    getCityWeather(city)
  )

  const onSearch = (city: string) => {
    setCity(city)
  }

  return (
    <div className="container">
      <SearchBar onSearch={onSearch} />
      {loadingCurrent || !currentWeather ? (
        "Loading..."
      ) : (
        <WeatherStats {...currentWeather} />
      )}

      <FavoriteCities onSearch={onSearch} {...currentWeather} />
    </div>
  )
}

export default App
