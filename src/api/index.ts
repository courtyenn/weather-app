import { Client } from "@hyper-fetch/core"

type PayloadType = {
  q: string
  appid: string
}
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

export const getCityWeather = (city = "Salt Lake City") => {
  return client
    .createRequest<WeatherResponseType, void, void, PayloadType>()({
      endpoint: "/data/2.5/weather",
    })
    .setQueryParams({
      q: city,
      units: "imperial",
      appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
    })
}
