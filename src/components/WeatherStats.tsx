import React from "react";

interface WeatherStatsProps {
  weather: {
    temperature: number;
    humidity: number;
    windSpeed: number;
    icon: string;
  };
}

const WeatherStats: React.FC<WeatherStatsProps> = ({ weather }) => {
  return (
    <div>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Humidity: {weather.humidity}%</p>
      <p>Wind Speed: {weather.windSpeed} km/h</p>
      <img
        src={`https://openweathermap.org/img/w/${weather.icon}.png`}
        alt="Weather Icon"
      />
    </div>
  );
};

export default WeatherStats;
