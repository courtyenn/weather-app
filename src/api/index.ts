// I am getting an issue where VSCode is unable to pickup the declarations here
//@ts-ignore @hyper-fetch/core declaration module could not be found?
import { Client, Cache } from "@hyper-fetch/core"

type Weather = {
  id: number
  main: string
  description: string
  icon: string
}
export type WeatherResponseType = {
  name: string
  visibility: number
  wind: {
    speed: number
    deg: number
  }
  coord: {
    lon: number
    lat: number
  }
  weather: Weather[]
  main: {
    temp: string
    feels_like: string
    temp_min: number
    temp_max: number
    humidity: number
    pressure: number
  }
}

export const client: Client = new Client({
  url: `/api`,
})

export const getCityWeather = (city: string) =>
  client
    .createRequest()({
      endpoint: "/data/2.5/weather",
      deduplicate: true,
    })
    .setQueryParams({
      q: city,
      units: "imperial",
      appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
    })

export const fetchCityWeather = (city: string) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=imperial&q=${city}&appid=${
      import.meta.env.VITE_OPENWEATHER_API_KEY
    }`
  )
}

export const get5DayForecast = ({ lat, lon }: { lat: number; lon: number }) =>
  client
    .createRequest()({
      endpoint: "/data/3.0/onecall",
    })
    .setQueryParams({
      lat,
      lon,
      exclude: "current,minutely,hourly",
      units: "imperial",
      appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
    })

type GeoLocationCityResponse = {
  lat: number
  lon: number
  name: number
}
export const getCoordinatesByLocationName = (city: string) =>
  client
    .createRequest<GeoLocationCityResponse>()({
      endpoint: "/geo/1.0/direct",
    })
    .setQueryParams({
      q: city,
      appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
    })
