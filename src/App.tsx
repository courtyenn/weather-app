import "./App.css";
import SearchBar from "./components/SearchBar";
import WeatherStats from "./components/WeatherStats";
import Forecast from "./components/Forecast";

function App() {
  return (
    <div>
      <SearchBar onSearch={() => {}} />
      <WeatherStats weather={null} />
      <Forecast />
    </div>
  );
}

export default App;
