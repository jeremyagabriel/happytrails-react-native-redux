export const apiGetCoordinates = async (location) => {
  try {
    const res = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1IjoiamVyZW15YWdhYnJpZWwiLCJhIjoiY2tlYWg0bDhoMDBrMzJzbDY0aDd5cWUxciJ9.7h-CY8IqVuskqVwSUuomSA&limit=1`)
    const data = await res.json()

    if (data.features.length > 0) {
      const lat = data.features[0].center[1]
      const lon = data.features[0].center[0]
      return { lat, lon }
    } else {
      throw 'No search results'
    }
  } catch (err) {
    console.log(err)
  }
}