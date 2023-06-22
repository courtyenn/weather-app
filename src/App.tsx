import "./App.css"
import SearchBar from "./components/SearchBar"
import WeatherStats from "./components/WeatherStats"
import Forecast from "./components/Forecast"
import { useEffect } from "react"
import { client } from "./server"

function App() {
  useEffect(() => {
    console.log("what is client", client)
  }, [])
  return (
    <div>
      {/* <SearchBar onSearch={() => {}} /> */}
      {/* <WeatherStats weather={null} />
      <Forecast /> */}
    </div>
  )
}

export default App
