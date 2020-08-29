import { useSelector, useDispatch } from 'react-redux'
import { setTrailFavorites } from '../../store/favorites/actions'
import { apiGetFavoriteTrails } from '../../services/hikingproject'

export default () => {
  const token = useSelector(state => state.auth.token)
  const dispatch = useDispatch() 

  const getFavoriteTrails = async () => {
    try {
      const results = await apiGetFavoriteTrails(token)

      dispatch(setTrailFavorites(results))
    } catch (err) {
      console.log('Error: unable to fetch favorite trails:', err)
      // TODO(dewey4iv): dispatch a failure message too!
    }
  }

  return [getFavoriteTrails]
}