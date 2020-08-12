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