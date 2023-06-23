import { useState } from "react"
import { fetchCityWeather, getCityWeather } from "../api"

const Metric = ({ city }) => {
  const [fetchMetric, setFetchMetric] = useState(0)
  const [hyperMetric, setHyperMetric] = useState(0)
  const onFetchClick = () => {
    async function fetch100Requests() {
      const promises = []
      for (let i = 0; i < 100; i++) {
        promises.push(fetchCityWeather(city))
      }
      return await Promise.all(promises)
    }
    const start = performance.now()
    fetch100Requests()
    const end = performance.now()
    setFetchMetric(end - start)
  }

  const onHyperClick = () => {
    async function fetch100Requests() {
      const promises = []
      for (let i = 0; i < 100; i++) {
        promises.push(getCityWeather(city).send())
      }
      return await Promise.all(promises)
    }
    const start = performance.now()
    fetch100Requests()
    const end = performance.now()
    setHyperMetric(end - start)
  }

  return (
    <div className="metric">
      <button onClick={onFetchClick}>
        Measure perf of fetch API - {fetchMetric}ms 100 requests
      </button>
      <button onClick={onHyperClick}>
        Measure perf of hyper-fetch API - {hyperMetric}ms 100 requests
      </button>
    </div>
  )
}

export default Metric
