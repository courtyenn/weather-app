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
    })
    .setQueryParams({
      q: city,
      units: "imperial",
      appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
    })

export const get5DayForecast = (city: string) =>
  client
    .createRequest()({
      endpoint: "/data/2.5/forecast/daily",
    })
    .setQueryParams({
      q: city,
      units: "imperial",
      appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
    })

export const getCoordinatesByLocationName = (city: string) =>
  client
    .createRequest()({
      endpoint: "/geo/1.0/direct",
    })
    .setQueryParams({
      q: city,
      appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
    })
