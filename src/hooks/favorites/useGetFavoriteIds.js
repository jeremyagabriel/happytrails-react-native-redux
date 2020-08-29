import { useSelector, useDispatch } from 'react-redux'
import { apiGetFavoriteIds } from '../../services/happytrails'
import { setTrailFavoriteIds } from '../../store/favorites/actions'

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

  return [getFavoriteIds]
}