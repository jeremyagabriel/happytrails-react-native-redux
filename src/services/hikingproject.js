import { apiGetFavoriteIds } from './happytrails'

export const apiGetTrailResults = async (lat, lon) => {
  try {
      const res = await fetch(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lon}&maxDistance=20&key=200805506-4f481b90295b1fd1d226c49291fa71e9`)
      const data = await res.json()

      if (res.ok) {
          // console.log("Trail Results:", data.trails)
          return data.trails
      } else {
          throw `Trail results call was not ok: ${res}`
      }
  } catch (err) {
      throw `Fetching trail results failed: ${err}`
  }
}

export const apiGetTrail = async (id) => {
  try {
      const res = await fetch(`https://www.hikingproject.com/data/get-trails-by-id?ids=${id}&key=200805506-4f481b90295b1fd1d226c49291fa71e9`)
      const data = await res.json()

      if (res.ok) {
          return data.trails[0]
          // console.log("Trail Data:",data.trails[0])
      } else {
          throw `Trail call was not ok: ${res}`
      }
  } catch (err) {
      throw `Fetching trail failed: ${err}`
  }
}

export const apiGetFavoriteTrails = async (token) => {
    const ids = await apiGetFavoriteIds(token)

    if (ids === null) {
        throw 'ids must not be null'
    }

    if (ids.length === 0) return []

    try {
        const res = await fetch(
            `https://www.hikingproject.com/data/get-trails-by-id?ids=${ids.join(",")}&key=200805451-d58078a69001bb6f37cb92b68bbebae3`)
        const data = await res.json()

        if (res.ok) {
            return data.trails
        } else {
            throw `favorite trails call was not ok: ${res}`
        }
    } catch (err) {
        throw `favorite trails failed: ${err}`
    }
}