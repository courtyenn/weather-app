# Open Weather App

Weather app that allows users to save favorite cities, search, and view current weather data.

## How to Run the Project

1. Pull down the project

```
git clone https://github.com/courtyenn/weather-app.git
```

2. Enter in the `.env` file your OpenWeather API Key. [Navigate to OpenWeatherMap.org](https://openweathermap.org/api)

3. Use your preferred package manager (mine is pnpm) to install && start:

```
pnpm install && pnpm dev
```

## Retrospective

My goal with this take-home project is to display my skills in React/TypeScript, but also to challenge myself with new tools, such as Vite and Hyper-Fetch. I think being a Senior Software Engineer goes beyond "making things work", and more about how one analyzes their own code objectively, what they've learned, what can be improved, and what went well.

**What Went Well**

- Working with `@hyper-fetch/core` created an easy syntax for fetching that looks synchronous.
- `@hyper-fetch/core` uses a `dedupe` config parameter that optimizes requests to the same URL by grouping similar requests into a single request. This option makes `@hyper-fetch` appear faster when requesting the same URL, as I do inside the `Metric` component, but overall, is slower for a unique single request than `fetch`

**What I Learned**

- Vite does not work with jest without using an adapter library that isn't maintained.
  - => To test this, I chose to use Vitest
- Vite-dev runs a development server for caching requests and for quick builds. Issue with this is
- Environment variables are accessed in Vite by prefixing the env var with `VITE_`

**What Can be Improved**

- Leverage `@hyper-fetch/core` Caching mechanism to save on requests
- Submit an Issue to @hyper-fetch regarding their type declarations. One of the thing this library proclaims is their type-safety, however, there is an issue with the types. Maybe it is me, although it is worth submitting for a response.
