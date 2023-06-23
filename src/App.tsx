import "./App.css"
import SearchBar from "./components/SearchBar"
import WeatherStats from "./components/WeatherStats"
import { getCityWeather } from "./api"
import { useState } from "react"
import { useFetch } from "@hyper-fetch/react"
import FavoriteCities from "./components/FavoriteCities"

const DEFAULT_CITY = "Salt Lake City"
function App() {
  const [city, setCity] = useState(DEFAULT_CITY)
  const {
    loading: loadingCurrent,
    data: currentWeather,
    error,
  } = useFetch(getCityWeather(city))
  const onSearch = (city: string) => {
    setCity(city)
  }

  return (
    <div className="container">
      <SearchBar onSearch={onSearch} />
      {loadingCurrent || !currentWeather ? (
        !error && "Loading..."
      ) : (
        <WeatherStats {...currentWeather} />
      )}

      {error && (
        <code className="content error">
          An error occured searching for "{city}". Please try again.
        </code>
      )}

      <FavoriteCities onSearch={onSearch} {...currentWeather} />
    </div>
  )
}

export default App
