export const apiGetFavoriteIds = async (token) => {
  try {
    const res = await fetch(
      `http://localhost:3000/favorites`,
      { headers: { "Authorization": `Bearer ${token}` } }
    )
    const data = await res.json()
    if (res.ok) {
      return data.map(v => v.trailId)
    } else {
      // return { ok: null, err: `favorite ids call was not ok: ${res}` }
      throw `favorite ids call was not ok: ${res}`
    }
  } catch (err) {
    throw `favorite ids call failed: ${err}`
  }
}

export const apiPostFavoriteId = async (token, trailId) => {
  try {
    let res = await fetch(
      `http://localhost:3000/favorites`,
      {
        body: JSON.stringify({ trailId }),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        method: "POST"
      })
    if (res.ok) {
      console.log(`Adding trail ${trailId} to favorites`)
    } else {
      throw `posting favorite id call was not ok: ${res}`
    }
  } catch (err) {
    throw `posting favorite id call failed: ${err}`
  }
}

export const apiDeleteFavoriteId = async (token, favoriteId) => {
  try {
    let res = await fetch(`http://localhost:3000/favorites/${favoriteId}`, {
      headers: { "Authorization": `Bearer ${token}` },
      method: "DELETE"
    })
    if (res.ok) {
      console.log(`Removing trail from favorites`)
    } else {
      throw `deleting favorite id call was not ok: ${res}`
    }
  } catch (err) {
    throw `deleting favorite id call failed: ${err}`
  }
}