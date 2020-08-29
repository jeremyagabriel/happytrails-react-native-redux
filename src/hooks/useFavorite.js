import { useSelector, useDispatch } from 'react-redux'
import { setTrailFavoriteIds } from '../store/favorites/actions'
import { apiGetFavoriteIds } from '../services/happytrails'

export default () => {
  const token = useSelector(state => state.auth.token)
  const dispatch = useDispatch()

  const getFavoriteIds = async () => {
    try {
      const ids = await apiGetFavoriteIds(token)

      dispatch(setTrailFavoriteIds(ids))
    } catch (err) {
      console.log('Error: unable to get favorite trail ids:', err)
    }
  }

  // const addToFavorites = async (trailId) => {
  //   try {
  //     // await apiPostFavoriteId(token, trailId)
  //     const res = await fetch(
  //       `http://localhost:3000/favorites`,
  //       {
  //         body: JSON.stringify({ trailId }),
  //         headers: {
  //           "Content-Type": "application/json",
  //           "Authorization": `Bearer ${token}`
  //         },
  //         method: "POST"
  //       })
  //     if (res.ok) {
  //       console.log(`Adding trail ${trailId} to favorites`)
  //     } else {
  //       throw `posting favorite id call was not ok: ${res}`
  //     }

  //   } catch (err) {
  //     console.log('Error: unable to post trail id to favorites:', err)
  //   }
  // }

  // const removeFromFavorites = async (favoriteId) => {
  //   try {
  //     // await apiDeleteFavoriteId(token, favoriteId)
  //     const res = await fetch(`http://localhost:3000/favorites/${favoriteId}`, {
  //       headers: { "Authorization": `Bearer ${token}` },
  //       method: "DELETE"
  //     })
  //     if (res.ok) {
  //       console.log(`Removing trail from favorites`)
  //     } else {
  //       throw `deleting favorite id call was not ok: ${res}`
  //     }

  //   } catch (err) {
  //     console.log('Error: unable to delete trail id from favorites:', err)
  //   }
  // }

  return [getFavoriteIds, addToFavorites]
}