import { set, values } from "idb-keyval"
import { useEffect, useMemo, useState } from "react"
import { WeatherResponseType } from "../api"

const FavoriteCities = ({
  onSearch,
  ...data
}: WeatherResponseType & { onSearch: (name: string) => void }) => {
  const [saving, setSaving] = useState(false)
  const [favoriteCities, setFavoriteCities] = useState<WeatherResponseType[]>(
    []
  )
  const name = data.name
  useEffect(() => {
    values().then((data) => setFavoriteCities(data))
  }, [])
  const onSaveFavorite = () => {
    setSaving(true)
    set(name, data)
      .then(() => {
        console.log("it worked")
        setFavoriteCities([...favoriteCities, data])
      })
      .catch((err) => {
        console.log("it failed")
      })
      .finally(() => {
        setSaving(false)
      })
  }

  return (
    <div className="fav">
      <button
        onClick={() => !saving && onSaveFavorite()}
        aria-disabled={saving}
      >
        {saving ? "Saving..." : "Save as Favorite"}
      </button>
      {favoriteCities.length > 0 &&
        favoriteCities.map((resp: WeatherResponseType) => (
          <button
            key={resp.name}
            className="favorite"
            onClick={() => onSearch(resp.name)}
          >
            {resp.name}
          </button>
        ))}
    </div>
  )
}

export default FavoriteCities
