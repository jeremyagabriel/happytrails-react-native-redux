import { useSelector } from 'react-redux'
import { apiPostFavoriteId } from '../../services/happytrails'

export default () => {
  const token = useSelector(state => state.auth.token)

  const addToFavorites = async (trailId) => {
    try {
      await apiPostFavoriteId(token, trailId)
      
    } catch (err) {
      console.log('Error: unable to post trail id to favorites:', err)
    }
  }

  return [addToFavorites]
}