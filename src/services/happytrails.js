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