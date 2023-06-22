import { render, screen } from "@testing-library/react"
import App from "./App"

describe("App", () => {
  it("loads while data is being fetched and authenticated", async () => {
    render(<App />)
    const text = await screen.findByText("Loading...")
    expect(text).toBeDefined()
  })
})
