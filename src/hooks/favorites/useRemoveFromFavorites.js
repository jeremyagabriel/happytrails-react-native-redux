import { useSelector } from 'react-redux'
import { apiDeleteFavoriteId } from '../../services/happytrails'

export default () => {
  const token = useSelector(state => state.auth.token)

  const removeFromFavorites = async (favoriteId) => {
    try {
      await apiDeleteFavoriteId(token, favoriteId)
      
    } catch (err) {
      console.log('Error: unable to delete trail id from favorites:', err)
    }
  }

  return [removeFromFavorites]
}