import { Client } from "@hyper-fetch/core"
export const client = new Client({
  url: `https://api.openweathermap.org/data/2.5/weather`,
})